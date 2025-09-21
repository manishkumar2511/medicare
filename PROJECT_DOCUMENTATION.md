# MediCare Project Documentation

## Table of Contents
1. Project Overview
2. Features
3. Technology Stack
4. Folder Structure
5. Setup & Installation
6. Running the Project
7. Responsive Design
8. Component Details
9. Services
10. Theming & Styling
11. Testing
12. Deployment
13. Contribution Guidelines
14. Contact & Support

---

## 1. Project Overview
MediCare is a healthcare management platform designed to empower healthcare stores with smart management solutions. It provides streamlined tools for product management, pricing, and client engagement.

## 2. Features
- Hero banner with call-to-action buttons
- Pricing plans with dynamic cards
- Trusted clients section
- Responsive navigation and footer
- Theming and dark mode support
- Modular architecture

## 3. Technology Stack
- Angular
- TypeScript
- SCSS (Sass)
- PrimeNG (UI components)
- Node.js (for backend/server rendering)

## 4. Folder Structure
```
public/           # Static assets
src/
  app/
    core/         # Core modules, routing, services
    shared/       # Shared components (navbar, footer)
    assets/       # Images, styles
  styles/         # Global and theme styles
```

## 5. Setup & Installation
1. Clone the repository:
   ```
   git clone <repo-url>
   cd medicares
   ```
2. Install dependencies:
   ```
   npm install
   ```

## 6. Running the Project
- Start development server:
  ```
  npm start
  ```
- Run tests:
  ```
  npm test
  ```

## 7. Responsive Design
- Uses CSS Grid and Flexbox
- Media queries for mobile and tablet
- All main sections and footer are mobile-optimized

## 8. Component Details
- `home.component`: Hero, pricing, clients sections
- `navbar.component`: Responsive navigation
- `footer.component`: Multi-section footer, social links

## 9. Services
- `theme.service`: Handles theming and dark mode

## 10. Theming & Styling
- SCSS variables for colors, spacing
- Theme toggling via service

## 11. Testing
- Unit tests for components and services
- Run with `npm test`

## 12. Deployment
- Build for production:
  ```
  npm run build
  ```
- Deploy static files to your preferred host

## 13. Contribution Guidelines
- Fork the repo and create a feature branch
- Follow Angular style guide
- Submit pull requests with clear descriptions

## 14. Contact & Support
- For issues, use the GitHub Issues tab
- Contact: support@medicare.com

---

> For more details, see individual component and service documentation in the codebase.
