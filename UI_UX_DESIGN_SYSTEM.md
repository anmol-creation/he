# Sanatan UI/UX Design System

This document outlines the official design guidelines, color palettes, typography, and interaction patterns for the Sampurn Sanatan Itihas project. Following this system ensures a unified, premium "Sanatan Cinematic Universe" feel across all pages.

## 1. Core Philosophy: "Unified Theme, Contextual Layout"
While the colors and fonts remain consistent, the layout changes based on user intent:
*   **The Explorer (Maps/Timelines):** Dark, cinematic, edge-to-edge canvas, minimal buttons, highly visual.
*   **The Reader (Library/Books):** Light, warm, distraction-free, typography-focused, resembling ancient parchment.
*   **The Researcher (Search/Dashboards):** Clean, grid-based, highly structured, fast navigation.

## 2. Color Palette (The Sanatan Swatches)

### Primary Theme (The Core)
*   **Bhagwa (Saffron/Orange):** `#d35400` to `#e67e22` - Used for primary buttons, active states, and overarching branding.
*   **Deep Space (Night Sky):** `#0f172a` to `#1e293b` - Used as the background for the Cinematic Map and Historical Atlas.
*   **Parchment (Cream/Sand):** `#fcfaf2` to `#fdf6ec` - Used as the background for reading modes (Digital Library, Book Reader) to reduce eye strain.

### Vansh (Lineage) Specific Colors
Used strictly on the Historic Map to differentiate bloodlines:
*   **Suryavansh (Sun):** Glowing Gold/Yellow (`#f1c40f` / `#f39c12`).
*   **Chandravansh (Moon):** Cool Silver/Blue (`#bdc3c7` / `#3498db`).
*   **Agnivansh (Fire):** Deep Red (`#c0392b`).
*   **Brahmavansh/Rishis:** Pure White (`#ffffff`) or Pale Violet (`#9b59b6`).

### UI Elements (Borders, Lines, Text)
*   **Primary Text (on Light):** `#2c3e50` (Dark Slate).
*   **Primary Text (on Dark):** `#ecf0f1` (Off-white).
*   **Marriage Line (Gathbandhan):** Glowing Pink/Rose (`#fd79a8`).
*   **Transition Line (Daughter to Wife):** Dashed Grey (`#95a5a6`).

## 3. Typography (Fonts)
*   **Headings & Titles (The Ancient Feel):** `Yatra One` (Google Fonts). Used for Page titles, Vansh banners, and major headers. Gives a Devanagari brush-stroke feel to English/Latin text.
*   **Body Text & UI Elements (The Modern Readability):** `Poppins` (Google Fonts). Used for Info boxes, book reading text, and buttons. Clean, geometric, and modern.

## 4. UI Component Library

### 4.1 The 'Hero Card' (Info Box)
*   **Background:** Slightly translucent dark panel (`rgba(15, 23, 42, 0.9)`) on maps, or clean white (`#ffffff`) with soft shadow on dashboards.
*   **Avatar:** Prominent circular or shield-shaped image frame at the top.
*   **Tags:** Pill-shaped, colored tags for Titles (e.g., `[Maharathi]`, `[Chakravarti]`).

### 4.2 Buttons
*   **Primary:** Solid Bhagwa background, white text, slightly rounded corners (`border-radius: 30px`), soft hover shadow.
*   **Iconography:** Use FontAwesome (`fas`) for universal icons (e.g., Books, Swords, Arrows).

### 4.3 The Maps (Canvas & Leaflet)
*   **Lineage Nodes:** No generic boxes. Use House Sigils or circular nodes with subtle glowing borders.
*   **Varna Icons:** Micro-symbols in the corner of nodes (Book = Brahmin, Sword = Kshatriya, Scales = Vaishya, Tools = Shudra).
*   **Navigation:** Smooth scroll to zoom, click to open Hero Card, swipe to navigate adjacent nodes.

## 5. Animation & Transitions
*   **Pacing:** Keep it majestic and deliberate, not frantic. Transition durations should be around `0.3s` to `0.4s` with `ease-out` timing functions.
*   **Hover Effects:** Buttons and interactive nodes should have a subtle upward transform (`translateY(-2px)`) and a glowing box-shadow.