# Strict Coding Rules & Guidelines

These rules MUST be followed by all contributors and AI agents when working on this repository. **Do not make unauthorized assumptions or changes outside the scope of user requests.**

## 1. Zero Unauthorized Changes
- **Ask First:** Never generate code, create Pull Requests, or modify files without explicit permission and discussion with the user.
- **Scope Isolation:** When making bulk updates (e.g., using regex or Python scripts), strictly isolate modifications to the targeted node IDs. Do not cause unintended global data regressions.
- **No Junk Files:** Do not pollute the repository with temporary workspace files (patch scripts, test scripts, etc.). Ensure they are removed before committing.
- **Dependencies:** Never delete `package-lock.json` or make unwarranted dependency bumps.

## 2. Decoupled Data Schema & Layout Rules
We strictly separate Rendering (Visual Layout) attributes from Information (Info Box) attributes to prevent drawing bugs.

### Rendering Attributes (Used by `tree-builder.js`):
- `gender`: (`'male'` or `'female'`). This is mandatory for determining duplication logic.
- `parent_id_a`: The primary ID for vertical lineage routing (usually the father).
- `parent_id_b`: The secondary ID for dynamic routing (usually the mother).
- `spouseOf`: ONLY used by the layout engine if `gender: 'female'` to trigger auto-duplication (drawing her in both birth and marital lineages). If `gender: 'male'`, the layout engine MUST completely ignore `spouseOf` for rendering purposes.

**Dynamic Edge Routing (Using `parent_id_a` and `parent_id_b`):**
- If a cluster is closed or there is only 1 wife: Children's lines route directly from `parent_id_a`.
- If a cluster is open (multiple wives visible): Children's lines route from `parent_id_b`.

### Information Attributes (Used ONLY by `map-ui.js` Info Box):
- `father`: Biological father's ID (for UI text).
- `mother`: Biological mother's ID (for UI text).
- `spouse`: Spouse's ID (for UI text).
*(Note: These attributes are completely ignored by the Layout Engine drawing logic).*

## 3. Data Integrity & QA Tooling
- **Global Uniqueness:** All entity `id` fields MUST be globally unique across the entire dataset. Append lineage-specific suffixes (e.g., `_surya`, `_chandra`, `_jadhav`).
- **QA Alerts:** The Info Box must show red alerts if `father` or `spouse` IDs are missing in the dataset.
- **Duplicate Detection:** The UI must detect if a female node has more than 2 visual instances (meaning she was manually duplicated + auto-duplicated).
- **Mark for Deletion Rule:** You CANNOT mark a node for deletion if it is a valid 1-to-2 auto-duplication. You can ONLY mark manual/extra nodes that exceed 2 visual instances.

## 4. Clustering Logic
- **Proxy Nodes:** To create a collapsed clan/dynasty cluster, use an ID suffix like `_proxy`, set `isProxy: true`, and provide a `clusterName`.
- **Descendant Grouping:** Ensure all descendant members carry the EXACT SAME `clusterName` to group them correctly.
- **Parent Visibility:** To keep a patriarch/parent node visible while grouping their descendants, assign the `clusterName` *only* to the descendants and omit it from the parent node. **Do not bulk-assign `clusterName` if nested cluster preservation is required.**

## 5. Map Rendering & UI
- **Hitboxes:** Canvas UI elements (expand/collapse icons, Kalpa switchers) use mapped hitboxes (`MapState.clusterHitBoxes`), not floating HTML elements.
- **Labels:** To add text to lineage lines, use the `lineLabel` string property on the child node. Do not modify the canvas drawing logic in `map-renderer.js`.
- **Macro Mode:** Prominent figures that should remain visible when zoomed out are marked with `isProminent: true`.

## 6. Geographical Maps (Historical Atlas)
- **Borders:** Strictly overlay the official borders of India (including PoK and Aksai Chin) using the local GeoJSON overlay (`india_border.js`).
- **File Handling:** Do not add large GeoJSON files to `.gitignore`. Reduce their precision/size if necessary and commit them so they load correctly in the frontend.
