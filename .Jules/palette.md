## 2024-11-10 - Navbar Icon Accessibility
**Learning:** Icon-only buttons in the application frequently miss `aria-label` attributes and keyboard focus indicators (`focus-visible` styles). This is a pattern seen across the codebase.
**Action:** When working on UI components, ensure that icon-only buttons have descriptive `aria-label` attributes and implement keyboard focus indicators using `focus-visible:ring-2 focus-visible:ring-[#ff4e00]`.
