---
name: figma-handoff
description: "Builds and audits a complete developer handoff in any Figma file for any feature or component. Covers state documentation, annotations, interaction flows, responsive breakpoints, motion specs, and Code Connect linking. Use when: adding a new handoff section, auditing an existing handoff for missing states, documenting a feature's behavior in Figma, or syncing code changes back to design. Does NOT build product screens — for that use figma-generate-design."
compatibility: Requires Figma MCP server (use_figma, get_design_context, get_metadata, get_screenshot, search_design_system)
metadata:
  mcp-server: figma
---

# Figma Handoff

Builds a complete, developer-ready Figma handoff section for any feature or component — all states, annotations, interaction flows, motion specs, and code links.

**MANDATORY**: Load `figma-use` skill (via Skill tool: `skill: "figma-use"`) before every `use_figma` call. It contains critical Plugin API rules, font loading gotchas, and layout pitfalls.

**Always pass `skillNames: "figma-handoff"` when calling `use_figma` as part of this skill.**

## When to Use

- User says "hand off", "handoff", "document for dev", or "add states to Figma"
- User shares a Figma URL pointing to a handoff / dev handoff page
- User asks to audit a Figma file for missing component states
- User wants to add motion specs, responsive specs, or interaction flows to Figma
- User asks to "update the handoff" after code changes
- User requests Code Connect linking between Figma and source code

## When NOT to Use

- Building production screens or layouts (use `figma-generate-design`)
- Creating new reusable components or design tokens (use `figma-use` directly)
- Writing Code Connect `.figma.ts` template files (use `figma-code-connect`)
- Purely reading/inspecting a Figma file without writing to it

---

## Skill Boundaries

**This skill does:**
- Audit a handoff page for missing states and add them
- Create a new handoff section for any feature (states, annotations, flows, specs)
- Link handoff nodes to code via Code Connect
- Document motion specs, responsive behavior, and edge cases

**This skill does NOT:**
- Build production screens (use `figma-generate-design`)
- Create new design system components (use `figma-use` directly)
- Write Code Connect `.figma.ts` template files (use `figma-code-connect`)

---

## Before You Start — Read the Code

Before touching Figma, read the component or feature you're handing off:

1. Find the source file(s) — search by component name or feature keyword
2. Read the props/types interface — every prop is a potential state or variant to document
3. Read any enum/union types — each value typically needs its own card
4. Read the CSS or animation keyframes — copy exact values into annotations
5. Note any non-obvious behavior: edge cases, loading states, error handling

This reading phase is non-negotiable. A handoff built without reading the code will miss states.

---

## Step 1: Audit the Existing Handoff Page

Call `get_metadata` on the Figma file (no nodeId = lists all pages). Then call it again with the handoff page ID to see what sections already exist.

```js
// List all pages
(async () => {
  const pages = figma.root.children.map(p => ({ id: p.id, name: p.name }));
  figma.closePlugin(JSON.stringify(pages));
})()
```

Then navigate to the right page and scan existing sections:

```js
(async () => {
  const targetPageId = "PAGE_ID";
  const page = figma.root.children.find(p => p.id === targetPageId);
  if (page) await figma.setCurrentPageAsync(page);
  const sections = figma.currentPage.children.map(n => ({
    id: n.id, name: n.name, x: Math.round(n.x), y: Math.round(n.y),
    w: Math.round(n.width), h: Math.round(n.height)
  }));
  figma.closePlugin(JSON.stringify(sections));
})()
```

Use `get_screenshot` on any node to visually verify what's already documented.

Cross-reference against the state checklist in `references/state-checklist.md`. Note every gap — these become your cards.

---

## Step 2: Plan What to Document

Group your gaps into logical sections. Each section = one `use_figma` call.

**Standard section types:**

| Section type | Contents |
|---|---|
| **States** | All variants of a single component (default, hover, active, focused, disabled, error, loading, empty, success) |
| **Variants / Sizes** | All prop combinations (size sm/md/lg, variant primary/secondary/danger) |
| **Interaction Flow** | Multi-step user journey shown as a linear sequence of frames |
| **Motion Spec** | Annotated before/after frames with duration, easing, keyframe values |
| **Responsive** | Same component at each breakpoint (375 / 768 / 1024 / 1440) |
| **Edge Cases** | Long text, empty data, error data, max/min values, RTL layout |
| **Assets** | Export-ready icons, images, with density and format annotations |

Decide how many cards per section. A section covering all states of one component typically has 6–12 cards at 280–320px wide each.

---

## Step 3: Find the Next Available Position

Never place content on top of existing sections:

```js
(async () => {
  const page = figma.root.children.find(p => p.id === "PAGE_ID");
  await figma.setCurrentPageAsync(page);
  let maxX = 0;
  for (const child of figma.currentPage.children) {
    maxX = Math.max(maxX, child.x + child.width);
  }
  figma.closePlugin(JSON.stringify({ nextX: maxX + 200 }));
})()
```

---

## Step 4: Create the Section Wrapper

One wrapper frame per section, created in its own `use_figma` call. Return the wrapper ID — you'll need it in Step 5.

```js
(async () => {
  const page = figma.root.children.find(p => p.id === "PAGE_ID");
  await figma.setCurrentPageAsync(page);

  const wrapper = figma.createFrame();
  wrapper.name = "SECTION_NAME"; // e.g. "12. Button — All States"
  wrapper.layoutMode = "VERTICAL";
  wrapper.primaryAxisAlignItems = "MIN";
  wrapper.counterAxisAlignItems = "MIN";
  wrapper.itemSpacing = 40;
  wrapper.paddingTop = wrapper.paddingBottom = 60;
  wrapper.paddingLeft = wrapper.paddingRight = 60;
  wrapper.fills = [{ type: "SOLID", color: { r: 0.96, g: 0.97, b: 0.98 } }];
  wrapper.layoutSizingHorizontal = "HUG";
  wrapper.layoutSizingVertical = "HUG";
  wrapper.x = NEXT_X; // from Step 3
  wrapper.y = 0;

  // Section header
  await figma.loadFontAsync({ family: "Inter", style: "Bold" });
  const title = figma.createText();
  title.fontName = { family: "Inter", style: "Bold" };
  title.fontSize = 22;
  title.characters = "SECTION_TITLE";
  title.fills = [{ type: "SOLID", color: { r: 0.05, g: 0.05, b: 0.1 } }];
  title.layoutSizingHorizontal = "FILL";
  wrapper.appendChild(title);

  // Optional subtitle / context line
  await figma.loadFontAsync({ family: "Inter", style: "Regular" });
  const sub = figma.createText();
  sub.fontName = { family: "Inter", style: "Regular" };
  sub.fontSize = 13;
  sub.characters = "Source: src/components/ComponentName.tsx";
  sub.fills = [{ type: "SOLID", color: { r: 0.5, g: 0.5, b: 0.55 } }];
  sub.layoutSizingHorizontal = "FILL";
  wrapper.appendChild(sub);

  figma.closePlugin(JSON.stringify({ wrapperId: wrapper.id }));
})()
```

---

## Step 5: Build the Cards

One `use_figma` call per group of related cards (e.g., all button states in one call). Fetch the wrapper by ID at the start of every call.

### Card structure

Each card follows this layout (auto-layout VERTICAL):
1. **State label** — bold, 13–14px, describes the state name
2. **Visual** — component instance, screenshot, or SVG representation
3. **Annotation** — regular 11px, explains WHY / the behavior / the code value

```js
(async () => {
  const wrapper = await figma.getNodeByIdAsync("WRAPPER_ID");

  async function makeCard(stateName, visualNodeOrNull, annotationText) {
    const card = figma.createFrame();
    card.name = stateName;
    card.layoutMode = "VERTICAL";
    card.primaryAxisAlignItems = "MIN";
    card.counterAxisAlignItems = "CENTER";
    card.itemSpacing = 12;
    card.paddingTop = card.paddingBottom = 16;
    card.paddingLeft = card.paddingRight = 16;
    card.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
    card.cornerRadius = 8;
    card.effects = [{
      type: "DROP_SHADOW",
      color: { r: 0, g: 0, b: 0, a: 0.08 },
      offset: { x: 0, y: 2 }, radius: 8, spread: 0, visible: true, blendMode: "NORMAL"
    }];
    card.layoutSizingHorizontal = "FIXED";
    card.resize(300, 100); // height will HUG after content is added

    // Label
    await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
    const label = figma.createText();
    label.fontName = { family: "Inter", style: "Semi Bold" };
    label.fontSize = 13;
    label.characters = stateName;
    label.fills = [{ type: "SOLID", color: { r: 0.1, g: 0.1, b: 0.15 } }];
    label.layoutSizingHorizontal = "FILL";
    card.appendChild(label);

    // Visual (component instance or placeholder rect)
    if (visualNodeOrNull) {
      visualNodeOrNull.layoutSizingHorizontal = "FILL";
      card.appendChild(visualNodeOrNull);
    } else {
      // Placeholder when no visual is available yet
      const placeholder = figma.createFrame();
      placeholder.resize(268, 120);
      placeholder.fills = [{ type: "SOLID", color: { r: 0.93, g: 0.94, b: 0.96 } }];
      placeholder.cornerRadius = 4;
      placeholder.layoutSizingHorizontal = "FILL";
      card.appendChild(placeholder);
    }

    // Annotation
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
    const ann = figma.createText();
    ann.fontName = { family: "Inter", style: "Regular" };
    ann.fontSize = 11;
    ann.lineHeight = { value: 16, unit: "PIXELS" };
    ann.characters = annotationText;
    ann.fills = [{ type: "SOLID", color: { r: 0.45, g: 0.45, b: 0.5 } }];
    ann.layoutSizingHorizontal = "FILL";
    ann.textAutoResize = "HEIGHT";
    card.appendChild(ann);

    card.layoutSizingVertical = "HUG";
    wrapper.appendChild(card);
    return card.id;
  }

  // Example: build multiple state cards
  const ids = [];
  ids.push(await makeCard("Default", null, "Resting state. No interaction."));
  ids.push(await makeCard("Hover", null, "cursor: pointer. Background shifts to --color-surface-hover."));
  ids.push(await makeCard("Pressed / Active", null, "scale(0.97), duration 80ms ease-out."));
  ids.push(await makeCard("Focused", null, "2px outline, offset 2px. Color: --color-focus-ring."));
  ids.push(await makeCard("Disabled", null, "opacity: 0.4. pointer-events: none. aria-disabled=true."));
  ids.push(await makeCard("Loading", null, "Button text replaced by spinner. Width locked to prevent layout shift."));
  ids.push(await makeCard("Error", null, "Border: --color-danger. Error message rendered below field."));

  figma.closePlugin(JSON.stringify({ cardIds: ids }));
})()
```

### Using real component instances

If the design system has the component, import it instead of using a placeholder:

```js
// From search_design_system results, you'll have a component key
const compSet = await figma.importComponentSetByKeyAsync("COMPONENT_KEY");
const variant = compSet.children.find(c => c.name.includes("variant=primary,state=hover"))
  || compSet.defaultVariant;
const instance = variant.createInstance();
instance.layoutSizingHorizontal = "FILL";
card.appendChild(instance);
```

---

## Step 6: Add Annotations for Non-Obvious Behavior

Annotations are the most important part of a handoff. Visuals show the shape; annotations explain the behavior.

**Always annotate:**
- Exact CSS/token values (color variable name, not hex)
- Animation: trigger, duration (ms), easing, what properties change
- Interaction logic: what triggers this state, what comes next
- Constraints: min/max width, text truncation rules
- Accessibility: aria role, keyboard behavior, focus management
- Responsive: how this component changes at each breakpoint

**Format for annotation text:**

```
State: [state name]
Trigger: [what causes this]
CSS: [property: value / variable name]
Duration: [Xms / easing curve]
Next state: [what happens after]
```

For motion specs specifically, create a dedicated card showing the before and after frames side by side with arrows:

```js
// Motion spec card: two frames side by side with arrow + timing label
(async () => {
  const wrapper = await figma.getNodeByIdAsync("WRAPPER_ID");

  const motionCard = figma.createFrame();
  motionCard.name = "Motion — [AnimationName]";
  motionCard.layoutMode = "HORIZONTAL";
  motionCard.primaryAxisAlignItems = "CENTER";
  motionCard.counterAxisAlignItems = "CENTER";
  motionCard.itemSpacing = 24;
  motionCard.paddingTop = motionCard.paddingBottom = 20;
  motionCard.paddingLeft = motionCard.paddingRight = 20;
  motionCard.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
  motionCard.cornerRadius = 8;
  motionCard.layoutSizingHorizontal = "HUG";
  motionCard.layoutSizingVertical = "HUG";
  wrapper.appendChild(motionCard);

  // [Build before frame, arrow text, after frame inside motionCard]
  // Then add timing annotation below

  await figma.loadFontAsync({ family: "Inter", style: "Regular" });
  const timing = figma.createText();
  timing.fontName = { family: "Inter", style: "Regular" };
  timing.fontSize = 11;
  timing.characters = "Duration: 200ms  |  Easing: ease-out  |  Property: opacity, transform";
  timing.fills = [{ type: "SOLID", color: { r: 0.45, g: 0.45, b: 0.5 } }];
  // append below the motion card or use a wrapper

  figma.closePlugin(JSON.stringify({ motionCardId: motionCard.id }));
})()
```

---

## Step 7: Add Interaction Flow (for multi-step features)

For any feature with multiple steps (wizard, modal sequence, scan progression, etc.), create a flow diagram:

```js
// Horizontal sequence of state frames connected by arrows
(async () => {
  const wrapper = await figma.getNodeByIdAsync("WRAPPER_ID");

  const flow = figma.createFrame();
  flow.name = "Interaction Flow — [Feature Name]";
  flow.layoutMode = "HORIZONTAL";
  flow.primaryAxisAlignItems = "CENTER";
  flow.counterAxisAlignItems = "CENTER";
  flow.itemSpacing = 40;
  flow.paddingTop = flow.paddingBottom = 40;
  flow.paddingLeft = flow.paddingRight = 40;
  flow.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
  flow.cornerRadius = 8;
  flow.layoutSizingHorizontal = "HUG";
  flow.layoutSizingVertical = "HUG";
  wrapper.appendChild(flow);

  // For each step: create a labeled frame, append to flow
  // Between steps: create a text node "→" as connector

  await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
  await figma.loadFontAsync({ family: "Inter", style: "Regular" });

  const steps = ["Step 1: Idle", "Step 2: User Action", "Step 3: Loading", "Step 4: Success"];
  for (let i = 0; i < steps.length; i++) {
    // Step frame
    const stepFrame = figma.createFrame();
    stepFrame.layoutMode = "VERTICAL";
    stepFrame.primaryAxisAlignItems = "CENTER";
    stepFrame.counterAxisAlignItems = "CENTER";
    stepFrame.resize(180, 120);
    stepFrame.fills = [{ type: "SOLID", color: { r: 0.93, g: 0.94, b: 0.97 } }];
    stepFrame.cornerRadius = 6;
    stepFrame.paddingTop = stepFrame.paddingBottom = 16;
    stepFrame.paddingLeft = stepFrame.paddingRight = 12;

    const stepLabel = figma.createText();
    stepLabel.fontName = { family: "Inter", style: "Semi Bold" };
    stepLabel.fontSize = 12;
    stepLabel.characters = steps[i];
    stepLabel.fills = [{ type: "SOLID", color: { r: 0.15, g: 0.15, b: 0.2 } }];
    stepLabel.textAlignHorizontal = "CENTER";
    stepFrame.appendChild(stepLabel);

    flow.appendChild(stepFrame);

    // Arrow between steps (not after last)
    if (i < steps.length - 1) {
      const arrow = figma.createText();
      arrow.fontName = { family: "Inter", style: "Regular" };
      arrow.fontSize = 20;
      arrow.characters = "→";
      arrow.fills = [{ type: "SOLID", color: { r: 0.6, g: 0.6, b: 0.6 } }];
      flow.appendChild(arrow);
    }
  }

  figma.closePlugin(JSON.stringify({ flowId: flow.id }));
})()
```

---

## Step 8: Validate Visually

After each section is created, call `get_screenshot` on the wrapper node. Verify:

- [ ] All cards render — no clipped or blank frames
- [ ] State labels are readable
- [ ] Annotations are visible (not white-on-white)
- [ ] Placeholder rects stand in correctly where visuals are missing
- [ ] Card spacing is consistent
- [ ] Section title is at the top of the wrapper
- [ ] No overlapping with existing sections

Fix any issues with targeted `use_figma` calls before moving on.

---

## Step 9: Link to Code (Code Connect)

After the section is visually complete, map handoff nodes to their source code:

1. Get the node ID of each card from the previous steps
2. Find the source file path in the codebase (grep or Read)
3. Call `send_code_connect_mappings` with node IDs and source paths

This lets developers click any handoff card in Dev Mode and jump directly to the React component, hook, or utility that implements it.

```
send_code_connect_mappings({
  fileKey: "FILE_KEY",
  nodeId: "WRAPPER_NODE_ID",
  mappings: [
    {
      nodeId: "CARD_NODE_ID",
      componentName: "ComponentName — State Name",
      source: "src/components/ComponentName.tsx",
      label: "React"
    }
  ]
})
```

---

## Step 10: Record the Section

After completing a handoff section, save the node ID and position to project memory (`project` type) so future sessions can find it without re-scanning the entire file:

- `Section name — node {id} at x={x}, y={y}, page: {page name}`

---

## Common Edge Cases

| Problem | Fix |
|---------|-----|
| `getNodeByIdAsync` returns null | Run `setCurrentPageAsync` first; the plugin context starts on whatever page is currently active |
| Frame won't HUG children | Set `layoutSizingHorizontal = "HUG"` and `layoutSizingVertical = "HUG"` AFTER appending all children |
| Text overflows card | Set `layoutSizingHorizontal = "FILL"` and `textAutoResize = "HEIGHT"` on every text node |
| Only one page visible | Iterate `figma.root.children` to list all pages; setCurrentPageAsync to the right one before any node lookups |
| Component instance wrong variant | Read the component's `name` property on each child of the ComponentSet to find the exact variant string |
| Section renders on top of existing content | Always query `maxX` before placing; add 200px buffer |
| Cards not aligned | Ensure the wrapper frame `counterAxisAlignItems = "MIN"` and all cards have `layoutSizingHorizontal = "FIXED"` |

---

## Grid Layout for Cards (6+ cards)

When a section has 6 or more cards, arrange them in a grid (rows of 4–5) instead of a single column:

```js
// Create a row container inside the wrapper
(async () => {
  const wrapper = await figma.getNodeByIdAsync("WRAPPER_ID");

  const row = figma.createFrame();
  row.name = "Row — [Group Name]";
  row.layoutMode = "HORIZONTAL";
  row.layoutWrap = "WRAP"; // enables wrapping to next line
  row.primaryAxisAlignItems = "MIN";
  row.counterAxisAlignItems = "MIN";
  row.itemSpacing = 20;
  row.counterAxisSpacing = 20; // vertical gap between wrapped rows
  row.layoutSizingHorizontal = "FIXED";
  row.resize(1600, 100); // wide enough for 5 cards per row
  row.layoutSizingVertical = "HUG";
  row.fills = [];
  wrapper.appendChild(row);

  // Then call makeCard() and append each card to `row` instead of `wrapper`
  figma.closePlugin(JSON.stringify({ rowId: row.id }));
})()
```

---

## Example — Full Handoff Request

**User says:** "Hand off the SecondaryButton component to Figma"

**What happens:**

1. **Read the code**: Open `src/design-system/SecondaryButton.tsx`. Find props: `variant` ("default" | "toolbar"), `disabled`, `children`. Find hover/active/focus inline styles. Find "toolbar" variant with transparent background.

2. **Audit**: Call `get_metadata` on the handoff page. Check if SecondaryButton states already exist.

3. **Plan**: 8 cards needed — Default, Hover, Active, Focused, Disabled, Loading, Toolbar variant, Toolbar hover.

4. **Position**: Find maxX, add 200px gap.

5. **Build wrapper**: Name it "13. SecondaryButton — All States". Source subtitle: `src/design-system/SecondaryButton.tsx`.

6. **Build cards** (one `use_figma` call):
   - Default → annotation: "bg: color.neutral[100], border: 1px solid color.border.default"
   - Hover → "bg: color.neutral[200], transition: 150ms ease"
   - Active → "bg: color.neutral[300], scale: 0.98, duration 50ms"
   - Focused → "outline: 2px solid color.primary[500], offset 2px"
   - Disabled → "opacity: 0.4, pointer-events: none"
   - Loading → "children replaced by 16px spinner, width locked"
   - Toolbar → "bg: transparent, no border"
   - Toolbar hover → "bg: color.neutral[100], fill appears on hover"

7. **Validate**: Screenshot the wrapper, verify all 8 cards render.

8. **Code Connect**: Map wrapper node to `src/design-system/SecondaryButton.tsx`.

---

## Reference Files

- `references/state-checklist.md` — every state every component type must document
- `references/annotation-guide.md` — what to annotate, how to phrase it, examples
- `references/handoff-page-map.md` — tracking table for section positions across files
