# State Checklist — Figma Handoff

Every component in the handoff must show ALL applicable states from the sections below. Check off each one as it is documented.

---

## Universal Interactive States

Apply to every element the user can click, tap, or interact with.

| State | Trigger | What to Show |
|-------|---------|-------------|
| **Default** | — | Resting appearance, no interaction |
| **Hover** | Cursor over (web) | Background, border, or color shift |
| **Pressed / Active** | Mouse/touch down | Scale, opacity, or color feedback |
| **Focused** | Keyboard tab | Visible focus ring (2px+ outline) |
| **Disabled** | prop disabled=true | Reduced opacity (~40%), no cursor |
| **Loading** | Async action in flight | Spinner, skeleton, or locked state |
| **Success** | Action confirmed | Checkmark, toast, color flash |
| **Error** | Validation failed | Red border, message below element |
| **Empty** | No data | Helpful empty state + CTA |
| **Selected / Active** | Toggle or selection | Filled/checked/highlighted variant |

---

## Button

- [ ] Default (all variants: primary, secondary, ghost, danger, etc.)
- [ ] Hover
- [ ] Pressed
- [ ] Focused
- [ ] Disabled
- [ ] Loading (text replaced by spinner, width locked)
- [ ] Icon-only variant (if exists)
- [ ] Each size (sm, md, lg)

---

## Form Inputs (text, select, textarea, date)

- [ ] Empty / Placeholder
- [ ] Filled (user has typed)
- [ ] Focused
- [ ] Error (validation message below)
- [ ] Disabled
- [ ] Read-only
- [ ] Required indicator (asterisk)
- [ ] With helper text
- [ ] With label (visible) vs. placeholder-only

---

## Checkbox & Radio

- [ ] Unchecked / default
- [ ] Checked
- [ ] Indeterminate (checkbox only)
- [ ] Focused
- [ ] Disabled (unchecked)
- [ ] Disabled (checked)
- [ ] Error state

---

## Toggle / Switch

- [ ] Off
- [ ] On
- [ ] Focused
- [ ] Disabled (off)
- [ ] Disabled (on)

---

## Modal / Dialog

- [ ] Opening (entry animation keyframes)
- [ ] Default open (all content variants)
- [ ] Scrollable content (if applicable)
- [ ] With error state inside form
- [ ] Closing (exit animation keyframes)
- [ ] Backdrop click behavior (dismiss or block)
- [ ] Keyboard Escape behavior

---

## Dropdown / Select / Menu

- [ ] Closed (default trigger)
- [ ] Open (menu visible)
- [ ] Option hover
- [ ] Option selected
- [ ] Option disabled
- [ ] With search input (if applicable)
- [ ] Empty results state
- [ ] Multi-select state (if applicable)

---

## Navigation (tabs, sidebar, bottom nav, breadcrumb)

- [ ] Default item
- [ ] Active / current item
- [ ] Hover
- [ ] Focused
- [ ] Disabled item
- [ ] With badge / count
- [ ] Overflow / collapsed state (if applicable)

---

## Card / List Item

- [ ] Default
- [ ] Hover (if clickable)
- [ ] Pressed
- [ ] Selected
- [ ] Skeleton / loading
- [ ] Error / unavailable state
- [ ] Empty state (zero items)

---

## Toast / Notification / Banner

- [ ] Info variant
- [ ] Success variant
- [ ] Warning variant
- [ ] Error variant
- [ ] With action button
- [ ] Auto-dismiss animation (entry + exit)

---

## Tooltip

- [ ] Default (below / above / left / right)
- [ ] Triggered by hover
- [ ] Triggered by focus (keyboard)
- [ ] Long text wrapping behavior

---

## Data Table

- [ ] Default rows
- [ ] Row hover
- [ ] Row selected
- [ ] Sorted column (asc + desc indicator)
- [ ] Empty state
- [ ] Loading / skeleton rows
- [ ] Error state
- [ ] Pagination controls

---

## Progress / Stepper

- [ ] Step 1 active (current)
- [ ] Step 2 completed (past, checkmark)
- [ ] Step 3 upcoming (dimmed)
- [ ] Error on current step
- [ ] All steps completed (success)

---

## Skeleton / Loading

- [ ] Text skeleton (shimmer)
- [ ] Card skeleton
- [ ] Table / list skeleton
- [ ] Image placeholder skeleton
- [ ] Full-page skeleton

---

## Responsive Breakpoints

For any web-facing component, document at each breakpoint:

| Breakpoint | Width |
|-----------|-------|
| Mobile S | 375px |
| Mobile L / Tablet | 768px |
| Laptop | 1024px |
| Desktop | 1440px |

For each breakpoint show: layout changes, hidden/shown elements, font size changes, column count changes.

---

## Motion & Animation

For every animated state transition, document:

| Item | Example |
|------|---------|
| Animation name | `fade-in`, `slide-up`, `collapse` |
| Trigger | hover enter, route change, button click |
| Duration | 200ms |
| Easing | ease-out / cubic-bezier(0.16, 1, 0.3, 1) |
| Properties animated | opacity, transform (translate / scale / rotate) |
| Keyframes | 0% state → 50% state → 100% state (with values) |
| transform-origin | if rotation or scale |
| prefers-reduced-motion | does it stop / simplify? |

---

## Edge Cases (show for any data-driven component)

- [ ] Maximum text length (truncation, wrapping, tooltip)
- [ ] Minimum text (single character, empty string)
- [ ] Very long list (100+ items, virtualization)
- [ ] Zero / null value
- [ ] Extreme numeric value (overflow, formatting)
- [ ] RTL layout (if internationalization is required)
- [ ] Offline / network error state

---

## Assets & Exports

For every graphic, icon, or image in the handoff:

| Item | Spec |
|------|------|
| SVG icons | Exported at 1x, viewBox defined, no hardcoded colors |
| Raster images | @1x, @2x, @3x; WebP preferred |
| Naming convention | kebab-case, descriptive (e.g., `icon-scan-guidance-wand.svg`) |
| Color mode | Works in both light and dark mode (use `currentColor` for icon strokes/fills) |
