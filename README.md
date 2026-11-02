# Playwright QA Portfolio

![Playwright Tests](https://github.com/yara-Garcia/playwright-qa-portfolio/actions/workflows/playwright.yml/badge.svg)

End-to-end test automation project built with **Playwright** and **TypeScript**, using the **Page Object Model** pattern and running on **GitHub Actions** (CI).

UI tests run against [Sauce Demo](https://www.saucedemo.com), a sample e-commerce application designed for test automation practice.

> 🚧 This project is under active development. See the [Roadmap](#roadmap) for what's coming next.

## Tech Stack

- [Playwright](https://playwright.dev) – test framework
- TypeScript
- Page Object Model (POM)
- GitHub Actions – continuous integration

## Project Structure

```
playwright-qa-portfolio/
├── .github/workflows/   # CI pipeline (GitHub Actions)
├── pages/               # Page Objects
│   ├── LoginPage.ts
│   ├── InventoryPage.ts
│   └── CartPage.ts
├── tests/               # Test specs
│   ├── login.spec.ts
│   ├── cart.spec.ts
│   └── checkout.spec.ts
└── playwright.config.ts
```

## Test Scenarios

**Login**
- Successful login with valid credentials
- Error message with invalid credentials
- Error message for a locked-out user

**Cart**
- Add one item to the cart
- Add two items to the cart
- Remove an item from the cart
- Hide the cart badge when all items are removed

**Checkout**
- Display the added item in the cart

All tests run on Chromium, Firefox and WebKit.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) 18 or higher

### Installation

```bash
git clone https://github.com/yara-Garcia/playwright-qa-portfolio.git
cd playwright-qa-portfolio
npm ci
npx playwright install --with-deps
```

### Running the tests

```bash
# Run all tests (headless)
npx playwright test

# Run in UI Mode
npx playwright test --ui

# Open the HTML report
npx playwright show-report
```

## Continuous Integration

Tests run automatically on every push and pull request through GitHub Actions. The HTML report is available as an artifact in each workflow run.

## Roadmap

- [ ] Complete checkout flow (form validation and order completion)
- [ ] API tests with Playwright's `request` fixture
- [ ] Test scenarios documented in Gherkin syntax

## Author

**Yara Garcia** – QA Analyst

[LinkedIn](https://www.linkedin.com/in/yaracoelho/) · [GitHub](https://github.com/yara-Garcia)
