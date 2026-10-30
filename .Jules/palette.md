## 2024-10-30 - Missing Context on Icon-only Buttons
**Learning:** Found a widespread accessibility pattern in this app's component library where icon-only buttons (like `Search`, `Menu`, `X` to close, `+`/`-` for quantities, floating action cart buttons, and shopping cart icons in cards) lack `aria-label` attributes.
**Action:** Always verify icon-only buttons contain appropriate `aria-label` descriptions and add them proactively, while also ensuring proper keyboard focus visibility states (`focus-visible:ring-2`) are present since they were also missing.
