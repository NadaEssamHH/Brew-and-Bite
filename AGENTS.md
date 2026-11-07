Brew & Bite: Project Rules for the Coding Agent

Read this file before every task. If a task conflicts with it, stop and ask instead of guessing.

1. What this project is

Online ordering website for a cafe and bakery. Guests browse a menu, customize items, check out WITHOUT an account, and the order is sent to the shop via a prefilled WhatsApp message (wa.me link). The owner has a small admin area to manage the menu.

2. Stack

React + TypeScript + Vite, React Router, Tailwind CSS (v4, theme tokens in src/index.css), lucide-react for icons. Backend (Node.js) comes later; until then use mock data in src/data/.

3. The UI source of truth

Design screens live in design/<screen-name>/ as screen.png (the look) and code.html (the structure and Tailwind classes).

Match the design as closely as possible: layout, section order, spacing, and copy.
code.html uses Stitch-specific class names (e.g. bg-secondary-container, font-display-lg, px-margin, gap-space-lg). They do NOT exist in this project. Translate them to our tokens and standard Tailwind classes.
Do NOT invent copy, sections, or features that are not in the design. If something is missing from the design, leave a TODO and tell me.
4. Styling rules
Use ONLY the tokens in src/index.css: bg-canvas, bg-surface, text-primary, bg-secondary, text-tertiary, border-oat, text-cocoa, bg-chip, text-error, font-display (headings), font-sans (body), shadow-card, shadow-raised, shadow-modal.
Do NOT use default palette classes such as stone-*, amber-*, orange-*, gray-*, or hardcoded hex colors (except 
#ffdbcc where the design uses it on dark overlays).
Mobile-first: write the base style for phones, then add md: / lg: for larger screens.
Every <img> needs a meaningful alt. Text and prices must keep high contrast.
5. Code rules
Function components with named exports (export const Home = () => ...). Routes import them by name.
Components never hardcode data (prices, currency, address, opening hours, copy lists). Put them in src/data/*.ts and render with .map() and a stable key.
Types in src/types/ must match the planned backend models (MenuItem, Category, Order).
Navigation uses <Link> from react-router-dom, never <a href> for internal pages.
Keep each feature inside its own folder (components/<feature>/). Do not edit shared files (components/common/, context/, types/, index.css) unless the task says so.
No new libraries without asking.
6. Scope guardrails (confirmed requirements)

DO NOT build any of these. They are explicitly out of scope:

Online payment, card forms, or PaymentMethod components (payment happens outside the system)
Customer accounts or login
Table reservations (ReservationForm)
Admin order management, order tables, or stats dashboards
Multi-language switching, loyalty points, promo codes

Confirmed behavior:

Checkout: Table Pickup (table number required) or Instant Delivery (name, phone, address required), optional note, review step.
Order hand-off: src/lib/whatsapp.ts builds the wa.me link. The WhatsApp number comes from VITE_WHATSAPP_NUMBER in .env, never hardcoded.
The order only reaches the shop if the customer presses Send in WhatsApp, so the confirmation screen must say "Order ready to send" and offer a "Send on WhatsApp" button again.
7. Open decisions: never decide these silently

Currency, shop address and phone, delivery fee and minimum order, cancellation policy, admin login method, whether any customization option is mandatory. Use a clearly marked placeholder in src/data/ and tell me.

8. How to work
Do ONE task at a time, small and focused. Do not refactor unrelated files.
Work on a feature branch (feature/<name>); never commit to master directly.
After finishing, run npx tsc --noEmit and npm run build, fix errors, and report.
End every task with a short report: files changed, anything you changed that was not asked, any deviation from the design (with the reason), and any TODO you left.