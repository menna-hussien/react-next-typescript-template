# React + TypeScript + Vite

This template provides the basic setup to get React working in Vite Typescript with HMR, ESLint rules and jest.

## Folder Structure

Our template follows the atomic folder structure where:

- core --> atoms
- components --> molecules
- containers --> organisms
- templates --> templates
- pages --> pages

Below link had more info about atomic structure: [https://medium.com/swlh/atomic-design-for-developers-atomic-engineering-3591af676ef4]

Any shared components across the app should be added to one of the four folders (core, components, containers, templates)

Any pages shoyld be added to the pages folder

Any components uniquely for one of the pages, should be added in components folder inside the page itself as below:
.
└── pages/
├── pageOne/
│ ├── UniquePageComponent/
│ │ ├── **test**/
│ │ │ └── UniquePageComponent.test.ts
│ │ ├── UniquePageComponent.tsx
│ │ ├── UniquePageComponent.types.ts
│ │ ├── UniquePageComponent.styles.scss
│ │ └── index.ts
│ └── **test**/
│ └── pageOne.test.ts
├── pageOne.tsx
├── pageOne.types.ts
├── pageOne.styles.scss
└── index.ts

Any newly added component either shared or per page , should follow the following folder structure:
.
└── NewComponent/
├── **test**/
│ └── NewComponent.test.ts
├── NewComponent.tsx
├── NewComponent.types.ts
├── NewComponent.styles.scss
└── index.ts

Any shared functions, should be added to the utils folder

Any shared hooks, should be added to the hooks folder

Any service/apis, should be added to the services folder

Any assets(imgs) should be added to the assets/images folders

Any assets(fonts) should be added to the assets/fonts folders

Any assets(css) should be added to the assets/css folders

## All pages imports should be dynamic using lazy loading

## All images tags should have loading="lazy" attribute and should be in webp format

## You can work with debugging as launch.json is added to .vscode folder

## Before making the PR we should run the below commands and solve them if needed:

- npm run lint
- npm run test
- npm run cy:open
