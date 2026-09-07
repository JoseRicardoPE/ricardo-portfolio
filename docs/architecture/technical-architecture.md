# Ricardo Portfolio Technical Architecture

## 1. Purpose

This document defines the initial technical architecture of Ricardo Portfolio.

The architecture translates the approved product goals, content structure,
information architecture and product requirements into a concrete technical
foundation for implementation.

The project will use a polyrepo architecture with independent frontend and
backend repositories.

---

## 2. Repository Strategy

Ricardo Portfolio will use two repositories:

### Frontend

Repository:

`ricardo-portfolio`

Responsibilities:

- Public Portfolio.
- Private Admin UI.
- Routing.
- Internationalization.
- Light/Dark theme.
- API consumption.
- Client-side state.
- SEO integration.
- SSR / prerender.
- Accessibility.
- Responsive implementation.

### Backend

Repository:

`ricardo-portfolio-api`

Responsibilities:

- REST API.
- Authentication.
- Authorization.
- Business logic.
- Persistence.
- Data validation.
- Projects management.
- Case Studies management.
- Technologies management.
- Media metadata management.
- Contact messages management.

The repositories will evolve independently but follow coordinated API contracts.

---

## 3. High-Level Architecture

```text
Users
│
├── Public Visitors
│
└── Admin User
        │
        ▼
Angular Frontend
│
├── Public Portfolio
├── Private Admin
├── SSR / Prerender
├── i18n
├── Theme
└── API Client
        │
        ▼
REST API
Node.js + Express + TypeScript
│
├── Auth
├── Projects
├── Case Studies
├── Technologies
├── Media
└── Contact
        │
        ▼
MongoDB
```

External services may be integrated where necessary for media storage,
deployment, observability and delivery.

---

## 4. Frontend Architecture

### Core Technologies

- Angular.
- TypeScript.
- SCSS.
- Signals.
- RxJS.

The frontend will use Angular standalone APIs.

### Architectural Style

The frontend will follow a feature-first architecture.

Initial structure:

src/app/
├── core/
├── shared/
├── layout/
├── features/
│   ├── home/
│   ├── about/
│   ├── projects/
│   ├── case-studies/
│   ├── contact/
│   └── admin/
├── design-system/
└── app.routes.ts

### Responsibilities

#### core

Application-wide infrastructure and singleton responsibilities.

Examples:

- API configuration.
- Interceptors.
- Global services.
- Guards.
- Authentication infrastructure.
- Application configuration.

#### shared

Reusable generic application elements.

Examples:

- Pipes.
- Directives.
- Utility components.
- Shared types.
- General helpers.

#### layout

Application shell and structural UI.

Examples:

- Header.
- Footer.
- Public navigation.
- Admin layout.

#### features

Business and page-oriented functionality grouped by product domain.

Each feature may contain:

- pages/
- components/
- data-access/
- models/
- routes/

#### design-system

Reusable visual primitives and design tokens derived from the approved Figma
Design System.

Examples:

- Buttons.
- Inputs.
- Typography.
- Cards.
- Modals.
- Spacing tokens.
- Color tokens.

---

## 5. Frontend Routing

Public routes:

/
├── /about
├── /projects
├── /projects/:slug
└── /contact

Admin routes:

/admin
├── /admin/login
├── /admin/projects
├── /admin/case-studies
├── /admin/technologies
├── /admin/media
└── /admin/messages

Protected Admin routes will require authentication.

Feature routes should be lazy loaded when appropriate.

---

## 6. Frontend State Management

Angular Signals will be the preferred mechanism for local and application
state where appropriate.

RxJS will be used for asynchronous streams, HTTP workflows and event-driven
operations where it provides clearer semantics.

A global external state management library will not be introduced unless the
complexity of the application demonstrates a concrete need.

---

## 7. Backend Architecture

### Core Technologies

- Node.js.
- Express.
- TypeScript.
- MongoDB.
- Mongoose.

### Architectural Style

The backend will use a modular monolith.

Initial structure:

src/
├── modules/
│   ├── auth/
│   ├── projects/
│   ├── case-studies/
│   ├── technologies/
│   ├── media/
│   └── contact/
├── config/
├── middlewares/
├── shared/
└── app.ts

Each business module should encapsulate its own responsibilities.

Typical module structure:

module/
├── model.ts
├── service.ts
├── controller.ts
├── routes.ts
├── validation.ts
└── types.ts

The exact file structure may evolve when implementation begins.

---

## 8. Backend Responsibility Layers

### Routes

Responsible for:

- Endpoint declaration.
- Middleware composition.
- Controller delegation.

### Controllers

Responsible for:

- HTTP request handling.
- HTTP response handling.
- Input extraction.
- Delegation to services.

Controllers should avoid containing business logic.

### Services

Responsible for:

- Business rules.
- Application logic.
- Persistence orchestration.
- Cross-module coordination where necessary.

### Models

Responsible for:

- Persistence schemas.
- Database validation.
- Data representation.

### Validation

Input validation should occur before business logic execution.

---

## 9. API Architecture

The backend will expose a REST API.

Initial API domains:

/api/auth
/api/projects
/api/case-studies
/api/technologies
/api/media
/api/contact

The exact endpoint contract will be defined during implementation of each
backend module.

Public operations and protected Admin operations must be clearly separated.

API responses should follow consistent conventions for:

- Success responses.
- Validation errors.
- Authentication errors.
- Authorization errors.
- Not-found errors.
- Server errors.

---

## 10. Persistence

MongoDB will be the primary database.

Mongoose will provide:

Schemas.
Data validation.
Model abstraction.
Query capabilities.

Initial persistent entities:

- Projects.
- Case Studies.
- Technologies.
- Media metadata.
- Contact Messages.
- Authentication-related data if required.

The data model will be refined during implementation of the corresponding
modules.

---

## 11. Authentication and Authorization

The Admin area will require authentication.

Initial architecture should support:

- Secure login.
- Protected frontend routes.
- Protected backend endpoints.
- Authentication state.
- Authorization of Admin operations.
- Secure credential handling.

The initial authentication strategy may use JWT-based authentication.

The exact token storage, refresh strategy and session lifecycle must be defined
before authentication implementation.

Security decisions must avoid exposing credentials or sensitive tokens in
client-accessible insecure storage.

---

## 12. Media Architecture

Portfolio projects and Case Studies may require images and other media.

Media files should not be stored directly inside MongoDB.

The architecture should support an external media storage provider.

A provider such as Cloudinary may be evaluated during the Media implementation
phase.

MongoDB should store only the metadata and references required by the
application.

---

## 13. SSR and Prerender

The public portfolio should support Angular SSR and/or prerendering where
appropriate.

Primary goals:

- SEO.
- Fast initial rendering.
- Crawlable content.
- Social sharing metadata.
- Improved perceived performance.

Public routes should be prioritized for SSR or prerender.

Private Admin pages do not require search engine indexing.

---

## 14. SEO Architecture

The frontend must support dynamic SEO metadata.

Public pages should support:

- Title.
- Meta description.
- Canonical URL.
- Open Graph metadata.
- Structured metadata when useful.
- Sitemap.
- robots.txt.

Project Case Studies should generate metadata based on project content.

---

## 15. Internationalization

The public portfolio will support:

- Spanish.
- English.

The frontend should centralize translation resources and avoid hardcoded
user-facing strings where translation is required.

The exact Angular i18n implementation will be selected during frontend setup.

Dynamic API content must be designed with localization requirements in mind
where applicable.

---

## 16. Theme Architecture

The frontend will support:

- Light theme.
- Dark theme.

Theme values should derive from the Design System.

The selected theme should persist between visits where appropriate.

The implementation should respect accessibility requirements such as contrast
and visible focus states.

---

## 17. Validation Strategy

Validation must exist at appropriate boundaries.

### Frontend

Responsible for:

- Form usability validation.
- Immediate user feedback.
- Client-side constraints.

### Backend

Responsible for:

- Authoritative request validation.
- Data integrity.
- Business-rule validation.

Frontend validation must not replace backend validation.

---

## 18. Error Handling

The architecture should provide centralized and predictable error handling.

Frontend considerations:

- Loading states.
- Empty states.
- Validation errors.
- API failures.
- Not-found pages.
- User-friendly messages.

Backend considerations:

- Central error-handling middleware.
- Consistent HTTP status codes.
- Consistent error response structure.
- Safe production error messages.
- Diagnostic logging.

---

## 19. Testing Architecture

Testing will be implemented at multiple levels.

### Frontend

- Unit tests.
- Component or integration tests where appropriate.

### Backend

- Unit tests.
- Service tests.
- API integration tests.

### End-to-End

Critical flows should be validated through E2E testing.

Examples:

- Public project navigation.
- Project Case Study access.
- Contact form submission.
- Admin login.
- Admin content management.

The exact tools will be defined in the Testing Epic.

---

## 20. CI/CD Architecture

Frontend and backend repositories will use independent CI/CD pipelines.

GitHub Actions will be the preferred CI/CD platform.

Pull Requests should validate relevant quality gates before merge.

Potential checks include:

- Install.
- Build.
- Lint.
- Tests.
- Type checking.
- Production build validation.

Deployment pipelines should be independent for frontend and backend.

---

## 21. Deployment Architecture

Frontend and backend will be deployed independently.

The architecture should support:

Custom Domain
     │
     ▼
Frontend Hosting
     │
     ▼
Backend API
     │
     ▼
MongoDB Atlas

Potential infrastructure may include:

- Frontend hosting provider.
- Backend hosting provider.
- MongoDB Atlas.
- External media provider.
- DNS / HTTPS configuration.

Exact providers will be selected during the Production and CI/CD phases.

---

## 22. Security Architecture

The system should apply security at multiple layers:

- HTTPS.
- Authentication.
- Authorization.
- Backend input validation.
- Secret management.
- Environment variables.
- Safe CORS configuration.
- Rate limiting where appropriate.
- Secure HTTP headers.
- Dependency maintenance.
- Safe error responses.

Security controls will be refined during implementation of Admin and backend
features.

---

## 23. Observability

Backend and production infrastructure should provide sufficient diagnostic
information for troubleshooting.

The architecture should allow:

- Structured application logs.
- Error diagnostics.
- Deployment diagnostics.
- Monitoring integration if required.

Sensitive information must never be exposed in logs.

---

## 24. Architectural Boundaries

The following boundaries should be maintained:

### Frontend

Owns:

- Presentation.
- User interaction.
- Client-side state.
- Navigation.
- Accessibility implementation.
- API consumption.

### Backend

Owns:

- Business logic.
- Persistence.
- Authentication enforcement.
- Authorization.
- Server-side validation.
- API contracts.

### Database

Owns:

- Persistent application data.

### External Media Provider

Owns:

- Media asset storage and delivery.

These responsibilities should remain separated to reduce coupling.

---

## 25. Architectural Principles

The project should prioritize:

- Simplicity.
- Separation of concerns.
- Strong typing.
- Modularity.
- Reusability.
- Maintainability.
- Accessibility.
- Performance.
- Security.
- Testability.
- Clear API contracts.

The architecture should avoid unnecessary complexity.

Microservices will not be used for the initial production version.

---

## 26. Future Evolution

The initial backend architecture is a modular monolith.

After Portfolio v1.0, selected modules may be evaluated for extraction as an
architectural experiment.

Any microservice extraction must have a concrete technical or learning
objective and must not increase production complexity without clear value.

---

## 27. Initial Technology Summary

| Area                  | Technology / Approach                   |
| --------------------- | --------------------------------------- |
| Frontend              | Angular + TypeScript                    |
| Styling               | SCSS                                    |
| Reactive State        | Signals + RxJS                          |
| Frontend Architecture | Feature-first                           |
| Backend               | Node.js + Express + TypeScript          |
| Backend Architecture  | Modular monolith                        |
| Database              | MongoDB + Mongoose                      |
| API                   | REST                                    |
| Authentication        | JWT-based approach to evaluate          |
| Media                 | External provider to evaluate           |
| SSR / SEO             | Angular SSR / Prerender                 |
| Internationalization  | Spanish / English                       |
| Theme                 | Light / Dark                            |
| CI/CD                 | GitHub Actions                          |
| Testing               | Multi-level automated testing           |
| Deployment            | Independent frontend/backend deployment |

---

## 28. Decision Status

### Approved Initial Decisions

- Polyrepo architecture.
- Angular frontend.
- Node.js + Express + TypeScript backend.
- MongoDB + Mongoose.
- REST API.
- Feature-first frontend architecture.
- Modular monolith backend architecture.
- Public Portfolio + Private Admin.
- Spanish / English.
- Light / Dark theme.
- SSR / prerender for public content.
- Independent frontend/backend delivery.

### Decisions Deferred

- Exact Angular internationalization library or strategy.
- Exact authentication token/session strategy.
- Exact media storage provider.
- Exact frontend hosting provider.
- Exact backend hosting provider.
- Exact testing tools.
- Exact observability provider.
- Exact production infrastructure.

Deferred decisions must be resolved in the relevant implementation Epic rather
than assumed prematurely.