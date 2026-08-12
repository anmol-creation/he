# Project Roadmap & Ideas

This file tracks the future vision, planned features, and brainstorming ideas for the Sampurn Sanatan Itihas project.

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

### 2. Lineage Additions
- **Nanda Dynasty & Shishunaga:** Plan to add as a separate lineage root (Magadha Medieval Link), distinct from the Chandravansh Brihadratha line, reflecting the historical break/assassinations.
- **Gupta Empire:** Plan to add as a new proxy/root ("Gupta Empire (Vaishya)") starting from Sri Gupta, linking to the Lichchhavi clan via Kumaradevi.

## Backlog / To-Do
- Refine clustering logic for extremely large dynasties.
- Add more ancient incident texts to the Digital Archives.

### 3. UI/UX Improvements for Historic Map
- **Google Maps Style Search UI:** Redesign the search functionality to resemble Google Maps. Clicking the main search bar on the map should open a dedicated full-screen search view/overlay. This view will feature a prominent "Back" button at the top to return to the map, a search input, and a list of recent searches/categories or live search results below it.
- **Dynamic Info Box on Swipe:** When navigating between nodes via swipe gestures (fast swipe up/down/left/right), if the side Info Box is currently open, it should automatically update its content to display the details of the newly focused node without requiring an extra click.
- **Node Avatars/Images:** Add support for displaying character images or avatars inside the Info Box to make the historical figures more visually engaging.
- **Line Label Collision Avoidance:** If multiple line labels (e.g., `lineLabel` property) are rendered on the same connecting edge, they should be positioned dynamically to prevent overlapping with each other.
