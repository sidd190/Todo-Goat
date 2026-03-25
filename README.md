# todo-evolution

> One app. 12 levels. Every major domain of software engineering.

This repository is the companion codebase for the **12 Levels of Todo Apps** content series. The same todo application is built and rebuilt at progressively higher levels of engineering complexity — from 47 lines of vanilla HTML to a 12,000-line Rust storage engine — demonstrating real skills across Web2, DevOps, AI/ML, Web3, Mobile, and Systems programming.

Each level lives on its own branch and is never thrown away. You can `git log` the entire evolution.

---

## The concept

Most tutorial series teach one thing. This one teaches everything — by constraining the problem domain to something trivially simple (a todo list) and making the *infrastructure* the lesson.

| Level | Name | Domain | Stack |
|-------|------|--------|-------|
| 1 | Static todo | Web fundamentals | HTML · CSS · Vanilla JS |
| 2 | Component architecture | Modern frontend | React · Vite · hooks |
| 3 | Fullstack todo | Client-server | Node.js · Express · MongoDB |
| 4 | Type-safe todo | Production quality | TypeScript (fullstack) |
| 5 | Authenticated todo | Security | JWT · bcrypt · httpOnly cookies |
| 6 | CLI todo | Developer tooling | Node CLI · commander.js |
| 7 | Mobile todo | Cross-platform | React Native · Expo |
| 8 | Real-time todo | Distributed systems | Socket.io · Redis · Docker · Nginx |
| 9 | Beautiful UI/UX todo | Product design | Tailwind v4 · Framer Motion |
| 10 | AI todo | AI / ML | OpenAI API · embeddings · pgvector |
| 11 | Web3 todo | Decentralized apps | Solidity · Hardhat · Ethers.js |
| 12 | Systems-level todo | Low-level systems | Rust · custom storage engine |

---

## Repository structure

```
todo-evolution/
├── README.md
└── branches:
    ├── level/01-static
    ├── level/02-react
    ├── level/03-fullstack
    ├── level/04-typescript
    ├── level/05-auth
    ├── level/06-cli
    ├── level/07-mobile
    ├── level/08-realtime
    ├── level/09-uiux
    ├── level/10-ai
    ├── level/11-web3
    └── level/12-systems
```

Every branch contains the complete, working application for that level. Each is independently deployable. No level is deleted — the git history tells the whole story.

---

## Getting started

Clone the repo and check out whichever level you want to run:

```bash
git clone https://github.com/yourusername/todo-evolution.git
cd todo-evolution

# See all levels
git branch -a

# Jump to a specific level
git checkout level/03-fullstack
```

Each branch has its own `README.md` with level-specific setup instructions, environment variables, and run commands.

---

## Level details

### Level 1 — Static todo
**Branch:** `level/01-static`

No build step. No dependencies. Open `index.html` in a browser.

Concepts: DOM manipulation, event handling, `localStorage`, progressive enhancement.

```bash
# No install needed — just open the file
open index.html
```

**Benchmark:** 97 lines · $0/month · deploys by drag and drop

---

### Level 2 — Component architecture
**Branch:** `level/02-react`

The same app rebuilt in React. Introduces component thinking, unidirectional data flow, and the virtual DOM.

Concepts: components, props, `useState`, `useEffect`, React DevTools.

```bash
npm install
npm run dev
```

**Benchmark:** ~320 lines · $0/month · Vite HMR

---

### Level 3 — Fullstack todo
**Branch:** `level/03-fullstack`

Todos now live in a real database and survive a browser clear. Introduces the client-server model and REST APIs.

Concepts: REST CRUD, Express routing, Mongoose schemas, HTTP lifecycle.

```bash
# Backend
cd server && npm install && npm run dev

# Frontend
cd client && npm install && npm run dev
```

Requires: MongoDB (local or Atlas), `.env` with `MONGO_URI`.

**Benchmark:** ~820 lines · $5/month · Railway deploy

---

### Level 4 — Type-safe todo
**Branch:** `level/04-typescript`

TypeScript added to both frontend and backend, with a shared `types` package so the compiler catches API shape mismatches at build time.

Concepts: interfaces, DTOs, `tsconfig.json`, shared monorepo types, type narrowing.

```bash
npm install
npm run build   # compiles both packages
npm run dev
```

**Benchmark:** ~1,100 lines · $5/month · zero runtime type errors

---

### Level 5 — Authenticated todo
**Branch:** `level/05-auth`

Each user now has their own private todo list. Implements JWT-based auth with bcrypt password hashing and httpOnly cookie storage.

Concepts: authentication vs authorization, JWT signing/verification, bcrypt cost factor, protected middleware, OWASP top 10.

```bash
npm install
# Set JWT_SECRET and MONGO_URI in .env
npm run dev
```

**Benchmark:** ~1,400 lines · $5/month · user-scoped data

---

### Level 6 — CLI todo
**Branch:** `level/06-cli`

No browser. No server. A todo app that lives entirely in the terminal, installable globally via `npm link`.

Concepts: `process.argv`, command parsing, local JSON file storage, terminal UX with chalk.

```bash
npm install
npm link          # installs 'todo' globally
todo add "finish the series"
todo list
todo done 1
```

**Benchmark:** ~200 lines · $0/month · <100ms startup

---

### Level 7 — Mobile todo
**Branch:** `level/07-mobile`

The same React component skills, now running natively on iOS and Android via React Native and Expo.

Concepts: `View` vs `div`, `AsyncStorage`, gesture handlers, Expo Router, running on a physical device.

```bash
npm install
npx expo start
# Scan QR code with Expo Go on your phone
```

**Benchmark:** ~600 lines · $0/month · iOS + Android from one codebase

---

### Level 8 — Real-time todo
**Branch:** `level/08-realtime`

Multiple users see each other's changes live. Scaled horizontally behind Nginx with Redis pub/sub syncing events across Node processes.

Concepts: WebSockets, Socket.io rooms, Redis pub/sub, horizontal scaling, Docker Compose, Nginx load balancing.

```bash
docker compose up --build
# App at http://localhost:80
# Open in two browsers to see real-time sync
```

**Benchmark:** ~4,200 lines · $18/month · 12,000 RPS · handles live public traffic

---

### Level 9 — Beautiful UI/UX todo
**Branch:** `level/09-uiux`

The todo app as a real product. Fluid animations, keyboard shortcuts, and a design system that makes people want to use it.

Concepts: Tailwind utility-first CSS, Framer Motion `AnimatePresence`, spring physics, accessible keyboard navigation.

```bash
npm install
npm run dev
```

Keyboard shortcuts: `n` new todo · `Enter` confirm · `Escape` cancel · `d` delete selected.

**Benchmark:** ~2,100 lines · $5/month · ~85kb bundle

---

### Level 10 — AI todo
**Branch:** `level/10-ai`

Type "plan my week" and the AI turns it into structured todos. Semantic search across your list using embeddings and pgvector.

Concepts: LLM structured outputs, text embeddings, cosine similarity, vector databases, RAG patterns, prompt engineering.

```bash
npm install
# Set OPENAI_API_KEY and DATABASE_URL in .env
npm run dev
```

Requires: PostgreSQL with pgvector extension, OpenAI API key.

**Benchmark:** ~6,800 lines · $40/month (includes API tokens) · ~80 RPS (LLM-bound)

---

### Level 11 — Web3 on-chain todo
**Branch:** `level/11-web3`

Todos stored on the Ethereum blockchain. No server. No database. Just a smart contract and a wallet.

Concepts: Solidity mappings and arrays, Hardhat local network, Ethers.js contract interaction, MetaMask wallet auth, gas costs.

```bash
npm install

# Run local blockchain + deploy contract
npx hardhat node
npx hardhat run scripts/deploy.js --network localhost

# Start frontend
cd client && npm run dev
```

Deploy to testnet: `npx hardhat run scripts/deploy.js --network sepolia`

**Benchmark:** ~3,400 lines · $0 server cost · ~$0.02 per add (gas) · fully decentralized

---

### Level 12 — Systems-level todo
**Branch:** `level/12-systems`

A custom binary storage engine written in Rust. No ORM, no managed database — raw file I/O, a B-tree index, and memory-mapped reads.

Concepts: Rust ownership and borrowing, binary file formats, B-tree indexing, `mmap`, concurrent I/O with `tokio`, unsafe Rust basics.

```bash
cargo build --release
cargo run -- add "build something that lasts"
cargo run -- list
cargo run -- done 1

# Or run as an HTTP server
cargo run -- serve --port 3000
```

**Benchmark:** ~12,000 lines · $12/month (bare metal VPS) · 50,000 RPS

---

## The three twists

This series is built around three deliberate constraints that make it more than a tutorial playlist:

**Twist 1 — One repo, one history.** Every level is a branch of this repo. The git log is the story. `git log --oneline --all` shows the entire evolution from 47 lines to 12,000.

**Twist 2 — Benchmarks at every level.** Each level ends with a live benchmark: lines of code, requests per second, monthly cost, deploy time. The numbers are the content.

**Twist 3 — Live traffic stress tests.** For levels 8–12, the app is opened to real public traffic during the stream. Survival (or failure) is the most educational moment in each episode.

---

## Benchmark summary

| Level | LOC | RPS | $/month | Complexity |
|-------|-----|-----|---------|------------|
| 1 | 97 | — | $0 | Beginner |
| 2 | 320 | — | $0 | Junior |
| 3 | 820 | 300 | $5 | Junior+ |
| 4 | 1,100 | 280 | $5 | Mid-level |
| 5 | 1,400 | 280 | $5 | Mid-level |
| 6 | 200 | — | $0 | Mid-level |
| 7 | 600 | — | $0 | Mid-level |
| 8 | 4,200 | 12,000 | $18 | Senior |
| 9 | 2,100 | — | $5 | Mid-level |
| 10 | 6,800 | 80 | $40 | Senior+ |
| 11 | 3,400 | — | $0 server | Senior |
| 12 | 12,000 | 50,000 | $12 | Staff |

---

## Key resources

Each level's branch README links to the specific docs used during the stream. The core references across all levels:

- [MDN Web Docs](https://developer.mozilla.org) — Levels 1–2
- [react.dev](https://react.dev/learn) — Levels 2, 7, 9
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) — Level 4
- [OWASP Top 10](https://owasp.org/www-project-top-ten/) — Level 5
- [Socket.io docs](https://socket.io/docs/v4/) — Level 8
- [Redis pub/sub](https://redis.io/docs/latest/develop/interact/pubsub/) — Level 8
- [Tailwind CSS](https://tailwindcss.com/docs) — Level 9
- [Motion (Framer)](https://motion.dev/docs/react-animation) — Level 9
- [OpenAI platform docs](https://platform.openai.com/docs) — Level 10
- [Solidity docs](https://docs.soliditylang.org) — Level 11
- [The Rust Book](https://doc.rust-lang.org/book/) — Level 12

---

## Content series

This repo accompanies a streaming and YouTube series. Each level was built live, then edited into a standalone video.

**Final video title:** *12 Levels of Todo Apps (Beginner to God Tier)*

Short-form clips from each stream are available on YouTube Shorts, Instagram Reels, and Twitter/X. Follow along for the next level.

---

## Contributing

This is a learning-focused repo. If you spot an error or a better way to implement something at a given level, open an issue on that level's branch. PRs are welcome for bug fixes. New features are intentionally out of scope — the constraints are the point.

---

## License

MIT — use any of this code however you want. A star on the repo is appreciated but not required.

---

*Built level by level. Committed to the same repo. The git history tells the whole story.*