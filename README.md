# Recruit CRM Company Profile Page Prototype

## Overview
This is a React + Tailwind CSS prototype of the Recruit CRM Company Profile Page for "Jitendra - RCRM Assignment (UX)". 

## Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation & Setup

1. **Extract the archive**
   ```bash
   tar -xzf recruit-crm-prototype.tar.gz
   cd recruit-crm-prototype
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to: `http://localhost:5000`

## Features

- **Company Profile Layout**: Clean header with company branding
- **Summary Metrics**: Key performance indicators dashboard
- **Tab Navigation**: Overview, Jobs, Contacts, Candidates, Activities
- **Quick Actions**: Floating toolbar for common tasks
- **Modal Forms**: Log Call and Add Job functionality
- **Responsive Design**: Mobile and desktop optimized
- **Accessibility**: Keyboard navigation and ARIA labels

## Project Structure

```
├── client/src/
│   ├── components/          # React components
│   ├── pages/              # Page components
│   ├── data/               # Mock data
│   └── hooks/              # Custom hooks
├── server/                 # Express backend
├── shared/                 # Shared types/schemas
├── RATIONALE.md           # UX analysis document
└── package.json           # Dependencies
```

## Testing the Prototype

1. **Browse Tabs**: Click through Overview, Jobs, Contacts, etc.
2. **Quick Actions**: Use floating toolbar buttons (Log Call, Add Job)
3. **Modals**: Test form interactions and submissions
4. **Responsive**: Try different screen sizes

## Technologies Used

- React 18 + TypeScript
- Tailwind CSS + shadcn/ui
- Vite (build tool)
- Express.js (backend)
- Lucide React (icons)

## Assignment Details

This prototype demonstrates UX improvements for recruitment software:
- Reduced clicks for common tasks
- Improved information hierarchy
- Better visual feedback
- Enhanced accessibility

For detailed UX analysis, see `RATIONALE.md`.