# Austrino Website - File Directory Tree

```
/mnt/okcomputer/output/app/
├── .env                                    # Environment variables
├── .env.example                            # Example environment file
├── package.json                            # Project dependencies and scripts
├── tsconfig.json                           # TypeScript configuration
├── vite.config.ts                          # Vite build configuration
├── tailwind.config.js                      # Tailwind CSS configuration
├── postcss.config.js                       # PostCSS configuration
├── index.html                              # HTML entry point
│
├── public/                                 # Static assets
│   └── images/                             # Generated 3D images
│       ├── hero-satellite.jpg              # 3D satellite for hero section
│       ├── collage-data-center.jpg         # Data center image
│       ├── collage-server-room.jpg         # Server room image
│       ├── collage-control-room.jpg        # Control room image
│       ├── collage-server-stack.jpg        # Server stack close-up
│       ├── collage-cables.jpg              # Network cables image
│       ├── service-cloud.jpg               # Cloud services visualization
│       ├── service-microservices.jpg       # Microservices visualization
│       ├── service-ai-ml.jpg               # AI/ML visualization
│       └── service-platform.jpg            # Platform engineering visualization
│
├── server/                                 # Backend API (Express + TypeScript)
│   ├── index.ts                            # Server entry point
│   ├── routes/
│   │   ├── contact.ts                      # Contact form API routes
│   │   └── analytics.ts                    # Analytics API routes
│   └── database/
│       ├── contacts.ts                     # Contact form data storage
│       └── analytics.ts                    # Analytics data storage
│
├── src/                                    # Frontend source code
│   ├── main.tsx                            # React entry point
│   ├── App.tsx                             # Main App component
│   ├── App.css                             # App-specific styles
│   ├── index.css                           # Global styles and Tailwind
│   │
│   ├── components/                         # Reusable components
│   │   ├── Navigation.tsx                  # Top navigation bar
│   │   ├── Footer.tsx                      # Footer component
│   │   └── ui/                             # shadcn/ui components
│   │       ├── alert-dialog.tsx
│   │       ├── alert.tsx
│   │       ├── aspect-ratio.tsx
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── carousel.tsx
│   │       ├── chart.tsx
│   │       ├── checkbox.tsx
│   │       ├── collapsible.tsx
│   │       ├── context-menu.tsx
│   │       ├── dialog.tsx
│   │       ├── drawer.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── empty.tsx
│   │       ├── input-group.tsx
│   │       ├── input-otp.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── navigation-menu.tsx
│   │       ├── pagination.tsx
│   │       ├── popover.tsx
│   │       ├── radio-group.tsx
│   │       ├── resizable.tsx
│   │       ├── scroll-area.tsx
│   │       ├── select.tsx
│   │       ├── sidebar.tsx
│   │       ├── spinner.tsx
│   │       ├── textarea.tsx
│   │       └── tooltip.tsx
│   │
│   ├── sections/                           # Page sections
│   │   ├── Hero.tsx                        # Section 1: 3D Orbit Hero
│   │   ├── Dashboard.tsx                   # Section 2: Control Plane Dashboard
│   │   ├── Services.tsx                    # Section 3: Capability Surface
│   │   ├── Integrations.tsx                # Section 4: Ecosystem Collage
│   │   ├── Pillars.tsx                     # Section 5: Three Pillars
│   │   ├── Metrics.tsx                     # Section 6: Impact Metrics
│   │   ├── Testimonials.tsx                # Section 7: Customer Proof
│   │   ├── CaseStudies.tsx                 # Section 8: Client Success Stories
│   │   └── Contact.tsx                     # Section 9: Contact CTA
│   │
│   ├── hooks/                              # Custom React hooks
│   ├── types/                              # TypeScript type definitions
│   └── lib/
│       └── utils.ts                        # Utility functions
│
└── dist/                                   # Production build output
    ├── index.html                          # Built HTML
    ├── assets/                             # Bundled JS/CSS
    │   ├── index-[hash].js
    │   └── index-[hash].css
    └── images/                             # Copied images
```

## Key Features by Section

### 1. Hero (Hero.tsx)
- 3D orbit animation with satellite and cloud provider logos
- Auto-play entrance animation
- Scroll-driven exit animation
- GSAP ScrollTrigger pinned section

### 2. Dashboard (Dashboard.tsx)
- Glass morphism dashboard UI
- Live metrics cards
- SVG wave chart
- Connected services display

### 3. Services (Services.tsx)
- Tilted capability plane
- Service cards with 3D images
- Platform engineering features

### 4. Integrations (Integrations.tsx)
- Image collage layout
- Partner logos (AWS, Azure, GCP, ServiceNow, Kubernetes, Docker)

### 5. Pillars (Pillars.tsx)
- Three-column card layout
- Why Austrino value propositions

### 6. Metrics (Metrics.tsx)
- Animated counters
- Key performance indicators
- Cost optimization chart

### 7. Testimonials (Testimonials.tsx)
- Customer quote slider
- Navigation controls

### 8. Case Studies (CaseStudies.tsx)
- Featured client success stories
- Industry-specific case studies
- Metrics and outcomes
- Client testimonials
- Navigation slider

### 9. Contact (Contact.tsx)
- Working contact form
- Form validation
- Toast notifications

## Backend API Endpoints

### Contact API (`/api/contact`)
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contacts (admin)

### Analytics API (`/api/analytics`)
- `GET /api/analytics` - Get all analytics data
- `GET /api/analytics/metrics` - Get key metrics only
- `PUT /api/analytics` - Update analytics (admin)
- `POST /api/analytics/event` - Track an event
- `GET /api/analytics/events` - Get recent events

## Available Scripts

```bash
# Development
npm run dev              # Start Vite dev server
npm run server:dev       # Start Express API server with watch

# Production
npm run build            # Build React app for production
npm run server           # Start Express API server
npm start               # Build and start production server

# Other
npm run lint            # Run ESLint
npm run preview         # Preview production build
```

## Tech Stack

- **Frontend**: React 19, TypeScript, Vite, Tailwind CSS
- **UI Components**: shadcn/ui, Radix UI
- **Animations**: GSAP + ScrollTrigger
- **Backend**: Express.js, TypeScript
- **Database**: File-based JSON storage (easily upgradable to MongoDB/PostgreSQL)
- **Icons**: Lucide React
- **Notifications**: Sonner
