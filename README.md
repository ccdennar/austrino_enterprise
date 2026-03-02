# Austrino - Enterprise Platform Engineering Website

![Austrino Website](https://kreun6vbb42ao.ok.kimi.link)

A modern, professional enterprise website for **Austrino** - a consulting startup specializing in platform engineering, SaaS, microservices, cloud services (AWS/Azure/GCP), ServiceNow, AI/ML, and MLOps.

## Live Demo

**Website URL**: https://kreun6vbb42ao.ok.kimi.link

## Features

### Frontend
- **9 Interactive Sections** with scroll-driven animations
- **3D Visuals** - Custom generated images for all services
- **GSAP ScrollTrigger** - Smooth pinned and flowing animations
- **Glass Morphism UI** - Modern, futuristic design
- **Responsive Design** - Works on all devices
- **Working Contact Form** - With validation and toast notifications

### Backend API
- **Express.js + TypeScript** server
- **Contact Form API** - Store and manage inquiries
- **Analytics API** - Track and update metrics
- **File-based Database** - Easily upgradable to MongoDB/PostgreSQL

### Sections
1. **Hero** - 3D orbit animation with headline
2. **Dashboard** - Glass morphism control plane preview
3. **Services** - Platform engineering capabilities
4. **Integrations** - Ecosystem collage (AWS, Azure, GCP, ServiceNow)
5. **Pillars** - Why Austrino value propositions
6. **Metrics** - Impact statistics with animated counters
7. **Testimonials** - Customer quote slider
8. **Pricing** - Three-tier pricing plans
9. **Contact** - Working contact form

## Tech Stack

| Category | Technology |
|----------|------------|
| Frontend | React 19, TypeScript, Vite |
| Styling | Tailwind CSS 3.4, shadcn/ui |
| Animation | GSAP + ScrollTrigger |
| Backend | Express.js, TypeScript |
| Database | File-based JSON (upgradable) |
| Icons | Lucide React |

## Project Structure

```
app/
├── public/images/          # 3D generated images
├── server/                 # Express backend
│   ├── routes/            # API routes
│   └── database/          # Data storage
├── src/
│   ├── components/        # Reusable components
│   ├── sections/          # Page sections
│   └── ...
└── dist/                  # Production build
```

## Getting Started

### Prerequisites
- Node.js 20+
- npm or yarn

### Installation

```bash
# Clone or navigate to the project
cd app

# Install dependencies
npm install

# Start development server
npm run dev

# In another terminal, start the API server
npm run server:dev
```

### Production Build

```bash
# Build the frontend
npm run build

# Start production server
npm run server

# Or both in one command
npm start
```

## API Endpoints

### Contact API
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/contact` | Submit contact form |
| GET | `/api/contact` | Get all contacts |

### Analytics API
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/analytics` | Get all analytics |
| GET | `/api/analytics/metrics` | Get key metrics |
| PUT | `/api/analytics` | Update analytics |
| POST | `/api/analytics/event` | Track event |

## Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3001
NODE_ENV=development

# Optional: Email configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

## Design System

### Colors
- **Background**: `#070B14` (deep navy)
- **Accent**: `#4F6DFF` (electric indigo)
- **Text Primary**: `#F4F6FF` (near-white)
- **Text Secondary**: `#A7B1D4` (cool gray-blue)

### Typography
- **Headings**: Space Grotesk (600-700)
- **Body**: Inter (400-500)
- **Labels**: IBM Plex Mono (500)

## Customization

### Updating Analytics
Make a PUT request to `/api/analytics`:

```bash
curl -X PUT http://localhost:3001/api/analytics \
  -H "Content-Type: application/json" \
  -d '{
    "costReduction": 40,
    "deploymentFrequency": 3.0,
    "policyViolations": 70
  }'
```

### Adding New Images
Place new images in `public/images/` and reference them in components.

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

Private - All rights reserved by Austrino.

## Contact

For questions or support, contact: hello@austrino.io
