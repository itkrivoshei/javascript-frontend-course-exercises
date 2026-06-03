<div align="center">

# JavaScript Frontend Components

Collection of vanilla JavaScript frontend modules: data utilities, DOM components, browser widgets, async API integrations, form controls, sortable lists, and dashboard-style pages.

[![Verify](https://img.shields.io/github/actions/workflow/status/itkrivoshei/javascript-frontend-course-exercises/verify.yml?branch=main&style=for-the-badge&label=verify&logo=githubactions&logoColor=white&labelColor=0f172a)](https://github.com/itkrivoshei/javascript-frontend-course-exercises/actions/workflows/verify.yml)
[![CodeQL](https://img.shields.io/github/actions/workflow/status/itkrivoshei/javascript-frontend-course-exercises/codeql.yml?branch=main&style=for-the-badge&label=codeql&logo=github&logoColor=white&labelColor=0f172a)](https://github.com/itkrivoshei/javascript-frontend-course-exercises/actions/workflows/codeql.yml)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES%20Modules-f7df1e?style=for-the-badge&logo=javascript&logoColor=000&labelColor=0f172a)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Jest](https://img.shields.io/badge/Jest-30-c21325?style=for-the-badge&logo=jest&logoColor=white&labelColor=0f172a)](package.json)
[![License](https://img.shields.io/github/license/itkrivoshei/javascript-frontend-course-exercises?style=for-the-badge&labelColor=0f172a)](LICENSE)

</div>

## Overview

This repository contains reusable vanilla JavaScript modules focused on browser behavior, DOM rendering, event handling, async data loading, and component-level testing.

The codebase is structured as a practical frontend component collection rather than a single bundled application.

## Included Surface

| Area            | Examples                                                         |
| --------------- | ---------------------------------------------------------------- |
| Data helpers    | Sort strings, pick/omit object keys, trim symbols, unique values |
| DOM components  | Notifications, column charts, sortable tables, tooltips          |
| Events          | Double slider, drag sorting, document click handling             |
| Async UI        | Fetch wrappers, paginated tables, dashboard metrics              |
| Forms           | Product forms, image list controls, date range picker            |
| Browser routing | Dashboard pages assembled from reusable components               |

The repository includes `21` Jest-covered modules and `13` standalone browser entry points.

## Tech Stack

| Area          | Tools                                                                                                      |
| ------------- | ---------------------------------------------------------------------------------------------------------- |
| Language      | [JavaScript ES Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)             |
| Testing       | [Jest](https://jestjs.io/)                                                                                 |
| Transpilation | [Babel](https://babeljs.io/)                                                                               |
| Linting       | [ESLint](https://eslint.org/)                                                                              |
| Automation    | [GitHub Actions](https://github.com/itkrivoshei/javascript-frontend-course-exercises/actions)              |
| Security      | [CodeQL](https://github.com/itkrivoshei/javascript-frontend-course-exercises/actions/workflows/codeql.yml) |

## Local Setup

```bash
git clone https://github.com/itkrivoshei/javascript-frontend-course-exercises.git
cd javascript-frontend-course-exercises
npm ci
```

## Commands

Scripts are defined in [`package.json`](package.json).

| Command                                    | Description                      |
| ------------------------------------------ | -------------------------------- |
| `npm run lint`                             | Run ESLint over JavaScript files |
| `npm run lint:fix`                         | Apply ESLint fixes               |
| `npm test`                                 | Run the Jest suite               |
| `npm run test:all`                         | Alias for all tests              |
| `npm run test:specific -- path/to/file.js` | Run tests related to a file      |

## Browser Entries

There is no single bundled app. Open a local HTML file directly or serve the repository as static files:

```bash
npx serve .
```

Then open the relevant `index.html` under one of the component folders.

## Automation

- [`.github/workflows/verify.yml`](.github/workflows/verify.yml) verifies pushes and pull requests with linting and tests.
- [`.github/workflows/codeql.yml`](.github/workflows/codeql.yml) runs GitHub CodeQL analysis.

## Tooling Notes

- Jest runs through Babel for ES module syntax.
- Browser examples are intentionally kept as standalone entry points.
- Component folders can be opened independently without a global application shell.

## License

[ISC](LICENSE)
