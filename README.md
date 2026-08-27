# Pedro Portfolio + Commander Decks — React V3

This version includes:

- Personal Home page
- Venom Commander page
- Fully redesigned Food & Fellowship page
- Frodo + Sam commander image included locally
- React Router navigation between all pages
- Vite setup compatible with Node 18

## Requirements

Node.js 18 or newer.

## Run

```powershell
npm install
npm run dev
```

Vite normally starts on:

`http://localhost:5173`

## Routes

- `/`
- `/decks/venom`
- `/decks/food-and-fellowship`

## Build

```powershell
npm run build
```

Production files will be generated in `/dist`.

## AWS deployment direction

This project is ready to evolve toward:
- S3 static hosting
- CloudFront CDN
- Route 53
- ACM
- S3-hosted card images
- API Gateway + Lambda + DynamoDB later

## V3 Home update

The two Commander project tiles on the Home page now use card artwork as full-bleed visual backgrounds:
- Venom uses the Venom card artwork.
- Food & Fellowship uses the supplied Food/Frodo/Sam artwork.
- Gradient overlays preserve title and button readability.


## V4 animations

Home deck cards now include:
- Staggered entrance animation
- Independent background image zoom
- Mouse-position parallax
- Venom blue reactive highlight
- Food & Fellowship warm golden highlight
- Animated light sweep
- Animated Explore Deck buttons
- Subtle hero artwork floating motion
- `prefers-reduced-motion` accessibility support

No animation library is required. The effects use React pointer events + CSS.


## V5 Food & Fellowship redesign

- Dark petroleum-green visual language
- Gold/cream accents for contrast
- Stronger premium hero panel
- Dark/light card interplay in content sections
- Improved commander image framing
- Improved Food page hover and glow effects
- Fixed header brand/name visibility on Food route


## V6 cinematic Food & Fellowship

This version adds:
- Frodo / One Ring cinematic background
- Featured The Shire, Mount Doom and One Ring cards
- Dark emerald + petroleum + gold palette
- Layered cinematic hero composition
- Floating interactive card treatments
- Stronger visual parity with the Venom page


## V7 hero layout correction

- Enlarged the three featured cards
- Restored overlapping/fanned card composition
- Frodo artwork now behaves as a cinematic background rather than a boxed image
- Increased visual stage width
- Added gold backlight behind featured cards
- Improved transition between text and artwork
- Preserved responsive layout without crushing the cards


## V8 Food hero correction

- Removed the Frodo background image from the Food & Fellowship hero.
- Kept only the three featured cards.
- Increased card size substantially.
- Added overlapping/fanned composition.
- Added idle floating animation and stronger hover lift/scale.
- Added subtle gold/emerald stage lighting without using a background image.


## V9 card viewer

- Click The Shire, Mount Doom or The One Ring to expand it.
- Full-screen dark modal with blurred background.
- Move the cursor over the enlarged card for 3D tilt.
- Dynamic light/reflection follows the pointer.
- Close via X, click outside, or Escape.
- Touch devices get expansion without requiring hover.
- Respects prefers-reduced-motion.

## V11 — Extra Large Food & Fellowship Cards

- Enlarged the three featured Food & Fellowship cards to fill much more of the right hero area.
- Targeted roughly 35–40% more visual presence compared with the previous sizing direction.
- Rebalanced overlap so the cards remain proportional and readable.
- Preserved idle floating animations, hover effects, and the click-to-expand 3D viewer.
- Added responsive sizing for desktop, tablet, and mobile.


## V12 — Lowered featured cards

- Preserved the XL card sizing from V11.
- Shifted the three Food & Fellowship feature cards downward by roughly 20% of the visual stage.
- Mount Doom remains slightly higher than the side cards to preserve the fan hierarchy.
- Preserved floating animation, hover interaction, and click-to-expand 3D card viewer.
- Responsive offsets were adjusted independently for desktop, tablet, and mobile.


## V13 — Docker development environment

This version includes:

- `Dockerfile`
- `docker-compose.yml`
- `.dockerignore`
- `docker-start.ps1`
- `docker-stop.ps1`

### Requirements

Install Docker Desktop and make sure Docker Engine is running.

### First run

From PowerShell, inside the project folder:

```powershell
docker compose up --build
```

Then open:

```text
http://localhost:5173
```

### Future runs

```powershell
docker compose up
```

### Stop the container

```powershell
docker compose down
```

### Hot reload

The local project folder is mounted into `/app` inside the container, so changes to `.jsx`, `.js`, `.css`, and other source files are picked up by Vite without rebuilding the Docker image.

The `/app/node_modules` anonymous volume keeps Linux container dependencies separate from Windows host files.

### Rebuild when dependencies change

If `package.json` changes, rebuild the image:

```powershell
docker compose up --build
```

### Convenience scripts

You can also run:

```powershell
.\docker-start.ps1
```

and stop with:

```powershell
.\docker-stop.ps1
```
