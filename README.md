# JavaScript Frontend Course Exercises

[![Verify](https://img.shields.io/github/actions/workflow/status/itkrivoshei/javascript-frontend-course-exercises/verify.yml?branch=master&style=flat-square&label=verify)](https://github.com/itkrivoshei/javascript-frontend-course-exercises/actions/workflows/verify.yml)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg?style=flat-square)](LICENSE)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES%20Modules-f7df1e?style=flat-square)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

Archived JavaScript frontend course exercises covering language fundamentals, DOM components, async data loading, browser routing, and Jest-based tests.

## Stack

- JavaScript ES modules
- HTML and CSS
- DOM APIs
- Fetch API
- Jest
- Babel
- ESLint
- GitHub Actions

## Scope

This repository contains completed exercises from an earlier JavaScript frontend course. It is kept as an archived learning repository, not as an actively maintained application.

Covered areas include:

- JavaScript fundamentals
- objects and arrays
- DOM manipulation
- browser events
- async code and Fetch API
- form components
- frontend component patterns
- Jest tests
- browser routing and History API

## Project structure

```txt
.
├── 01-intro/
├── 02-javascript-data-types/
├── 03-objects-arrays-intro-to-testing/
├── 04-oop-basic-intro-to-dom/
├── 05-dom-document-loading/
├── 06-events-practice/
├── 07-async-code-fetch-api-part-1/
├── 08-forms-fetch-api-part-2/
├── 09-tests-for-frontend-apps/
├── 10-routes-browser-history-api/
├── .github/workflows/
├── package.json
└── README.md
```

## Installation

```bash
npm install
```

For CI-style installs, use:

```bash
npm ci
```

## Verification

Run linting:

```bash
npm run lint
```

Run all tests:

```bash
npm test
```

Alias for all tests:

```bash
npm run test:all
```

Run tests related to a specific file:

```bash
npm run test:specific -- path/to/exercise/index.js
```

## Run

Most exercises are standalone files or small browser examples. There is no single application entry point and no build step.

For browser-based exercises, open the relevant exercise `index.html` file directly or serve the repository with a simple local static server.

Example:

```bash
npx serve .
```

## Notes

Some base files, test files, and exercise structure come from the original course repository. This repository contains completed exercise implementations and small maintenance updates.

## License

Licensed under the [ISC License](LICENSE).
