# The Hacktivists website

React + Vite + react-router only (no other UI libraries).

    npm install
    npm run dev      # local
    npm run build    # outputs dist/

Deploy `dist/` to the domain. `public/_redirects` is the SPA fallback for Netlify/Cloudflare Pages; on other hosts rewrite all paths to `/index.html`.

Pages: Home, Security Services, Project Quotation, Training, Contact, 404.
Content lives in `src/data.js`. Page transition delay: `WAIT` in `src/main.jsx`.
