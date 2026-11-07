# Product Requirements Document — Brew & Bite Ordering Website

## 1. BRD Analysis Summary
**Context:** Brew & Bite, an artisanal coffee shop/bakery, needs a website to replace error-prone manual (phone/in-person) ordering with self-service digital ordering (pickup or delivery) plus owner-managed menu content.

**Objectives (from BRD):** Reduce order errors (BR-01), reduce customer wait/friction (BR-02), preserve brand identity (BR-03), enable owner self-sufficiency (BR-04).

**Users:** Regulars, students, office workers (all guest customers, mobile-first); Owner (Karim) as sole confirmed admin.

**Scope:** In — menu discovery, customization, cart, guest checkout (pickup/delivery), owner admin. Out — accounts, online payment, multi-role staff, marketing integrations.

**Business Rules:** Order data must be accurate (BRULE-01); pickup requires table number, delivery requires name/phone/address (BRULE-02); no online payment (BRULE-03); delivery fee/minimum/cutoff undecided (BRULE-04, TBD); cancellation/refund undecided (BRULE-05, TBD).

**NFRs:** ~2s mobile load target, daily 7 AM–9 PM availability, mobile-first, no stored payment data, high-contrast/alt-text accessibility (standard undefined).

**Integrations:** Order hand-off channel resolved — WhatsApp via `wa.me` prefilled-message link (PD-01 decision, see Sec. 37). Business WhatsApp number still open (OQ-01a).

**Constraints:** No hosting/domain yet, no defined budget/timeline, effectively single admin user.

**MVP:** Menu discovery, customization, cart, checkout, order hand-off, admin management are all Must-have. Our Story page is Should-have.

**Ambiguities/Gaps carried from BRD:** checkout business rules (OQ-02), cancellation process (OQ-03), bilingual need (OQ-04), accessibility standard (OQ-05), hosting/domain (OQ-06), budget/timeline (OQ-07), future staff roles (OQ-08), SEO/analytics (OQ-09), growth expectations (OQ-10), business WhatsApp number (OQ-01a). Order hand-off mechanism (OQ-01) is resolved — WhatsApp. No contradictions found in the BRD.

---

## 2. Product Overview
- **Name:** Brew & Bite Ordering Website
- **Type:** Public ordering website + owner admin area (web application)
- **Description:** A mobile-first website letting guest customers browse, customize, and order coffee/bakery items for pickup or delivery, with a self-service admin area for the owner.
- **BRD Reference:** brd.md, v1.0, 2026-09-24
- **Version:** 1.0 (Draft)
- **Status:** Draft — Pending Client Review
- **Date:** 2026-09-24
- **Owner:** Simulated Product Team (auto-discovery-simulator)

---

## 3. Product Vision
For Brew & Bite's customers — regulars, students, and office workers who mostly order from their phones — this product replaces error-prone manual ordering with a fast, accurate, self-service ordering experience that still feels like the artisanal brand they know. For the owner, it replaces manual menu communication with direct self-service control.

---

## 4. Problem Statement
- **Current Situation:** Orders taken manually by phone/in-person; no structured digital ordering.
- **Problem:** Mistakes occur (e.g., missed milk preference, wrong table), and customers wait to learn what's available or dietary-suitable.
- **Impact:** Customer frustration, potential repeat-customer loss (BRD Sec. 4).
- **Product Opportunity:** A guided digital ordering flow (menu discovery → customization → cart → checkout) plus owner self-service menu management directly addresses the stated problem.

---

## 5. Product Goals
| ID | Product Goal | Business Goal Supported | Success Indicator | Source |
|---|---|---|---|---|
| PG-01 | Enable accurate self-service ordering | BR-01, BR-02 | TBD: KPI not defined in BRD | BRD Sec. 5 |
| PG-02 | Preserve brand feel throughout the experience | BR-03 | Qualitative — owner sign-off | BRD Sec. 5 |
| PG-03 | Give the owner full self-service control of the catalog | BR-04 | "Add specials in a couple minutes without help" | BRD Sec. 5 |

---

## 6. Users & Personas
| User Type | Role | Goals | Needs | Tasks | Pain Points | Permissions | Context/Device |
|---|---|---|---|---|---|---|---|
| Regular Customer | Guest | Fast, accurate reorder | Clear menu, saved-free but quick flow | Browse, customize, order | Order mix-ups, wait to see menu | Guest (no account) | Mobile, in-store/commute |
| Student | Guest | Dietary-aware quick ordering | Dietary filters | Filter, browse, order | Not knowing dietary fit | Guest | Mobile |
| Office Worker | Guest | Reliable delivery ordering | Clear delivery form | Order for delivery | Same as above | Guest | Mobile/desk |
| Owner (Karim) | Admin | Full catalog control without developer help | Simple, fast admin tools | Add/edit/remove items, toggle availability, update specials/prices | Manual updates today | Full admin | Any device (unspecified) |

No further demographic detail was confirmed in the BRD; do not invent age ranges or other specifics.

---

## 7. Jobs To Be Done
- JTBD-01: "When I'm ordering coffee on my way to work, I want to quickly find something that fits my diet and customize it, so I can order without calling ahead." (BRD Sec. 8, Target Users)
- JTBD-02: "When I'm sitting at a table, I want to order without waiting for staff, so I get my order right the first time." (BRD Sec. 4)
- JTBD-03: "When I need to update today's specials, I want to do it myself in minutes, so I don't depend on a developer." (BRD Sec. 20, Acceptance)

---

## 8. Scope
- **In:** Menu discovery (browse/search/filter), item customization, cart, guest checkout (pickup/delivery), owner admin (items/prices/availability/specials), Our Story & Contact pages.
- **Out:** Customer accounts, online payment, multi-role staff permissions, marketing integrations, loyalty/promo, multi-language switching.
- **TBD:** Order hand-off mechanism, delivery fee/minimum/cutoff rules, cancellation process, bilingual support, accessibility standard, SEO/analytics.
- **Future:** Possible staff-level admin role (mentioned as a maybe by client, not confirmed).

---

## 9. Product Modules
```
Public Site
├── Home
├── Menu (Browse, Search, Filter)
├── Item Detail / Customization
├── Cart
├── Checkout (Guest: Pickup / Delivery)
├── Our Story / About Us
└── Contact / Location / Hours

Admin
└── Menu Management (Items, Availability, Specials, Pricing)
```

---

## 10. Feature Inventory
| Feature ID | Feature | Module | User | Purpose | Business Requirement | Priority | Phase |
|---|---|---|---|---|---|---|---|
| FEAT-01 | Menu Discovery | Public — Menu | Customer | Browse/search/filter items | BR-02 | Must | MVP |
| FEAT-02 | Item Customization | Public — Item Detail | Customer | Configure drinks/food accurately | BR-01 | Must | MVP |
| FEAT-03 | Cart Management | Public — Cart | Customer | Review/adjust order | BR-01, BR-02 | Must | MVP |
| FEAT-04 | Guest Checkout | Public — Checkout | Customer | Submit pickup/delivery order without account | BR-02 | Must | MVP |
| FEAT-05 | Order Hand-off | System → Owner/Team | Owner/Team | Deliver accurate order to business | BR-01 | Must (mechanism TBD) | MVP |
| FEAT-06 | Menu & Availability Admin | Admin | Owner | Self-service catalog control | BR-04 | Must | MVP |
| FEAT-07 | Brand Storytelling | Public — Our Story | Customer | Communicate brand story | BR-03 | Should | MVP (client prefers included) |
| FEAT-08 | Order Confirmation (WhatsApp hand-off UX) | Public — Checkout (post-submit) | Customer | Make the "press Send in WhatsApp" step unmistakable, reducing lost orders | BR-01 | Must | MVP (added after PD-01 decision) |

---

## 11. Detailed Feature Specifications

### FEAT-01: Menu Discovery
- **Objective:** Let customers find items quickly by category, search, or filter.
- **User:** Customer (guest)
- **Business Value:** Reduces wait/confusion; surfaces dietary-fit items (BR-02)
- **User Need:** "Not knowing if something's dairy-free or gluten-free without asking" (BRD Sec. 8)
- **Description:** Menu page grouped into categories (Signature Brews, Artisan Bakery, Brunch & Bowls, Cold Beverages, Sweet Treats), with search (name/ingredient) and filters (dietary tag, service type).
- **Preconditions:** None (public page).
- **Trigger:** Customer visits Menu page.
- **Main Flow:** View categories → search/filter (optional) → view item.
- **Alternative Flows:** No filter/search applied — full menu shown.
- **Error/Exception Cases:** No results match search/filter — `TBD: Requires Confirmation` (empty-state behavior not specified by client).
- **Business Rules:** None beyond display of accurate availability (BRULE-01 applies indirectly).
- **Dependencies:** Menu Management Admin (FEAT-06) for item data.
- **Data Involved:** Menu Item, Category (BRD Sec. 20).
- **Notifications:** None.
- **Permissions:** Public/guest.
- **States:** Available / Sold Out (per item).
- **Acceptance Criteria:** See AC-01.
- **Analytics Events:** `TBD: Not Provided`.
- **Open Questions:** Empty search/filter result behavior (new).

### FEAT-02: Item Customization
- **Objective:** Let customers accurately configure drinks/food before ordering.
- **User:** Customer
- **Business Value:** Prevents the recurring real-world error cited by client (missed milk choice) (BR-01)
- **User Need:** Accurate order matching preference.
- **Description:** For drinks — milk type (whole/oat/almond), extra shot, roast type (light/medium/dark) where applicable. For food — heating option ("warm upon request").
- **Preconditions:** Item selected from menu.
- **Trigger:** Customer opens item detail/customization.
- **Main Flow:** Select options → add to cart.
- **Alternative Flows:** Item has no customization options (e.g., simple bakery item) — add directly to cart.
- **Error/Exception Cases:** Required customization not selected — `TBD: Requires Confirmation` (whether any option is mandatory vs. optional was not specified).
- **Business Rules:** BRULE-01 (accuracy).
- **Dependencies:** FEAT-01 (item must be discoverable first).
- **Data Involved:** Customization Option, Menu Item (BRD Sec. 20).
- **Notifications:** None.
- **Permissions:** Public/guest.
- **States:** Configured / Added to Cart.
- **Acceptance Criteria:** See AC-02.
- **Analytics Events:** `TBD: Not Provided`.
- **Open Questions:** Are any customization fields mandatory? (new, TBD)

### FEAT-03: Cart Management
- **Objective:** Let customers review and adjust their order before checkout.
- **User:** Customer
- **Business Value:** Transparency and accuracy (BR-01, BR-02)
- **Description:** Persistent/sticky summary bar showing item count, order type/table, and subtotal (e.g., "3 items in order • Table #08 • 385 EGP"); full cart view to add/remove/adjust quantity.
- **Preconditions:** At least one item added.
- **Trigger:** Item added/changed, or cart opened.
- **Main Flow:** View cart → adjust quantity/remove → proceed to checkout.
- **Alternative Flows:** Cart is empty — checkout unavailable (`TBD` exact empty-cart messaging).
- **Error/Exception Cases:** Item becomes unavailable while in cart — `TBD: Requires Confirmation`.
- **Business Rules:** None beyond subtotal accuracy.
- **Dependencies:** FEAT-01, FEAT-02.
- **Data Involved:** Order (draft state).
- **Permissions:** Public/guest.
- **States:** Empty / Has Items.
- **Acceptance Criteria:** See AC-03.
- **Open Questions:** Sold-out-while-in-cart handling (new, TBD).

### FEAT-04: Guest Checkout (Pickup/Delivery)
- **Objective:** Capture fulfillment details and submit the order without requiring an account.
- **User:** Customer
- **Business Value:** Removes account-creation friction (explicit client requirement, BRD Sec. 6)
- **Description:** Customer chooses Table Pickup (table number required) or Instant Delivery (name, phone, delivery address required); optional note field; review step; submit.
- **Preconditions:** Cart has at least one item.
- **Trigger:** Customer proceeds to checkout from cart.
- **Main Flow:** Select fulfillment method → fill required fields → optional note → review → submit.
- **Alternative Flows:** Customer switches fulfillment method before submitting — required fields update accordingly.
- **Error/Exception Cases:** Missing required field — form validation error (see Sec. 21, Forms & Validation).
- **Business Rules:** BRULE-02 (required fields per method), BRULE-03 (no payment capture).
- **Dependencies:** FEAT-03 (cart), FEAT-05 (hand-off).
- **Data Involved:** Order, Delivery Detail (BRD Sec. 20) — contains personal data (name, phone, address); flagged in BRD Sec. 19/26 for legal review.
- **Permissions:** Public/guest.
- **States:** In Progress / Submitted.
- **Acceptance Criteria:** See AC-04, AC-05.
- **Open Questions:** Delivery fee/minimum order/cutoff time (OQ-02, carried from BRD).

### FEAT-05: Order Hand-off
- **Objective:** Deliver the submitted order, complete and accurate, to the owner/team.
- **User:** Owner/Team (recipient); triggered by Customer.
- **Business Value:** Directly addresses the stated core problem (BR-01).
- **Description:** **Decision made (PD-01): WhatsApp.** A `wa.me` link opens WhatsApp with a prefilled message containing the full order (items, customizations, fulfillment details, note, subtotal), addressed to the business's WhatsApp number. The customer must press Send inside WhatsApp — the order is not received until they do.
- **Preconditions:** Order submitted successfully from Checkout.
- **Trigger:** Checkout submission (FEAT-04).
- **Main Flow:** Checkout submitted → order message built → WhatsApp opens with the prefilled message → customer presses Send → confirmation screen shown either way (Sec. 11, FEAT-Confirmation).
- **Error/Exception Cases:** WhatsApp fails to open (not installed/blocked) — confirmation screen shows the order summary with a copy option as fallback (`TBD` exact fallback UX). Customer navigates away without pressing Send — mitigated by the confirmation screen's "Send on WhatsApp" resend action, not fully eliminated.
- **Business Rules:** BRULE-01 (accuracy).
- **Dependencies:** FEAT-04; business's WhatsApp number (OQ-01a, open); FEAT-Confirmation (new, see Sec. 11).
- **Data Involved:** Order (full details).
- **Acceptance Criteria:** See AC-06.
- **Open Questions:** OQ-01a — business WhatsApp number, and whether to later upgrade to the WhatsApp Business API for automatic (non-manual) delivery.

### FEAT-06: Menu & Availability Admin
- **Objective:** Let the owner manage the catalog without developer involvement.
- **User:** Owner (Karim)
- **Business Value:** Owner self-sufficiency (BR-04)
- **Description:** Add/edit/remove menu items; toggle "Sold Out" availability; update daily specials; update prices/descriptions.
- **Preconditions:** Owner authenticated into admin area (authentication mechanism not specified by client — `TBD`).
- **Trigger:** Owner performs an admin action.
- **Main Flow:** Owner logs in → selects item or "add new" → edits fields → saves → public menu updates.
- **Alternative Flows:** Toggle availability directly from item list (quick action).
- **Error/Exception Cases:** Invalid input (e.g., missing required field) — `TBD: Requires Confirmation` on exact validation rules.
- **Business Rules:** None beyond data accuracy.
- **Dependencies:** None (source of truth for FEAT-01).
- **Data Involved:** Menu Item, Category.
- **Permissions:** Owner/Admin only.
- **States:** Draft (unsaved) / Published.
- **Acceptance Criteria:** See AC-07.
- **Open Questions:** Admin authentication method not specified (new, TBD).

### FEAT-08: Order Confirmation (WhatsApp hand-off UX)
- **Objective:** Make it unmistakable that the customer must press Send in WhatsApp for the order to reach the business, and give them an easy way to do it (or redo it).
- **User:** Customer
- **Business Value:** Directly mitigates RISK-01 (orders lost because the customer didn't send the WhatsApp message) — BR-01.
- **Description:** Added after the PD-01 (WhatsApp) decision. Success state showing "Order ready to send" (not "Order placed"), a compact order summary (items/customizations/fulfillment/note/subtotal), a prominent "Send Order on WhatsApp" button (styled in the Brew & Bite palette, not WhatsApp's own green), and a "Back to Menu" link that clears the cart.
- **Preconditions:** Checkout submitted successfully (FEAT-04) and the WhatsApp message built (FEAT-05).
- **Trigger:** Checkout submission.
- **Main Flow:** Order submitted → WhatsApp opens with prefilled message → customer returns to site (whether or not they pressed Send) → confirmation screen shown with resend option.
- **Error/Exception Cases:** Order message fails to build — inline error with "Try Again," cart preserved.
- **Business Rules:** BRULE-01 (accuracy).
- **Dependencies:** FEAT-04, FEAT-05.
- **Data Involved:** Order (full details, read-only on this screen).
- **Permissions:** Public/guest.
- **States:** Success / Failure.
- **Acceptance Criteria:** See AC-08.
- **Design:** Stitch prompt added (stitch-design-prompts.md, Sec. 9).

### FEAT-07: Brand Storytelling (Our Story Page)
- **Objective:** Communicate the sourcing/baking story to reinforce brand identity.
- **User:** Customer
- **Business Value:** BR-03 (preserve brand feel)
- **Description:** Static content page describing coffee sourcing and baking principles.
- **Preconditions:** None.
- **Trigger:** Customer navigates to "Our Story."
- **Main Flow:** View content.
- **Dependencies:** Content supplied by Karim/head baker (BRD Sec. 22).
- **Acceptance Criteria:** `TBD` — no specific pass/fail criteria beyond page existing and being populated with client-supplied content.

---

## 12. User Stories
| ID | Story | Related Feature | BRD Requirement | Acceptance Criteria | Priority |
|---|---|---|---|---|---|
| US-01 | As a customer, I want to browse the menu by category, so I can quickly find what I'm looking for. | FEAT-01 | FR-01 | AC-01 | Must |
| US-02 | As a customer, I want to search or filter by dietary need and service type, so I don't have to ask staff. | FEAT-01 | FR-02, FR-03, FR-04 | AC-01 | Must |
| US-03 | As a customer, I want to customize my drink (milk, shot, roast), so my order matches my preference. | FEAT-02 | FR-06 | AC-02 | Must |
| US-04 | As a customer, I want to request my food warmed, so I get it the way I like. | FEAT-02 | FR-07 | AC-02 | Must |
| US-05 | As a customer, I want to see a running summary of my order (count, table/type, subtotal), so I always know my order status. | FEAT-03 | FR-08 | AC-03 | Must |
| US-06 | As a customer, I want to edit my cart before checkout, so I can fix mistakes. | FEAT-03 | FR-09 | AC-03 | Must |
| US-07 | As a customer, I want to choose Table Pickup or Instant Delivery and provide the right details, so my order reaches me correctly. | FEAT-04 | FR-10 | AC-04 | Must |
| US-08 | As a customer, I want to add a note for special requests, so my order fits my needs. | FEAT-04 | FR-11 | AC-04 | Should |
| US-09 | As a customer, I want to review my order before submitting, so I can catch mistakes. | FEAT-04 | FR-12 | AC-05 | Must |
| US-10 | As a customer, I want to check out without creating an account, so ordering is fast. | FEAT-04 | FR-13 | AC-05 | Must |
| US-11 | As the owner, I want the order details delivered to me completely and accurately, so my team can prepare it correctly. | FEAT-05 | FR-14 | AC-06 | Must |
| US-12 | As the owner, I want to add, edit, or remove menu items myself, so I don't depend on a developer. | FEAT-06 | FR-15 | AC-07 | Must |
| US-13 | As the owner, I want to mark items sold out, so customers don't order unavailable items. | FEAT-06 | FR-16 | AC-07 | Must |
| US-14 | As the owner, I want to update daily specials, so the menu stays current. | FEAT-06 | FR-17 | AC-07 | Must |
| US-15 | As the owner, I want to update prices and descriptions, so information stays accurate. | FEAT-06 | FR-18 | AC-07 | Must |
| US-16 | As a customer, I want to read about the shop's story, so I feel connected to the brand. | FEAT-07 | Sec. 22 (BRD) | `TBD` | Should |
| US-17 | As a customer, I want a clear confirmation after submitting, telling me to send my order on WhatsApp, so my order doesn't get lost if I forget that step. | FEAT-08 | FR-14a | AC-08 | Must |

**Note on numbering:** This table lists the 17 product-facing user stories derived directly from BRD functional requirements. The product backlog (product-backlog.xlsx) additionally tracks 11 engineering/foundation stories (US-18–US-28: shared layout, data model/API, Home page, Contact page, admin login, menu item display detail, hosting/deployment) that support these features but aren't independently BRD-traced product requirements — they exist only in the Backlog, not duplicated here, to keep this PRD focused on product behavior rather than implementation tasks.

---

## 13. Acceptance Criteria
(Consolidated from BRD Sec. 35, mapped to user stories.)

| AC ID | Given/When/Then | Related Stories |
|---|---|---|
| AC-01 | Given a customer is on the Menu page, when they search or apply a dietary/service filter, then only matching available items are displayed. | US-01, US-02 |
| AC-02 | Given a customer selects a drink or food item, when they choose customization options, then those options are attached to the cart line item. | US-03, US-04 |
| AC-03 | Given items are in the cart, when the customer adds, removes, or adjusts quantity, then the summary bar updates immediately. | US-05, US-06 |
| AC-04 | Given a customer proceeds to checkout, when they select Table Pickup, then a table number is required; when they select Instant Delivery, then name, phone, and address are required. | US-07, US-08 |
| AC-05 | Given a completed checkout form, when the customer reviews and submits, then the order is placed without account creation. | US-09, US-10 |
| AC-06 | Given an order is submitted, when it is transmitted, then WhatsApp opens with a complete, accurate prefilled order message, and the confirmation screen prompts the customer to send it. | US-11 |
| AC-08 | Given the order message is built, when the customer reaches the confirmation screen, then they see an order summary and a "Send on WhatsApp" action they can repeat if they didn't send it the first time. | US-17 (new) |
| AC-07 | Given the owner is in the admin area, when they add/edit/remove an item, toggle availability, or update a special/price, then the public menu reflects the change. | US-12, US-13, US-14, US-15 |

Coverage note: Validation, permission, and error-path acceptance criteria beyond the above are `TBD: Requires Confirmation` where the BRD did not specify exact behavior (e.g., empty search results, sold-out-in-cart handling, hand-off failure).

---

## 14. User Flows

**Flow: Order Placement (Main)**
1. Entry: Home or Menu page
2. Action: Browse/search/filter → select item
3. System Response: Item detail with customization shown
4. Action: Configure options → Add to Cart
5. System Response: Cart summary updates
6. Decision: Continue shopping or Checkout
7. Action: Checkout → choose Pickup/Delivery → fill required fields → optional note
8. System Response: Review screen shown
9. Action: Submit
10. System Response: Order confirmed; details sent to owner/team (channel TBD)
11. Completion: Success state shown to customer

**Flow: Cart Edit (Alternative)**
1. Entry: Cart or summary bar
2. Action: Adjust quantity / remove item
3. System Response: Subtotal and summary recalculate
4. Exit: Return to Menu or proceed to Checkout

**Flow: Menu Admin Update (Main)**
1. Entry: Admin login (`TBD` mechanism)
2. Action: Select item / add new
3. Action: Edit fields (price, description, availability) → Save
4. System Response: Public menu updates
5. Completion: Confirmation shown to owner

**Flow: Checkout Failure (Exception — TBD)**
Not specified by client. `TBD: Requires Confirmation` — e.g., what happens if a required field is missing, or if order hand-off (e.g., WhatsApp) fails to send.

---

## 15. Screen/Page Requirements
| Screen ID | Screen | User | Purpose | Entry Point | Main Actions | Data Displayed | States |
|---|---|---|---|---|---|---|---|
| SCR-01 | Home | Customer | Landing/brand intro | Direct URL | Navigate to Menu/Story | Highlights | Default |
| SCR-02 | Menu | Customer | Browse/search/filter | Nav from Home | Search, filter, select item | Categories, items, badges, availability | Default, Empty (TBD), Loading (TBD) |
| SCR-03 | Item Detail/Customization | Customer | Configure item | From Menu | Select options, add to cart | Description, price, origin/roast notes, options | Default |
| SCR-04 | Cart | Customer | Review/edit order | Summary bar / nav | Edit qty, remove, checkout | Items, subtotal | Empty, Has Items |
| SCR-05 | Checkout | Customer | Capture fulfillment & submit | From Cart | Fill form, review, submit | Fulfillment fields, note, order summary | Default, Validation Error, Success |
| SCR-06 | Our Story | Customer | Brand storytelling | Nav | Read | Story content | Default |
| SCR-07 | Contact/Location/Hours | Customer | Practical info | Nav | View | Address, hours | Default |
| SCR-08 | Admin — Menu Management | Owner | Manage catalog | Admin login (TBD) | Add/edit/remove, toggle availability, edit specials/prices | Item list, forms | Default, Editing, Saved |
| SCR-09 | Order Confirmation | Customer | Confirm WhatsApp hand-off | From Checkout (post-submit) | Send on WhatsApp, Back to Menu | Order summary | Success, Failure |

Loading/disabled/permission states beyond those noted are `TBD` — not specified in the BRD.

---

## 16. UI Behavior
| Trigger | User Action | System Response | State Change | Feedback | Validation |
|---|---|---|---|---|---|
| Add item to cart | Customer selects options, clicks Add | Item appended to cart; summary bar updates | Cart: Empty → Has Items | Visual confirmation (TBD exact style) | None required beyond selecting applicable options (mandatory-option rule TBD) |
| Change fulfillment method | Customer toggles Pickup/Delivery | Required fields on form change accordingly | Checkout form fields swap | Field set updates | Required fields enforced per BRULE-02 |
| Submit checkout | Customer clicks Submit after review | Order created; hand-off triggered (channel TBD) | Order: In Progress → Submitted | Confirmation screen | All required fields validated present |
| Toggle item availability (admin) | Owner clicks "Sold Out" toggle | Item marked unavailable on public Menu | Item: Available → Sold Out | Immediate UI update | None |

---

## 17. Product States
**Order Lifecycle:**
- Draft (in cart) → who triggers: Customer (adds/edits items)
- Submitted → who triggers: Customer (checkout submission)
- Received by Business → who triggers: system hand-off (channel TBD)
- Beyond "Received," no further states (e.g., "Preparing," "Ready," "Completed," "Cancelled") were confirmed by the client — `TBD: Requires Confirmation`.

**Menu Item Lifecycle:**
- Draft (being added/edited by owner) → Published (visible to customers) → Sold Out (hidden/marked unavailable) → back to Published when restocked.
- Removed (deleted by owner) — end state.

---

## 18. Business Rules
(Product-level restatement of BRD Sec. 19.)
| Rule ID | Rule | Applies To | Condition | Product Behavior | Source |
|---|---|---|---|---|---|
| BRULE-01 | Order details must be accurate and complete. | All orders | Order submitted | System must transmit exact customer-entered data | BRD BRULE-01 |
| BRULE-02 | Required fields differ by fulfillment method. | Checkout | Method = Pickup or Delivery | Enforce table number (Pickup) or name/phone/address (Delivery) | BRD BRULE-02 |
| BRULE-03 | No payment data is captured or stored. | Checkout | N/A | No payment form/field exists in the product | BRD BRULE-03 |
| BRULE-04 | Delivery fee / minimum order / cutoff time. | Checkout, Pricing | N/A | `TBD: Requires Client Confirmation` | BRD BRULE-04 |
| BRULE-05 | Cancellation/refund conditions. | Post-order | N/A | `TBD: Requires Client Confirmation` | BRD BRULE-05 |

---

## 19. Roles & Permissions
| Role | Module | View | Create | Edit | Delete | Approve | Other |
|---|---|---|---|---|---|---|---|
| Customer (Guest) | Menu, Cart, Checkout | Yes (public) | Own order | Own cart | Own cart item | — | — |
| Owner (Karim) | Admin — Menu Management | Yes (all) | Menu items, specials | Menu items, prices, descriptions | Menu items | — | Toggle availability |
| Staff (future) | — | `TBD` | `TBD` | `TBD` | `TBD` | `TBD` | Not confirmed by client (BRD OQ-08) |

---

## 20. Search / Filter / Sorting
- **Search:** By item name or ingredient (BRD FR-02). Behavior on no matches: `TBD`.
- **Filters:** Dietary tag (e.g., dairy-free, gluten-free — exact tag list beyond examples given is `TBD`), Service type (Pickup/Delivery).
- **Sorting:** Not requested by client — `TBD: Not Provided`.
- **Pagination:** Not discussed — `TBD: Not Provided` (menu size suggests it may not be needed, but this is an assumption, not a confirmed decision).
- **Reset:** Not discussed — `TBD`.

---

## 21. Forms & Validation
| Field | Type | Required | Validation | Error Condition | Source |
|---|---|---|---|---|---|
| Table Number | Text/Number | Required if Pickup | `TBD` exact format | Missing value | BRD FR-10 |
| Customer Name | Text | Required if Delivery | `TBD` exact rules | Missing value | BRD FR-10 |
| Phone Number | Text/Number | Required if Delivery | `TBD` exact format (e.g. Egyptian mobile format) | Missing/invalid format | BRD FR-10 |
| Delivery Address | Text | Required if Delivery | `TBD` | Missing value | BRD FR-10 |
| Order Note | Text (multi-line) | Optional | None specified | N/A | BRD FR-11 |

Submit behavior: on valid submission, order is created and review/confirmation shown (Sec. 14). On invalid submission: `TBD` exact error messaging/behavior not specified by client. Edit/cancel behavior pre-submission: customer can freely edit cart and form fields before submitting.

---

## 22. Notifications
| ID | Trigger | Recipient | Channel | Content/Purpose | Timing | Source |
|---|---|---|---|---|---|---|
| NOTIF-01 | Order submitted | Owner/Team | WhatsApp, via `wa.me` prefilled message the customer sends | Full order details | Immediate (manual — depends on customer pressing Send) | BRD FR-14, Sec. 21; Decision: WhatsApp |

No customer-facing notifications (e.g., order status updates) were requested by the client — `TBD: Not Provided`.

---

## 23. Integrations
| Integration | Purpose | User-Facing Impact | Trigger | Data Exchanged | Expected Result | Failure Behavior | Dependency | Source |
|---|---|---|---|---|---|---|---|---|
| Order Hand-off Channel | Deliver order to business via WhatsApp | Customer sees a WhatsApp send prompt as the final checkout step | Checkout submission | Full order details | WhatsApp opens with prefilled message; business receives it once sent | WhatsApp not installed/blocked — fallback TBD | Business's WhatsApp number (OQ-01a) | BRD Sec. 21; Decision: WhatsApp |

No other integrations (payment, CRM, email, maps) are in scope — explicitly declined by client (BRD Sec. 21).

---

## 24. Data Requirements
(Product-level restatement of BRD Sec. 20 — no schema.)
| Entity | Purpose | Created/Viewed/Edited/Deleted By | Main Info | Status | Relationships |
|---|---|---|---|---|---|
| Menu Item | Sellable product | Owner (CRUD); Customer (view) | Name, price, description, category, dietary tags, badges, availability, origin/roast notes | Draft/Published/Sold Out | Belongs to Category |
| Category | Groups items | Owner | Name | Active | Has many Menu Items |
| Customization Option | Item modifier | Owner (defines); Customer (selects) | Option name/type | Active | Belongs to Menu Item |
| Order | Placed order | Customer (create); Owner/Team (view) | Items, customizations, fulfillment info, note, subtotal | Draft/Submitted/Received | Contains Menu Items |
| Delivery Detail | Delivery info | Customer (create) | Name, phone, address | N/A | Part of Order |

---

## 25. Non-Functional Product Requirements
(From BRD Sec. 28, restated at product level.)
| ID | Category | Requirement | Target | Status |
|---|---|---|---|---|
| NFR-01 | Performance | Fast mobile load | ~2 seconds (client-stated) | Confirmed |
| NFR-02 | Availability | Site available during business hours | Daily 7 AM–9 PM; numeric uptime % TBD | Confirmed (qualitative) |
| NFR-03 | Compatibility | Mobile-first responsive | Mobile primary; desktop/tablet detail TBD | Confirmed (mobile) |
| NFR-04 | Security | No stored payment data | Architectural constraint | Confirmed |
| NFR-05 | Accessibility | High-contrast text, alt text for images | Standard/level TBD | Confirmed (qualitative) |
| NFR-06 | Scalability | Order volume growth | Not discussed | TBD |
| NFR-07 | Reliability | Backup/recovery | Not discussed | TBD |

---

## 26. Edge Cases
**Confirmed Edge Cases:**
- None explicitly confirmed by the client beyond the data-accuracy requirement (BRULE-01) implying errors must not silently occur.

**Potential Edge Cases Requiring Product Decision:**
- Empty search/filter results on Menu.
- Item becomes sold out while sitting in a customer's cart.
- Required checkout field left blank.
- Order hand-off (e.g., WhatsApp) fails to deliver.
- Duplicate/rapid double-submission of the same order.
- Customer wants to cancel or edit after submission.

---

## 27. Analytics & Product Events
`TBD: Not Provided` — no analytics or event tracking was discussed with the client. Recommended events (add/select if client confirms later): cart_item_added, checkout_started, order_submitted, order_handoff_sent, admin_item_updated. **Not to be built until confirmed** — listed here only as a placeholder for future discussion, not as a requirement.

---

## 28. SEO Requirements
`TBD: Not Provided` — not discussed in the client interview.

---

## 29. Accessibility Requirements
- Confirmed (qualitative): high-contrast, readable text (especially prices); descriptive/alt text for food images.
- No WCAG level or formal standard was requested; `TBD: Requires Client Confirmation` (client deferred to the delivery team, per BRD Sec. 25).

---

## 30. MVP
| Feature | MVP Status | BRD Requirement | Reason | Source |
|---|---|---|---|---|
| Menu Discovery (FEAT-01) | MVP | FR-01–FR-05 | Client: core ordering must be in first version | BRD Sec. 33 |
| Item Customization (FEAT-02) | MVP | FR-06, FR-07 | Same | BRD Sec. 33 |
| Cart Management (FEAT-03) | MVP | FR-08, FR-09 | Same | BRD Sec. 33 |
| Guest Checkout (FEAT-04) | MVP | FR-10–FR-13 | Same | BRD Sec. 33 |
| Order Hand-off (FEAT-05) | MVP (mechanism TBD) | FR-14 | Same | BRD Sec. 33 |
| Menu & Availability Admin (FEAT-06) | MVP | FR-15–FR-18 | Client: explicitly must-have | BRD Sec. 33 |
| Brand Storytelling (FEAT-07) | Should — client prefers included, can slightly follow | Sec. 22 (BRD) | Client statement | BRD Sec. 33 |
| Order Confirmation (FEAT-08) | MVP | FR-14a | Added after PD-01 decision — directly mitigates RISK-01 | New (post-decision) |

---

## 31. Prioritization
Priorities are taken directly from the BRD (Sec. 33); no independent prioritization was performed. All FEAT-01 through FEAT-06 are Must; FEAT-07 is Should. Finer-grained Could/Later items were not itemized by the client — `TBD`.

---

## 32. Success Metrics
`TBD: Not Provided`. Business metric (order-error reduction) and product metric (successful self-service checkout completion rate) are both plausible candidates, but no target or baseline was given by the client. Needs client input to define.

---

## 33. Release Plan
- **MVP:** FEAT-01–FEAT-06 (all Must-have items).
- **Phase 2 (or same release, per client preference):** FEAT-07 (Brand Storytelling).
- **Future:** Possible staff-role admin access (OQ-08); no other future-phase items were confirmed.
- No dates are specified — launch timeline is `TBD` (BRD OQ-07).

---

## 34. Dependencies
- Content/photography supply (Karim + head baker).
- Hosting/domain acquisition (none currently owned).
- Business's WhatsApp number, to build the `wa.me` link (OQ-01a). WhatsApp Business API only needed for a future upgrade beyond MVP.

---

## 35. Risks
| Risk ID | Risk | Impact | Related Feature | Mitigation | Status |
|---|---|---|---|---|---|
| RISK-01 | Orders may not reach the business even after checkout completes | `wa.me` requires the customer to press Send as a manual step | FEAT-05, FEAT-08 | FEAT-08 (confirmation screen) prompts/allows resending; consider WhatsApp Business API later | Open — mitigated, not eliminated |
| RISK-02 | Checkout business rules (fee/minimum/cutoff) undecided | Inconsistent checkout behavior | FEAT-04 | Resolve OQ-02 with client | Open |
| RISK-03 | No privacy/legal policy despite collecting personal data | Compliance exposure | FEAT-04 | Engage client's legal advisor | Open |

---

## 36. Open Product Questions
| ID | Question | Why It Matters | Related Requirement | Decision Needed From |
|---|---|---|---|---|
| OPQ-01 | ~~Order hand-off mechanism: WhatsApp/confirmation vs. in-system?~~ | — | FR-14, FEAT-05 | **Resolved: WhatsApp** |
| OPQ-01a | Business's WhatsApp number? Upgrade to WhatsApp Business API later for automatic delivery? | Needed to finish FEAT-05; affects RISK-01 | FR-14, FEAT-05, FEAT-08 | Client |
| OPQ-02 | Delivery fee, minimum order, cutoff times? | Needed to finish checkout business rules | BRULE-04 | Client |
| OPQ-03 | Cancellation/refund process? | Needed for post-submission exception flow | WF-01 | Client |
| OPQ-04 | Empty search/filter-result behavior? | UI completeness for FEAT-01 | FEAT-01 | Product/Design (can propose, client confirms) |
| OPQ-05 | Sold-out-while-in-cart handling? | UI completeness for FEAT-03 | FEAT-03 | Product/Design |
| OPQ-06 | Are any customization options mandatory? | Affects FEAT-02 validation | FEAT-02 | Client |
| OPQ-07 | Admin authentication method? | Needed to build FEAT-06 securely | FEAT-06 | Client / Technical team |
| OPQ-08 | Bilingual (Arabic/English) requirement? | Affects content and UI scope | Sec. 8 | Client |
| OPQ-09 | Accessibility standard/level to target? | Affects design/QA scope | NFR-05 | Client |
| OPQ-10 | Order lifecycle states beyond "Received" (e.g., Preparing/Ready/Cancelled)? | Needed if any order-status visibility is wanted later | Sec. 17 | Client |

---

## 37. Product Decisions
| Decision ID | Decision | Options | Impact | Status |
|---|---|---|---|---|
| PD-01 | Order hand-off mechanism | (a) WhatsApp/confirmation message with pre-filled details; (b) direct in-system order submission/dashboard | Determines FEAT-05 architecture and integration effort | **Decided: (a) WhatsApp**, via `wa.me` prefilled link for MVP |

---

## 38. Requirement Traceability Matrix
| BRD Requirement | Product Goal | Feature | Product Requirement | User Story | User Flow | Acceptance Criteria |
|---|---|---|---|---|---|---|
| FR-01–FR-05 | PG-01 | FEAT-01 | Menu discovery behavior | US-01, US-02 | Order Placement (steps 1–3) | AC-01 |
| FR-06, FR-07 | PG-01 | FEAT-02 | Customization behavior | US-03, US-04 | Order Placement (steps 3–5) | AC-02 |
| FR-08, FR-09 | PG-01 | FEAT-03 | Cart behavior | US-05, US-06 | Cart Edit | AC-03 |
| FR-10–FR-13 | PG-01 | FEAT-04 | Checkout behavior | US-07–US-10 | Order Placement (steps 6–9) | AC-04, AC-05 |
| FR-14 | PG-01 | FEAT-05 | Hand-off behavior | US-11 | Order Placement (step 10) | AC-06 |
| FR-15–FR-18 | PG-03 | FEAT-06 | Admin behavior | US-12–US-15 | Menu Admin Update | AC-07 |
| Sec. 22 (BRD) | PG-02 | FEAT-07 | Brand content | US-16 | — | `TBD` |
| FR-14a | PG-01 | FEAT-08 | Confirmation/resend behavior | US-17 | Order Placement (step 10, extended) | AC-08 |

No BRD functional requirements were found without a corresponding Product Requirement.

---

## 39. Requirement Gap Analysis
| Area | Status |
|---|---|
| Menu Discovery, Customization, Cart, Checkout, Admin (core flows) | Fully Defined |
| Order Hand-off mechanism | Fully Defined — WhatsApp (`wa.me`), including the confirmation/resend UX (FEAT-08). Business WhatsApp number still open (OQ-01a). |
| Checkout business rules (fee/minimum/cutoff) | Missing (OPQ-02) |
| Cancellation/refund | Missing (OPQ-03) |
| Empty states, sold-out-in-cart, form validation detail | Missing (OPQ-04, OPQ-05, Sec. 21) |
| Accessibility standard | Missing (OPQ-09) |
| SEO/Analytics | Missing (not discussed) |
| Conflicting requirements | None found |

---

## 40. Final Product Requirements Summary
**Vision:** Replace manual, error-prone ordering with accurate, mobile-first self-service ordering while preserving Brew & Bite's artisanal brand feel, and give the owner full self-service catalog control.

**Goals:** PG-01 (accurate self-service ordering), PG-02 (brand feel), PG-03 (owner self-sufficiency).

**Users:** Guest customers (regulars, students, office workers) and the Owner (sole confirmed admin).

**Modules:** Public site (Home, Menu, Item Detail, Cart, Checkout, Our Story, Contact) + Admin (Menu Management).

**Features:** 8 features (FEAT-01–FEAT-08, FEAT-08 added after the PD-01 decision), 17 user stories, 8 consolidated acceptance-criteria groups.

**MVP:** FEAT-01 through FEAT-06 and FEAT-08 (all Must); FEAT-07 Should, client prefers included at launch.

**Future:** Possible staff-role admin access; no other future items confirmed.

**Key Workflows/Rules:** Order Placement (WF-01) and Menu Management (WF-02) from the BRD; business rules BRULE-01–BRULE-03 confirmed, BRULE-04/05 TBD.

**Key Requirements:** 20 functional requirements traced from BRD; 7 non-functional requirement categories (2 fully quantified — performance, availability qualitative; others qualitative/TBD).

**Metrics:** No numeric success metrics defined — open with client.

**Dependencies:** Content/photo supply, hosting/domain, possible WhatsApp Business setup.

**Risks:** 3 open risks. RISK-01 (orders lost if the customer doesn't press Send in WhatsApp) is mitigated by FEAT-08 but not eliminated; the other two concern missing checkout business rules and legal/privacy review.

**Open Questions:** 10 (Sec. 36) — OPQ-01 (order hand-off mechanism) is now resolved; OPQ-01a (business WhatsApp number) replaces it as an open item.

**Decisions Made:** PD-01 (order hand-off mechanism) is resolved — WhatsApp via `wa.me`. No other explicit product decisions remain blocking; OPQ-01a (WhatsApp number) is a data input, not an architectural decision.

*This PRD was derived entirely from the BRD (brd.md), which was itself produced from a simulated discovery interview. Both documents should be validated with the real client before development begins. Next recommended step: `product-backlog-generator` using this PRD as input.*
