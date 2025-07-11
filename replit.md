# West Wind Marine Electronics Ltd Website

## Overview

This is a modern, professional website for West Wind Marine Electronics Ltd, a Nigerian marine engineering company specializing in navigation, communication, automation, and electrical solutions. The application is built as a full-stack web application with a React frontend and Express.js backend, featuring a clean, maritime-themed design optimized for showcasing marine electronics services.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom maritime color palette
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **State Management**: TanStack Query (React Query) for server state
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints for contact form submissions
- **Validation**: Zod for runtime type checking and form validation
- **Development**: Hot reload with Vite integration

### Database Strategy
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema Location**: Shared schema definitions in `/shared/schema.ts`
- **Migrations**: Drizzle Kit for database migrations
- **Connection**: Neon Database serverless PostgreSQL (via DATABASE_URL)
- **Storage**: In-memory storage implementation for development with interface for future database integration

## Key Components

### Pages Structure
- **Home**: Hero section with company branding and service highlights
- **About**: Company history, mission, and credentials
- **Products & Services**: Detailed service offerings with expandable descriptions
- **Partnerships**: Information about supplier relationships and certifications
- **Contact**: Contact form with validation and submission handling

### UI Component System
- **Design System**: Consistent maritime theme with teal/cyan color scheme
- **Typography**: Hierarchical text styling with proper contrast
- **Cards**: Service cards with hover effects and detailed descriptions
- **Forms**: Validated contact forms with error handling
- **Navigation**: Responsive header with mobile menu
- **Footer**: Company information and service links

### Contact Form System
- **Frontend Validation**: Real-time form validation with error messages
- **Backend Processing**: Secure form submission with Zod validation
- **Email Integration**: SMTP email service using Nodemailer
- **Response Handling**: Success/error feedback with loading states
- **Data Structure**: Name, email, subject, and message fields
- **Email Templates**: HTML and plain text email formats
- **Environment Configuration**: Flexible SMTP settings via environment variables

## Data Flow

### Form Submission Flow
1. User fills out contact form on frontend
2. Form validation occurs in real-time using React state
3. On submission, data is sent to `/api/contact` endpoint
4. Backend validates data using Zod schema
5. Email service sends formatted email via SMTP
6. Response sent back to frontend with success/error status
7. User sees appropriate feedback message

### Email System Flow
1. SMTP configuration loaded from environment variables
2. Email service initializes Nodemailer transporter
3. Contact form data formatted into HTML and plain text
4. Email sent to configured recipient address
5. Sender can reply directly to form submitter's email
6. Comprehensive error handling for connection issues

### Asset Management
- **Images**: Stored in `/attached_assets` directory
- **Logo**: Company logo integrated in header and footer
- **Background Images**: Hero section backgrounds for visual appeal
- **Icons**: Lucide React icons for consistent iconography

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connection
- **drizzle-orm**: Type-safe database operations
- **@tanstack/react-query**: Server state management
- **wouter**: Lightweight React routing
- **zod**: Runtime type validation
- **express**: Web server framework
- **nodemailer**: SMTP email sending service
- **@types/nodemailer**: TypeScript definitions for Nodemailer

### UI Dependencies
- **@radix-ui/***: Accessible UI component primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **clsx**: Conditional CSS class utilities
- **react-icons**: Icon library for social media icons

### Development Dependencies
- **vite**: Build tool and dev server
- **typescript**: Static type checking
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast JavaScript bundler for production

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds React app to `/dist/public`
- **Backend**: ESBuild bundles Express server to `/dist/index.js`
- **Assets**: Static assets served from build output
- **Environment**: Production build optimizations enabled

### Development Workflow
- **Dev Server**: `npm run dev` starts Express with Vite middleware
- **Type Checking**: `npm run check` runs TypeScript compiler
- **Database**: `npm run db:push` applies schema changes
- **Hot Reload**: Automatic reloading in development mode

### Production Deployment
- **Build Command**: `npm run build` creates production bundle
- **Start Command**: `npm start` runs production server
- **Environment Variables**: DATABASE_URL required for database connection
- **Static Serving**: Express serves built React app and API endpoints

## Changelog

```
Changelog:
- July 11, 2025. Hash navigation and video system improvements
  - Created global hash navigation utility for consistent behavior across all pages
  - Fixed footer service links to use proper anchor tags for hash navigation
  - Improved scroll positioning to show services just below header
  - Completely rewrote Hero component video system for seamless playback
  - Added enhanced error handling and recovery for video transitions
  - Updated Senegal office address to Cité Keur Gorgui, Immeuble UNIPAX
  - Removed duplicate Services Section from Home page for cleaner layout
- July 07, 2025. Complete SMTP email system implementation
  - Built comprehensive email service with Nodemailer
  - Added Gmail SMTP configuration with TLS support
  - Created professional HTML email templates
  - Implemented both /api/contact and /contact endpoints
  - Added email status verification endpoint
  - Enhanced form validation for all required fields
  - Added environment variable configuration with dotenv
  - Tested and verified email sending functionality
- July 03, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```