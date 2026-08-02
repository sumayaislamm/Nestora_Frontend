# Nestora Frontend API Integration Documentation

## Project Overview

Nestora is a rental marketplace frontend built with Next.js App Router.
The frontend communicates with the Nestora backend API for authentication,
property management, rental requests, payments, and admin operations.

---

# Authentication APIs

| Frontend Feature | Component/Page | Backend Endpoint | Method |
|---|---|---|---|
| User Login | Login Page | /api/auth/login | POST |
| User Registration | Register Page | /api/auth/register | POST |

---

# Property APIs

| Frontend Feature | Component/Page | Backend Endpoint | Method |
|---|---|---|---|
| View All Properties | Home / Properties Page | /api/properties | GET |
| Search Properties | Properties Search | /api/properties | GET |
| Property Details | Property Details Page | /api/properties/:id | GET |
| Create Property | Landlord Add Property | /api/properties | POST |
| Update Property | Landlord Edit Property | /api/properties/:id | PATCH |
| Delete Property | Landlord Property Management | /api/properties/:id | DELETE |
| My Properties | Landlord Dashboard | /api/properties/my-properties | GET |

---

# Tenant APIs

| Frontend Feature | Component/Page | Backend Endpoint | Method |
|---|---|---|---|
| Rental Requests | Tenant Dashboard | /api/rentals | GET |
| Create Rental Request | Property Details | /api/rentals | POST |
| Payment History | Tenant Dashboard | /api/payments | GET |

---

# Payment APIs

| Frontend Feature | Component/Page | Backend Endpoint | Method |
|---|---|---|---|
| Create Payment Session | Payment Page | /api/payments/create | POST |
| Payment History | Tenant Payment History | /api/payments | GET |
| Single Payment Details | Payment Details | /api/payments/:id | GET |

Payment providers:
- Stripe

Payment flow:

Tenant Request Approved
        ↓
Click Pay Now
        ↓
Create Payment API
        ↓
Redirect to Payment Gateway
        ↓
Success / Cancel Page

---

# Landlord APIs

| Frontend Feature | Component/Page | Backend Endpoint | Method |
|---|---|---|---|
| View Own Properties | Landlord Dashboard | /api/properties/my-properties | GET |
| Create Property | Add Property Form | /api/properties | POST |
| Update Property | Edit Property Form | /api/properties/:id | PATCH |
| Delete Property | Property Management | /api/properties/:id | DELETE |
| Manage Rental Requests | Landlord Requests | /api/rentals/:id | PATCH |

---

# Admin APIs

| Frontend Feature | Component/Page | Backend Endpoint | Method |
|---|---|---|---|
| Dashboard Statistics | Admin Dashboard | /api/admin/users | GET |
| Manage Users | Admin Manage Users | /api/admin/users | GET |
| Ban/Unban User | Admin Manage Users | /api/admin/users/:id | PATCH |
| Manage Properties | Admin Properties | /api/admin/properties | GET |
| Manage Rentals | Admin Rentals | /api/admin/rentals | GET |

---

# Authentication Method

Authentication uses JWT.

Token storage:
- accessToken stored in HTTP-only cookie
- refreshToken stored in HTTP-only cookie

Protected routes:
- Tenant Dashboard
- Landlord Dashboard
- Admin Dashboard

---

# Error Handling

Frontend handles API errors using:

- Toast notifications
- Loading states
- Error boundaries
- Form validation messages

---

# Frontend Technologies

- Next.js App Router
- TypeScript
- Tailwind CSS
- Shadcn UI
- Sonner Toast
- JWT Authentication