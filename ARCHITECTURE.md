# Project Architecture (Blueprint)

This document explains the technical structure and separation of concerns in the Sampurn Sanatan Itihas project.

## Core Philosophy
The project strictly separates **Data**, **State**, **Layout Calculation**, and **Rendering**. The historical database is completely decoupled from the UI logic.

## Directory Structure

### 1. Data Layer (`js/data/`)
Stores all historical and geographical data in plain JavaScript objects/arrays.
- `historic-data.js`: The master file that combines all lineages.
- `historic-map-data/`: Contains modularized files for specific lineages (e.g., `suryavansh.js`, `chandravansh.js`, `brahma-base.js`).
- `geo/`: Contains GeoJSON files for the Historical Atlas (e.g., `india_border.js`, `mahajanapadas.js`).
- `sanatan-glossary.js`: Tooltip definitions for historical terms.
- `vansh-gotra-data.js`: Data for the Vansh & Gotra directory.

### 2. Layout Engine (`js/layout-engine/`)
Calculates the X and Y spatial coordinates for every node before rendering.
- Computes Sugiyama-style hierarchical layouts (orthogonal edge routing, directional arrowheads).
- Handles horizontal channel separation and auto-duplication of females with both parent and spouse attributes.
- **Rule:** Never edit DOM elements from here. Only math and coordinate generation.

### 3. State Management (`js/map-state.js`)
Manages the global state of the application.
- Tracks `scale`, `translateX`, `translateY`, `activeKalpa`, `activeManvantara`, and expanded/collapsed clusters.

### 4. Rendering Engine (`js/map-renderer.js`)
Responsible for drawing data onto the HTML5 `<canvas>`.
- Draws nodes, connection lines (pink for wives, red dashed for transitions), and text labels.
- Handles macro-mode rendering (zoomed out bounding boxes for vanshas).

### 5. Controls & UI (`js/map-controls.js`, `js/map-ui.js`)
- **Controls:** Handles pan/zoom, touch gestures, and click hit-detection on the canvas.
- **UI:** Manages floating HTML elements like the Search panel, Map View/Filters dropdown, legends, and the side Info Box panel.

### 6. Orchestration (`js/historic-map.js`)
The main entry point that initializes the state, loads data, runs the layout engine, and starts the render loop.
