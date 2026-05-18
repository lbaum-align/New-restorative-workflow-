# Annotation Guide — Figma Handoff

Annotations are the highest-value part of any handoff. A pixel-perfect visual without annotations leaves developers guessing about behavior, timing, and intent. This guide covers what to annotate, how to phrase it, and examples.

---

## What Always Needs an Annotation

### 1. Non-default visual values
Any value that can't be read from looking at the frame (token names, not hex).

```
Fill: --color-surface-primary (not #F5F7FA)
Border radius: --radius-md (8px)
Shadow: --shadow-card (0 2px 8px rgba(0,0,0,0.08))
```

### 2. Interaction behavior
What triggers the state and what happens next.

```
Trigger: User hovers element
Effect: background → --color-surface-hover, transition 150ms ease-out
Next: Pressed state on mousedown
```

### 3. Animation / motion
Every animated property needs a full spec.

```
Property: opacity, transform(translateY)
Entry: opacity 0→1, translateY(8px→0), 200ms ease-out
Exit: opacity 1→0, 150ms ease-in
Trigger: component mounts / route change
Reduced motion: fade only (no translate)
transform-origin: center top (if applicable)
```

### 4. Responsive behavior
How the layout changes at breakpoints.

```
< 768px: stacks vertically, padding 16px
≥ 768px: side-by-side, padding 24px
≥ 1024px: max-width 960px, centered
```

### 5. Accessibility requirements
Screen reader, keyboard, and contrast info.

```
Role: button (aria-role="button")
Keyboard: Enter/Space to trigger, Tab to focus
Focus visible: 2px outline, offset 2px, color --color-focus-ring
Screen reader: "Submit form" (not "button")
Disabled: aria-disabled="true", visually 40% opacity
```

### 6. Copy / content rules
Character limits, truncation rules, placeholder text.

```
Label max: 32 chars (truncate with ellipsis at overflow)
Placeholder: "Search patients..." (not localized in MVP)
Empty state headline: "No results found"
```

### 7. Business / product logic
Conditions that can't be inferred from the UI alone.

```
Shown when: user has completed ≥1 scan AND scan type is "crown"
Hidden when: selectedScanType === "invisalign"
Disabled when: scannedLayers.length === 0
```

---

## Annotation Phrasing Patterns

Use short, imperative sentences. Avoid "should" — state facts.

| Instead of | Write |
|-----------|-------|
| "Should show error state" | "Shows error state when field is empty on submit" |
| "The color might change" | "Fill: --color-danger on error (matches border)" |
| "Animates somehow" | "Slides in from bottom, 240ms ease-out, translateY(100%→0)" |
| "Uses a token" | "Uses --space-4 (16px) padding on all sides" |
| "For accessibility" | "aria-label='Close dialog', Escape key triggers close" |

---

## Annotation Placement in Figma

Options (in order of preference):

1. **Text node inside the card** — placed below the visual, 11px Inter Regular, color #72727A
2. **Figma Annotations (Dev Mode)** — attach to the specific node using Annotations in Dev Mode
3. **Sticky note frame** — yellow frame beside complex multi-property nodes
4. **Numbered callout** — for dense UI, use circled numbers on the frame and a legend below

---

## Motion Annotation Template

Use this exact format for any animated state transition:

```
ANIMATION: [name / keyframe identifier]
──────────────────────────────
Trigger:     [what causes it]
Property:    [opacity / transform / color / height / etc.]
From:        [start value]
To:          [end value]
Duration:    [Xms]
Easing:      [ease-out / cubic-bezier(x,x,x,x)]
Delay:       [Xms or none]
Origin:      [transform-origin if rotation or scale]
Reduced:     [what happens with prefers-reduced-motion]
```

Example:

```
ANIMATION: modal-enter
──────────────────────────────
Trigger:     Modal opens (state: idle → open)
Property:    opacity, transform(scale)
From:        opacity:0, scale(0.95)
To:          opacity:1, scale(1)
Duration:    220ms
Easing:      cubic-bezier(0.16, 1, 0.3, 1)
Delay:       none
Origin:      center center
Reduced:     fade only (no scale), 150ms
```

---

## Handoff Card Template (text layout)

Every card should read top-to-bottom like this:

```
[STATE NAME — bold, 13px]

[Visual: component instance or frame]

[Annotation block — regular, 11px, gray]
  Trigger: ...
  CSS / Token: ...
  Behavior: ...
  Accessibility: ...
```

Cards that only show a visual with no annotation are incomplete. The annotation is mandatory.

---

## Token & Spacing Annotation Template

For layout-heavy components, annotate all spacing and color tokens in one block:

```
TOKENS:
──────────────────────────────
Background:    --color-surface-primary
Border:        1px solid --color-border-default
Border radius: --radius-md (8px)
Padding:       --space-4 (16px) all sides
Gap:           --space-3 (12px) between children
Shadow:        --shadow-sm (0 1px 3px rgba(0,0,0,0.1))
Text color:    --color-text-primary
Font:          --font-body-md (14px/20px, weight 400)
```

For spacing redlines between elements:

```
SPACING:
──────────────────────────────
Header ↔ Content:   --space-6 (24px)
Content ↔ Footer:   --space-4 (16px)
Card ↔ Card:        --space-5 (20px)
Edge padding:       --space-4 (16px) mobile, --space-6 (24px) desktop
```

---

## Common Annotation Mistakes

| Mistake | Why It's a Problem |
|---------|-------------------|
| Using hex values (`#3B82F6`) | Doesn't stay in sync when tokens change |
| "Same as above" | Forces developer to cross-reference; duplicate the annotation |
| Describing the visual ("button turns blue") | Redundant — they can see it. Describe the token and trigger instead |
| No trigger specified | Developer doesn't know what code path shows this state |
| No reduced-motion note for animations | Accessibility failure; will fail audits |
| Annotating only the happy path | Leaves error, empty, and edge case states without specs |
