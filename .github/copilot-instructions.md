# Copilot Instructions for AI Agents

## Project Overview
- This is an Angular 17+ application using Angular CLI, with support for both browser and server-side rendering (SSR).
- The main entry points are `src/main.ts` (browser) and `src/main.server.ts` (SSR). SSR is configured via Express in `src/server.ts`.
- The root Angular module/component is `App` in `src/app/app.ts`.
- Routing is defined in `src/app/app.routes.ts` (client) and `src/app/app.routes.server.ts` (server).
- Application configuration is split for browser (`src/app/app.config.ts`) and server (`src/app/app.config.server.ts`).

## Build, Serve, and Test Workflows
- **Development server:** Use `ng serve` or `npm start` to run locally at `http://localhost:4200`.
- **Production build:** Use `ng build` (outputs to `dist/`). SSR builds use the configuration in `angular.json`.
- **Unit tests:** Run with `ng test` or `npm test` (Karma runner).
- **SSR server:** Start with `node dist/server.js` after building for SSR.

## Key Architectural Patterns
- **SSR Integration:** Express server (`src/server.ts`) handles static assets and delegates all other requests to Angular SSR.
- **Config Merging:** Server config merges client config using `mergeApplicationConfig` for shared providers.
- **Routing:** Client and server routes are separated for flexibility. Server routes use `RenderMode.Prerender` for universal rendering.
- **Providers:** Application-wide providers are set in config files, including error listeners, zone change detection, hydration, and routing.

## Project-Specific Conventions
- **File Naming:** Client/server config and routes are split by `.server.ts` suffix.
- **Assets:** Static assets are served from the `public/` directory and referenced in `angular.json`.
- **Styling:** Global styles in `src/styles.css`; component styles in their respective `.css` files.
- **Component Structure:** Main component is `App` (`src/app/app.ts`), using standalone Angular component pattern.

## Integration Points
- **Express API:** You can add REST endpoints in `src/server.ts` (see commented example).
- **External Dependencies:** Uses `@angular/ssr`, `express`, and standard Angular packages.

## Examples
- To add a new route, update `src/app/app.routes.ts` and/or `src/app/app.routes.server.ts`.
- To add a new component: `ng generate component <name>` and import it in the relevant module/config.
- To extend SSR, add providers to `src/app/app.config.server.ts`.

## References
- Main config: `angular.json`
- Entry points: `src/main.ts`, `src/main.server.ts`, `src/server.ts`
- Routing: `src/app/app.routes.ts`, `src/app/app.routes.server.ts`
- Config: `src/app/app.config.ts`, `src/app/app.config.server.ts`

---

If any section is unclear or missing important project-specific details, please provide feedback or specify which workflows, conventions, or integration points need further documentation.