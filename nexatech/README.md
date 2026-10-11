# NexaTech IT Solutions — Complete Full-Stack Agency Website

A complete, production-oriented, responsive full-stack website for **NexaTech IT Solutions**, a modern Indian IT development agency delivering custom software, MERN stack web applications, mobile apps, and AI automation for startups and growing businesses globally.

---

## 1. Project Architecture

```
nexatech/
├── frontend/
│   ├── public/
│   │   └── favicon.svg              # Custom NexaTech SVG brand mark
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.tsx           # Brand navbar with mobile drawer
│   │   │   ├── Footer.tsx           # Dark navy footer matching reference image
│   │   │   ├── ProjectCard.tsx      # Reusable project card with tags & actions
│   │   │   └── ui/                  # Badge, Button, Modal, SectionHeading, Icons
│   │   ├── sections/
│   │   │   ├── Hero.tsx             # Exact copy, badges, 2 CTAs, trusted strip
│   │   │   ├── HeroVisual.tsx       # Laptop dashboard + mobile device mockup
│   │   │   ├── Services.tsx         # 7 services matching 4+3 card layout
│   │   │   ├── FeaturedProjects.tsx # 4 portfolio projects & detail modal
│   │   │   ├── WorkProcess.tsx      # Discover, Plan, Build, Launch flow
│   │   │   ├── WhyUsAndTech.tsx     # 3-column block: Why Us, Tech Stack & CTA card
│   │   │   ├── Testimonials.tsx     # Clean evaluation feedback cards
│   │   │   ├── Faq.tsx              # Accessible accordion with keyboard nav
│   │   │   └── Contact.tsx          # Mountain backdrop, direct info & inquiry form
│   │   ├── data/                    # Typed datasets for all sections
│   │   ├── services/
│   │   │   └── api.ts               # Typed client connecting to backend
│   │   ├── types/                   # TypeScript interfaces
│   │   ├── utils/                   # cn helper
│   │   ├── App.tsx                  # Main app assembly
│   │   ├── index.css                # Tailwind CSS v4 styling & typography
│   │   └── main.tsx                 # Vite React entry point
│   ├── .env.example
│   ├── package.json
│   └── README.md
├── backend/
│   ├── src/
│   │   ├── config/                  # Environment (Zod) and MongoDB setup
│   │   ├── controllers/             # Health, Projects, and Inquiries controllers
│   │   ├── middleware/              # Helmet, CORS, Rate Limiters, Zod validation, Error handlers
│   │   ├── models/                  # Mongoose models for Inquiries and Projects
│   │   ├── routes/                  # Express routes (/health, /projects, /inquiries)
│   │   ├── services/                # Email (Nodemailer), Project & Inquiry services
│   │   ├── validators/              # Zod validation schemas
│   │   ├── utils/                   # Structured logger
│   │   ├── app.ts                   # Express application setup
│   │   └── server.ts                # Server entrypoint with graceful shutdown
│   ├── tests/                       # Vitest + Supertest automated test suite
│   ├── .env.example
│   ├── package.json
│   └── README.md
├── .gitignore
└── README.md
```

---

## 2. Technology Stack

### Frontend
- **Framework**: React 19 + Vite 8 + TypeScript
- **Styling**: Tailwind CSS v4 (Clean white corporate design, primary blue `#2563EB`, dark navy `#0F172A`, slate body `#475569`, soft blue surfaces `#EFF6FF`)
- **Typography**: Google Fonts (*Plus Jakarta Sans* & *Inter*)
- **Icons**: Lucide React + Custom SVG Brand Icons
- **Forms**: React Hook Form + Zod validation
- **Interactive Visuals**: Custom high-fidelity Dashboard Mockup & Mobile Device UI

### Backend
- **Runtime**: Node.js + Express + TypeScript
- **Database**: MongoDB with Mongoose ODM (with in-memory fallback for local offline development)
- **Validation**: Zod schema validation
- **Security**: Helmet security headers, restricted CORS, and Express Rate Limiting
- **Email Delivery**: Nodemailer configurable provider
- **Testing**: Vitest + Supertest

---

## 3. Quickstart & Installation

### Step 1: Install Dependencies

```bash
# In frontend directory
cd nexatech/frontend
npm install

# In backend directory
cd ../backend
npm install
```

### Step 2: Configure Environment Variables

```bash
# Frontend
cp nexatech/frontend/.env.example nexatech/frontend/.env

# Backend
cp nexatech/backend/.env.example nexatech/backend/.env
```

### Step 3: Run the Development Servers

In terminal 1 (Backend API):
```bash
cd nexatech/backend
npm run dev
# Running on http://localhost:5000
# Health check: http://localhost:5000/api/health
```

In terminal 2 (Frontend Client):
```bash
cd nexatech/frontend
npm run dev
# Running on http://localhost:5173
```

---

## 4. Verification & Testing Results

- **Frontend Production Build**: `tsc -b && vite build` completed with **0 errors**.
- **Backend TypeScript Compilation**: `tsc` compiled with **0 errors**.
- **Backend Automated Tests**: **9/9 tests passed** with Vitest + Supertest:
  - `GET /api/health` — 200 OK
  - `GET /api/projects` — 200 OK (verifies Zaya Travels, CRM Platform, GoyaFly, TaskFlow)
  - `GET /api/projects/:slug` — 200 OK & 404 Not Found tests
  - `POST /api/inquiries` — 201 Created on valid input
  - Validation failure checks on invalid email, short name, and short message
  - 404 handler verification on unknown routes

---

## 5. Deployment Guide

### Free-Tier Frontend Deployment (Vercel / Netlify)
1. Push the repository to GitHub.
2. In Vercel or Netlify, select the `nexatech/frontend` directory as the Root Directory.
3. Build command: `npm run build`
4. Output directory: `dist`
5. Set environment variable: `VITE_API_BASE_URL=https://your-backend-api.onrender.com/api`

### Free-Tier Backend Deployment (Render / Railway)
1. In Render or Railway, create a new Web Service pointing to `nexatech/backend`.
2. Build command: `npm install && npm run build`
3. Start command: `npm start`
4. Configure environment variables (`PORT=5000`, `NODE_ENV=production`, `FRONTEND_URL=https://your-frontend.vercel.app`, `MONGODB_URI=...`).
