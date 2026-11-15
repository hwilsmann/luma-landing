# Luma — Learning Platform Landing Page

A responsive landing page for **Luma**, a fictional learning platform, built as part of the Buzzvel Front-End Engineer Coding Challenge.

## Overview

Luma is a learning platform concept focused on practical courses taught by experienced professionals. This project presents its main landing page, highlighting course categories, a featured course, the learning process, testimonials, the community, and contact information.

The goal was to create a responsive, accessible, and maintainable interface based on the provided Figma design.

## Tech Stack

- **Next.js 16** — React framework using the App Router
- **React 19** — UI library
- **TypeScript** — Static typing
- **Tailwind CSS 4** — Utility-first styling
- **pnpm** — Package manager
- **Prettier** — Code formatting
- **ESLint** — Code quality and linting

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- pnpm

### Installation

Clone the repository:

```bash
git clone https://github.com/hwilsmann/luma-landing.git
```

Navigate to the project directory:

```bash
cd luma-landing
```

Install dependencies:

```bash
pnpm install
```

### Development

Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

Create an optimized production build:

```bash
pnpm build
```

Run the production server:

```bash
pnpm start
```

## Available Scripts

| Command             | Description                                                   |
| ------------------- | ------------------------------------------------------------- |
| `pnpm dev`          | Starts the development server                                 |
| `pnpm build`        | Creates an optimized production build                         |
| `pnpm start`        | Runs the production server                                    |
| `pnpm lint`         | Runs ESLint                                                   |
| `pnpm lint:fix`     | Automatically fixes supported lint issues                     |
| `pnpm typecheck`    | Checks TypeScript types                                       |
| `pnpm format`       | Formats project files with Prettier                           |
| `pnpm format:check` | Checks code formatting                                        |
| `pnpm validate`     | Runs formatting, linting, type checking, and production build |

## Project Structure

```text
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
└── components/
    ├── layout/
    │   ├── Header.tsx
    │   └── Footer.tsx
    │
    ├── sections/
    │   ├── Hero.tsx
    │   ├── Categories.tsx
    │   ├── FeaturedCourse.tsx
    │   ├── HowItWorks.tsx
    │   ├── Testimonial.tsx
    │   ├── People.tsx
    │   ├── Contact.tsx
    │   └── FinalCTA.tsx
    │
    └── ui/
        ├── Button.tsx
        └── Nav.tsx

public/
└── images/
```

## Implementation Decisions

### Component Architecture

The interface is organized into reusable components, separating layout elements, page sections, and shared UI components.

This structure helps keep the code organized, readable, and easier to maintain.

### Responsive Design

The layout was developed with a mobile-first approach.

- Mobile and tablet layouts are maintained up to 1023px.
- Desktop layout variations start at 1024px.
- Tailwind CSS breakpoints are used to adapt spacing, typography, and component layouts.

### Typography and Styling

Inter and Plus Jakarta Sans are used for typography.

Global design tokens, including colors and font families, are defined in the global stylesheet to maintain visual consistency.

### Images and Performance

Images are served from the local `public/images` directory and rendered with Next.js `Image` to benefit from image optimization.

Fonts are configured through `next/font`.

### Accessibility

The implementation includes semantic HTML elements, descriptive labels for navigation, form labels, meaningful image alternatives where appropriate, and keyboard support for closing the mobile navigation menu.

## Known Limitations

- The contact form currently provides the interface and native browser validation, but it is not connected to a backend or email service.
- Navigation links to pages outside the landing page are illustrative and do not represent implemented routes.
- The project focuses on the landing page scope of the challenge.

## Validation

The following command runs the complete project validation sequence:

```bash
pnpm validate
```

The project successfully passed:

- Prettier formatting check
- ESLint
- TypeScript type checking
- Next.js production build

## Development Information

- **Challenge:** Buzzvel Front-End Engineer Coding Challenge
- **Project:** Luma Landing Page
- **Development time:** 2 days
- **Status:** Landing page implementation completed

## AI Usage Disclosure

AI tools, including ChatGPT, were used as development assistance during this challenge.

They supported code review, responsive layout adjustments, accessibility improvements, debugging guidance, and documentation preparation.

All implementation decisions and final code were reviewed and validated as part of the development process.

---

Built as part of the Buzzvel Front-End Engineer Coding Challenge.
