---
name: Precision Mechatronics Light
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#5a4138'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#8e7166'
  outline-variant: '#e2bfb2'
  surface-tint: '#a73a00'
  primary: '#a33900'
  on-primary: '#ffffff'
  primary-container: '#cc4900'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb599'
  secondary: '#0051d5'
  on-secondary: '#ffffff'
  secondary-container: '#316bf3'
  on-secondary-container: '#fefcff'
  tertiary: '#545c72'
  on-tertiary: '#ffffff'
  tertiary-container: '#6c748b'
  on-tertiary-container: '#fefcff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbce'
  primary-fixed-dim: '#ffb599'
  on-primary-fixed: '#370e00'
  on-primary-fixed-variant: '#7f2b00'
  secondary-fixed: '#dbe1ff'
  secondary-fixed-dim: '#b4c5ff'
  on-secondary-fixed: '#00174b'
  on-secondary-fixed-variant: '#003ea8'
  tertiary-fixed: '#dae2fd'
  tertiary-fixed-dim: '#bec6e0'
  on-tertiary-fixed: '#131b2e'
  on-tertiary-fixed-variant: '#3f465c'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.005em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-code-md:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
  label-code-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-ui:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.01em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 0.75rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system targets students, educators, and robotics engineers who demand high-precision telemetry, structured block/text code environments, and accessible hardware controls. The visual tone is technical, academic, and energetic—marrying lab-grade instrument precision with an encouraging educational spark.

Drawing from modern precision engineering interfaces, the design language relies on:
- Crisp surface stratification with structured 1px hairline dividers.
- High typographic contrast for rapid data scanning and code review.
- Strategic deployment of an energetic kinetic orange accent for interactive hardware states, paired with an analytical cobalt blue for logic structures and system state indicators.
- Pure optical clarity: generous whitespace balancing dense schematic diagrams, block-based flowcharts, and telemetry feeds.

## Colors

The color palette is calibrated for long-session screen work in labs and classrooms. It leverages a clean tonal scale anchored in white and technical cool slates:

- **Primary (`#ea580c`)**: Energetic kinetic orange. Reserved for primary operational actions, robot execution triggers ("Run", "Deploy"), active hardware warnings, and critical highlights.
- **Secondary (`#2563eb`)**: Deep cobalt blue. Governs programmatic flow, variable indicators, active navigation nodes, links, and sensor telemetry signals.
- **Tertiary (`#0f172a`)**: Obsidian deep slate. Applied to high-contrast structural chrome, technical badge backgrounds, and primary display anchors.
- **Neutrals**:
  - `Canvas / Pure Surface`: `#ffffff` — clean platform for code canvases, logic blocks, and dialog surfaces.
  - `Subtle Surface`: `#f8fafc` — secondary container and workbench workspace fill.
  - `Border / Hairline Fill`: `#f1f5f9` & `#e2e8f0` — structural division for module cards and telemetry docks.
  - `Text Primary`: `#0f172a` — maximum contrast for readability across code, labels, and figures.
  - `Text Secondary`: `#334155` — documentation copy, metadata, and parameter names.
  - `Text Muted`: `#64748b` — unit definitions, disabled indicators, and timestamps.

## Typography

The typographic hierarchy establishes clear distinction between contextual hierarchy, readable educational instruction, and computational precision:

- **Headlines & Metric Readouts (`Space Grotesk`)**: Provides geometric precision with distinct mechanical quirks. Used for major module titles, telemetry dashboards, and unit KPIs.
- **Narrative & UI Body (`Hanken Grotesk`)**: Ensures rapid comprehension in technical guides, curriculum steps, and interactive interface states without distracting flourishes.
- **Code, Telemetry, & Hardware Specifications (`JetBrains Mono`)**: Provides strict tabular alignment for servo angles, coordinates, bus speeds, and active syntax blocks.

## Layout & Spacing

The platform utilizes a structured 12-column responsive grid on desktop and an adaptive 4-column grid on mobile:

- **Desktop (1200px+)**: 12 columns with 24px (`1.5rem`) gutters and 32px (`2rem`) margins. Allows a persistent 3-column split: Hardware Status Sidebar (2 cols), Code/Block Canvas (7 cols), and Live Telemetry Inspector (3 cols).
- **Tablet (768px - 1199px)**: 8 columns with 16px gutters and 24px margins. Inspector panels collapse into tabbed bottom sheets.
- **Mobile (< 768px)**: 4 columns with 12px (`0.75rem`) gutters and 16px (`1rem`) screen margins. Full stack ordering prioritizing execution controls and status over side-by-side editing.
- **Layout Cadence**: Built strictly on an 8px base grid (with a 4px sub-grid for dense technical chips and compact input fields).

## Elevation & Depth

Visual depth is achieved through high-precision layered surfaces and ambient slate drop shadows rather than heavy blurs or dense skeuomorphism:

- **Level 0 (Base Canvas)**: `#f8fafc`. Houses the workspace background and non-interactive grid surfaces.
- **Level 1 (Panels & Docks)**: `#ffffff` with a clean 1px hairline border in `#e2e8f0` and an ambient elevation shadow: `0 1px 3px 0 rgba(15, 23, 42, 0.05)`.
- **Level 2 (Active Interactive Nodes & Floats)**: `#ffffff` bordered with `#cbd5e1`, supported by `0 4px 6px -1px rgba(15, 23, 42, 0.08), 0 2px 4px -2px rgba(15, 23, 42, 0.04)`.
- **Level 3 (Modal Dialogs & Execution Overlays)**: `#ffffff` bordered with `#94a3b8`, supported by `0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 8px 10px -6px rgba(15, 23, 42, 0.05)`.
- **Active State Highlights**: Components on active focus or execution leverage a crisp dual-ring system: 1px inner solid accent (`#ea580c` or `#2563eb`) paired with a `0 0 0 3px` translucent offset ring (`rgba(234, 88, 12, 0.15)` or `rgba(37, 99, 235, 0.15)`).

## Shapes

The design system maintains a calibrated "Soft" geometric profile (`roundedness: 1`):

- **Standard Elements (Buttons, Inputs, Metric Dials)**: `0.25rem` (4px) corner radii. Communicates calibrated tool design, avoiding excessive roundness that suggests toy hardware.
- **Intermediate Panels & Cards**: `0.5rem` (8px) corner radii (`rounded-lg`), softening content modules while maintaining disciplined grid alignment.
- **Modals & Hardware Enclosures**: `0.75rem` (12px) corner radii (`rounded-xl`).
- **Telemetry Indicators & Badges**: Retain micro-radius corners (2px) to look sharp and computational.

## Components

### Buttons
- **Primary Operational ("Run Program", "Connect Robot")**: Solid `#ea580c` fill, crisp `#ffffff` text, 4px corner radius, font `Hanken Grotesk` medium 14px. Hover state deepens to `#c2410c`.
- **Secondary Logical ("Upload", "Compile")**: Solid `#2563eb` fill with `#ffffff` text. Hover transitions to `#1d4ed8`.
- **Outlined / Instrument Action**: White background, 1px `#cbd5e1` border, `#0f172a` text. Hover switches border to `#94a3b8` and background to `#f8fafc`.
- **Height Metrics**: Standard buttons set to 36px; compact editor action bar buttons set to 28px.

### Inputs & Micro-Controls
- **Text & Numeric Field**: Pure white background (`#ffffff`), 1px `#cbd5e1` border, 4px radius. Monospace font (`JetBrains Mono`) for coordinate/port numbers. On focus, outline switches to `#2563eb` with an auxiliary 3px cobalt glow ring.
- **Prefix / Suffix Adornments**: Subtle slate `#f1f5f9` backgrounds with uppercase monospace unit displays (e.g., `DEG`, `RPM`, `VDC`).

### Chips & Sensor Badges
- **Status Chips**: Background `#f8fafc`, 1px solid border `#e2e8f0`, label in `JetBrains Mono` 11px.
- **State Indicators**: Incorporate a 6px geometric indicator dot: `#22c55e` (Online/Linked), `#ea580c` (Transmitting/Active), `#ef4444` (Fault/Interrupted).

### Cards & Telemetry Blocks
- **Card Chassis**: `#ffffff` background with 1px `#e2e8f0` structural hairline. Split headers feature a 32px height container filled with `#f8fafc` and a subtle bottom border to cleanly separate hardware channels from readout bodies.

### Checkboxes & Radios
- **Selection Units**: 16px square (checkbox) or circular (radio) frames, 1px `#cbd5e1` border. Active state features a solid `#ea580c` fill with a crisp `#ffffff` check or concentric dot.

### Specialized Hardware Components
- **Pinout Grid / Breadboard Indicators**: Monospaced tabular cell nodes displaying GPIO address, logic level, and pin state using cobalt and orange highlight badges.
- **Motor Control Sliders**: Clean 4px track in `#e2e8f0` with active track segment in `#ea580c`. Thumb is a sharp 14px high-contrast obsidian slate rectangle with a center-indicator white notch.