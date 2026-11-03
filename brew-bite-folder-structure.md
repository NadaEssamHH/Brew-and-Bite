# Brew & Bite — Project Folder Structure (v2)

**Stack (confirmed, replaces the earlier Next.js assumption):** React + Vite + React Router on the frontend, Node.js backend coming next. Mock data (`src/data/`) is a temporary stand-in until the backend ships — the `types/` folder is written to match the backend's future data shape from day one, so swapping mock data for real API calls later doesn't require changing types.

This structure is the user's own proposal, reviewed against the BRD/PRD/Backlog: items that conflicted with a confirmed client decision or didn't exist in any requirement doc were removed; one missing piece critical to the project's core feature (WhatsApp hand-off) was added.

## Frontend (`src/`)

```
src/
├── assets/
│   └── images/
│
├── components/
│   ├── common/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Button.tsx
│   │   └── Loader.tsx
│   │
│   ├── home/                         # Home — SCR-01
│   │   ├── Hero.tsx
│   │   ├── CounterSection.tsx
│   │   ├── CraftSection.tsx
│   │   └── LocationPreview.tsx
│   │
│   ├── menu/                         # Menu — SCR-02
│   │   ├── MenuHeader.tsx
│   │   ├── CategoryTabs.tsx
│   │   ├── MenuFilters.tsx
│   │   ├── MenuGrid.tsx
│   │   └── MenuCard.tsx
│   │
│   ├── product/                      # Item Customization — SCR-03
│   │   ├── ProductDetails.tsx
│   │   ├── ProductCustomization.tsx
│   │   ├── QuantitySelector.tsx
│   │   └── AddToCartButton.tsx
│   │
│   ├── cart/                         # Cart — SCR-04
│   │   ├── CartItem.tsx
│   │   ├── CartList.tsx
│   │   └── CartSummary.tsx
│   │
│   ├── checkout/                     # Checkout — SCR-05
│   │   ├── CheckoutForm.tsx
│   │   ├── CustomerInfo.tsx
│   │   ├── PickupOptions.tsx
│   │   └── CheckoutSummary.tsx
│   │   # PaymentMethod.tsx removed — no online payment (BRULE-03, FR-19).
│   │   # Payment happens outside the system; nothing to build here.
│   │
│   ├── confirmation/                 # Order Confirmation — SCR-09
│   │   ├── ConfirmationMessage.tsx
│   │   ├── OrderDetails.tsx
│   │   └── SendWhatsAppButton.tsx    # ADDED — the project's core feature (FEAT-08)
│   │
│   ├── about/                        # Our Story — SCR-06
│   │   ├── StoryHero.tsx
│   │   ├── StoryContent.tsx
│   │   └── CraftStats.tsx
│   │
│   ├── location/                     # Contact / Location / Hours — SCR-07
│   │   ├── LocationInfo.tsx
│   │   ├── OpeningHours.tsx
│   │   └── LocationMap.tsx
│   │   # ReservationForm.tsx removed — no table-reservation feature in any
│   │   # requirement doc. The client only described Table Pickup (a table
│   │   # number entered at order time), not advance booking.
│   │
│   └── owner/                        # Admin: Menu Management — SCR-08
│       ├── OwnerSidebar.tsx
│       ├── ProductTable.tsx
│       └── ProductForm.tsx
│       # OrderTable.tsx, OrderDetails.tsx, DashboardStats.tsx removed —
│       # no admin order-management or stats dashboard in the BRD/PRD/Backlog.
│       # Orders go out via WhatsApp only; the owner's only confirmed admin
│       # job is catalog management (FR-15–FR-18).
│
├── pages/
│   ├── Home.tsx
│   ├── Menu.tsx
│   ├── ProductCustomization.tsx
│   ├── Cart.tsx
│   ├── Checkout.tsx
│   ├── OrderConfirmation.tsx
│   ├── About.tsx
│   ├── Location.tsx
│   └── owner/
│       └── OwnerCatalog.tsx          # single admin page — OwnerDashboard.tsx
│                                      # removed, nothing else to show there yet
│
├── data/                             # TEMPORARY mock data until backend ships
│   ├── menuData.ts
│   ├── homeData.ts
│   └── locationData.ts
│
├── types/                            # Shape matches BRD Sec. 20 data model —
│   ├── menu.ts                       # keep in sync with backend/src/models/
│   ├── cart.ts
│   └── order.ts
│
├── context/
│   └── CartContext.tsx
│
├── hooks/
│   └── useCart.ts
│
├── lib/
│   └── whatsapp.ts                   # ADDED — builds the wa.me link with the
│                                      # prefilled order message (FEAT-05)
│
├── routes/
│   └── AppRoutes.tsx
│
├── App.tsx
├── main.tsx
└── index.css
```

## Backend (`backend/`) — Node.js, coming next

Sketched now so the frontend's `types/` folder has something real to match. Entities follow the BRD Sec. 20 data model exactly (Menu Item, Category, Order) — nothing invented beyond what's documented.

```
backend/
├── src/
│   ├── models/
│   │   ├── MenuItem.ts               # name, price, description, category,
│   │   │                              # dietary tags, badges, availability,
│   │   │                              # origin/roast notes (BRD Sec. 20)
│   │   ├── Category.ts
│   │   └── Order.ts                  # items, customizations, fulfillment
│   │                                  # type, table/delivery details, note,
│   │                                  # subtotal (BRD Sec. 20)
│   ├── routes/
│   │   ├── menuItems.ts              # GET/POST/PUT/DELETE — FR-15–FR-18
│   │   └── orders.ts                 # POST — order creation (FR-10–FR-13)
│   ├── controllers/
│   │   ├── menuItemController.ts
│   │   └── orderController.ts
│   ├── middleware/
│   │   └── adminAuth.ts              # admin login gate (OQ-12 — method TBD)
│   ├── db/                           # connection + schema/migrations
│   └── app.ts
├── .env.example                      # DB connection string, admin credentials
│                                      # — WhatsApp number stays frontend-side
│                                      # since lib/whatsapp.ts builds the link
│                                      # client-side (no server round-trip needed)
└── package.json
```

## What changed from the user's original proposal

| File/Folder | Change | Why |
|---|---|---|
| `checkout/PaymentMethod.tsx` | Removed | Client explicitly declined online payment (BRULE-03, FR-19) |
| `location/ReservationForm.tsx` | Removed | No table-reservation feature in any requirement doc — only Table Pickup (a number entered at order time) exists |
| `owner/OrderTable.tsx`, `owner/OrderDetails.tsx` | Removed | No admin order-management screen in BRD/PRD/Backlog — orders go out via WhatsApp only |
| `owner/DashboardStats.tsx` | Removed | No stats/analytics requirement exists |
| `pages/owner/OwnerOrders.tsx`, `pages/owner/OwnerDashboard.tsx` | Removed | Follow from the two removals above — only `OwnerCatalog.tsx` has a confirmed requirement (FR-15–FR-18) |
| `lib/whatsapp.ts` | **Added** | Missing piece for the project's core feature (FEAT-05/FEAT-08) — nowhere in the original proposal handled building the `wa.me` link |
| `components/confirmation/SendWhatsAppButton.tsx` | **Added** | The actual send action for FEAT-08 — `ConfirmationMessage.tsx` and `OrderDetails.tsx` alone only display info, nothing triggers the hand-off |
| `backend/` | **Added (sketched)** | Confirmed as "next" — models mirror BRD Sec. 20 exactly so `src/types/` can match it now |

If any of the removed items turn out to be wanted after all (table reservations, admin order tracking, stats), they'd need to go back through the BRD/PRD as new requirements first — right now none of them trace to anything the client asked for.
