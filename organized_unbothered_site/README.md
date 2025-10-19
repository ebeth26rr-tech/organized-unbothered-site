# Organized & Unbothered — Website
A Vite + React + Tailwind starter site for the "Organized & Unbothered" coaching program.

## Quick start (locally)
1. `npm install`
2. `npm run dev` — open http://localhost:5173

## Build (production)
1. `npm run build`
2. `npm run preview` (optional to test locally)

## Deploy to Vercel (recommended)
1. Create a GitHub repository and push this project.
2. Go to https://vercel.com — sign in and import the GitHub repo.
3. Set Framework Preset: **Vite**; Root Directory: `/`.
4. Build command: `npm run build`, Output Directory: `dist`.
5. After deployment, go to **Settings → Domains** and add your custom domain: **organizedunbothered.com**.
6. Vercel will provide DNS records — add them at your domain registrar and wait for propagation.

## Notes
- Replace Calendly and Mailchimp placeholder URLs in `src` files when ready.
- Add your logo at `/src/assets/logo.svg` or replace `favicon.svg`.
- Coming Soon page available at `/coming-soon` (and can be used as your homepage while building).
