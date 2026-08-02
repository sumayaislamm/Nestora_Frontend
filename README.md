# Nestora 🏠 — Rental Property Marketplace (Frontend)

Nestora is a modern, responsive rental property marketplace built with **Next.js App Router**. Landlords can list and manage properties, tenants can browse listings and rent them, and admins moderate the entire platform. This repository contains the **frontend only** — it consumes a separate backend REST API.

---

## ✨ Features

### Public
- Responsive property grid with search & filters (location, price, type, amenities)
- Property details page with image gallery, amenities, and landlord info
- Loading skeletons and error boundaries on every route segment

### Tenant
- Register / Login with role selection
- Submit rental requests on a property
- Track request status (`Pending`, `Approved`, `Rejected`, `Active`, `Completed`)
- Pay via **Stripe Checkout** once a request is approved
- View payment history and individual payment details
- Leave reviews for completed rentals

### Landlord
- Dashboard overview (properties, requests, earnings)
- Create / edit / delete property listings (with image URL uploads)
- Approve / reject incoming rental requests with optimistic UI updates

### Admin
- Platform-wide statistics (users, properties, requests)
- Manage users — ban / unban accounts
- Moderate all properties and rental requests across the platform

---

## 🧱 Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js (App Router), Next.js 16 |
| Language | TypeScript |
| Styling | Tailwind CSS + Shadcn UI |
| Forms & Validation | React Hook Form + Zod |
| Notifications | Sonner (toast) |
| Auth | JWT (httpOnly cookies) + Next.js `proxy.ts` (route protection) |
| Payments | Stripe Checkout |
| Data Fetching | Native `fetch` via Server Actions / Server Components |

---

## 📁 Project Structure

```
app/
├── (auth)/                     # Login & Register
│   ├── login/
│   └── register/
├── (public)/                   # Public marketing & browsing pages
│   ├── page.tsx                 # Home
│   ├── properties/              # Browse & filter properties
│   │   └── [id]/                 # Property details + gallery
│   ├── about/
│   ├── contact/
│   └── services/
├── (dashboard)/                # Protected, role-based dashboards
│   ├── tenant-dashboard/
│   │   ├── requests/            # Rental requests + payment flow
│   │   ├── payments/            # Payment history & details
│   │   └── reviews/             # Submit a review
│   ├── landlord-dashboard/
│   │   ├── add-property/
│   │   ├── edit-property/[id]/
│   │   ├── my-properties/
│   │   └── requests/            # Approve / reject requests
│   └── admin-dashboard/
│       ├── manage-users/        # Ban / unban
│       ├── manage-properties/   # Moderation
│       └── manage-rentals/      # Moderation
├── payment-success/             # Stripe success redirect
├── payment-cancel/              # Stripe cancel redirect
├── service/                     # API service functions (fetch wrappers)
├── schemas/                     # Zod validation schemas
├── types/                       # Shared TypeScript types
└── utils/                       # JWT helpers, etc.

components/                      # Shared UI (navbar, footer, home sections, shadcn primitives)
proxy.ts                         # Route protection (Next.js 16 middleware equivalent)
```

---

## 🔐 Authentication & Route Protection

- On login, the backend issues an `accessToken` and `refreshToken`, which are stored as **httpOnly cookies** by a Next.js Server Action.
- `proxy.ts` (the Next.js 16 replacement for `middleware.ts`) reads the cookie on every request, decodes the JWT, and:
  - Redirects unauthenticated users away from protected routes
  - Redirects authenticated users away from `/login` and `/register`
  - Enforces role-based access to `/tenant-dashboard`, `/landlord-dashboard`, and `/admin-dashboard`

---

## 💳 Payment Flow

1. Tenant's rental request is approved by the landlord
2. Tenant clicks **Pay Now** → a Server Action calls `POST /payments/create`
3. Backend returns a Stripe Checkout session URL → user is redirected to Stripe
4. On completion, Stripe redirects to:
   - `/payment-success` → confirms the payment via `POST /payments/confirm`
   - `/payment-cancel` → shown if the user cancels checkout

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Configure environment variables

Copy `.env.example` to `.env` and fill in the values:

```
BACKEND_API_URL=http://localhost:5000
NEXT_PUBLIC_API_URL=http://localhost:5000/api

JWT_SECRET=your_access_token_secret
JWT_REFRESH_SECRET=your_refresh_token_secret
JWT_ACCESS_EXPIRES_IN=30d
JWT_REFRESH_EXPIRES_IN=30d
```

> ⚠️ `JWT_SECRET` / `JWT_REFRESH_SECRET` must match the secrets used by your backend, since the frontend decodes the JWT locally in `proxy.ts` to read the user's role.

### 3. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production
```bash
npm run build
npm run start
```

---

## 🔑 Test Credentials

| Role | Email | Password |
|---|---|---|
| Admin | `admin@rentnest.com` | `admin123` |
| Landlord | _(add sample landlord email)_ | _(add password)_ |
| Tenant | _(add sample tenant email)_ | _(add password)_ |

---

## 🌐 API Integration

See [`API_INTEGRATION.md`](./API_INTEGRATION.md) for the full mapping of frontend components to backend endpoints.

---

## 🛡️ Error Handling

- Route-level `error.tsx` boundaries for the home, admin, landlord, and tenant dashboards
- Global `not-found.tsx` for 404s
- Toast notifications (Sonner) for all API success/failure feedback
- Inline form validation errors via Zod + React Hook Form

---

## 📦 Deployment

Recommended: [Vercel](https://vercel.com)

Make sure to set the same environment variables (`BACKEND_API_URL`, `NEXT_PUBLIC_API_URL`, `JWT_SECRET`, `JWT_REFRESH_SECRET`) in your Vercel project settings.