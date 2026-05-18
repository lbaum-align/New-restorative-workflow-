# Handoff Page Map

Track all handoff sections here. Update this file each time a new section is added.

---

## How to Use

After creating a section with `use_figma`, record its node ID and position here so future sessions can find it instantly without re-scanning the entire file.

Format:
```
## [File Name]
File key: `FILE_KEY`
Handoff page: `PAGE_ID` (page name: "Page Name")

| # | Section Name | Node ID | x | y | Width | Height | Status |
|---|-------------|---------|---|---|-------|--------|--------|
| 1 | Feature — Scope | `node:id` | 0 | 0 | 1400 | 2000 | ✅ complete |
```

Status values: `✅ complete` / `⚠️ partial` / `🔲 planned`

---

## Smart Scan (iTero Restorative Workflow)

File key: `Kc4MylWrVeGL2N40dOxOhg`
Handoff page: `2615:6163` (page name: "Hand off")

| # | Section Name | Node ID | x | y | Width | Height | Status |
|---|-------------|---------|---|---|-------|--------|--------|
| — | (pre-existing handoff content) | various | 0 | 0 | ~1700 | — | ⚠️ partial |
| 10 | Ghost Silhouette — Visual Reference (gwand-lr) | `2625:33` | ~1700 | 0 | — | — | ⚠️ renamed |
| 11 | Ghost Silhouette — Perspective States (All DoF + 3D) | `2651:25` | 3200 | 0 | 1720 | 3718 | ✅ complete |

### Section 11 Contents (node 2651:25)
- Group 1 — 6DoF Basic: `gwand-lr`, `gwand-ud`, `gwand-fb`, `gwand-roll`, `gwand-pitch`, `gwand-yaw`
- Group 2 — 3D Advanced: `fagwand-tilt3d`, `fagwand-nod3d`, `fagwand-sweep3d`, `fagwand-rock3d`, `fagwand-tumble3d`, `fagwand-wobble3d`, `fagwand-spin3d`, `fagwand-orbit3d`
- Group 3 — Rotation Aliases: `rot-cw`, `rot-ccw`, `rot-tilt`

### Still Missing (as of 2026-05-13)
- `bare-*`, `ring-*`, `pulse-*`, `wand-*`, `bgwand-*`, `fgwand-*` GuidanceModes
- `scan-indicator`, `surface-guide`, `smart-nav`, `dof-gizmo`
- ScanPhase states (idle → scanning → paused → complete)
- ScanStage badge states (occlusal → buccal → lingual)
- Coverage ring at 0/25/50/75/100%
- FrameEdge active indicators
- Responsive breakpoints for scan guidance overlay

---

## [Add New File Here]

File key: `—`
Handoff page: `—`

| # | Section Name | Node ID | x | y | Width | Height | Status |
|---|-------------|---------|---|---|-------|--------|--------|
| — | — | — | — | — | — | — | 🔲 planned |
