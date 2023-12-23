const Page = require("./Page");

class CatalogPage extends Page {
  get path() {
    return `/`;
  }

  selectors = {
    "search input field": () => {
      return cy.get("#searchFieldInputId");
    },
    "search result text": () => {
      return cy.get(".categoryHeader__categoryHeadline");
    },
    "clear search result": () => {
      return cy.get(".searchForm__clearButton");
    },
    "cookie accept button": () => {
      return cy.get('[data-accept-action="all"]');
    },
    "first product in the list": () => {
      return cy.get('[data-article-number="10828141"] > .articleTileV2__link');
    },
  };
}

module.exports = new CatalogPage();
