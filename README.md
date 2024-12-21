# Next Firebase Auth

A **Next.js 13** app demonstrating **Firebase Authentication** (with Google OAuth) and **Tailwind CSS** styling. This starter kit aims to give you a quick baseline for building modern, authenticated web applications using the [Next.js App Router](https://nextjs.org/docs/app).

---

## Features

- **Next.js 13 App Router** architecture
- **Firebase Auth** integration (Google Sign-In / Sign-Out)
- **React Context** for global user state (no props drilling)
- **Tailwind CSS** for rapid UI styling
- Organized file structure with separate directories for:
  - `lib/` (Firebase initialization)
  - `context/` (UserContext for auth state)
  - `utils/` (auth-related functions)
- Sample pages:
  - **Home** (`/`): Basic landing page
  - **Sign In** (`/sign-in`): Google OAuth sign-in page
- Simple header with user email display and sign-out button
