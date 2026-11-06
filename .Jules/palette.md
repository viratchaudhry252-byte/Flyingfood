## 2025-03-05 - Missing ARIA Labels and Focus Rings on Icon-Only Buttons
**Learning:** Found a historical pattern in this component library where icon-only buttons (like Search, Menu, and Cart actions) are consistently missing `aria-label` attributes and `focus-visible` keyboard focus states, hindering accessibility and keyboard navigation.
**Action:** Proactively verify and add `aria-label` and `focus-visible:ring-2 focus-visible:outline-none` classes to any new or existing icon-only buttons.
