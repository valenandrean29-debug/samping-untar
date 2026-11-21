# Design memory: Samping Untar

Use this guide as the continuing visual direction for the Samping Untar student food directory.

- **Audience and voice:** Untar students; friendly, casual Indonesian, lively without feeling childish or overly formal.
- **Visual concept:** retro pixel food-market aesthetic. Use pixel art as the signature visual language, with clear modern layout and readable content.
- **Hero background:** `public/pixel-food-hero.png`, the generated pixel-art composition featuring ayam goreng, nasi goreng, soto, bakso, and sate. Keep important copy in the clear central area.
- **Brand reference:** use `public/untar-pixel-logo.png` for the transparent pixel-art lockup with the Untar crest and UNTAR wordmark. The original source reference remains at `public/untar-logo-reference.png`.
- **Additional kiosk artwork:** `public/bakso-soto-larissa-bahari-pixel.png` is the pixel-art storefront illustration for Bakso & Soto Larissa Bahari, available to add to the kiosk grid when requested.
- **Additional kiosk artwork:** `public/nasi-goreng-namura-pixel.png` is the pixel-art storefront illustration for Nasi Goreng Namura, available to add to the kiosk grid when requested.
- **Palette:** warm cream `#FFF2D8`, Untar-inspired maroon `#9C2031`, dark warm brown `#57272A`, and toasted gold `#E9A839`; use leafy green sparingly as a food accent.
- **Typography:** `Press Start 2P` for short pixel display text and calls to action; `VT323` for supporting text. Keep long-form information in a legible non-pixel font if later sections need it.
- **Shapes and detail:** simple blocky borders, restrained pixel sparkles, warm shadows, rounded corners only in small amounts. Keep food images and kiosks as the focus.
- **Interaction:** prominent high-contrast maroon CTA, keyboard-visible focus, responsive layout, and reduced-motion support.
- **Hero lockup:** keep “Samping” smaller than the pixel Untar logo; align them vertically and keep the pair on one row on mobile. Scale down the copy and CTA spacing for narrow screens.
- **Kiosk list:** show generated kiosk illustrations in warm cream cards with dark brown pixel borders, block shadows, maroon primary buttons, and gold secondary buttons. Keep the two actions in one row and stack the cards on narrow phone screens. Current cards: Ayam Geybok, Ayam Bakar Ojo Lali Tomang, Kantin Sahera Pak Kirno, Sate Bang Dopir, Bakso & Soto Larissa Bahari, and Nasi Goreng Namura.
- **Coming soon card:** finish the kiosk grid with a centered pixel placeholder card labeled “Kios lainnya segera hadir” and “COMING SOON”; make it full width in the single-column mobile grid.
- **About kios behavior:** “Tentang Kios” opens an accessible pixel-styled dialog with a short sourced description, source link, and reminder that menu availability can change.
- **Order button behavior:** each kiosk stores its own WhatsApp number in `KiosSection.jsx`; normalize local Indonesian numbers to country code 62 and prefill a polite order message. Keep the button visibly disabled until a number is supplied.
- **Navigation and footer:** sticky maroon pixel-style navbar links only to hero, kios list, and suggestions. Footer links to the configured Google Form and shows “© 2026 Valenmamae”. The coming-soon kiosk card links to the kiosk submission form.
- **Site mark:** use the custom pixel “SU” initials in `public/su-favicon.svg` as the browser favicon and in the navbar, in maroon, cream, and gold.
- **Food photo in kiosk dialog:** place one supplied food photo above the short profile in each dialog; assets are in `public/food-*.png`, matched to each kiosk in `KiosSection.jsx`.
- **Scope rule:** build only the requested sections; do not add extra page sections without a later request.
