# Strict Coding Rules & Guidelines

These rules MUST be followed by all contributors and AI agents when working on this repository. **Do not make unauthorized assumptions or changes outside the scope of user requests.**

## 1. Zero Unauthorized Changes
- **Ask First:** Never generate code, create Pull Requests, or modify files without explicit permission and discussion with the user.
- **Scope Isolation:** When making bulk updates (e.g., using regex or Python scripts), strictly isolate modifications to the targeted node IDs. Do not cause unintended global data regressions.
- **No Junk Files:** Do not pollute the repository with temporary workspace files (patch scripts, test scripts, etc.). Ensure they are removed before committing.
- **Dependencies:** Never delete `package-lock.json` or make unwarranted dependency bumps.

## 2. Data Structure & Node IDs
- **Global Uniqueness:** All entity `id` fields MUST be globally unique across the entire dataset. Append lineage-specific suffixes (e.g., `_surya`, `_chandra`, `_jadhav`) to prevent the layout engine from merging distinct family trees.
- **Parental Routing:** Biological parents are strictly used for the tree hierarchy (`parent`, `mother`). Adoptive/foster parents go into the `parichay` text field.
- **Direct Father Link:** To force a child's line to originate directly from the father (bypassing the mother node), explicitly omit or remove the `mother` attribute from the child's definition.

## 3. Clustering Logic
- **Proxy Nodes:** To create a collapsed clan/dynasty cluster, use an ID suffix like `_proxy`, set `isProxy: true`, and provide a `clusterName`.
- **Descendant Grouping:** Ensure all descendant members carry the EXACT SAME `clusterName` to group them correctly.
- **Parent Visibility:** To keep a patriarch/parent node visible while grouping their descendants, assign the `clusterName` *only* to the descendants and omit it from the parent node. **Do not bulk-assign `clusterName` if nested cluster preservation is required.**

## 4. Map Rendering & UI
- **Hitboxes:** Canvas UI elements (expand/collapse icons, Kalpa switchers) use mapped hitboxes (`MapState.clusterHitBoxes`), not floating HTML elements.
- **Labels:** To add text to lineage lines, use the `lineLabel` string property on the child node. Do not modify the canvas drawing logic in `map-renderer.js`.
- **Macro Mode:** Prominent figures that should remain visible when zoomed out are marked with `isProminent: true`.

## 5. Geographical Maps (Historical Atlas)
- **Borders:** Strictly overlay the official borders of India (including PoK and Aksai Chin) using the local GeoJSON overlay (`india_border.js`).
- **File Handling:** Do not add large GeoJSON files to `.gitignore`. Reduce their precision/size if necessary and commit them so they load correctly in the frontend.
