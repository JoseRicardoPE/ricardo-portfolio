# Frontend Architecture

This document defines the development conventions for the Angular frontend of the Ricardo Portfolio.

The frontend follows a feature-first architecture using Angular standalone APIs.

The high-level architectural decisions are defined in `docs/architecture/technical-architecture.md`.

## Application Structure

The application is organized as follows:

```
src/app/
├── core/
├── design-system/
├── features/
├── layout/
├── shared/
├── app.config.ts
├── app.routes.ts
└── app.ts
```

## Core

`core/` contains application-wide infrastructure and singleton concerns.

Examples:

- API configuration
- HTTP interceptors
- Route guards
- Authentication infrastructure
- Global services
- Error handling
- Application configuration

Feature-specific business logic must not be placed in `core/`.

## Shared

`shared/` contains reusable and feature-agnostic application code.

Examples:

- Directives
- Pipes
- Utilities
- Shared types
- Generic helpers

Code should only be placed in `shared/` when it is genuinely reusable across multiple application areas.

Feature-specific code must remain inside its feature.

## Layout

`layout/` contains components responsible for the global application structure.

Examples:

- Header
- Footer
- Public layout
- Admin layout
- Global navigation

Layout components may compose Design System components but should not contain feature-specific business logic.

## Design System

`design-system/` contains reusable Angular visual primitives derived from the approved Figma Design System.

Examples:

- Buttons
- Inputs
- Textareas
- Tags
- Text links
- UI primitives

Design System components must remain reusable and independent from specific product features.

design-system/
→ Angular UI components

styles/
→ styling foundations and tokens

```
src/
├── app/
│   └── design-system/
│       ├── button/
│       ├── input/
│       ├── textarea/
│       ├── tag/
│       └── text-link/
│
├── styles/
│   ├── abstracts/
│   ├── base/
│   ├── themes/
│   └── utilities/
│
└── styles.scss
```

## Initial public features:

```
features/
├── home/
├── about/
├── projects/
├── case-studies/
└── contact/
```

Additional features such as the Admin area will be introduced when their corresponding implementation work begins.

## Feature Structure

A feature should only contain the directories required by its current responsibilities.

A feature may evolve toward the following structure:

```
feature/
├── pages/
├── components/
├── data-access/
├── models/
└── routes/
```

Empty directories should not be created in advance.

## pages

Contains route-level components.

Pages represent application screens and coordinate the elements required to render a route.

Example:

`features/projects/pages/projects/`

## components

Contains components that belong specifically to the feature.

Feature components should remain inside the feature unless they become genuinely reusable across unrelated areas of the application.

## data-access

Contains feature-specific API communication and data-access logic.

Examples:

- API services
- Data loaders
- Feature state related to remote data

Generic HTTP infrastructure belongs in `core/`, not in feature `data-access/`.

## models

Contains types and interfaces that belong specifically to the feature domain.

Types shared by unrelated features may be moved to `shared/` when appropriate.

## routes

Contains feature-specific routing configuration when the feature becomes complex enough to require dedicated routes.

Simple routes may remain in the application routing configuration.

## Dependency Rules

The following dependency principles should be maintained:

- Features may use core, shared, layout, and design-system when appropriate.
- Features should not depend directly on the internal implementation of unrelated features.
- shared must not depend on specific features.
- design-system must not depend on product features.
- core must not contain feature-specific presentation or business logic.
- layout must not contain feature-specific business logic.
- Reusable code should not be moved to shared or design-system prematurely.

These rules reduce coupling and preserve clear architectural boundaries.

## Routing

Public routes are defined using Angular Router.

Initial routes:

```
/                  → Home
/about             → About
/projects          → Projects
/projects/:slug    → Case Study
/contact            → Contact
```

Route-level components should be lazy loaded when appropriate.

The dynamic `:slug` route allows individual project Case Studies to be resolved without defining a separate Angular route for every project.

## Angular Conventions

The frontend follows these conventions:

- Angular standalone APIs are used.
- Route-level components are lazy loaded when appropriate.
- Signals are preferred for synchronous local and application state where appropriate.
- RxJS is used for asynchronous streams, HTTP workflows, and event-driven operations where it provides clearer semantics.
- Feature-specific code remains colocated with its feature.
- Generic reusable code must have a clear reason to exist outside a feature.
- Empty architectural directories should not be created without a concrete responsibility.

## Responsive Strategy

The frontend follows a Mobile First responsive strategy.

Base styles must target mobile layouts first. Larger layouts should be progressively enhanced using `min-width` breakpoints.

Responsive behavior must follow the approved Figma designs and Design System.

Guidelines:

- Mobile styles are the default styles.
- Breakpoints should use `min-width`.
- Breakpoints must be centralized in the styling architecture.
- Components should adapt progressively from mobile to larger viewports.
- Avoid desktop-first overrides unless a concrete implementation requirement justifies them.
- Responsive behavior must preserve accessibility and content hierarchy.

## Naming

Directories and files use lowercase kebab-case.

Examples:

- case-studies/
- data-access/
- project-card/

Angular classes use PascalCase.

Examples:

- Home
- Projects
- CaseStudy

Branch and Git conventions are documented separately in:

`docs/development/git-workflow.md`

## Architecture Evolution

The architecture may evolve as implementation requirements become concrete.

New abstractions, shared layers, state-management solutions, or architectural patterns should only be introduced when the application demonstrates a clear need for them.

The project should prioritize simplicity, maintainability, separation of concerns, strong typing, accessibility, performance, and testability.

## Styling Architecture

The frontend uses SCSS with a structured styling architecture derived from the approved Figma Foundations and Design System.

Global styling responsibilities are organized under:

```
src/styles/
├── abstracts/
│   ├── _variables.scss
│   ├── _functions.scss
│   ├── _mixins.scss
│   └── _breakpoints.scss
├── base/
│   ├── _reset.scss
│   ├── _typography.scss
│   └── _base.scss
├── themes/
│   ├── _light.scss
│   └── _dark.scss
├── utilities/
│   └── _utilities.scss
└── _index.scss
```

Component-specific styles remain colocated with their Angular components.

Example:

```
design-system/
└── button/
    ├── button.ts
    ├── button.html
    └── button.scss
```

### Styling Rules

- Global styles must contain only application-wide styling concerns.
- Component-specific styles must remain colocated with their components.
- Design tokens should derive from the approved Figma Design System.
- Components should consume semantic design tokens rather than hardcoded theme values.
- Light and Dark themes should redefine semantic tokens instead of duplicating component styles.
- Responsive styles must follow the Mobile First strategy.
- Breakpoints should be centralized rather than duplicated across the application.
- Mixins and functions should only be introduced when they provide concrete reuse.
- Avoid unnecessary global selectors.
- SCSS modules should be exposed through index files using `@forward` when this improves import consistency.
- Components should avoid importing multiple internal styling partials individually when a centralized SCSS entry point is available.

## Design Tokens

Design tokens should be derived from the approved Figma Foundations.

Semantic tokens are preferred over direct color values inside components.

Example:

```scss
.project-card {
    background-color: var(--color-surface);
    color: var(--color-text-primary);
}
```

Instead of:

```scss
.project-card {
    background-color: #182033;
    color: #cbd5e1;
}
```

Theme-specific values should be resolved by the Light and Dark theme definitions rather than by individual components.