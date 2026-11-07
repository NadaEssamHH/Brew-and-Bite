# Brew & Bite — AI UI Design Prompts (Google Stitch)
Derived from: prd.md (Sec. 15 Screen/Page Requirements, Sec. 6 Users, Sec. 18 Business Rules, Sec. 25 Accessibility, Sec. 29 SEO/n.a.)

**How to use these:** Run the Design System prompt first in Stitch to establish the visual language. Then run each screen prompt in build order below, referencing the design system each time. Each prompt follows Stitch's own Zoom-Out-Zoom-In structure (Context → screen goal/layout/components/style) mapped onto Context / Description / Platform / Visual Style / UI Components.

**Build order (MVP first):** Home → Menu → Item Detail/Customization → Cart → Checkout → Order Confirmation → Admin: Menu Management → Our Story → Contact/Location/Hours.

**Open before build starts (OQ-13):** three Home variants exist in Stitch (landing_1, landing_2, brew_bite_artisanal_ordering_platform) — one must be chosen as final before the shared navbar/layout is built, since every other screen depends on it.

---

## 0. Design System Prompt (run first)

```
Context: Design system for Brew & Bite, an artisanal coffee shop & bakery ordering website. Platform: mobile-first responsive web (customers order mostly from their phones; the admin area is used by the owner on any device).

[OPEN — confirm with client]: No final logo file, color palette, or typeface has been confirmed in the BRD/PRD beyond a verbal description: "warm tones, earthy... clean, simple, elegant, not cluttered." The direction below is a SUGGESTION only — confirm or override before running the per-screen prompts.

Suggested starting direction (label as suggestion, not final):
- Palette: warm, earthy neutrals (cream/off-white background, deep coffee-brown for text/primary actions, a muted terracotta or amber as accent) — avoid high-saturation "app" colors; keep it feeling like an artisanal cafe, not a generic delivery app.
- Typography: a warm serif or humanist serif for headings (evokes craft/artisanal feel), clean sans-serif for body/UI text and prices. Prioritize readability and contrast — prices in particular must be high-contrast and easy to read (client-stated requirement).
- Spacing/density: generous whitespace, uncluttered layouts, large tappable touch targets (mobile-first).
- Imagery style: large, high-quality, appetizing food/drink photography is a stated priority — design layouts that give photography room to breathe (e.g. large image cards) rather than dense text-first lists.
- Component style: soft rounded corners, minimal shadows, no heavy gradients or busy animation — client explicitly wants "nothing that feels heavy or slow."
- Iconography: simple line icons for filters/cart/nav; avoid cartoonish or overly playful icon sets to keep the artisanal tone.

Accessibility baseline to bake into every token: text/price contrast must meet at least WCAG AA (4.5:1 for body text, 3:1 for large text) — [OPEN — confirm with client: exact accessibility standard/level was not specified beyond "high contrast, readable"]. All images require descriptive alt text fields in the component spec.

Deliverable: a reusable Stitch/DESIGN.md-style token set (colors, type scale, spacing scale, button/card/badge/filter-chip component styles) that every screen prompt below will reference as "the Brew & Bite design system."
```

---

## 1. Home (SCR-01) — MVP

```
Context: Landing page for guest customers (regulars, students, office workers), most arriving on mobile, who want to quickly understand the brand and get into the menu.

Description: A warm, welcoming landing screen. Show the Brew & Bite brand/logo placeholder, a short warm tagline (placeholder copy only — no invented brand copy beyond a generic placeholder), and prominent navigation into the Menu and Our Story. Feature 1-2 large, appetizing food/drink photo placeholders. Keep it simple and uncluttered — this is not a content-heavy page.

Platform: Mobile-first responsive web. Design the mobile viewport as the priority frame; then show how it adapts to a wider/desktop viewport.

Visual Style: Use the Brew & Bite design system established in the Design System prompt (warm/earthy palette, serif headings, generous whitespace, large photography).

UI Components:
- NavBar (logo, links to Menu / Our Story / Contact)
- HeroSection (large photo placeholder + tagline + primary CTA button "View Menu")
- PersistentCartSummaryBar (if cart has items) — reused across all customer-facing screens
- Footer (hours, location, contact link)
```

---

## 2. Menu (SCR-02) — MVP

```
Context: The core discovery screen for guest customers browsing, searching, and filtering items — the screen they'll use most.

Description: Show menu items grouped into these confirmed categories: Signature Brews, Artisan Bakery, Brunch & Bowls, Cold Beverages, Sweet Treats. Each item card shows: name, price, short description, badges where relevant ("Bestseller", "Freshly Baked", "Ceremonial Grade"), and an availability indicator (clearly show "Sold Out" items as unavailable/greyed out, not hidden). Include a search bar (search by name or ingredient) and filter controls for dietary tags and service type (Pickup vs. Delivery). [OPEN — confirm with client: the full dietary tag list beyond the examples given (dairy-free, gluten-free) is not yet confirmed — design the filter chip component to be easily extensible with more tags later.] [OPEN — confirm: empty-state behavior when a search/filter returns no results is not yet defined — propose a friendly empty state with an icon and "no items match" message as a placeholder.]

Platform: Mobile-first responsive web — this is the screen most customers will use on their phones. Design filters as a mobile-friendly control (e.g. bottom sheet or horizontal filter-chip row), not a desktop-style sidebar as the primary mobile pattern.

Visual Style: Use the Brew & Bite design system. Photography-forward item cards.

UI Components:
- SearchBar
- FilterChipGroup (dietary tags, service type)
- CategorySection (repeatable, one per category)
- MenuItemCard (image, name, price, description snippet, badge(s), availability state)
- SoldOutBadge / disabled card state
- EmptyStateMessage (for no search/filter results)
- PersistentCartSummaryBar
```

---

## 3. Item Detail / Customization (SCR-03) — MVP

```
Context: A guest customer has tapped a menu item and needs to configure it accurately before adding to cart — this directly addresses the client's core complaint about order mistakes (e.g. missed milk preference).

Description: Show the full item detail: name, price, description, origin/roast notes where applicable (coffee items), and photo. Below that, show the confirmed customization controls: for drinks — milk type (whole/oat/almond), extra espresso shot toggle, and roast selection (light/medium/dark) only where relevant to that drink; for food — a "warm upon request" toggle where applicable. [OPEN — confirm with client: whether any customization option should be mandatory (e.g. must a milk type be selected) is not yet decided — design all options as optional/pre-selected-to-a-sensible-default for now.] End with a clear "Add to Cart" primary action.

Platform: Mobile-first responsive web.

Visual Style: Use the Brew & Bite design system. Large hero photo for the item, clear/large touch targets for the customization selectors (important given this screen exists specifically to prevent order errors).

UI Components:
- ItemHeroImage
- ItemDetailHeader (name, price, description, origin/roast notes)
- CustomizationOptionGroup (milk type selector, roast selector — conditionally shown)
- ToggleControl (extra shot; warm upon request)
- AddToCartButton
- PersistentCartSummaryBar
```

---

## 4. Cart (SCR-04) — MVP

```
Context: A guest customer reviewing and adjusting their order before checkout, to catch mistakes before submitting.

Description: List all cart items with their chosen customizations clearly visible per line item (e.g. "Flat White — Oat milk, extra shot"), quantity steppers, a remove control per item, and a running subtotal. Always show the persistent summary (item count, order type/table if already chosen, subtotal). [OPEN — confirm with client: behavior when an item in the cart becomes sold out is not yet defined — propose flagging the affected line item clearly and blocking checkout until resolved, as a placeholder.] Include a clear "Proceed to Checkout" primary action, disabled/hidden when the cart is empty (show a friendly empty-cart state instead).

Platform: Mobile-first responsive web.

Visual Style: Use the Brew & Bite design system.

UI Components:
- CartLineItem (image, name, customizations summary, quantity stepper, remove button, line price)
- CartSubtotalSummary
- EmptyCartState
- ProceedToCheckoutButton
```

---

## 5. Checkout (SCR-05) — MVP

```
Context: A guest customer completing their order — no account required, and no payment collected on-site (client explicitly declined online payment/stored card data).

Description: A guest checkout form (no login/registration anywhere in this flow). First, a fulfillment method selector: "Table Pickup" or "Instant Delivery". Show conditional required fields: Table Pickup → table number field only; Instant Delivery → name, phone number, and delivery address fields. Include an optional order note field (e.g. "add a note for the kitchen"). Do NOT include any payment/card fields anywhere on this screen — payment is handled outside the system. End with a review section showing the full order (items, customizations, fulfillment details, note) before a final "Submit Order" action, followed by a simple order-confirmation state. [OPEN — confirm with client: exact validation-error messaging/behavior for missing required fields is not yet defined — use standard inline field-level validation as a placeholder.] [OPEN — confirm with client: the exact order hand-off mechanism (WhatsApp message vs. in-system only) is undecided (PD-01) — this does not change the checkout screen's design, only what happens after submission, so design the confirmation screen generically as "Order received — [Business Name] will be in touch shortly" without naming a specific channel.]

Platform: Mobile-first responsive web.

Visual Style: Use the Brew & Bite design system.

UI Components:
- FulfillmentMethodToggle (Pickup / Delivery)
- ConditionalFormFieldGroup (table number OR name/phone/address, shown based on toggle)
- OrderNoteTextArea (optional)
- OrderReviewSummary
- SubmitOrderButton
- OrderConfirmationState
```

---

## 6. Admin — Menu Management (SCR-08) — MVP

```
Context: The owner (sole confirmed admin user) managing the catalog without developer help — the client's explicit acceptance bar is being able to "add today's specials in a couple of minutes without help."

Description: An admin dashboard listing all menu items (grouped by category, matching the public menu structure) with inline quick actions: toggle "Sold Out" availability, and edit price/description directly. Include an "Add New Item" action that opens a form covering: name, category, price, description, dietary tags, origin/roast notes (for coffee), and photo upload placeholder. Include a way to flag/edit "Daily Specials" separately or via a flag on existing items. [OPEN — confirm with client: the admin authentication/login method is not yet decided — design a simple login/gate screen as a placeholder, without assuming a specific auth provider.] Keep this interface simple and fast to use — the owner is not a technical user.

Platform: Design for any device (owner may use phone, tablet, or desktop) but prioritize clarity and speed of use over visual flourish — this is a utility screen, not a customer-facing brand moment.

Visual Style: Use the Brew & Bite design system's typography/spacing/color tokens, but a more utilitarian, table/list-driven layout is appropriate here versus the photography-forward customer screens.

UI Components:
- AdminLoginGate (placeholder)
- MenuItemAdminTable (or card list) grouped by category, with inline Sold-Out toggle and quick-edit
- AddEditItemForm (name, category, price, description, dietary tags, origin/roast notes, photo upload)
- DailySpecialFlagControl
- SaveConfirmationToast
```

---

## 7. Our Story / About Us (SCR-06) — Should-have (client prefers included at launch)

```
Context: A guest customer who wants to feel connected to the brand — reinforces the artisanal, story-driven identity the client emphasized repeatedly.

Description: A simple content page telling the sourcing/baking story, with supporting photography. [OPEN — content dependency: actual story text and photography must be supplied by the client/head baker — use clearly-marked placeholder text and image placeholders, do not invent brand history or founder details.]

Platform: Mobile-first responsive web.

Visual Style: Use the Brew & Bite design system. This is the most "editorial"/photography-led page — give images room to breathe.

UI Components:
- StoryHeroImage
- StoryContentBlock (placeholder text)
- SupportingPhotoGrid (placeholder images)
```

---

## 8. Contact / Location / Hours (SCR-07) — MVP

```
Context: A guest customer looking up practical info — address and hours — often before or during a visit.

Description: A simple, static info page: address, hours (client confirmed: daily, 7 AM–9 PM), and a contact method. Keep this screen lightweight and fast-loading, in line with the client's ~2-second mobile load target.

Platform: Mobile-first responsive web.

Visual Style: Use the Brew & Bite design system. Minimal, text-and-icon-led layout — no heavy imagery needed here.

UI Components:
- LocationInfoBlock (address, map placeholder)
- HoursBlock (daily 7 AM–9 PM)
- ContactInfoBlock
```

---

## Coverage Summary
- **8 screens covered**, matching PRD Sec. 15 exactly (no screens added or dropped).
- **7 MVP screens**, **1 Should-have** (Our Story — client prefers included at launch, per PRD Sec. 30).
- **Open items flagged, not decided**, across prompts: final brand palette/typography (Design System), dietary tag taxonomy, empty-state behavior, sold-out-in-cart handling, checkout validation copy, order hand-off mechanism (does not affect screen design), admin auth method, formal accessibility standard, and Our Story content itself.

---

## 9. Order Confirmation (new — added after PD-01 decision) — MVP

```
Context: The screen a guest customer sees immediately after submitting their order. The order hand-off channel is WhatsApp (PD-01 decision), using a `wa.me` link with a prefilled message — meaning the order is NOT fully received by Brew & Bite until the customer actually presses Send inside WhatsApp. This screen must make that one extra step unmistakably clear, or orders will get lost silently.

Description: Show a success state (checkmark or similar) with "Order ready to send" (not "Order placed" — it isn't placed yet). Display a compact order summary: items with their customizations (e.g. "Flat White — Oat milk, extra shot"), fulfillment method and details (table number or delivery address), note if any, and subtotal. The dominant call-to-action is a large, clearly WhatsApp-branded button — "Send Order on WhatsApp" — that reopens WhatsApp with the prefilled message if the customer didn't press Send the first time, or navigated back to the site. Add a short reassurance line under the summary, e.g. "We'll start preparing your order as soon as we receive it on WhatsApp." Below the main action, include a secondary "Back to Menu" link that clears the cart. [OPEN — confirm with client: exact wording/tone for the reassurance line — placeholder copy only, do not invent brand voice beyond what's already established.]

Platform: Mobile-first responsive web — this screen is reached right after checkout, which is already mobile-first.

Visual Style: Use the Brew & Bite design system (DESIGN.md tokens: primary #2C1810 roasted espresso, secondary #C86432 terracotta accent for the WhatsApp CTA emphasis — do NOT use WhatsApp's own green branding colors, keep it inside the Brew & Bite palette so it doesn't look like a generic third-party widget). Rounded-xl card for the order summary, generous whitespace, success icon in the tertiary sage tone.

UI Components:
- OrderSuccessIcon + Heading ("Order ready to send")
- OrderSummaryCard (items + customizations, fulfillment details, note, subtotal)
- ReassuranceText (placeholder copy)
- SendOnWhatsAppButton (primary, large, clearly the main action — include a WhatsApp icon glyph but keep the button's fill/text colors from the Brew & Bite palette, not WhatsApp green)
- BackToMenuLink (secondary, clears cart)
- [Edge case to design for] FailureState: if the order fails to build (rare), show an inline error with a "Try Again" action instead of the success view
```

## Coverage Update
- **9 screens now specified** (was 8) — Order Confirmation added after the PD-01 (WhatsApp) decision.
- Still open: whether the three Home variants (landing_1, landing_2, brew_bite_artisanal_ordering_platform) should be narrowed to one before build.
