# ice-skating-club-website — club site with calendar (React + Vite)

Website for an ice skating club. The centerpiece is the training/event calendar; also has forms and data imports.

## Commands
- `npm run dev` — dev server
- `npm run build` — production build; use this to verify changes compile
- `npm run lint` — ESLint
- `npm run deploy` — builds then uploads via FTP (`deploy-ftp.js`, credentials in `.env`) — **never run unless explicitly asked**

## Stack
- **Calendar**: react-big-calendar + `ical` parsing + luxon/moment for dates — the calendar pipeline (ical feed → events → display) is the core feature; be careful with timezone handling
- **Data import**: papaparse (CSV) and xlsx (Excel) for member/schedule data
- Forms: react-hook-form + @emailjs/browser for sending
- Tailwind CSS (postcss config), framer-motion, lucide-react, react-router-dom
- Source in `src/`, static files in `public/`

## Conventions
- Customer-facing site: verify visual changes in the browser before calling them done
- Don't commit or print secrets from `.env` (FTP + EmailJS credentials)
