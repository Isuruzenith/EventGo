# EventHub Project Overview

## Project Structure

```
eslint.config.mjs
next-env.d.ts
next.config.ts
package.json
postcss.config.mjs
README.md
tsconfig.json
app/
  favicon.ico
  globals.css
  layout.tsx
  page.tsx
  (login)/
    newuser/
      page.tsx
    signup/
      page.tsx
  api/
    auth/
      login/
        route.ts
      signup/
        route.ts
    events/
      route.ts
      [id]/
        route.ts
    payment/
      route.ts
    attendance/
      route.ts
    notifications/
      route.ts
    analytics/
      route.ts
  components/
    EventCard.tsx
    QRCodeScanner.tsx
    DashboardChart.tsx
    NotificationBanner.tsx
  home/
    page.tsx
  dashboard/
    page.tsx
  models/
    User/
      User.ts
    Event/
      Event.ts
    Registration/
      Registration.ts
    Attendance/
      Attendance.ts
lib/
  db.ts
  auth.ts
  payment.ts
  qrCode.ts
  email.ts
public/
  file.svg
  globe.svg
  next.svg
  vercel.svg
  window.svg
```

## Description
EventHub is a web application built with **Next.js** and **TypeScript** to manage university events through a streamlined, multi-tier approval process and secure student registration. It uses **Tailwind CSS** for responsive UI, **MongoDB** for data storage, **NextAuth.js** for authentication, **PayPal** for payments, **qrcode npm** for QR code generation, and **Nodemailer/SendGrid** for email notifications. The project includes **ESLint** and **PostCSS** for code quality and styling, with analytics dashboards for insights into participation and revenue.

### Key Folders and Files
- **app/**: Contains the core application code, including pages, layouts, API routes, and reusable components.
  - **favicon.ico**: Website favicon for branding.
  - **globals.css**: Global styles using Tailwind CSS for consistent UI.
  - **layout.tsx**: Root layout for the application, defining the overall structure (e.g., navigation, footer).
  - **page.tsx**: Home page for the application (landing page).
  - **(login)/newuser/page.tsx**: Page for new user registration form.
  - **(login)/signup/page.tsx**: Page for user login form.
  - **api/**: API routes for backend logic.
    - **auth/login/route.ts**: Handles user login (POST) using NextAuth.js.
    - **auth/signup/route.ts**: Handles user registration (POST) and stores user data in MongoDB.
    - **events/route.ts**: Manages event creation (POST) and listing (GET).
    - **events/[id]/route.ts**: Handles specific event operations (GET, PUT, DELETE) like fetching, updating, or deleting an event.
    - **payment/route.ts**: Integrates PayPal for processing event payments (POST).
    - **attendance/route.ts**: Manages QR code-based attendance tracking (POST).
    - **notifications/route.ts**: Sends email notifications using Nodemailer/SendGrid (POST).
    - **analytics/route.ts**: Provides data for analytics dashboards (GET).
  - **components/**: Reusable UI components.
    - **EventCard.tsx**: Component to display event details in a card format.
    - **QRCodeScanner.tsx**: Component for scanning QR codes to mark attendance.
    - **DashboardChart.tsx**: Component for rendering analytics charts (e.g., participation, revenue).
    - **NotificationBanner.tsx**: Displays in-app notifications for users.
  - **home/page.tsx**: Main landing page for logged-in users.
  - **dashboard/page.tsx**: Analytics dashboard for admins and university management.

- **lib/**: Shared utilities and configurations.
  - **db.ts**: MongoDB connection setup and configuration.
  - **auth.ts**: Authentication utilities using NextAuth.js for session management.
  - **payment.ts**: PayPal payment processing logic.
  - **qrCode.ts**: QR code generation logic using qrcode npm package.
  - **email.ts**: Email notification setup using Nodemailer or SendGrid.

- **public/**: Static assets.
  - **file.svg, globe.svg, next.svg, vercel.svg, window.svg**: SVG icons for UI elements.

- **models/**: Data models for MongoDB.
  - **User/User.ts**: Schema for user data (e.g., name, email, role).
  - **Event/Event.ts**: Schema for event data (e.g., title, date, status).
  - **Registration/Registration.ts**: Schema for student event registrations.
  - **Attendance/Attendance.ts**: Schema for tracking attendance via QR codes.

### Configuration Files
- **eslint.config.mjs**: ESLint configuration for code linting and quality.
- **next-env.d.ts**: TypeScript definitions for Next.js.
- **next.config.ts**: Next.js configuration (e.g., environment variables, image optimization).
- **package.json**: Project dependencies (Next.js, Tailwind CSS, MongoDB, NextAuth.js, qrcode, Nodemailer/SendGrid) and scripts.
- **postcss.config.mjs**: PostCSS configuration for Tailwind CSS processing.
- **README.md**: Project documentation and setup instructions.
- **tsconfig.json**: TypeScript configuration for type checking and compilation.

---

# University Event Management System

## 1. Project Overview / Abstract
This project aims to develop a comprehensive **web-based system** for managing university events through a streamlined, multi-tier approval process and secure student registration.  

- Event organizers can propose events, which are approved through a structured flow (**Dean → DVC → VC**).  
- Students can register for approved events, make payments for paid events, and mark attendance via **QR code scanning**.  
- The system also provides **analytics dashboards** for university administrators to gain insights into participation, revenue, and event trends.  

---

## 2. Objectives
- Simplify and digitize the university event proposal and approval process.  
- Enable online student registration with secure payment options.  
- Track attendance efficiently using QR codes.  
- Provide real-time analytics and dashboards for stakeholders.  

---

## 3. Proposed Technologies and Tools

**Frontend:**  
- Next.js  
- Tailwind CSS  

**Backend:**  
- Node.js with Next.js API Routes (Server-side)  
- RESTful API architecture  

**Database & Authentication:**  
- MongoDB  
- NextAuth.js  

**Tools/Platforms:**  
- Code Editor: Visual Studio Code  
- Version Control: Git & GitHub  
- Hosting: Vercel, VPS  
- Payment Gateway: PayPal  
- QR Code: `qrcode` npm package  
- Email Notifications: Nodemailer / SendGrid  
- API Testing: Postman  

---

## 4. Functional Requirements
- Multi-level event proposal and approval (**Organizer → Admin → Dean → DVC → VC**).  
- Student event registration and approval by organizers.  
- Payment gateway integration for paid events.  
- QR code-based attendance tracking.  
- Notifications via email.  
- Analytics dashboards and report generation.  

---

## 5. Non-Functional Requirements
- Secure and encrypted communication (**HTTPS, hashed passwords**).  
- Mobile-responsive UI.  
- High availability and performance under load.  
- Role-based access control (RBAC).  
- Data validation and sanitization.  

---

## 6. Target Users / Stakeholders
- **Students**: Register and attend events.  
- **Organizers**: Propose and manage events, approve registrations.  
- **Dean, DVC, VC**: Approve events at each level.  
- **Admin**: Manage system configuration and users.  
- **University Management**: View analytics, reports, and access dashboards to review and approve proposals.  

---

## 7. Project Scope (Inclusions & Exclusions)

**Inclusions:**  
- Event proposal and approval workflow  
- Student registration and payment  
- Dashboards and reporting  
- Email notifications  
- QR code-based attendance  

**Exclusions (Future Consideration):**  
- Mobile application  
- External calendar syncing (e.g., Google Calendar integration)  
- Multi-language support  
