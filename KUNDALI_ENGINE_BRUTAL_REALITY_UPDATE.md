# Kundali Engine: Brutal Reality & Structural Updates (Chat Summary)

This document serves as a historical record and logical blueprint of the "Brutal Reality" and "Conditions Apply" updates implemented in the Kundali Engine during this session. The core objective was to move away from generic, overly positive astrological readings and implement a highly logical, structural, and "brutal" reality check based on actual Puranic/Parashari logic.

## 1. The Anchors (Semi-Fixed Karma)
To provide a foundational understanding of a chart before diving into Yogas/Doshas, four primary "Anchors" were introduced. These represent the structural capacity and unchangeable truths of a person's life.

*   **Anchor 1: Lagnesh (The CEO):** The Ascendant Lord. If the CEO is weak (Neech/Combust), the entire company (chart) struggles regardless of other Yogas.
*   **Anchor 2: Prime Timeline (Vimshottari Dasha):** Evaluates the Mahadashas active during the core working/building years (Ages 25-50). It classifies these periods into:
    *   `Golden`: Lagnesh, Trikon lords, or highly dignified planets.
    *   `Grind`: Trik lords (6, 8, 12), Debilitated, or Combust planets.
    *   `Chaos`: Rahu or Ketu dashas (unpredictable, extreme highs/lows).
    *   `Mixed`: Standard outcome based on effort.
*   **Anchor 3: Karmic Axis (Rahu-Ketu):** Separated from standard Yogas. Represents the Prarabdha Karma (the extreme obsession of Rahu vs. the detachment/mastery of Ketu). Visually isolated in a prominent red UI card.
*   **Anchor 4: Stubborn Karma (Vakri / Retrograde Grahas):** Represents past-life unresolved issues. Evaluates retrograde planets (excluding Rahu/Ketu) and maps their "Unchangeable Truth" (Core DNA) into a distinct amber UI card.

## 2. Core DNA Mapping (The Underlying Agendas)
New JSON structures (`planets_core.json` and `houses_core.json`) were integrated into the backend (`server.js`) to attach fundamental, unchangeable agendas to celestial bodies and houses.
*   **House Core Agendas:** Rendered directly inside the visual Lagna Chart UI, explaining the true purpose of the house (e.g., 6th House is not just "enemies," it's "Survival and Dispute").
*   **Planetary Truths:** The immutable nature of a planet (e.g., Mars is always "Action/Combat") mapped against its temporary dignity (state).

## 3. The Modifiers (Conditions Apply / Bhanga Logic)
The engine was updated to reflect that in Jyotish, rules are highly susceptible to cancellation (Bhanga) or modification based on placement and dignity.

*   **Uccha in Dusthana (Exalted in Bad Sector):** An exalted planet in the 6th, 8th, or 12th house does not yield positive results; instead, it amplifies the negative agendas of those houses (e.g., severe disease, sudden massive losses). Flagged as a Warning.
*   **Neechbhanga Rajyoga:** A debilitated (Neecha) planet whose dispositor sits in a Kendra house. Represents initial severe struggle followed by massive, state-changing success.
*   **Rajyoga Bhanga (Combustion):** If any planet forming a Rajyoga is "Asta" (Combust/burned by the Sun), the Rajyoga loses its physical manifestation and exists only in thoughts/potential.
*   **Dosha Parihar (Cancellations):**
    *   *Kemdrum Dosha:* Cancelled if a Kendra house is occupied.
    *   *Manglik Dosha:* Cancelled if Jupiter aspects Mars.

### 3.1 UI UX Philosophy for Modifiers
A critical user constraint was established: **Do not hide cancelled Yogas/Doshas.**
If a Rajyoga is ruined by combustion, or a Dosha is neutralized, the engine must still detect it but mark it as `isCancelled`. The UI (`app.js`) then renders these with a strikethrough title and an amber "Conditions Apply (Cancelled)" warning box explaining exactly *why* it was neutralized. This ensures complete transparency.

## 4. Developer Tools & Testing
*   **Quick Save Presets:** A dropdown was added to the UI (`index.html` and `app.js`) to instantly load the birth data for **Lord Ram** (Chaitra Navami) and **Lord Krishna** (Janmashtami). This allows for rapid, standardized testing of the engine's calculation and structural logic against historically benchmarked planetary alignments.
