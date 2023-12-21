import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import WildCard from "../objects/wildcard";
import { WILD_CARDS } from "../constants";

When(/^I go to the "(.* page)"$/, function (pageDescription) {
  cy.helper.goto(pageDescription);
});

Then(/^The "(tab title)" is in "(.*)"$/, function (element, language) {
  const expectedValue = cy.localization.getLocalizationStringWithWildCards(
    cy.scope.currentPage,
    language,
    element,
    [new WildCard(WILD_CARDS.ELEMENT_TEXT, Cypress.env("envName"))]
  );
  cy.logger.log("Info", `tab title should be [${expectedValue}]`);
  cy.title().should("eq", expectedValue);
});

When(
  /^I click the "(.* button|.* input field|.* mask|.* link)"$/,
  function (selectorIdentifier) {
    cy.log(`Clicked on element with identifier: ${selectorIdentifier}`);
    cy.helper.getElement(selectorIdentifier).click({ force: true });
  }
);

// When(/^"(.*)" count should be correct/, function (selectorIdentifier) {
//   cy.log(`selectorIdentifier: ${selectorIdentifier}`);
//   cy.helper
//     .getElement(
//       ".headerBrand__element--wishlist > .headerElement > .headerElement__link > .headerElement__text > .headerElement__status"
//     )
//     .should("be.greaterThan", 0);
// });

When(
  /^I type "(.*)" into the "(.* input field|.* mask|.* dropdown)"?$/,
  function (text, selectorIdentifier) {
    cy.log(`text ${text} identifier ${selectorIdentifier}`);
    cy.helper.getElement(selectorIdentifier).type(text + "{enter}");
  }
);

When(/^I clear the "(.*)"/, function (selectorIdentifier) {
  cy.helper.getElement(selectorIdentifier).clear();
});

When(/^I am on the "(.* page)"$/, function (pageDescription) {
  const url = cy.pageMap.getPageUrl(pageDescription);
  cy.url().should("contain", url);
  cy.scope.currentPage = pageDescription;
  cy.scope.currentPageObject = cy.pageMap.getPageByDescription(pageDescription);
});

Given(/^The website language is "(.*)"$/, function (language) {
  cy.scope.websiteLanguage = language;
});

Then(
  /^I see(?: the| a) "(.*)"( by scrolling)?$/,
  function (pageElement, scrollTo) {
    console.log(`searching for element with identifier ${pageElement}`);
    if (scrollTo)
      cy.helper.getElement(pageElement).scrollIntoView().should("be.visible");
    else cy.helper.getElement(pageElement).should("be.visible");
  }
);

Then(/^I see that the url matches the "(.*)" url$/, function (pageDescription) {
  cy.url().should("contain", pageDescription);

  cy.scope.currentPage = pageDescription;
  cy.scope.currentPageObject = cy.pageMap.getPageByDescription(pageDescription);
});

When(/^I should see products in the catalog/, function () {
  const productListSelector = cy.get(".search__productContent");
  const productList = cy.helper.getElement(productListSelector);

  if (!productList) {
    cy.log("Product list element not found");
    return;
  }

  productList.should("be.visible");
  productList.should("have.length.greaterThan", 0);
});

When(/^following products are added to the cart/, function (dataTable) {
  let propValue;
  dataTable.hashes().forEach((elem) => {
    for (let propName in elem) {
      propValue = elem[propName];

      cy.log(propName, propValue);
    }
  });

  dataTable.hashes().forEach((elem) => {
    const selectedProduct = elem.ArticleNumber;
    const getEl = `[data-article-number="${selectedProduct}"]`;

    cy.get(getEl).click();
  });
});

When(/^product is added to the wishlist/, function (dataTable) {
  let propValue;
  dataTable.hashes().forEach((elem) => {
    for (let propName in elem) {
      propValue = elem[propName];

      cy.log(propName, propValue);
    }
  });

  dataTable.hashes().forEach((elem) => {
    const selectedProduct = elem.ArticleNumber;
    const getEl = `[data-article-number="${selectedProduct}"] > .articleTileV2__wishlistIcon > .wishlistIcon`;

    cy.get(getEl).click();
  });
});

// When(/^product is added to the wishlist/, function (dataTable) {
//   dataTable.hashes().forEach((elem) => {
//     const selectedProduct = elem.ArticleNumber;
//     const getEl = `[data-article-number="${selectedProduct}"] > .articleTileV2__wishlistIcon > .wishlistIcon`;
//     cy.get(getEl).click();
//   });
// });

When(/^product is removed from the wishlist/, function (dataTable) {
  dataTable.hashes().forEach((elem) => {
    const selectedProduct = elem.ArticleNumber;
    const getEl = `[data-article-number="${selectedProduct}"] > .articleTileV2__wishlistIcon > .wishlistIcon`;

    cy.get(getEl).click(); // Assuming clicking the same icon removes the product
    // If the removal action requires a different selector or logic, adjust this accordingly
  });
});

When(
  /^product "(.*)" to the wishlist is being added/,
  function (wishlistNumber) {
    cy.log(`Clicked on element with identifier: ${wishlistNumber}`);

    const getEl = `[data-wish-list-entry-number="${wishlistNumber}"]`;
    cy.get(getEl).click();
  }
);
