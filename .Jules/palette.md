## 2024-05-15 - Context-Specific ARIA Labels for Iterated Grids
**Learning:** Icon-only action buttons (like shopping carts) in mapped grid components can cause ambiguous screen reader announcements if given generic ARIA labels (e.g., "Add to cart"). Users need context to know *what* they are adding without re-reading the surrounding card context.
**Action:** Always use dynamic data (like `item.name`) in `aria-label` attributes for buttons within mapped components (e.g., `aria-label={\`Add ${item.name} to cart\`}`) to provide immediate, clear context for screen reader users.
