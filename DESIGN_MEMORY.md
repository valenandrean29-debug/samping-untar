# Design memory: Samping Untar

Use this guide as the continuing visual direction for the Samping Untar student food directory.

- **Audience and voice:** Untar students; friendly, casual Indonesian, lively without feeling childish or overly formal.
- **Visual concept:** retro pixel food-market aesthetic. Use pixel art as the signature visual language, with clear modern layout and readable content.
- **Hero background:** `public/pixel-food-hero.png`, the generated pixel-art composition featuring ayam goreng, nasi goreng, soto, bakso, and sate. Keep important copy in the clear central area.
- **Brand reference:** use `public/untar-pixel-logo.png` for the transparent pixel-art lockup with the Untar crest and UNTAR wordmark. The original source reference remains at `public/untar-logo-reference.png`.
- **Additional kiosk artwork:** `public/bakso-soto-larissa-bahari-pixel.png` is the pixel-art storefront illustration for Bakso & Soto Larissa Bahari, available to add to the kiosk grid when requested.
- **Additional kiosk artwork:** `public/nasi-goreng-namura-pixel.png` is the pixel-art storefront illustration for Nasi Goreng Namura, available to add to the kiosk grid when requested.
- **Additional kiosk artwork:** `public/ayam-dedy-jaya-bang-bestie-pixel.png` is the pixel-art storefront illustration for Ayam Dedy Jaya Bang Bestie. The image excludes people and is ready for a future kiosk card.
- **Additional kiosk artwork:** `public/mie-yamin-samping-untar-1-pixel.png` is the pixel-art storefront illustration for Mie Yamin Samping Untar 1, with no people.
- **Additional kiosk artwork:** `public/crisbar-pixel.png` is the pixel-art storefront illustration for Crisbar, with no people or vehicles.
- **Additional kiosk artwork:** `public/rm-sakato-jaya-pixel.png` is the pixel-art storefront illustration for RM Sakato Jaya.
- **Additional kiosk artwork:** `public/kedai-ayam-23-pixel.png` is the pixel-art storefront illustration for Kedai Ayam 23, based on the reference photo with its white-maroon awning, chicken mascot, and yellow accents.
- **RM Sakato Jaya card:** use `public/rm-sakato-jaya-pixel.png` for its kiosk card, `public/food-rm-sakato-jaya.png` in the about dialog, and WhatsApp number `+62 856-9738-9664`.
- **Kedai Ayam 23 card:** use `public/kedai-ayam-23-pixel.png` for its kiosk card, `public/food-kedai-ayam-23.png` in the about dialog, and WhatsApp number `+62 858 1799 9170`.
- **Palette:** warm cream `#FFF2D8`, Untar-inspired maroon `#9C2031`, dark warm brown `#57272A`, and toasted gold `#E9A839`; use leafy green sparingly as a food accent.
- **Typography:** `Press Start 2P` for short pixel display text and calls to action; `VT323` for supporting text. Keep long-form information in a legible non-pixel font if later sections need it.
- **Shapes and detail:** simple blocky borders, restrained pixel sparkles, warm shadows, rounded corners only in small amounts. Keep food images and kiosks as the focus.
- **Interaction:** prominent high-contrast maroon CTA, keyboard-visible focus, responsive layout, and reduced-motion support.
- **Hero lockup:** keep “Samping” smaller than the pixel Untar logo; align them vertically and keep the pair on one row on mobile. Scale down the copy and CTA spacing for narrow screens.
- **Kiosk list:** show generated kiosk illustrations in warm cream cards with dark brown pixel borders, block shadows, maroon primary buttons, and gold secondary buttons. Keep the two actions in one row and stack the cards on narrow phone screens. Current cards: Ayam Geybok, Ayam Bakar Ojo Lali Tomang, Kantin Sahera Pak Kirno, Sate Bang Dopir, Bakso & Soto Larissa Bahari, Nasi Goreng Namura, Ayam Dedy Jaya Bang Bestie, Mie Yamin Samping Untar, Crisbar Ayam Crispy Bakar, RM Sakato Jaya, and Kedai Ayam 23.
- **Coming soon card:** finish the kiosk grid with a centered pixel placeholder card labeled “Kios lainnya segera hadir” and “COMING SOON”; make it full width in the single-column mobile grid.
- **About kios behavior:** “Tentang Kios” opens an accessible pixel-styled dialog with a short sourced description, source link, and reminder that menu availability can change.
- **Order button behavior:** each kiosk stores its own WhatsApp number in `KiosSection.jsx`; normalize local Indonesian numbers to country code 62 and prefill a polite order message. Keep the button visibly disabled until a number is supplied.
- **Navigation and footer:** sticky maroon pixel-style navbar links only to hero, kios list, and suggestions. Footer links to the configured Google Form and shows “© 2026 Valenmamae”. The coming-soon kiosk card links to the kiosk submission form.
- **Site mark:** use the custom pixel “SU” initials in `public/su-favicon.svg` as the browser favicon and in the navbar, in maroon, cream, and gold.
- **Food photo in kiosk dialog:** place one supplied food photo above the short profile in each dialog; assets are in `public/food-*.png`, matched to each kiosk in `KiosSection.jsx`.
- **Scope rule:** build only the requested sections; do not add extra page sections without a later request.
