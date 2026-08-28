# Ice Diamonds Antwerp — clubwebsite

React + Vite site for the ice skating club. The centerpiece is the training/event calendar; the site
also has contact forms, the brevet documents and the club policy documents.

## Commands

| Command | What it does |
| --- | --- |
| `npm install` | Install dependencies (needed once after cloning) |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build into `dist/` — use this to verify changes compile |
| `npm run lint` | ESLint (note: the repo has pre-existing warnings) |
| `npm run deploy` | Builds, then uploads `dist/` to the web host over FTP |

## Deploying

**Use `npm run deploy`. Do not upload by hand with FileZilla.**

`npm run deploy` runs `predeploy` (a production build) first, then `deploy-ftp.js`, which uploads
everything in `dist/` to the host. It does the same work as the manual FileZilla routine, in one
command, without the risk of forgetting a file.

Credentials live in `.env` in the project root. The file is gitignored and must never be committed.
It needs these keys:

```
FTP_HOST=
FTP_PORT=
FTP_USER=
FTP_PASSWORD=
FTP_REMOTE_ROOT=
```

The same `.env` also holds the Airtable keys the app reads at build time (`VITE_AIRTABLE_PAT`,
`VITE_AIRTABLE_BASE`, `VITE_AIRTABLE_TABLE`). A fresh clone will not build a working site without
them.

### Things to know about the deploy

- `deploy-ftp.js` sets `deleteRemote: true`, so it **wipes the remote root before uploading**. The
  site is down for the minute or two the upload takes, and anything on the server that is not in
  `dist/` is deleted.
- That wipe is what removes files you have deleted locally. Without it, an old document stays
  reachable by its direct URL even when nothing on the site links to it any more.
- Deleting the remote root does not break page routing here. The app uses `HashRouter`
  (`src/main.jsx`), so URLs carry a `#` and the server never needs rewrite rules for deep links.
- Only `dist/` is uploaded, so `.env` and the source files never reach the server.

### Possible improvements

- Turn off `deleteRemote` and upload over the top instead, deleting stale files explicitly. That
  removes the downtime window.
- Deploy from GitHub Actions on every push to `master`, using an incremental FTP sync that uploads
  only changed files. Credentials would move to repository secrets and FileZilla would no longer be
  needed at all.

## Stack

- **Calendar** — react-big-calendar with `ical` parsing and luxon/moment. The ical feed → events →
  display pipeline is the core feature. Be careful with timezone handling.
- **Data import** — papaparse (CSV) and xlsx (Excel) for member and schedule data.
- **Forms** — react-hook-form with @emailjs/browser for sending.
- **UI** — Tailwind CSS, framer-motion, lucide-react, react-router-dom.

## Project layout

- `src/pages/` — one component per route, wired up in `src/App.jsx`.
- `src/components/` — navbar, footer, intro animation, PDF pop-up.
- `src/util/translations.jsx` — Dutch, English and French strings, via `useTranslation`.
- `public/` — static files served as-is, including images and PDFs.
- `public/documenten/` — the club policy PDFs shown on the Beleid page.

## Documents

The policy documents on `/policies` open in a pop-up viewer (`src/components/PdfModal.jsx`) instead
of downloading. To add or replace one, drop the PDF in `public/documenten/` and add an entry to the
`documents` array at the top of `src/pages/Policies.jsx`. Use lowercase filenames without spaces.

Everything the club hands out should be a PDF, not a Word file, so visitors cannot edit the
document and pass it on as the club's version.
