## Test Automation Project (A.k.A TAP)

this project is supposed to be a basis to run automation tests with cypress

## Project Overview

this section will explain the used technologies inside this repo, its folder structure
and also explains how to prepare and execute the project

### Setup the Project

#### Project initialization

```bash
npm install
```

#### Run the test automation

run in headles mode

```bash
npm run cy:silent-prod
```

run in cypress browser mode

```bash
npm run cy:editor-prod
```

#### Versions

Cypress version 13.3.1

#### Reporter

cypress-mochawesome-reporter, version "^3.7.0". It currently generates only JSON files, stored under cypress/e2e/results/.jsons, this issue/ bug is known and is listed under https://github.com/LironEr/cypress-mochawesome-reporter/issues/171
