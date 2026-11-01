## 2024-11-01 - Missing ARIA Labels and Focus States on Icon-Only Buttons
**Learning:** The application's component library has a historical pattern of missing `aria-label` attributes and `focus-visible` keyboard focus states on icon-only buttons (like in Navbar and MenuGrid). This makes the app difficult to navigate for screen reader and keyboard-only users.
**Action:** Proactively verify and add `aria-label` and `focus-visible` ring classes to all new and existing icon-only interactive elements in future UX work.
