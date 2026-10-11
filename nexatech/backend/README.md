# NexaTech IT Solutions — Backend API

Production-ready backend API service built with **Node.js, Express, TypeScript, Mongoose, and Zod**.

## Architecture Highlights
- **Strict Validation**: Zod request schema validation with field-level error mapping.
- **Resilient Database Layer**: Mongoose ODM with automated fallback to resilient in-memory storage mode when MongoDB daemon is not running locally.
- **Security & Protection**:
  - `helmet` security headers.
  - Restricted CORS configured against frontend origin.
  - Dual-tier `express-rate-limit` (200 requests/15m general, 10 inquiries/hr).
- **Email Delivery Service**: Configurable Nodemailer integration for automated inquiry alerts without leaking secrets in client bundles.
- **Centralized Error Handling**: Unified 404 and 500 error handlers with structured logging.
- **Comprehensive Automated Tests**: Vitest + Supertest covering health, project retrieval, validation edge cases, and 404 responses.

## API Endpoints

### 1. System Health
- `GET /api/health`
  - Returns service status, uptime, database mode, and server timestamp.

### 2. Portfolio Projects
- `GET /api/projects`
  - Retrieves all portfolio projects (Zaya Travels, CRM Platform, GoyaFly, TaskFlow).
- `GET /api/projects/:slug`
  - Retrieves specific project by slug. Returns 404 if not found.

### 3. Client Inquiries
- `POST /api/inquiries`
  - Validates full name (min 2 chars), email, service, optional budget, and project details (min 10 chars).
  - Persists inquiry and triggers email notification.
  - Rate limited to 10 submissions per hour per IP.

## Getting Started

```bash
# Install dependencies
npm install

# Run automated tests
npm run test

# Start development server with live reload
npm run dev

# Build production TypeScript bundle
npm run build

# Start production server
npm run start
```

## Environment Variables (.env)
See `.env.example`:
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://127.0.0.1:27017/nexatech
FRONTEND_URL=http://localhost:5173
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-app-password
CONTACT_TO_EMAIL=hello@nexatech.in
```
