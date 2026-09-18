# Node Backend – OAuth Authentication Server

This project is an **Express-based Node.js backend** responsible for **owning OAuth authentication**.

It is designed to:
- run independently from the frontend
- compile TypeScript to a `build/` directory
- watch and rebuild on changes
- restart the server automatically during development

---

## Prerequisites

- Node.js (LTS recommended)
- npm

---

## Installation

Clone the repository, then install dependencies:

```bash
npm install
```

## Install development tooling (if not already present in devDependencies):
```bash
npm install --save-dev concurrently nodemon typescript
```

concurrently is used to run the TypeScript compiler and the server at the same time during development.

Clean install (recommended if you hit issues)

## If you encounter module resolution or binary errors, reset everything:
```bash
rm -rf node_modules package-lock.json
npm install
Verify tooling
```

## Before running the server, confirm the local binaries resolve correctly:
```bash
npx tsc --version
npx nodemon --version
```

If either command fails, the dependency is missing or corrupted.

## Development

Start the development environment:
```bash
npm run start
```

This will:
```bash
run tsc -w to compile TypeScript in watch mode
```

run nodemon build/index.js to restart the server on rebuild

execute both processes concurrently via npm scripts

## Scripts overview

start
Runs the TypeScript watcher and the Express server together

start:build
Runs the TypeScript compiler in watch mode

start:run
Runs the compiled server with Nodemon

debug
Runs the server only (no TypeScript watch)

cron
Runs the cron worker entry point

## Architecture notes

TypeScript is compiled to build/
Runtime always executes compiled JavaScript
No global binaries are assumed
All tooling is resolved locally via npm scripts
Designed to be Docker-compatible without dev-only coupling
