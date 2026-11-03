# Interview Transcript — Brew & Bite Discovery Session (Simulated)
**Client:** Karim, Owner of Brew & Bite (artisanal coffee & bakery)
**Analyst:** Simulated Business Analyst
**Note:** This is a simulated interview for practice/demo purposes, not a real client session.

---

## Phase 1: Business & Context

**Analyst:** Thanks for the time, Karim. Let's start broad — tell me about Brew & Bite: what do you sell, and to whom? What makes you different from other coffee shops nearby? And today, how do customers actually find you and order from you?

**Karim:** Of course! We run Brew & Bite — an artisanal coffee shop and bakery. We do specialty single-origin coffee, fresh-baked pastries, cold brews, brunch bowls, sweet treats, the whole thing. What makes us different is we actually care about where the beans come from and we bake everything fresh, not shipped in frozen. Right now people find us mostly by walking in, or from our Instagram page. Some regulars call us directly to order ahead.

**Analyst:** Got it. Why is now the time to build a website? What's pushing this? And do you have any other channels already — apps, delivery platforms, anything like that?

**Karim:** Honestly, taking orders over the phone or in person is getting chaotic during rush hours. My staff writes things down wrong sometimes — wrong milk, wrong table. I want something that just works on its own. And no, we don't have any app or delivery platform right now, just Instagram and Facebook for photos.

---

## Phase 2: Problem & Goals

**Analyst:** So the biggest problem is manual order-taking causing mistakes. If nothing changes, what happens to the business over time? And picture this working really well six months after launch — what does that look like for you?

**Karim:** If nothing changes, honestly we just keep losing time and making people wait, and some customers get annoyed and don't come back. If it works well, I'd say — people order smoothly from their phones, my team isn't scrambling, and I have fewer mix-ups. I don't have an exact number for "success" honestly, I just want to feel like it's under control.

**Analyst:** That's fair, we can refine that later. What's the ONE most important thing you want a visitor to be able to do on the site? And any secondary goals — like showing off your brand, building trust, anything like that?

**Karim:** The main thing — order their coffee or food, easily, and pick pickup or delivery. Secondary goal, yes — I want the site to feel like us. Fresh, artisanal, not some generic ordering app. I want people to see the story behind the beans too.

---

## Phase 3: Stakeholders

**Analyst:** Who makes the final call on decisions for this project? Who approves the design when it's ready? And who's going to supply the photos, menu text, and keep it updated afterward?

**Karim:** That's me, I make the final call. I'll approve the design myself too. For photos and menu text — that's me and my head baker, we already have decent photos from Instagram we can build on. I plan to be the one updating things day to day, prices, specials, that kind of thing.

**Analyst:** Good to know. Is there anyone else on your team who'd need access to manage the site, or any disagreements internally about what it should do?

**Karim:** No real disagreements, it's a small team. Maybe eventually my shift manager could help update things, but for now, it's really just me.

---

## Phase 4: Users

**Analyst:** Who are your typical customers? Are there different types of people who come in? What frustrates them today when ordering?

**Karim:** We get regulars who come every morning for their usual order, students working nearby, and people who order for their office. What frustrates them is not knowing if something's dairy-free or gluten-free without asking, and waiting around just to see what's on the menu today.

**Analyst:** Makes sense. What devices do they mostly use — phones or laptops? And is there anything about accessibility or language I should know — older customers, non-Arabic or non-English speakers?

**Karim:** Almost everyone is on their phone, especially the ones ordering while commuting or from their desk at work. I haven't really thought about different languages, we mostly deal in English and Arabic day to day but I haven't specifically asked for a bilingual site or anything like that.

---

## Phase 5: Scope & Pages

**Analyst:** Let's talk pages. What pages do you imagine on the site — home, menu, about, contact? And should customers be able to search or filter the menu?

**Karim:** Yeah — home, the menu itself obviously, something about our story, and contact/location info with our hours. For the menu, I want people to filter by dietary stuff — dairy-free, gluten-free, that kind of tag — and also filter by whether they want pickup or delivery. Search would help too, by name or ingredient.

**Analyst:** Do you need customer accounts — logging in, saved orders — or is it fine for people to just order without registering? And do you need a management area for yourself?

**Karim:** No, I don't want customers to go through the hassle of creating accounts just to order a coffee. Guest order placement is enough. But yes, I definitely need a way to manage the menu myself — add items, change prices, mark things sold out.

---

## Phase 6: Features — Menu, Discovery & Customization

**Analyst:** Let's go deeper on the menu. What should a menu item show — just name and price, or more? And what categories are you thinking?

**Karim:** Categories would be something like Signature Brews, Artisan Bakery, Brunch & Bowls, Cold Beverages, Sweet Treats. Each item should show the name, price, a description, and for the coffee especially I want to show things like the origin or roast notes — where the beans are from. I also want little badges, like "Bestseller," "Freshly Baked," or "Ceremonial Grade" for the specialty stuff. And it should be obvious if something's sold out.

**Analyst:** And when someone's ordering a drink or food item, do they need to customize anything before adding it to their order?

**Karim:** Yes, exactly! For coffee — milk choice, like whole, oat, almond — and whether they want an extra shot. Sometimes people order a flat white and forget to say if they want oat milk, so that needs to be clear upfront. For food, some things can be warmed up if they ask — "warm upon request."

**Analyst:** If someone asks about roast type specifically — is that something customers choose too?

**Karim:** Yeah, that's fair — light, medium, or dark roast, if it's relevant to that coffee.

---

## Phase 7: Features — Cart & Checkout

**Analyst:** Walk me through what happens after someone adds items — what should the cart look like, and how does checkout work?

**Karim:** I want something always visible, like a little bar that shows how many items, which table or order type, and the total — so it's like "3 items in order, Table #8, 385 EGP" type of thing. People should be able to add, remove, change quantities before they finalize.

**Analyst:** And for checkout — pickup vs. delivery, what info do you need for each?

**Karim:** Yes, exactly! Some customers are sitting at table #8 and want to order pickup, while others want instant delivery to their home or office. For pickup I need the table number. For delivery I need their name, phone number, and the delivery address. I also want a note field, in case someone has a dietary request or delivery instructions.

**Analyst:** Once they submit — does the order go straight into some system, or how do you want it to reach you?

**Karim:** Honestly, right now my team works off WhatsApp, so my preference is the order reaches me with all the details filled in through WhatsApp or some kind of confirmation message. But if you think it's better to have it go straight through the site, I'm open to that too — I mainly care that the details arrive complete and clear so nobody has to call and repeat themselves.

**Analyst:** Understood — I'll flag that as a decision point. Last thing on checkout: any online payment, or do you handle payment separately?

**Karim:** I haven't really thought about online payment, that's not something I'm asking for right now. We just don't want anything storing people's card details on our side. For now we handle payment the way we already do.

---

## Phase 8: Roles & Permissions / Admin Needs

**Analyst:** On the management side — what do you personally need to be able to do without calling a developer? Add items, change prices, that kind of thing?

**Karim:** Yes — add, edit, or remove menu items myself. Mark something as sold out when we run out. Update the daily specials. Change prices and descriptions whenever I need to.

**Analyst:** And besides you, does anyone else need a different level of access — like a staff account that can only view orders, versus you who can edit everything?

**Karim:** For now it's really just me managing it. I haven't set up different staff roles for this, that's not something I've decided yet.

---

## Phase 9: Journeys & Workflows

**Analyst:** Can you walk me through, step by step, what a customer does from the moment they land on the site to getting their order?

**Karim:** Sure — they land on the home page, go to the menu, maybe filter for gluten-free stuff, pick a few items, customize their drink, add to cart. Then they go to checkout, choose pickup or delivery, fill in their table number or delivery info, maybe add a note, review everything, and submit. After that, I want the order to land with me — ideally through WhatsApp like I said — with everything pre-filled so my team can just start making it.

**Analyst:** What if they made a mistake, or want to cancel after submitting?

**Karim:** Honestly, that's something we handle case by case today — if someone calls and says "I made a mistake," we just fix it manually. I haven't fixed a formal process for that yet.

---

## Phase 10: Business Rules

**Analyst:** Are there any rules about the ordering process — minimum order amounts, cutoff times, delivery fees?

**Karim:** I haven't fixed any of that yet — no minimum order, no set delivery fee decided. What do people usually do for something like this? For now we kind of handle it case by case.

**Analyst:** No problem, we'll mark that as a decision to make later. Is there anything that must absolutely never happen — like an order going out with wrong information?

**Karim:** Yes — the details have to be accurate. If a customer says oat milk, it has to say oat milk when it reaches us. That's the whole point of doing this.

---

## Phase 11: Content

**Analyst:** Who's supplying the text and photos for the site — the "Our Story" section, the menu photos?

**Karim:** That'll be me and my head baker. We have some decent photos already, and I want new ones that really show off the food — coffee and pastries need to look fresh and appetizing, that's important to me. I want to be able to update things myself later without needing a developer every time.

**Analyst:** Any specific languages needed beyond what we discussed, or is English the main language for the content?

**Karim:** English is fine for now, that's not something I've specifically asked for beyond that.

---

## Phase 12: Design & Branding

**Analyst:** Do you have a logo or brand colors already? And can you point to a couple of websites — coffee shops or otherwise — that you like the feel of?

**Karim:** We have a logo and a general look from our Instagram, warm tones, earthy. I don't have specific competitor sites memorized, but I want something like the nice, clean cafe sites you see — simple, elegant, not cluttered. Definitely nothing that feels heavy or slow.

**Analyst:** And which devices matter most visually — should I assume mobile-first?

**Karim:** Yes, mobile first for sure. Most people open the site from their phones while walking in or ordering from their desks.

---

## Phase 13: Integrations

**Analyst:** We touched on WhatsApp for order hand-off. Do you want or use any other integrations — payment gateways, maps, email marketing, social media feeds?

**Karim:** WhatsApp is really the main one I care about, for the orders. Online payment gateways, like credit cards — no, that's not something I'm asking for. I haven't thought about email marketing or anything like that either, for now it's not part of what I need.

---

## Phase 14: Non-Functional Expectations

**Analyst:** How long is too long for a page to load on a normal phone connection? And how bad would it be if the site went down for an hour during business hours?

**Karim:** My main goal is that a customer sitting at a table doesn't have to wait 15 minutes just to see the menu — I'd say the pages and photos should load within about 2 seconds even on a mobile connection, we can't have people waiting around. If the site went down during opening hours, that would really hurt us, we're open every day, 7 AM to 9 PM.

**Analyst:** Anything about accessibility — readable text, good contrast on prices, alt text for images?

**Karim:** I do want prices and text to be easy to read, high contrast, especially for older customers. Food photos should have some kind of description too I'd guess, for people who can't see them well — that's the kind of thing I trust you to know better than me.

---

## Phase 15: Hosting, Maintenance, Timeline, Budget & Priorities

**Analyst:** Do you already have hosting or a domain set up? And after launch, who's expected to maintain the site?

**Karim:** No, this would be a brand new site, we don't have hosting or a domain yet. After launch, I want to be able to handle small updates myself — but I'd expect whoever builds it to handle any bigger technical maintenance.

**Analyst:** Any target launch date, or budget range you're working with?

**Karim:** I don't have a fixed date locked in yet, and I haven't settled on a budget number I can share right now — that's still something I need to think through.

**Analyst:** That's fine, we'll mark those as open. If we can't do everything at once, what absolutely has to be in the first version, versus what could wait?

**Karim:** The ordering part has to be there from day one — menu browsing, customizing, cart, checkout, and me being able to manage the menu. The story/about page and some of the nicer extras could come slightly after if needed, but honestly I'd like it all together if possible.

---

## Phase 16: Acceptance & Risks

**Analyst:** Last two questions — how will you know the site is actually ready to launch? And what worries you most about this project?

**Karim:** I'll know it's ready when I can log into the admin side, add today's specials in a couple of minutes without help, and a customer can actually place a full order — pickup or delivery — without calling us to double check anything. What worries me most is it turning into something overcomplicated, or the photos looking cheap. I want it to still feel like us — an actual coffee shop, not a generic app.

**Analyst:** That's really helpful, Karim. I think I have a solid picture of what you need. Thank you for your time.

**Karim:** Thank you! Excited to see where this goes.

---

*End of simulated interview. This transcript feeds directly into the client-answers document below.*
