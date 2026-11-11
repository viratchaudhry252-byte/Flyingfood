## 2024-03-20 - [Navbar Accessibility]
**Learning:** Icon-only buttons often lack `aria-label` attributes which breaks screen reader usability. The app's design system relies on outline classes for focus states.
**Action:** When adding accessibility to interactive elements, consistently apply `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff4e00] rounded-md` for focus and explicitly add `aria-label` for any buttons without text content.
