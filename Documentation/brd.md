# Business Requirements Document — Brew & Bite Ordering Website

## 1. Document Information
| Field | Value |
|---|---|
| Project Name | Brew & Bite Online Ordering Website |
| Document Name | Business Requirements Document (BRD) |
| Version | 1.0 |
| Date | 2026-09-24 |
| Prepared By | Simulated Business Analyst (auto-discovery-simulator) |
| Client | Karim, Owner — Brew & Bite |
| Status | Draft — Pending Client Review (based on simulated discovery interview) |

---

## 2. Executive Summary
Brew & Bite is an artisanal coffee shop and bakery that currently takes orders manually (in person, by phone, via Instagram). Manual order-taking causes recurring mistakes (e.g., missed milk preference, wrong table) during busy periods. The client wants a new website enabling guest customers to browse the menu, filter by dietary needs, customize drinks/food, and place orders for **Table Pickup** or **Instant Delivery**, plus a self-service admin area for the owner to manage the menu, prices, and availability. No customer accounts, no online payment collection. **Update (post-discovery decision):** the order hand-off mechanism is resolved — orders are sent via a `wa.me` WhatsApp link with a prefilled message that the customer sends themselves (see Sec. 21). The exact WhatsApp number and whether to later upgrade to the WhatsApp Business API remain open (see Sec. 37).

---

## 3. Business Background
Brew & Bite sells specialty single-origin coffee, artisan bakery items, cold brews, brunch bowls, and sweet treats. The business differentiates on bean sourcing and same-day fresh baking. Current customer acquisition is walk-in traffic, Instagram/Facebook, and phone orders from regulars. There is no existing website, app, or delivery platform.

---

## 4. Problem Statement
- **Current Problem (Confirmed):** Manual order-taking (in person/phone) leads to errors, e.g. incorrect milk choice or table number, particularly during rush periods.
- **Business Impact (Confirmed):** Customer frustration and risk of repeat-customer loss due to wait times and order mistakes.
- **Need for Solution (Confirmed):** A self-service ordering website to reduce manual errors and wait time, paired with an owner-manageable menu system.

---

## 5. Business Objectives
| ID | Objective | Description | Success Indicator | Status |
|---|---|---|---|---|
| BR-01 | Reduce order errors | Move from manual phone/in-person order-taking to structured digital ordering | TBD: KPI not defined | Confirmed |
| BR-02 | Reduce customer wait/friction | Let customers browse and order independently instead of waiting to ask staff | TBD: KPI not defined | Confirmed |
| BR-03 | Preserve brand identity | Reflect artisanal, story-driven brand rather than a generic ordering app | Qualitative — owner sign-off | Confirmed |
| BR-04 | Owner self-sufficiency | Owner manages menu, pricing, and availability without developer involvement | "Add specials in a couple of minutes without help" (client statement) | Confirmed |

---

## 6. Project Goals
- **Business Goals:** Reduce order errors and wait-driven customer loss (BR-01, BR-02); protect brand feel (BR-03).
- **User Goals:** Quickly see what's available (including dietary fit) and place an accurate order for pickup or delivery without creating an account.
- **Website Goals:** Deliver menu discovery, customization, cart, guest checkout, and an owner admin area within a fast, mobile-first, on-brand site.

---

## 7. Stakeholders
| Stakeholder | Role | Responsibility | Decision Authority | Involvement |
|---|---|---|---|---|
| Karim | Owner | Final decisions, design approval, content/photo supply, ongoing content management | Full | High |
| Head Baker | Content contributor | Supplies photos/menu information alongside Karim | None (confirmed) | Medium |
| Shift Manager | Potential future admin user | Not currently defined | TBD | TBD |
| Customers | End users | Browse and place orders as guests | None | High (usage) |

---

## 8. Target Users
| User Type | Description | Goals | Pain Points Today | Access Level | Main Tasks |
|---|---|---|---|---|---|
| Regulars | Daily/frequent customers with a usual order | Fast, accurate reorder | Order mix-ups, waiting to see menu | Guest (no account) | Browse, customize, order |
| Students | Nearby customers, mobile-first | Quick browsing, dietary filtering | Not knowing dietary fit without asking | Guest | Filter, order |
| Office workers | Order for themselves or office, often for delivery | Reliable delivery ordering | Same as above | Guest | Order for delivery |
| Owner (Karim) | Business owner/admin | Manage menu, pricing, specials, availability | Manual updates, no self-service tool today | Admin (full) | Manage catalog |

No further user segmentation (e.g., accessibility-specific personas, age groups) was confirmed by the client; treat as `TBD: Requires Client Confirmation` if needed later.

---

## 9. Current State (As-Is)
Not Applicable: New System. Orders currently taken via phone, in-person, and informally via Instagram/Facebook, with no structured digital ordering or menu management tool.

---

## 10. Future State (To-Be)
| Current State | Proposed State |
|---|---|
| Orders taken by phone/in-person, error-prone | Customers self-serve via website menu, customization, and checkout |
| Menu changes require manual staff communication | Owner updates menu, prices, specials, and availability via admin area |
| No structured dietary/service filtering | Customers filter by dietary tag and by pickup/delivery |
| Orders relayed verbally to kitchen | Order details captured and relayed with full accuracy via a WhatsApp `wa.me` prefilled message the customer sends (see Sec. 21) |

---

## 11. Project Scope
**In Scope (Confirmed):**
- Public pages: Home, Menu, Our Story/About, Contact/Location/Hours
- Menu browsing, search, dietary filters, service-type filter
- Item customization (drinks and food)
- Cart with persistent summary bar
- Guest checkout for Table Pickup and Instant Delivery
- Owner admin area: manage items, prices, availability, specials

**Out of Scope (Confirmed, explicitly declined by client):**
- Customer accounts/login, saved orders, order history
- Online payment gateway / stored card data
- Multi-role staff permissions (beyond the owner)
- Email marketing, CRM, social-feed integrations
- Loyalty points, promo codes, multi-language switching (none requested)

**Resolved since initial discovery:**
- Order hand-off mechanism: WhatsApp (`wa.me` prefilled-message link) — see Sec. 21.

**TBD/Pending:**
- Business rules: delivery fee, minimum order, cutoff times — OQ-02
- Cancellation/refund process — OQ-03
- Hosting/domain setup — OQ-06
- Budget and launch timeline — OQ-07

---

## 12. System Structure
```
Public Site
├── Home
├── Menu
│   ├── Category Browse (Signature Brews, Artisan Bakery, Brunch & Bowls, Cold Beverages, Sweet Treats)
│   ├── Search
│   └── Filters (Dietary Tag, Service Type)
├── Item Detail / Customization
├── Cart
├── Checkout (Guest)
│   ├── Table Pickup
│   └── Instant Delivery
├── Our Story / About Us
└── Contact / Location / Hours

Admin Area (Owner)
├── Menu Item Management (Add/Edit/Remove)
├── Availability Toggle (Sold Out)
├── Daily Specials
└── Pricing & Descriptions
```

---

## 13. Pages & Modules
| ID | Page/Module | Purpose | User | Main Content | Main Actions | Status |
|---|---|---|---|---|---|---|
| PG-01 | Home | Entry point, brand impression | Customer | Highlights, navigation | Navigate to Menu/Story | Confirmed |
| PG-02 | Menu | Browse/search/filter items | Customer | Categories, items, badges | Search, filter, view item, customize, add to cart | Confirmed |
| PG-03 | Item Detail/Customization | Configure item before adding to cart | Customer | Description, origin/roast notes, customization options | Select options, add to cart | Confirmed |
| PG-04 | Cart | Review/edit order before checkout | Customer | Items, quantities, subtotal | Edit qty, remove item, proceed to checkout | Confirmed |
| PG-05 | Checkout | Capture fulfillment details and submit order | Customer | Fulfillment type, contact/table info, note, review | Submit order | Confirmed |
| PG-06 | Our Story / About Us | Brand storytelling | Customer | Sourcing/baking story | Read | Confirmed |
| PG-07 | Contact/Location/Hours | Practical info | Customer | Address, hours | View | Confirmed |
| PG-08 | Admin — Menu Management | Owner self-service catalog control | Owner | Item list, forms | Add/edit/remove items, toggle availability, edit prices/specials | Confirmed |

---

## 14. Functional Requirements
| ID | Requirement | User/Actor | Trigger | Expected Behavior | Priority | Source |
|---|---|---|---|---|---|---|
| FR-01 | The system shall display menu items grouped by category (Signature Brews, Artisan Bakery, Brunch & Bowls, Cold Beverages, Sweet Treats). | Customer | Visits Menu page | Items shown grouped by category | Must (client-stated) | Client interview, Sec. 8 |
| FR-02 | The system shall allow customers to search menu items by name or ingredient. | Customer | Enters search term | Matching items displayed | Must | Client interview, Sec. 8 |
| FR-03 | The system shall allow filtering by dietary tag (e.g., dairy-free, gluten-free). | Customer | Applies filter | Only matching items shown | Must | Client interview, Sec. 8 |
| FR-04 | The system shall allow filtering by service type (Table Pickup vs. Instant Delivery). | Customer | Applies filter | Only matching items/availability shown | Must | Client interview, Sec. 8 |
| FR-05 | The system shall display, per item: name, price, description, origin/roast notes (where applicable), badges, and availability status. | Customer | Views item | Full item detail rendered | Must | Client interview, Sec. 8 |
| FR-06 | The system shall allow drink customization: milk type (whole, oat, almond), extra espresso shot, roast type (light/medium/dark) where applicable. | Customer | Configures drink | Selected options attached to cart line item | Must | Client interview, Sec. 8 |
| FR-07 | The system shall allow food customization: heating option ("warm upon request"). | Customer | Configures food item | Selected option attached to cart line item | Must | Client interview, Sec. 8 |
| FR-08 | The system shall maintain a persistent cart summary showing item count, order type/table, and subtotal. | Customer | Item added/changed | Summary bar updates | Must | Client interview, Sec. 8 |
| FR-09 | The system shall allow customers to add, remove, and adjust quantities of cart items before checkout. | Customer | Edits cart | Cart updates, subtotal recalculates | Must | Client interview, Sec. 8 |
| FR-10 | The system shall allow selecting fulfillment method: Table Pickup (requires table number) or Instant Delivery (requires name, phone, delivery address). | Customer | Proceeds to checkout | Correct fields required per method | Must | Client interview, Sec. 8 |
| FR-11 | The system shall allow an optional order note (dietary request/delivery instructions). | Customer | Checkout | Note attached to order | Should | Client interview, Sec. 8 |
| FR-12 | The system shall allow order review before submission. | Customer | Before submit | Full order summary shown | Must | Client interview, Sec. 8 |
| FR-13 | The system shall support guest checkout without requiring account creation. | Customer | Checkout | Order submitted without login | Must | Client interview, Sec. 6 |
| FR-14 | The system shall open WhatsApp with a prefilled message containing the full, accurate order details, addressed to the business's WhatsApp number, for the customer to send. | Owner/Team | Order submitted | WhatsApp opens with the order message ready to send | Must | Client interview, Sec. 8, 10; Decision: WhatsApp (`wa.me`) |
| FR-14a | The system shall show a confirmation screen after submission reminding the customer to press Send in WhatsApp, with a way to reopen WhatsApp if they didn't. | Customer | Order submitted | Confirmation screen with "Send on WhatsApp" action shown | Must | Decision: WhatsApp hand-off |
| FR-15 | The system shall allow the owner to add, edit, and remove menu items. | Owner | Admin action | Catalog updates | Must | Client interview, Sec. 20 |
| FR-16 | The system shall allow the owner to toggle item availability ("Sold Out"). | Owner | Admin action | Item marked unavailable on public menu | Must | Client interview, Sec. 20 |
| FR-17 | The system shall allow the owner to update daily specials. | Owner | Admin action | Specials reflected on menu | Must | Client interview, Sec. 20 |
| FR-18 | The system shall allow the owner to update prices and descriptions. | Owner | Admin action | Public menu reflects changes | Must | Client interview, Sec. 20 |
| FR-19 | The system shall NOT collect or store customer payment/card data. | System | N/A | No payment capture in-system | Must (Constraint) | Client interview, Sec. 8, 16 |
| FR-20 | The system shall NOT require customer account creation for any ordering flow. | System | N/A | Guest checkout only | Must (Constraint) | Client interview, Sec. 6 |

---

## 15. Features
| FEAT ID | Name | Purpose | User | Business Value | Priority | Status |
|---|---|---|---|---|---|---|
| FEAT-01 | Menu Discovery | Browse/search/filter items | Customer | Reduces wait, surfaces dietary fit | Must | Confirmed |
| FEAT-02 | Item Customization | Configure drinks/food before ordering | Customer | Prevents order errors (e.g. missed milk choice) | Must | Confirmed |
| FEAT-03 | Cart Management | Review/adjust order pre-checkout | Customer | Order accuracy, transparency | Must | Confirmed |
| FEAT-04 | Guest Checkout (Pickup/Delivery) | Capture fulfillment details and submit | Customer | Removes account friction | Must | Confirmed |
| FEAT-05 | Order Hand-off | Deliver order to owner/team | Owner/Team | Accurate kitchen execution | Must (mechanism TBD) | Partially Confirmed |
| FEAT-06 | Menu & Availability Admin | Owner self-service catalog control | Owner | Owner independence, faster updates | Must | Confirmed |
| FEAT-07 | Brand Storytelling (Our Story page) | Communicate sourcing/baking story | Customer | Brand differentiation | Should | Confirmed |

Each feature's main flow follows the Functional Requirements above; no alternative flows beyond those stated were confirmed by the client (mark as `TBD` where flows are not yet defined — see Open Questions).

---

## 16. Roles & Permissions
| Role | View | Create | Edit | Delete | Approve | Manage |
|---|---|---|---|---|---|---|
| Customer (Guest) | Menu, own cart/order | Own order | Own cart | Own cart item | — | — |
| Owner (Karim) | All | Menu items, specials | Menu items, prices, descriptions | Menu items | — | Full catalog & availability |
| Staff (e.g. Shift Manager) | TBD | TBD | TBD | TBD | TBD | TBD — not confirmed by client |

---

## 17. User Journeys
**Journey: Place an Order (Pickup or Delivery)**
- **Entry:** Customer lands on Home or Menu page.
- **Goal:** Successfully place an accurate order for pickup or delivery.
- **Action:** Browse/search/filter menu, select item(s), customize, add to cart.
- **System Response:** Cart summary updates in real time.
- **Decision:** Continue shopping or proceed to checkout.
- **Next Step:** Choose fulfillment method, enter required details, optional note, review order.
- **Completion:** Order submitted; WhatsApp opens with the prefilled order message; customer presses Send; business receives it.

---

## 18. Business Workflows
**WF-01: Order Placement**
- **Objective:** Convert a customer's menu selections into a complete, accurate order received by the business.
- **Actor:** Customer (initiator), Owner/Team (recipient).
- **Trigger:** Customer clicks submit/checkout after review.
- **Preconditions:** Cart contains at least one item; required fulfillment fields completed.
- **Main Flow:** Browse → Customize → Add to Cart → Checkout (choose Pickup/Delivery, fill required fields, optional note) → Review → Submit → Order delivered to owner/team.
- **Alternative Flow:** Customer edits cart before submitting (add/remove/adjust quantity).
- **Exception Flow:** `TBD` — no confirmed process for post-submission edits/cancellations (client: "we handle it case by case today").
- **Business Rules:** Data accuracy is mandatory (BRULE-01).
- **Notifications:** WhatsApp message prefilled with order details, sent by the customer to the business's WhatsApp number. ⚠️ Known limitation: delivery depends on the customer pressing Send — the confirmation screen (FR-14a) exists specifically to reduce this risk, but it is not fully eliminated without upgrading to the WhatsApp Business API later.
- **Data Created:** Order record (items, customizations, fulfillment details, note).
- **Final State:** Order received by business for preparation.

**WF-02: Menu Management**
- **Objective:** Keep menu, pricing, and availability current without developer involvement.
- **Actor:** Owner.
- **Trigger:** Owner logs into admin area.
- **Main Flow:** Owner adds/edits/removes item, updates price/description, toggles availability, or updates daily specials.
- **Final State:** Public menu reflects changes immediately.

---

## 19. Business Rules
| Rule ID | Rule | Condition | Action | Applies To | Source |
|---|---|---|---|---|---|
| BRULE-01 | Order details must be accurate and complete as entered by the customer. | Order submitted | Deliver exact customization/fulfillment info to business | All orders | Client interview: "the details have to be accurate... it has to say oat milk when it reaches us." |
| BRULE-02 | Table Pickup requires a table number; Instant Delivery requires name, phone, and address. | Fulfillment method selected | Enforce required fields per method | Checkout | Client interview, Sec. 8 |
| BRULE-03 | No online payment is collected or stored by the system. | Checkout | Payment handled outside the system | Checkout | Client interview, Sec. 8, 16 |
| BRULE-04 (TBD) | Delivery fee / minimum order value / order cutoff time. | N/A | `TBD: Requires Client Confirmation` | Checkout, Pricing | Client interview, Sec. 10 |
| BRULE-05 (TBD) | Cancellation/refund conditions. | N/A | `TBD: Requires Client Confirmation` | Post-order | Client interview, Sec. 10 |

---

## 20. Data Requirements
| Entity | Purpose | Key Info | Created/Updated/Used By | Relationships | Sensitivity |
|---|---|---|---|---|---|
| Menu Item | Represent a sellable product | Name, price, description, category, dietary tags, badges, availability, origin/roast notes | Owner (create/update); Customer (view) | Belongs to Category | Low |
| Category | Group menu items | Name | Owner | Has many Menu Items | Low |
| Customization Option | Modify an item (milk, roast, heating, shot) | Option name, applicable item(s) | Owner (defines); Customer (selects) | Belongs to Menu Item | Low |
| Order | Represent a placed order | Items, customizations, fulfillment type, table number or delivery details, note, subtotal | Customer (create); Owner/Team (view/use) | Contains Menu Items | Medium (contains phone/address for delivery) |
| Delivery Detail | Capture delivery info | Name, phone, address | Customer (create) | Part of Order | Medium — personal data (flag: Sec. 19 Legal) |

No database schema is implied; this is a business-level data inventory only.

---

## 21. Integrations
| Integration | Purpose | External System | Data Exchanged | Trigger | Dependency | Status |
|---|---|---|---|---|---|---|
| Order Hand-off Channel | Deliver order details to owner/team | WhatsApp, via `wa.me` link with a prefilled message | Order details | Order submission | Business's WhatsApp number (open item — see Sec. 37); customer must press Send | **Resolved: WhatsApp** |

No payment gateway, CRM, email marketing, or map integrations were requested; explicitly out of scope per client.

---

## 22. Content Requirements
| Content | Owner | Source | Type | Update Frequency | Approval | Languages |
|---|---|---|---|---|---|---|
| Menu item text/photos | Karim + Head Baker | New photography + existing Instagram assets | Text, images | As needed (owner self-managed) | Karim | English (confirmed sufficient) |
| Our Story content | Karim | To be written | Text | Rare | Karim | English |
| Hours/Location | Karim | Current business info | Text | Rare | Karim | English |

---

## 23. UI/UX Requirements
- Confirmed: mobile-first responsive design (client: "Most people open the site from their phones").
- Confirmed: clean, uncluttered, elegant visual style consistent with existing brand (warm/earthy tones, existing logo).
- Confirmed: high-quality, appetizing food/drink photography.
- Confirmed: persistent/sticky cart summary bar.
- No specific navigation structure, animations, or interaction patterns beyond "not cluttered, not heavy/slow" were specified — `TBD: Requires Client Confirmation` for detailed UI decisions.

---

## 24. SEO Requirements
`TBD: Not Provided` — SEO was not discussed in the client interview.

---

## 25. Accessibility Requirements
- Confirmed: readable, high-contrast text, particularly for prices (target audience includes older customers).
- Confirmed: descriptive/alt text desired for food images.
- `TBD: Requires Client Confirmation` — no specific WCAG level or standard was requested; client deferred to the delivery team.

---

## 26. Security & Privacy
- **Confirmed Security Requirement:** No storage of customer payment/card data (FR-19, BRULE-03).
- **Security Consideration/TBD:** Handling of personal data collected at checkout (name, phone, delivery address) — no privacy policy, terms, or cookie notice discussed. **Flag: confirm with client's legal advisor.**

---

## 27. Analytics & Tracking
`TBD: Not Provided` — not discussed in the client interview.

---

## 28. Non-Functional Requirements
| ID | Category | Requirement | Measurement/Target | Status |
|---|---|---|---|---|
| NFR-01 | Performance | Pages and images shall load quickly on mobile networks | ~2 seconds (client-stated target) | Confirmed |
| NFR-02 | Availability | Site shall remain available during business hours | Daily, 7 AM–9 PM; downtime during these hours described as high-impact | Confirmed (numeric uptime % TBD) |
| NFR-03 | Compatibility | Mobile-first responsive experience | Primary: mobile; other devices: TBD detail | Confirmed (mobile), TBD (desktop/tablet detail) |
| NFR-04 | Security | No storage of payment/card data | N/A — architectural constraint | Confirmed |
| NFR-05 | Accessibility | High-contrast, readable text; alt text for images | Standard/level not specified | Confirmed (qualitative), TBD (standard) |
| NFR-06 | Scalability | Expected order volume growth | Not discussed | TBD |
| NFR-07 | Reliability | Backup/recovery expectations | Not discussed | TBD |

---

## 29. Constraints
- No existing hosting or domain (new setup required).
- No specified budget ceiling.
- No specified launch deadline.
- Small internal team (effectively one admin user at launch).

---

## 30. Assumptions
- Only one admin user (Karim) is needed at launch.
- Desktop/tablet use is secondary but the site should still function there.
- English-only content is sufficient at launch.

---

## 31. Dependencies
- Content and photography supply from Karim and head baker.
- Hosting/domain acquisition (none currently owned).
- Business's WhatsApp number (needed to build the `wa.me` link — see Sec. 37). WhatsApp Business API access only needed if the team later upgrades beyond the `wa.me` MVP approach.

---

## 32. Risks
| Risk ID | Risk | Cause | Potential Impact | Mitigation | Owner | Status |
|---|---|---|---|---|---|---|
| RISK-01 | Orders may not reach the business even after a customer completes checkout | `wa.me` approach requires the customer to press Send in WhatsApp as a separate manual step | Lost orders the business never sees | Confirmation screen (FR-14a) prompts and allows resending; consider WhatsApp Business API later for automatic delivery | Product/Dev | Open — mitigated, not eliminated |
| RISK-02 | Incomplete checkout business rules | Delivery fee/minimum order/cutoff undecided | Inconsistent checkout behavior at launch | Resolve OQ-02 with client | Analyst/Client | Open |
| RISK-03 | Legal/privacy exposure | No privacy policy despite collecting personal data | Compliance risk | Engage client's legal advisor | Client | Open |

---

## 33. Prioritization
- **Must (client-stated):** Menu browsing/discovery, customization, cart, checkout (pickup & delivery), owner admin/menu management.
- **Should (client-stated, can slightly follow):** Our Story/About page and "nicer extras."
- **Could/Later:** Not itemized by client beyond the above — `TBD`.

---

## 34. MVP Definition
| Feature | MVP | Reason/Source | Status |
|---|---|---|---|
| Menu Discovery (FEAT-01) | Yes | Client: core ordering must be in first version | Confirmed |
| Item Customization (FEAT-02) | Yes | Same | Confirmed |
| Cart Management (FEAT-03) | Yes | Same | Confirmed |
| Guest Checkout (FEAT-04) | Yes | Same | Confirmed |
| Order Hand-off (FEAT-05) | Yes (mechanism TBD) | Same | Partially Confirmed |
| Menu & Availability Admin (FEAT-06) | Yes | Client: explicitly must-have | Confirmed |
| Brand Storytelling (FEAT-07) | Should — client prefers included but can follow slightly later | Client statement, Sec. 22 | Confirmed |

---

## 35. Acceptance Criteria
| AC ID | Related FR | Given/When/Then |
|---|---|---|
| AC-01 | FR-01, FR-02, FR-03, FR-04 | Given a customer is on the Menu page, when they search or apply a dietary/service filter, then only matching available items are displayed. |
| AC-02 | FR-06, FR-07 | Given a customer selects a drink or food item, when they choose customization options, then those options are attached to the cart line item. |
| AC-03 | FR-08, FR-09 | Given items are in the cart, when the customer adds, removes, or adjusts quantity, then the summary bar (count, order type/table, subtotal) updates immediately. |
| AC-04 | FR-10 | Given a customer proceeds to checkout, when they select Table Pickup, then a table number is required; when they select Instant Delivery, then name, phone, and address are required. |
| AC-05 | FR-12, FR-13 | Given a completed checkout form, when the customer reviews and submits, then the order is placed without requiring account creation. |
| AC-06 | FR-14, FR-14a | Given an order is submitted, when it is transmitted, then WhatsApp opens with a complete, accurate prefilled order message, and the confirmation screen prompts the customer to send it. |
| AC-07 | FR-15, FR-16, FR-17, FR-18 | Given the owner is in the admin area, when they add/edit/remove an item, toggle availability, or update a special/price, then the public menu reflects the change. |

---

## 36. Success Metrics
`TBD: Not Provided` — client did not give a numeric success target. Questions needed to define them: What order volume or error-rate reduction would count as success? Over what time period should this be measured?

---

## 37. Open Questions
| ID | Open Question | Why It Matters | Requirement Affected | Priority |
|---|---|---|---|---|
| OQ-01 | ~~Should order submission go through WhatsApp/confirmation message, or directly in-system?~~ | — | FR-14, FEAT-05, WF-01 | **Resolved: WhatsApp (`wa.me`)** |
| OQ-01a | What is the business's WhatsApp number to send orders to? Should the team plan to upgrade to the WhatsApp Business API later for automatic delivery (no customer Send step)? | Needed to finish building FR-14; affects RISK-01 | FR-14, FR-14a | High |
| OQ-02 | What are the delivery fee, minimum order value, and order cutoff times (if any)? | Needed to complete checkout business rules | BRULE-04 | High |
| OQ-03 | What is the cancellation/refund process? | Needed for exception-flow design | WF-01 (Exception Flow) | Medium |
| OQ-04 | Is a bilingual (Arabic/English) site needed? | Affects content and UI scope | Sec. 4, 22 | Medium |
| OQ-05 | What accessibility standard/level should be targeted? | Affects design and QA scope | NFR-05 | Medium |
| OQ-06 | What hosting/domain will be used, and who owns it? | Needed for technical planning | Sec. 15, 29 | High |
| OQ-07 | What is the budget range and target launch date? | Needed for project planning | Sec. 22 (Timeline) | High |
| OQ-08 | Is a future staff role (e.g., shift manager) needed, and with what permissions? | Affects Roles & Permissions design | Sec. 16 | Low |
| OQ-09 | What SEO and analytics tracking are desired? | Not discussed; affects scope | Sec. 24, 27 | Low |
| OQ-10 | What order volume/growth is expected? | Affects scalability planning | NFR-06 | Low |

---

## 38. Conflicts & Clarifications
None identified. The client's statements were consistent across the session.

---

## 39. Requirement Traceability Matrix
| Client Statement | Business Req | User Req | Functional Req | Feature | Workflow | Acceptance Criteria |
|---|---|---|---|---|---|---|
| "reduce order mistakes" | BR-01 | Accurate ordering | FR-14, BRULE-01 | FEAT-05 | WF-01 | AC-06 |
| "order their coffee or food, easily... pickup or delivery" | BR-02 | Easy self-service ordering | FR-01–FR-13 | FEAT-01–FEAT-04 | WF-01 | AC-01–AC-05 |
| "I want the site to feel like us" | BR-03 | Brand-consistent experience | Sec. 23 (UI/UX) | FEAT-07 | — | — |
| "add today's specials in a couple of minutes without help" | BR-04 | Owner self-management | FR-15–FR-18 | FEAT-06 | WF-02 | AC-07 |

---

## 40. Final Requirements Summary
- **Confirmed Requirements:** 20 functional requirements (FR-01–FR-20), 4 business objectives, 7 features, 3 confirmed business rules, 5 non-functional requirement categories with qualitative targets.
- **Open Questions:** 10 (see Sec. 37), several High priority (order hand-off channel, checkout business rules, hosting, budget/timeline).
- **Assumptions:** 3 (Sec. 30).
- **Dependencies:** 3 (Sec. 31).
- **Risks:** 3 (Sec. 32), all Open.
- **Scope Boundaries:** No accounts, no online payment, no multi-role staff access, no marketing integrations — all explicitly declined by the client.
- **Approval Items:** Order hand-off mechanism, checkout business rules, budget, and timeline must be resolved before development planning is finalized.

---

## 41. Approval & Sign-off
| Name | Role | Signature | Date |
|---|---|---|---|
| Karim | Owner / Client | _____________ | _____________ |
| — | Business Analyst | _____________ | _____________ |

*This BRD was produced from a simulated discovery interview for demonstration/practice purposes and should be validated with the real client before development begins.*
