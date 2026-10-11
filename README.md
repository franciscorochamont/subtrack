# SubTrack

> Your money, under control.

SubTrack is a small web app for keeping track of recurring subscriptions (Netflix, Disney+, Spotify…) and seeing how much they cost you per day, month and year. The UI is in Spanish and amounts are shown in Mexican pesos (MXN).

> **Status:** early work in progress. The layout, stat cards, subscription card and "add subscription" modal are built, but data is still hardcoded and nothing is saved yet.

## Features

- **Expense summary**: daily, monthly and yearly spending cards.
- **Subscription cards**: name, billing cycle, price, next charge date and a renewal reminder.
- **Add subscription modal**: a native `<dialog>` with fields for service name, price, billing cycle (`Mensual` / `Anual`) and billing date. Opened from the floating **+** button.

### Roadmap

- [ ] Handle the form submit and keep subscriptions in state
- [ ] Calculate the daily, monthly and yearly totals from real data
- [ ] Delete subscriptions
- [ ] Save data in `localStorage`
- [ ] Work out the next charge date and "renews in X days" automatically

## Tech stack

- [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vite.dev)
- [Tailwind CSS v4](https://tailwindcss.com) (via `@tailwindcss/vite`)
- [lucide-react](https://lucide.dev) for icons
- [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) font

## Getting started

You need [Node.js](https://nodejs.org) (20+) and [pnpm](https://pnpm.io).

```bash
git clone https://github.com/franciscorochamont/subtrack.git
cd subtrack
pnpm install
pnpm dev
```

Then open the URL Vite prints (usually http://localhost:5173).

### Scripts

| Command        | What it does                              |
| -------------- | ----------------------------------------- |
| `pnpm dev`     | Start the dev server with hot reload      |
| `pnpm build`   | Type-check and build for production (`dist/`) |
| `pnpm preview` | Serve the production build locally        |
| `pnpm lint`    | Run ESLint                                |

## Project structure

```
src/
├── App.tsx                  # Page layout and modal state
├── main.tsx                 # React entry point
├── index.css                # Tailwind import and theme tokens
├── components/
│   ├── Header.tsx           # Logo and tagline
│   ├── StatCardExpense.tsx  # Daily / monthly / yearly total card
│   ├── SuscriptionCards.tsx # Single subscription card
│   ├── FloatingAddButton.tsx# "+" button that opens the modal
│   ├── Modal.tsx            # "Add subscription" dialog and form
│   └── form/                # Reusable form pieces (FormField, Input)
├── data/
│   └── ciclo.ts             # Billing cycle options
├── types/
│   └── index.ts             # Shared TypeScript types
└── utils/
    └── formatCurrency.ts    # MXN currency formatting
```

## Styling

Colors and fonts are defined as Tailwind theme tokens in [`src/index.css`](src/index.css) using `@theme`, so they can be used as normal utilities (`bg-cards`, `text-primary`, `border-cards-border`, `font-plus`, …). To change the palette, edit the values there instead of hardcoding colors in components.

## Contributing

Work happens on feature branches (`feat-...`) that get merged into `main` through pull requests. Commit messages follow [Conventional Commits](https://www.conventionalcommits.org) (`feat:`, `fix:`, …).
