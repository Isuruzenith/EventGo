# UI Style Guide

This document outlines the UI standards for the EventHub project, ensuring a consistent, accessible, and high-quality user experience across the platform. All guidelines are designed to be implemented with **Tailwind CSS** and align with the university event management system's branding and functionality, as described in the project overview. The guide includes the color palette, typography, effects, animations, spacing, borders, component examples, responsive design, and accessibility considerations, along with Tailwind configurations.

---

## 🎨 Color Palette

The color system uses a semantic approach, naming colors by their function rather than hue to improve readability and future theming flexibility. The palette is inspired by the university’s branding (NSBM Blue and Green) to maintain a professional and cohesive look.

### Primary Colors
Used for main calls-to-action, links, and key interface elements.

- **Primary Blue**: `#005a9e` (Main brand color for buttons, links, etc.)
- **Primary Green**: `#6dbb45` (Accent for CTAs, highlights, and success states)
- **Primary Blue Dark**: `#003d6b` (For hover/active states of Primary Blue)
- **Primary Green Dark**: `#4b8b24` (For hover/active states of Primary Green)

### Secondary & Accent Colors
Used for less prominent actions and supporting elements.

- **Secondary Green**: `#4b8b24` (Darker green for secondary buttons or elements)
- **Accent**: `#E5E7EB` (Light gray/off-white for text on dark backgrounds or subtle highlights)

### Background Colors
- **BG-Dark**: `#0A101A` (Primary dark background for headers, footers, or dark mode)
- **BG-Light**: `#F9FAFB` (Light background for main content areas)
- **Glass BG**: `rgba(255, 255, 255, 0.1)` (For glassmorphism effect in cards or modals)

### Text Colors
- **Text-Light**: `#E5E7EB` (Primary text on dark backgrounds)
- **Text-Dark**: `#111827` (Primary text on light backgrounds)
- **Text-Muted**: `#9CA3AF` (For helper text, placeholders, or less important info)

### Feedback Colors
- **Success**: `#10B981` (For success messages, e.g., successful registration)
- **Warning**: `#F59E0B` (For warnings, e.g., incomplete form)
- **Error**: `#EF4444` (For errors, e.g., invalid input or failed payment)

### Tailwind Configuration
Add the following to `tailwind.config.js` to define the color palette:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#005a9e',
          green: '#6dbb45',
          'blue-dark': '#003d6b',
          'green-dark': '#4b8b24',
        },
        secondary: {
          green: '#4b8b24',
        },
        accent: '#E5E7EB',
        background: {
          dark: '#0A101A',
          light: '#F9FAFB',
        },
        glass: 'rgba(255, 255, 255, 0.1)',
        text: {
          light: '#E5E7EB',
          dark: '#111827',
          muted: '#9CA3AF',
        },
        feedback: {
          success: '#10B981',
          warning: '#F59E0B',
          error: '#EF4444',
        },
      },
    },
  },
};
```

---

## ✒️ Typography

Consistent typography ensures readability and a clear visual hierarchy, critical for a university event management system where users need to quickly understand event details, forms, and dashboards.

### Fonts
- **Primary Font**: `Inter` (A clean, readable sans-serif optimized for UI text)
- **Import**: Use Google Fonts to import Inter (`https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap`)

### Typographic Scale
- **H1**: `text-5xl font-extrabold` (Page titles, e.g., "EventHub Dashboard")
- **H2**: `text-4xl font-bold` (Major section headings, e.g., "Upcoming Events")
- **H3**: `text-2xl font-bold` (Sub-section headings, e.g., "Event Details")
- **H4**: `text-xl font-semibold` (Minor headings, e.g., "Registration Form")
- **Body**: `text-base font-normal` (Default paragraph text, 16px)
- **Small**: `text-sm font-normal` (Helper text, captions, e.g., form instructions)
- **Extra Small**: `text-xs font-normal` (Fine print, tags, e.g., event tags)

### Line Height & Spacing
- Use `leading-tight` for headings to ensure compact presentation.
- Use `leading-normal` for body text to ensure readability.
- Maintain `tracking-tight` for headings and `tracking-normal` for body text.

### Tailwind Configuration
Add the following to `tailwind.config.js` to define the font family:

```javascript
// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
```

---

## ✨ Effects & Animation

Subtle effects and animations enhance user feedback and make the UI feel modern and responsive, especially for interactive elements like buttons, cards, and QR code scanners.

### Box Shadows
- **shadow-md**: Default for cards (e.g., `EventCard.tsx`) and interactive components.
- **shadow-lg**: For modals or elements needing emphasis (e.g., confirmation dialogs).
- **shadow-xl**: For hover states on cards to indicate a "lift" effect.
- **shadow-inner**: For pressed states on buttons or inputs.

### Transitions
- **Default Transition**: `transition-all duration-300 ease-in-out`
- **Usage**: Apply to buttons, links, and cards for hover/focus states to ensure smooth visual feedback.

### Animations
- **Fade In Up**: For elements appearing on scroll (e.g., event cards loading).
- **Scale**: For hover effects on interactive elements like buttons or cards.
- **Pulse**: For notifications (e.g., `NotificationBanner.tsx`) to draw attention.

### Tailwind Configuration
Add the following to `tailwind.config.js` to define animations:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scale: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
        scale: 'scale 0.2s ease-in-out forwards',
      },
    },
  },
};
```

---

## 📐 Spacing & Borders

A consistent spacing system creates a balanced and professional layout, critical for forms, dashboards, and event listings.

- **Base Unit**: `1 unit = 0.25rem = 4px` (Tailwind’s default grid system).
- **Component Padding**: Use `p-4` (16px) or `p-6` (24px) for cards, modals, and containers.
- **Layout Gaps**: Use `gap-4` (16px) or `gap-8` (32px) for grid and flex layouts (e.g., event card grids).
- **Borders**:
  - For glassmorphism: `border border-white/20` (semi-transparent white for cards/modals).
  - For inputs: `border border-gray-300` (light gray for form inputs).
- **Corner Radius**:
  - `rounded-lg` (8px): Default for buttons, inputs, and small containers.
  - `rounded-xl` (12px): For cards and larger containers (e.g., `EventCard.tsx`).
  - `rounded-full`: For avatars, tags, or icon buttons (e.g., user profile images).

---

## 🧩 Component Examples

These examples demonstrate how to apply the style guide to key components in the EventHub project, ensuring consistency across the UI.

### Primary Button (Gradient)
Used for main CTAs like "Register for Event" or "Submit Proposal".

```html
<button class="px-5 py-2.5 rounded-lg text-white font-semibold bg-gradient-to-r from-primary-blue to-primary-green transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary-green/30">
  Register Now
</button>
```

### Secondary Button (Ghost)
Used for secondary actions like "View Details" or "Cancel".

```html
<button class="px-5 py-2.5 rounded-lg text-text-light font-medium border border-white/40 bg-white/10 backdrop-blur-sm transition-colors duration-300 hover:bg-white/20">
  View Details
</button>
```

### Event Card (Glassmorphism)
Used in `EventCard.tsx` for displaying event details.

```html
<div class="rounded-xl overflow-hidden bg-glass backdrop-blur-lg border border-white/20 shadow-lg p-6">
  <h3 class="text-2xl font-bold text-text-light">Event Title</h3>
  <p class="text-sm text-text-muted">Event Date & Time</p>
  <button class="mt-4 px-5 py-2.5 rounded-lg text-white font-semibold bg-gradient-to-r from-primary-blue to-primary-green">
    Register
  </button>
</div>
```

### Form Input
Used in forms like `newuser/page.tsx` or `signup/page.tsx`.

```html
<input 
  type="text" 
  class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-text-light placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary-green transition-all duration-300"
  placeholder="Enter your name..."
/>
```

### Notification Banner
Used in `NotificationBanner.tsx` for in-app notifications.

```html
<div class="fixed top-4 right-4 p-4 rounded-lg bg-glass backdrop-blur-lg border border-white/20 text-text-light animate-fade-in-up">
  <p class="text-sm">Event registration successful!</p>
</div>
```

---

## 📱 Responsive Design

The UI must be fully responsive to support mobile devices, tablets, and desktops, as students and organizers will access the platform from various devices.

- **Breakpoints**: Use Tailwind’s default breakpoints (`sm`, `md`, `lg`, `xl`).
  - `sm` (640px): Mobile devices (stacked layouts, larger text for readability).
  - `md` (768px): Tablets (adjust card sizes, form widths).
  - `lg` (1024px): Desktops (grid layouts for event listings, dashboards).
- **Mobile-First Approach**: Write base styles for mobile, then progressively add styles for larger screens (e.g., `md:grid-cols-2` for event card grids).
- **Touch-Friendly**: Ensure buttons and interactive elements have sufficient padding (`p-4` or more) and minimum touch target sizes (48x48px).

---

## ♿ Accessibility

Accessibility ensures all users, including those with disabilities, can use EventHub effectively.

- **Contrast Ratios**: Ensure text meets WCAG 2.1 AA standards (minimum 4.5:1 for normal text, 3:1 for large text).
  - Use `text-light` on `bg-dark` and `text-dark` on `bg-light` for sufficient contrast.
- **Keyboard Navigation**: All interactive elements (buttons, links, forms) must be focusable and operable via keyboard.
  - Use `focus:outline-none focus:ring-2 focus:ring-primary-green` for focus states.
- **ARIA Attributes**: Add ARIA labels for components like `QRCodeScanner.tsx` (e.g., `aria-label="Scan QR code for attendance"`).
- **Screen Reader Support**: Ensure semantic HTML (`<button>`, `<nav>`, `<main>`) and descriptive alt text for icons in `public/` (e.g., `globe.svg`).

---

## 🛠️ Implementation Notes

- **Global Styles**: Define global styles in `app/globals.css` using `@apply` for reusable utility classes (e.g., `.btn-primary`, `.card-glass`).
- **Component Reusability**: Components like `EventCard.tsx`, `QRCodeScanner.tsx`, and `DashboardChart.tsx` should use the defined color, typography, and spacing guidelines.
- **Consistency**: Regularly lint the codebase with ESLint (`eslint.config.mjs`) to enforce Tailwind class order and style consistency.
- **Testing**: Test UI components on different devices and screen sizes using Vercel previews or browser dev tools.
- **Dark Mode**: Support dark mode by leveraging `bg-dark`, `text-light`, and `glass` classes for components like dashboards and modals.

---

## 🗂️ Consolidated Tailwind Configuration

To avoid conflicts and ensure all configurations work together, here is the consolidated `tailwind.config.js` file incorporating colors, typography, and animations:

```javascript
// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#005a9e',
          green: '#6dbb45',
          'blue-dark': '#003d6b',
          'green-dark': '#4b8b24',
        },
        secondary: {
          green: '#4b8b24',
        },
        accent: '#E5E7EB',
        background: {
          dark: '#0A101A',
          light: '#F9FAFB',
        },
        glass: 'rgba(255, 255, 255, 0.1)',
        text: {
          light: '#E5E7EB',
          dark: '#111827',
          muted: '#9CA3AF',
        },
        feedback: {
          success: '#10B981',
          warning: '#F59E0B',
          error: '#EF4444',
        },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scale: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
        scale: 'scale 0.2s ease-in-out forwards',
      },
    },
  },
};
```

---

This UI style guide ensures that EventHub’s interface is visually appealing, consistent, and user-friendly, aligning with the project’s goal of providing a streamlined and professional event management system for university stakeholders.