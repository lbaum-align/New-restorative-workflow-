# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + Vite dental scanning prototype application for the iTero restorative workflow. It enables digital dental scanning with multi-layer scan capture, flexible treatment planning, and interactive 3D guidance systems for proper scanning technique. The app was generated from a Figma design file and includes both scanning guidance overlays and prep-analysis copilot features.

## Build & Development Commands

```bash
npm i                 # Install dependencies
npm run dev           # Start development server (runs on http://localhost:3000)
npm run build         # Build for production (outputs to ./build)
```

There are no lint or test scripts configured. The project uses Vite for bundling and HMR in dev mode.

## Technology Stack

- **Core**: React 18.3 + TypeScript 6.0
- **Build**: Vite 6.3.5 with @tailwindcss/vite for inline Tailwind compilation
- **Styling**: Tailwind CSS 4.1.12 with custom design tokens
- **3D Graphics**: Three.js 0.170 + @react-three/fiber 8.18 + @react-three/drei 9.122 (for 3D model rendering and camera controls)
- **UI Components**: Radix UI (comprehensive primitive library)
- **Forms**: React Hook Form 7.55
- **Motion**: Framer Motion / Motion React
- **Icons**: Lucide React 0.487
- **Data Viz**: Recharts 2.15.2
- **Notifications**: Sonner 2.0.3
- **Carousels**: Embla Carousel React 8.6

### Asset Handling

Figma-generated assets use a custom Vite plugin (`figmaAssetResolver` in vite.config.ts) that resolves `figma:asset/` imports:

```tsx
import imgName from "figma:asset/hash.png";  // Resolves to src/assets/hash.png
import model from "figma:asset/model.glb";   // Works for .ply, .stl, .glb, .gltf too
```

The plugin automatically maps these to the `/src/assets` directory. 3D model files (.ply, .stl, .glb, .gltf) are configured in `assetsInclude` so they're processed as static assets.

## Architecture & View System

### Single-Page State Machine (App.tsx)

The app uses a two-level state machine in `App.tsx`:

**Views** (top level): `home` | `flow` | `resto` | `iteroHome` | `patientDetails` | `scanGuidance` | `canvasTheme`

**Flow Steps** (within `flow` view): `search` | `create` | `scanning` | `newScan` | `scanMultiLayer` | `multiLayerView` | `summary`

**Key State Variables**:
- `currentView` / `setCurrentView` — which page/modal to render
- `flowStep` / `setFlowStep` — position within the patient scanning workflow
- `selectedPatient` — Patient record (id, firstName, lastName, dateOfBirth, gender, chartNumber)
- `selectedScanType` — Type of scan (e.g., "crown", "implantPlanning", "dentures", "appliances", "invisalign")
- `scannedLayers` — Array of ScannedLayer objects (multi-layer scan data with treatment/bite/pre-treatment types)
- `toothTreatments` — Map of tooth → treatment type ("Crown", "Implant based", etc.)
- `toothSpecifications` — Map of tooth → detailed specifications (margin type, shade, etc.)
- `selectedBiteOptions` — Array of selected bite scan options
- `canvasBg` — Canvas theme background color (default #D6E7F1)
- `isCanvasThemeMode` — Whether floating color picker should be shown

### Navigation & Flow

- **Patient Search → Scanning Selection → Scan Type (NewScan/Dentures/etc.)**
  - Patient search loads existing patients or creates new
  - Scanning selection chooses procedure/scan type
  - Flow routes to procedure-specific component based on `selectedScanType`

- **Scan Guidance Mode** (special entry point)
  - Accessible from homepage
  - Enters `scanGuidance` view with demo patient
  - Shows interactive 3D guidance without full workflow

- **Canvas Theme** (utility page)
  - Accessible from homepage
  - Allows color picking and theme preview
  - Applies color to iTero flow when returning

### Keyboard Shortcuts

- **R** or **Escape** — Reset to home
- **H** — Go home
- **←/→ arrow** — Navigate backwards/forwards in flow
- **1, 2, 3** from home — Jump to specific views (iTero, flow, resto)

## Key Components & Organization

### Flow Directory (`/src/flow`)

Top-level workflow screens that fill the viewport:
- **PatientSearch.tsx** — Existing patient list + create new button
- **CreatePatient.tsx** — Patient form with DOB, gender, chart number
- **ScanningSelection.tsx** — Procedure type selector (crown, dentures, implant, etc.)
- **NewScan.tsx** — Generic multi-procedure scanning setup (tooth selection, treatment mapping, specifications)
- **Dentures.tsx, Appliances.tsx, Invisalign.tsx, ImplantPlanning.tsx** — Procedure-specific variants of scan setup
- **ScanPageMultiLayer.tsx** — Main scanning experience with multi-layer capture, 3D models, guidance overlay
- **MultiLayerView.tsx** — Multi-layer scan review/comparison interface
- **Summary.tsx** — Scan summary with tooth treatment review
- **RestoHome.tsx** — Restorative-specific homepage

### Components Directory (`/src/components`)

65+ UI/domain components including:

**3D & Scanning Guidance**:
- `scan-guidance/` — Interactive 3D guidance engine with coverage tracking, directional hints, stage progression (occlusal → buccal → lingual)
- `prep-copilot/` — Prep analysis AI assistant with heatmaps, reduction analysis, undercut detection, insertion path arrows
- `CopilotModelViewer.tsx` — Renders prep model with active overlays

**Form & Layout Components**:
- `DetailPanel.tsx`, `DetailPanelList.tsx`, `DetailPanelImplantBased.tsx` — Collapsible spec panels for tooth treatments
- `ToothSelectorLarge.tsx` — Interactive tooth diagram for treatment assignment
- `ToothTreatmentTable.tsx` — Table view of tooth treatments

**Procedure-Specific**:
- `ImplantBasedModal.tsx`, `SurgicalGuideOptions.tsx` — Implant workflow modals
- `ApplianceOptions.tsx`, `DenturesField.tsx`, `InvisalignField.tsx` — Procedure variant fields

**Utility Components**:
- `Header.tsx` — Top nav with patient info
- `ToolbarScan.tsx`, `ToolbarView.tsx` — Context-aware toolbars
- `ChromeTabs.tsx` — Tab switching for jaw views (Upper/Lower/Both)
- `FloatingColorPicker.tsx` — Canvas theme color picker overlay

### Design System (`/src/design-system`)

**tokens.ts** — Single source of truth for all visual properties:
- `color.*` — Brand primary (#009ACE), danger (#D43F58), semantic text/border/bg aliases, tag palette (6 colors with dark/light variants)
- `space.*` — 0–16 (0px to 64px in 4px increments)
- `radius.*` — sm (4px) to full (9999px)
- `font.*` — family, sizes (2xs–3xl), weights (regular–bold), line heights, letter spacing
- `shadow.*` — Focus rings and drop shadows
- `transition.*` — Predefined easing for buttons, borders, inputs

**SecondaryButton.tsx** — Example design system component showing inline style composition with state management (hover, active, focus, disabled). Includes "toolbar" variant with transparent bg and hover fill.

All components should use tokens for consistency. Don't use magic color/size values.

## Scan Guidance System Architecture

Located in `src/components/scan-guidance/`:

**Types** (`types.ts`):
- `ScanPhase` — 'idle' | 'scanning' | 'paused' | 'complete'
- `GuidanceMode` — 40+ modes for different guidance overlays:
  - DOF (Degree of Freedom) hints: `dof-lr`, `dof-ud`, `dof-fb`, `dof-roll`, `dof-pitch`, `dof-yaw`
  - Ghost/Wand modes: `ghost-*`, `wand-*`, `gwand-*` with directional variants
  - 3D wand: `fagwand-tilt3d`, `fagwand-spin3d`, `fagwand-orbit3d`, etc.
  - Rotation guides: `rot-cw`, `rot-ccw`, `rot-tilt`
- `ScanStage` — 'occlusal' | 'buccal' | 'lingual' (3-phase scan progression)
- `GuidanceState` — Aggregates phase, direction, coverage %, regions, weakest region, model rotation, screen-space target

**Engine** (`useGuidanceEngine.ts`):
- Divides jaw model into 4×4 grid of regions
- Tracks coverage % in each region (0–1)
- Auto-advances stage: occlusal (0–40%) → buccal (40–70%) → lingual (70–95%)
- Identifies weakest region with <5% coverage imbalance threshold
- Projects weakest region center to screen-space for target reticle positioning
- Emits guidance direction (left/right/up/down/rotate-left/rotate-right) based on edge detection

**Progress Tracking** (`useScanProgress.ts`):
- Simulates raycast-based coverage accumulation
- Increments coverage based on cursor movement & time

**3D Viewer** (`ScanGuidanceViewer.tsx`):
- React Three Fiber canvas with PLY geometry loader
- OrbitControls for manual rotation
- RevealMaterial for progressive visibility/heatmap rendering
- Renders GuidanceOverlay for directional hints, stage badges, coverage indicators

**Overlay** (`GuidanceOverlay.tsx`):
- Renders 2D hints (arrows, rings, pulses) on top of 3D canvas
- Adapts visual style per guidance mode

## Multi-Layer Scan Architecture

Implemented in `ScanPageMultiLayer.tsx`:

**ScannedLayer Interface** (defined in App.tsx):
```typescript
interface ScannedLayer {
  id: string;
  label: string;
  type: "treatment" | "bite" | "pre-treatment" | "additional";
  scannedJaws: {
    upper: boolean;
    lower: boolean;
    bite: boolean;
  };
}
```

**Workflow Selection**:
- Auto-detects workflow (crown, implant-based, fixed-restorative, dentures) based on tooth treatments
- Displays context-specific UI (margins for crowns, surgical guide for implants, etc.)

**State Persistence**:
- `toothTreatments` and `toothSpecifications` flow from App → NewScan → ScanPageMultiLayer
- Summary view reads from same App state for final tooth treatment review

**Bite Handling**:
- Bite, pre-treatment, and additional scans tracked as separate layer types
- ChromeTabs (Upper/Lower/Both) toggle jaw visibility
- BiteToolbarContainer manages bite-specific interactions

## Component Patterns

### Figma-Generated Imports Pattern

Many UI layouts come from `src/imports/` (Figma auto-generated). These typically:
- Use absolute positioning with hardcoded `aspect-ratio` and `left/right/top` percentages
- Import images via `figma:asset/` plugin
- Define wrapper components that export as named exports
- Are often wrapped by hand-written React components for interactivity

Example: `Frame1618872979` (a flex panel) is wrapped by custom components in the flow for state management.

### State Lifting Pattern

Components receive:
- Current state (e.g., `toothTreatments`, `selectedBiteOptions`)
- Callbacks to update parent state (e.g., `onToothTreatmentsChange`, `onBiteOptionsChange`)

This keeps multi-layer state synchronized across the workflow.

### Modal & Overlay Pattern

Modals (e.g., `ImplantBasedModal.tsx`, `MoveToPretreatmentModal.tsx`) use Radix UI Dialog with:
- Open state managed by parent
- Callbacks for confirm/cancel
- Full-screen overlay with centered content card

## Asset Loading & 3D Models

**Figma Assets**: PNG/JPG images referenced via `figma:asset/hash.png` imports throughout the codebase.

**3D Models**:
- `.ply` files loaded via Three.js PLYLoader in ScanGuidanceViewer
- Upper jaw model: `/src/assets/3d-models/upper-jaw.ply`
- Bite & arch models imported as Three.js components in ScanPageMultiLayer
- Models support RevealMaterial for progressive heatmap visualization

**Canvas Background**:
- Default: #D6E7F1 (light blue)
- Customizable via FloatingColorPicker when isCanvasThemeMode = true
- Passed to ScanPageMultiLayer as `canvasBg` prop

## Design Guidelines

- Use only components from the existing component library. If a component doesn't exist, ask before creating it.
- Use design tokens from `src/design-system/tokens.ts` (`color.*`, `space.*`, `radius.*`, `font.*`) for visual properties — avoid hardcoded magic values.
- Tailwind classes for layout; inline styles for dynamic/state-driven visuals (hover, active, disabled).
- `canvasBg` supports both solid hex colors and CSS gradient strings (`linear-gradient(...)`, `radial-gradient(...)`). Use `background:` (not `backgroundColor:`) when applying it.

