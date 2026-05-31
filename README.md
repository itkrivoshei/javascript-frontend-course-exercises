# JavaScript Frontend Components

[![Verify](https://img.shields.io/github/actions/workflow/status/itkrivoshei/javascript-frontend-course-exercises/verify.yml?branch=main&style=flat-square&label=verify&logo=githubactions&logoColor=white)](https://github.com/itkrivoshei/javascript-frontend-course-exercises/actions/workflows/verify.yml)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES%20Modules-f7df1e?style=flat-square&logo=javascript&logoColor=000)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Jest](https://img.shields.io/badge/Jest-25-c21325?style=flat-square&logo=jest&logoColor=white)](package.json)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg?style=flat-square)](LICENSE)

Collection of vanilla JavaScript frontend modules: data utilities, DOM components, browser widgets, async API integrations, form controls, sortable lists, and a dashboard page.

> Maintenance status: archived learning reference. This repository is kept public as a record of frontend training work, but it is not part of the active DevOps portfolio.

## Included Surface

| Area | Examples |
| --- | --- |
| Data helpers | sort strings, pick/omit object keys, trim symbols, unique values |
| DOM components | notifications, column charts, sortable tables, tooltips |
| Events | double slider, drag sorting, document click handling |
| Async UI | Fetch wrappers, paginated tables, dashboard metrics |
| Forms | product forms, image list controls, date range picker |
| Browser routing | dashboard page assembled from reusable components |

The repository includes `21` Jest-covered modules and `13` standalone browser entry points.

## Local Setup

```bash
git clone https://github.com/itkrivoshei/javascript-frontend-course-exercises.git
cd javascript-frontend-course-exercises
npm ci
```

## Commands

| Command | Description |
| --- | --- |
| `npm run lint` | Run ESLint over JavaScript files |
| `npm run lint:fix` | Apply ESLint fixes |
| `npm test` | Run the Jest suite |
| `npm run test:all` | Alias for all tests |
| `npm run test:specific -- path/to/file.js` | Run tests related to a file |

## Browser Entries

There is no single bundled app. Open a local HTML file directly or serve the repository as static files:

```bash
npx serve .
```

Then open the relevant `index.html` under one of the component folders.

## Tooling Notes

- Jest runs through Babel for ES module syntax.
- `full-icu` is used so locale-sensitive tests behave consistently.
- GitHub Actions has a push verification workflow and a pull-request test workflow.

## License

[ISC](LICENSE)
