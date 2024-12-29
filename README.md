# SportSee - Analytics Dashboard

A React-based analytics dashboard that visualizes user fitness data through various charts and metrics built with [Recharts](https://recharts.org/en-US/).

## Prerequisites

- Node.js (version 18 or higher recommended)
- npm or yarn
- Backend API running (see [API Reference](#api-reference))

## Getting Started

1. Clone this repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

## API Reference

This project requires the SportSee API backend to be running. You can find the backend repository [here](https://github.com/OpenClassrooms-Student-Center/SportSee).

## Project Structure

```
src/
├── api/              # API client and service functions
├── components/       # Reusable React components
│   ├── dashboard/    # Dashboard components (graphs)
│   ├── icons/        # SVG icon components
│   ├── Layout/       # Layout components
│   ├── SideNav/      # Side navigation components
│   └── TopNav/       # Top navigation component
├── pages/            # Page components
├── types/            # TypeScript type definitions
└── styles/           # Global styles and SCSS mixins
```

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Static typing
- **React Router** - Navigation
- **Recharts** - Data visualization charts
- **SASS** - Styling
- **Vite** - Build tool and development server
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **SWC** - Fast compilation

## Building for Production

To create a production build:

```bash
npm run build
```

The build output will be in the `dist` directory.
