# Project Roadmap & Ideas

This file tracks the future vision, planned features, and brainstorming ideas for the Sampurn Sanatan Itihas project.

## Core Project Vision & The 4 Pillars
The overarching goal of this project is to present world history through the lens of Sanatan Dharma, breaking away from the limited 2000-year linear Western perspective. It is built on four core pillars:

**1. The Lineage Map (Vansh Vriksha)**
- Tracing historical figures from their origins (e.g., Brahma, Saptarishis) down through history.
- **Future Feature:** Allow modern users to input and connect their own family trees to ancient lineages, making history deeply personal and identity-driven.

**2. The Historical Geo Map (Bhugol)**
- A geographical timeline tracking the borders, kings, and rulers of ancient India and the world across different eras (e.g., Mahajanapadas, Mauryas).

**3. Cosmic & Historical Interactive Web Story (Srishti Katha)**
- A cinematic, 3D interactive scrollytelling experience visualizing the creation of the universe down to human history, blending Puranic concepts (Hiranyagarbha, Dashavatar) with scientific evolution.

**4. "Itihas Puran" - The Master Book (Chronological Rewrite)**
- The ultimate goal: A completely synchronized, chronological text of history starting from the birth of the universe to the modern day.
- Solves the problem of scattered historical events and the inadequate school education system that truncates Indian history.
- **Dual-Mode Reading Experience:**
  - **Type 1: The Chapter/Fact Mode (Granth Style):** A highly structured, factual approach. E.g., The Mewar Lineage where every king gets a dedicated, factual chapter focusing on their life, rule, and chronological events.
  - **Type 2: The Epic Story Mode (Katha Style):** An immersive narrative with creative freedom (like reading the Ramayana, Mahabharata, or a historical novel). It fills the gaps where the visual 3D story can't fit long text, allowing users to deeply engage with the emotions, dialogues, and epic scale of the events.

---

## Upcoming Features (Planned)

### 1. The "Samkalin Darbar" (Contemporary Chessboard View)
**Concept:** A way to visualize synchronous history without cluttering the main lineage tree.
**Execution Idea:**
- Add an `ecosystem` (or `darbar`) object to historical nodes (e.g., `king`, `minister`, `rivals`, `allies`).
- Render a new action icon (e.g., ♟️) next to the node on the canvas.
- Clicking the icon opens a floating UI (styled like a chessboard or royal court).
- The board displays the king in the center, allies/ministers on one side, and rivals on the other.
- All pieces on the board should be clickable to view their details or jump to their lineage tree.
- **Benefit:** Allows users to see who existed at the same time (e.g., Ripunjaya vs Pradyota) without drawing messy cross-lineage lines on the map.

### 2. Dynamic Alliance & Cross-Lineage View
**Concept:** A way to visually merge two distinct bloodlines (e.g., different clans or Vanshas) based on matrimonial alliances, without causing "hairball" graph clutter.
**Execution Idea:**
- In the side Info Box (Hero Card), place a "View Alliance" button next to a spouse's name if they belong to a different major clan.
- Clicking this triggers a dynamic layout render: The current tree shifts to one side, and the spouse's ancestral tree renders on the opposite side.
- A single, prominent "Gathbandhan" bridge line connects the two spouses, hiding all other unrelated lineage noise.
- **Benefit:** Allows users to explore how distinct clans merged over time through marriages (e.g., Rajput alliances, Kuru-Panchala) dynamically and cleanly.

### 3. Lineage Additions
- **Nanda Dynasty & Shishunaga:** Plan to add as a separate lineage root (Magadha Medieval Link), distinct from the Chandravansh Brihadratha line, reflecting the historical break/assassinations.
- **Gupta Empire:** Plan to add as a new proxy/root ("Gupta Empire (Vaishya)") starting from Sri Gupta, linking to the Lichchhavi clan via Kumaradevi.

## Backlog / To-Do
- Refine clustering logic for extremely large dynasties.
- Add more ancient incident texts to the Digital Archives.

### 4. UI/UX Improvements for Historic Map
- **Line Label Collision Avoidance:** If multiple line labels (e.g., `lineLabel` property) are rendered on the same connecting edge, they should be positioned dynamically to prevent overlapping with each other.

### 4. Cinematic UI/UX Strategy (The "SCU" Approach)
**Concept:** Treat the project like a "Sanatan Cinematic Universe" to make it engaging for modern audiences, drawing inspiration from GoT and MCU lore dashboards.
**Design Principles to Implement:**
- **Dark Theme Default:** A deep space/dark background to allow neon/glowing connection lines and node borders to pop out.
- **Houses & Sigils (Vansh Banners):** Replace generic boxes with faction-based designs. E.g., Suryavansh uses golden sun motifs and colors, Chandravansh uses silver moon motifs.
- **"Hero Card" Info Box:** The side panel should look like a character profile card, featuring a prominent avatar, glowing power/title tags (e.g., `[Maharathi]`), and a "Crossover/Appears In" section linking to major events (e.g., Ramayana, Kurukshetra War).
- **Interactive Timeline Filters:** A cinematic slider at the bottom (by Yuga or Kalpa) that dims out non-relevant lineages and highlights only those active in that era, creating a time-travel visual effect.
- **GoT-Style Banners for Collapsed Clusters:** Instead of just showing a basic node with a '+' icon when a lineage is collapsed, render a high-quality Vansh Banner (Flag). The banner will display the Vansh/Cluster Name and briefly list 2-3 prominent characters inside it, increasing visual appeal and context.
- **Cultural UI for Marriage Connections (Gathbandhan):** To reflect the deep significance of marriage in Sanatan Dharma, replace the standard husband-wife connection lines with a culturally resonant design. The line connecting spouses should meet in the center with a visual icon of a "Gathbandhan" (wedding knot) or clasped hands, representing an eternal bond.
- **Micro-Symbology (Vansh & Sub-clans):** While major Vanshas will have overarching banners (Sun/Moon), individual nodes or sub-clusters (Gotras/Surnames) should feature their own specific micro-symbols based on historical banners/flags to show the branching of clans.
- **Varna/Karma Iconography:** To instantly convey a historical figure's societal role/duty without text clutter, nodes will display subtle corner icons based on Varna: a Book/Manuscript for Brahmins (knowledge/teaching), Weapons (Sword/Bow) for Kshatriyas (defense/ruling), Scales/Coins for Vaishyas (trade/agriculture), and Craft Tools/Service motifs for Shudras (service/arts/crafts).

### 5.1 Mobile-First Responsiveness & Rendering Engine Upgrade
- **Current Issue:** The application is currently locked into a desktop-first layout and the canvas rendering lacks the ultimate smoothness seen in premium reference sites (like the LotR project).
- **Goal:** Overhaul the CSS for true mobile responsiveness across all devices. Re-evaluate the rendering pipeline (potentially migrating from raw Canvas 2D to an SVG-based layout engine like D3.js or a WebGL approach) to ensure 60fps buttery-smooth panning and zooming, regardless of the size of the family tree.

### 5.2 Immersive Library Vibe (Homepage Theme Upgrade)
- **Concept:** Transform the basic homepage portal into an immersive, video-game style main menu (like Assassin's Creed or God of War menus) acting as a "Sacred Ancient Vault" or "Digital Library".
- **Design Elements (Cinematic Dark-Minimalism):**
  - **Atmosphere:** Deep black background with subtle, slow-moving ambient glowing lights and an overlay of ancient paper/dust noise texture.
  - **Typography:** Majestic serif titles (e.g., Cinzel) with copper/bhagwa glowing text shadows to convey ancient authority, paired with clean sans-serif (e.g., Inter) for readable sub-text.
  - **Portals (Buttons):** Instead of standard buttons, use dark, minimalist, semi-transparent panels that "ignite" with a glowing box-shadow and subtle upward lift when hovered, feeling like opening a gateway.
- **Implementation Note:** This approach prioritizes CSS-based environmental storytelling (gradients, box-shadows, keyframe animations) to keep the initial load lightweight and performant, avoiding heavy 3D assets while still achieving a cinematic feel.

**Reference Inspiration (Cinematic Lore & Maps):**
- [Quartermaester - Interactive GoT Map](https://quartermaester.info/) - Excellent reference for dark theme maps and faction tracking.
- [Marvel Official Characters](https://www.marvel.com/characters) - The gold standard for "Hero Card" UI and timeline crossovers.
- [The LotR Project](http://lotrproject.com/) - A great functional example of a massive fantasy lineage tree and geo-map.

### 6. Cosmic & Historical Interactive Web Story (Visual Journey)
**Concept:** A free, cinematic, interactive web experience (Scrollytelling) that visualizes the journey from the creation of the universe down to human history.
**Narrative Flow (Sanatan/Puranic & Scientific Blend):**
- **Phase 1: The Void:** Dark screen, singularity/Hiranyagarbha, Big Bang / Srishti initiation.
- **Phase 2: Cosmos Formation:** Nebulas forming, stars lighting up, galaxies spinning, solar systems taking shape.
- **Phase 3: Birth of Earth & Life:** Early Earth forming, oceans developing, origins of life (Matsya/Kurma symbolism or early micro-organisms), evolution to flora and fauna.
- **Phase 4: Human Era:** Dawn of humanity, early civilizations, architectural marvels (temples, ancient cities).
- **Phase 5: Macro to Micro:** Zooming into specific historical/Puranic events on Earth.
**Execution Idea:**
- **Medium:** Option A (Interactive Web Experience) utilizing HTML5, Canvas, and Three.js for 3D visuals.
- **Interaction:** Scroll-based progression ("Scrollytelling") where the user's scroll drives the timeline, animations, and camera movements.
- **Integration:** Can be hosted as a standalone cinematic page within the project, acting as an immersive prologue to the historic map or timelines.
**Reference Inspiration (Interactive Web Links):**
- [100,000 Stars (Chrome Experiment)](https://stars.chromeexperiments.com/) - 3D cosmic zoom experience.
- [NASA Eyes on the Solar System](https://eyes.nasa.gov/) - Interactive 3D space exploration.
- [Neal.fun - The Deep Sea](https://neal.fun/deep-sea/) - Great example of vertical scrollytelling depth.
- [Three.js Examples](https://threejs.org/examples/) - The core 3D web technology we will use.
