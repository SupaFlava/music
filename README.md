# Scratch Bank

A full-stack music sharing app built with Vue 3 and Firebase — users can register, upload MP3 tracks, browse and stream a shared library, and leave comments on songs.

## Features

- **Authentication** — email/password registration and login via Firebase Auth, with form validation (vee-validate) and a tabbed login/register modal
- **Drag-and-drop uploads** — MP3 upload to Firebase Storage with live per-file progress bars, MIME-type and file-size validation
- **Streaming player** — persistent bottom player with play/pause, seek/scrub, and a running duration display, backed by a Pinia store
- **Song management** — users can edit or delete their own uploaded tracks, with ownership enforced both client-side and via Firestore security rules
- **Comments** — real-time comment threads per song, sortable by newest/oldest, backed by Firestore
- **Infinite scroll** — the home feed paginates song results as the user scrolls
- **Internationalization** — English/Dutch locale toggle (vue-i18n)
- **Security-conscious by design** — Firestore/Storage rules require authentication, enforce per-user ownership, and cap file size and content type server-side; a Cloud Billing budget alert guards against unexpected usage costs

## Tech Stack

- **Frontend:** Vue 3 (Options API), Vue Router, Pinia, vue-i18n, vee-validate, Tailwind CSS
- **Backend:** Firebase Authentication, Cloud Firestore, Firebase Storage
- **Tooling:** Vite

## Getting Started

### Prerequisites

- Node.js and npm
- A Firebase project with Authentication (Email/Password), Firestore, and Storage enabled

### Setup

1. Clone the repo and install dependencies:
   ```bash
   git clone <repo-url>
   cd <repo-folder>
   npm install
   ```

2. Copy `.env.example` to `.env` and fill in your Firebase project's config values:
   ```bash
   cp .env.example .env
   ```

3. Deploy the Firestore and Storage security rules in `firestore.rules` and `storage.rules` from the Firebase Console (or via the Firebase CLI), so uploads and writes are properly restricted to authenticated, owning users.

4. Run the dev server:
   ```bash
   npm run dev
   ```

## What I'd build next

- Migrate from the (now deprecated) Firebase v8 namespaced SDK to the v9 modular SDK
- Add search/filtering by genre and a proper collapsible mobile nav
- Add automated tests around the upload flow and auth store
- TypeScript conversion

## License

This project is for portfolio/demonstration purposes.