## 2025-03-01 - Icon Button Accessibility Pattern
**Learning:** The application's component library (especially in `Navbar`, `ShoppingCart`, and `MenuGrid`) has a recurring historical pattern of missing `aria-label` attributes and `focus-visible` keyboard focus states on icon-only buttons.
**Action:** Future UX work should proactively verify and add `aria-label` and `focus-visible:ring` styles to all interactive icon-only elements across the application to ensure screen reader and keyboard navigation accessibility.
