## Test cases documentation

Manual test cases are available under

<https://dusty-bream-905.notion.site/Manual-Test-Cases-for-the-challenge-ed3ac3403c1e479da7f640214b010990>

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

#### Issues and improvements suggestions

# Reporter outputs .json files instead of HTML report, it is a known issue in the plugin, here is a link to the issue

1. cypress-mochawesome-reporter, version "^3.7.0". It currently generates only JSON files, stored under cypress/e2e/results/.jsons, this issue/ bug is known and is listed under https://github.com/LironEr/cypress-mochawesome-reporter/issues/171

2. Logged in user persistency -> flaky tests failing randomly due to the online shop throwing
   visit/wunschliste -> 302: https://www.hoeffner.de/login
   (page load)--page loaded--
   (new url)https://www.hoeffner.de/

![alt text](<./cypress/screenshots/wishlist.feature/Existing%20user%20can%20add%20a%20product%20to%20the%20wishlist%20successfully%20--%20Add%20product%20to%20the%20wishlist%20(failed)%20(attempt%202).png> "Wishlist page throwing 302 error")
