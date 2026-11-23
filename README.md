# The Hacktivists Security website

React + Vite + react-router only (no other UI libraries).

    npm install
    npm run dev      # local
    npm run build    # outputs dist/

Deploy `dist/` to the domain. `public/_redirects` is the SPA fallback for Netlify/Cloudflare Pages; on other hosts rewrite all paths to `/index.html`.

Content lives in `src/data/` (`services.json`, `trainings.json`, `company.json`), copied unchanged from the supplied data bundle.
Page copy is in `src/Home.jsx`, `src/ServicePage.jsx`, `src/Training.jsx`, `src/layout.jsx`.
Routes: `/`, `/about`, `/contact`, `/solutions`, `/services`, `/services/:id`, `/training`, `/training/:id`. Page-change wait: `WAIT` in `src/main.jsx`.
Forms have no server: they open the visitor\x27s email app with the request filled in.
Overview copy for each service/solution page: `src/data/overview.js`; animated graphics: `src/Motion.jsx`; industries marquee + isometric icons: `src/Industry.jsx`.
