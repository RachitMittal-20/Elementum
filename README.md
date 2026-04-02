# Elementum

Elementum is a bold, editorial-style landing page for a creative strategy studio. It combines a hero narrative, animated feature flow, testimonials, and a newsletter CTA with layered textures, animated accents, and scroll-driven motion.

## Highlights

- Immersive hero composition with animated curves, scribbles, and floating avatars
- Multi-scene feature flow with scroll-triggered motion and illustrative lines
- Testimonials and newsletter sections built for fast iteration
- Pure CSS styling with custom properties for motion, glow, and grain effects
- Loading screen and global page states for smooth entry transitions

## Tech Stack

- React 19
- Vite 8
- CSS (custom properties + component-scoped styles)

## Getting Started

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Open the app at the local Vite URL printed in the terminal.

## Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production bundle
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint across the project

## Docker

Build and run with Docker Compose:

```bash
docker compose up --build
```

The container serves the production build via Nginx on http://localhost:3000.

## Project Structure

- `src/components` - Page sections and UI building blocks
- `src/hooks` - Animation and scroll logic
- `src/styles` - Global CSS variables and shared tokens

## Customization Tips

- Update copy and layout in the section components inside `src/components`
- Tweak color and motion tokens in `src/styles/variables.css`
- Adjust scroll thresholds in `src/hooks/useScrollAnimation.js`

## License

This project is provided as-is for learning and prototyping. Add a license if you plan to distribute it.
