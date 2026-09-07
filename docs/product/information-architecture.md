# Portfolio Information Architecture

## 1. Purpose

This document defines the information architecture of Ricardo Portfolio,
including the public navigation structure, page hierarchy, route organization
and the relationship between the public portfolio and the private Admin area.

The goal is to provide a clear and predictable navigation experience for both
quick professional evaluation and deeper technical exploration.

---

## 2. Product Areas

Ricardo Portfolio is divided into two main areas:

### Public Portfolio

Accessible to all visitors.

- Home
- About
- Projects
- Project Case Study
- Contact

### Private Admin

Accessible only to authenticated users.

- Login
- Dashboard
- Projects Management
- Case Studies Management
- Technologies Management
- Media Management
- Contact Messages

The public portfolio and Admin area belong to the same product but serve
different purposes and audiences.

---

## 3. Public Navigation

### Primary Navigation

The main navigation should provide direct access to:

- Home
- About
- Projects
- Contact

Project Case Studies are not part of the primary navigation because they are
accessed from individual projects.

### Global Navigation Elements

The navigation may also include:

- Language selector
- Theme selector
- GitHub
- LinkedIn
- Primary contact CTA

---

## 4. Public Page Hierarchy

```text
Home
├── Professional introduction
├── Professional positioning
├── Featured projects
├── Core technologies
├── Professional strengths
└── Contact CTA

About
├── Professional summary
├── Experience overview
├── Frontend specialization
├── UX/UI and Figma experience
├── Backend capabilities
├── Development approach
└── Technologies

Projects
├── Project listing
├── Project filters or categories
└── Project Card
    └── Project Case Study

Project Case Study
├── Overview
├── Context
├── Problem
├── Goals
├── Role and responsibilities
├── UX/UI process
├── Architecture
├── Technologies
├── Challenges
├── Technical decisions
├── Solutions
├── Responsive implementation
├── Accessibility
├── Performance
├── Results
├── Lessons learned
├── Media
├── GitHub repository
└── Live project

Contact
├── Contact introduction
├── Contact form
│   ├── Name
│   ├── Email
│   └── Message
├── LinkedIn
└── GitHub
```

---

## 5. Public Routes
The initial public route structure will be:

| Page               | Route             |
| ------------------ | ----------------- |
| Home               | `/`               |
| About              | `/about`          |
| Projects           | `/projects`       |
| Project Case Study | `/projects/:slug` |
| Contact            | `/contact`        |

The project slug should provide a human-readable and SEO-friendly URL.

Example:

`/projects/developer-cv-cms`
`/projects/kaboom-bogota`
`/projects/snake-game`

---

## 6. Admin Navigation
The Admin area should use an independent navigation structure from the public
portfolio.

Suggested hierarchy:

```text
Admin
├── Login
└── Dashboard
    ├── Projects
    ├── Case Studies
    ├── Technologies
    ├── Media
    └── Contact Messages
```

Admin navigation should prioritize content management rather than portfolio
exploration.

---

## 7. Admin Routes
The initial Admin route structure is expected to follow:

| Area             | Route                 |
| ---------------- | --------------------- |
| Login            | `/admin/login`        |
| Dashboard        | `/admin`              |
| Projects         | `/admin/projects`     |
| Case Studies     | `/admin/case-studies` |
| Technologies     | `/admin/technologies` |
| Media            | `/admin/media`        |
| Contact Messages | `/admin/messages`     |

Detailed CRUD routes and frontend interaction patterns will be defined during
the Admin design and implementation phases.

---

## 8. Navigation Flows

### Recruiter / Hiring Manager Flow

Home
→ Featured Project
→ Project Case Study
→ About
→ Contact

### Alternative Quick Evaluation Flow

Home
→ Projects
→ Contact

### Technical Evaluator Flow

Home
→ Projects
→ Project Case Study
→ Architecture / Technical Decisions
→ GitHub Repository

### Client / Collaborator Flow

Home
→ Projects
→ Project Case Study
→ Contact

### Admin Flow

Login
→ Dashboard
→ Content Management Area
→ Create / Edit / Delete Content

---

## 9. Entry Points

Users may enter the portfolio through different pages.

Important entry points include:

- Home page
- Project listing
- Individual Project Case Study
- Direct links from LinkedIn
- Direct links from GitHub
- Search engine results

Each public page should therefore provide enough context to understand who
Ricardo is and provide access to the primary navigation.

---

## 10. Navigation Principles

The information architecture should follow these principles:

- Keep primary navigation simple.
- Avoid unnecessary navigation levels.
- Allow recruiters to reach relevant information quickly.
- Allow technical evaluators to explore deeper content.
- Keep Project Case Studies accessible from Projects.
- Keep Admin navigation completely separated from public navigation.
- Maintain consistent navigation across public pages.
- Ensure navigation works with keyboard and assistive technologies.
- Use predictable and human-readable URLs.
- Avoid duplicate content paths.

---

## 11. Initial Sitemap

```text
/
├── about
├── projects
│   └── :slug
└── contact

/admin                    → Dashboard
├── login
├── projects
├── case-studies
├── technologies
├── media
└── messages
```

---

## 12. Scope Notes

The initial information architecture does not include:

- Blog routes
- Public user profiles
- Public authentication
- Registration
- Newsletter
- Community features
- E-commerce

These areas are outside the initial portfolio scope.