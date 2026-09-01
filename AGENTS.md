# Agent Instructions & Project Coding Guidelines

## Strict Historical Research Rule
**Rule:** NO HALLUCINATIONS FOR HISTORICAL DATES OR TIMELINES.
**Condition:** When the user asks to calculate ages, find birth dates, or set `kali_year` for prominent characters (like Pandavas, Kauravas, Krishna's family, Agrasen, etc.).
**Action Required:**
1. You MUST NOT apply generalized math (like a random 1 or 2-year sibling gap) or assume a 25-year generational gap unless absolutely no specific text exists.
2. You MUST proactively use `google_search` or read the internal documentation/scripts to find authentic references (e.g., birth Nakshatra, age at the time of the Kurukshetra war, specific shlokas from the Mahabharata or Puranas).
3. Do not propose a code update or present a timeline to the user until you have validated it against actual texts.

## Language Preference
- Communicate and discuss project planning with the user in Hinglish (a mix of Hindi and English).

## Pre-Commit and Execution
- Always perform a targeted search (`grep`) to verify IDs before linking `parent` or `spouseOf` attributes to prevent rendering crashes.
- Never generate a Pull Request (PR) or submit code changes without first presenting a plan and obtaining the user's explicit final approval.
