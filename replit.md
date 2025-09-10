# Recruit CRM Company Profile Page Prototype

## Overview

This project is a React + Tailwind CSS prototype of a redesigned Recruit CRM Company Profile Page. It serves as a UX-focused reference implementation that demonstrates improved information architecture, streamlined task flows, and enhanced user interactions for recruitment management software. The prototype features a clean, professional SaaS interface with blue/gray theming and includes comprehensive mock data for testing user workflows.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern component patterns
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, accessible UI components
- **Build Tool**: Vite for fast development and optimized production builds
- **State Management**: React hooks with TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing

### Component Design Pattern
- **Modular Components**: Reusable UI components organized by feature (Header, TabNavigation, QuickActionsToolbar, etc.)
- **Compound Components**: Complex UI patterns like modals and forms built as composed components
- **Accessibility-First**: All interactive elements include proper ARIA labels, keyboard navigation, and focus management
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities

### Data Management
- **Mock Data Layer**: Comprehensive TypeScript interfaces for Company, Job, Contact, Activity, and Metrics entities
- **Type Safety**: Strict TypeScript configuration with Zod schemas for runtime validation
- **State Structure**: Centralized data interfaces with proper typing for all business entities

### Backend Architecture
- **Server**: Express.js with TypeScript for API endpoints
- **Database**: Drizzle ORM configured for PostgreSQL with connection to Neon serverless database
- **Session Management**: PostgreSQL session store with connect-pg-simple
- **Development**: Hot module replacement and error overlay for development experience

### UI/UX Design Decisions
- **Information Hierarchy**: Two-column layout prioritizing most-used information and actions
- **Quick Actions**: Floating toolbar for common tasks (Log Call, Add Job, View History) to reduce workflow friction
- **Tab Navigation**: Enhanced keyboard accessibility with arrow key navigation and clear visual states
- **Interactive Feedback**: Hover states, loading indicators, and contextual modals for user actions

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: @tanstack/react-query for server state, wouter for routing
- **UI Components**: Extensive shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with class-variance-authority for component variants

### Database & Backend
- **Database**: @neondatabase/serverless for PostgreSQL connection
- **ORM**: drizzle-orm with drizzle-kit for schema management and migrations
- **Validation**: Zod for runtime type validation and drizzle-zod for schema integration

### Development Tools
- **Build System**: Vite with React plugin and TypeScript support
- **Replit Integration**: @replit/vite-plugin-cartographer and runtime error modal for development
- **Code Quality**: TypeScript strict mode with comprehensive type checking

### Form & Interaction Libraries
- **Forms**: @hookform/resolvers for form validation integration
- **Date Handling**: date-fns for date formatting and manipulation
- **Icons**: Lucide React for consistent iconography throughout the interface

### Accessibility & Performance
- **Focus Management**: Radix UI primitives provide keyboard navigation and screen reader support
- **Performance**: React Query caching and Vite's optimized bundling for fast load times
- **Responsive Design**: Tailwind's mobile-first responsive utilities ensure cross-device compatibility