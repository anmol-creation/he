# Hindu Encyclopedia

Eternal History • Sacred Heritage • Historical Truth - The ultimate Hindu Encyclopedia

## Overview
The Hindu Encyclopedia is an exhaustive, static, lightweight Web Application designed to document and explore the ancient history, lineages, scriptures, and sacred heritage of Sanatan Dharma. The project is primarily built using pure HTML, CSS, and vanilla JavaScript without reliance on heavy modern frameworks, ensuring blazing-fast performance, offline availability as a PWA, and maximum reliability.

## Core Features

- **Itihas Puran (Timeline & Dashboard):** The master portal dashboard mapping entities across Yugas. Includes category entity lists, and access to historical timelines.
- **Historic Map (Hybrid Time-Space Canvas):** An interactive infinite, draggable, and zoomable canvas representing hierarchical lineage data visually. Features Focus Nodes, a vertical 'River of Time' timeline, and 'Metro Map' mode for zoomed-out lineage views.
- **Vansh & Gotra Directory:** A specialized directory categorizing lineages into Rishi Gotra (Saptarishis), Rajvansh (Surya, Chandra, Agni, Naga), and Kayastha/Chitragupta Vansh for historically accurate ancestral mapping.
- **Digital Library & Book Reader:** Functions as a local 'Source of Truth'. Stores original, authentic Hindi texts and Sanskrit shlokas for scriptures (e.g., Valmiki Ramayan) to ensure research accuracy and avoid reliance on potentially manipulated internet data.
- **Hindu Heritage (Map) & Archives (Incidents):** Additional sections exploring neglected heritage sites and ancient historical incidents.
- **Offline PWA Support:** Utilizes Service Workers (`sw.js`) to cache core assets for an offline, app-like experience.

## Technical Architecture

- **Stack:** Pure HTML5, CSS3 (using CSS variables for theming), and vanilla JavaScript (ES modules).
- **Data Model:** Highly modularized historic lineage data in `js/data/historic-map-data/`. Digital Library texts are maintained in `js/data/library-data.js`.
- **Layout Engine:** The Historic Map employs a custom Layout Engine capable of Sugiyama-style Hierarchical Layouts and an 'autoslip' contour-based layout, calculating spatial mappings dynamically.
- **Development Tooling:** Managed via `package.json` for local development dependencies like Playwright, JSDOM, and JSHint for UI verification and testing.

## Local Setup & Development

Due to the usage of ES modules, the files cannot be run directly via `file:///` protocol. You must serve the directory using a local web server.

1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd hindu-encyclopedia
   ```

2. **Install Dev Dependencies (Optional for Testing):**
   ```bash
   npm install
   ```

3. **Start a Local Server:**
   You can use Python or Node to serve the static files:
   ```bash
   # Using Python
   python -m http.server 8000

   # Or using Node's npx
   npx serve .
   ```

4. **Access the application:**
   Navigate to `http://localhost:8000/` in your browser.

## Testing
The repository uses Playwright for frontend verification tests.
```bash
npm run test
```

## Contributing
All original data changes require discussion and permission. When adding to the lineage (`vansh`), ensure patrilineal tracking is maintained while documenting known sons and daughters. Scriptures additions must include accurate citations (e.g., `|| [i] (Book, Kaand, Sarga, Shloka)`).
