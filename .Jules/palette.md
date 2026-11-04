## 2026-11-04 - [Accessibility] Missing aria-label and focus-visible on Icon-only Buttons
**Learning:** Icon-only buttons throughout the application's components frequently lack `aria-label`s (for screen readers) and `focus-visible` states (for keyboard navigation), reducing overall accessibility.
**Action:** Proactively verify and add `aria-label` attributes and visible keyboard focus states (e.g., `focus-visible:ring-2`) to any newly created or modified icon-only buttons.
