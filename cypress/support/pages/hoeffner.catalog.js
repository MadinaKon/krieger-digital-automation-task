const Page = require("./Page");

class HoeffnerCatalogPage extends Page {
  get path() {
    return `https://www.hoeffner.de`;
  }

  //page selectors
  selectors = {
    "search input field": () => {
      return cy.get("#searchFieldInputId");
    },
    "search result text": () => {
      return cy.get(".categoryHeader__categoryHeadline");
    },
    "cookie accept button": () => {
      return cy.get('[data-accept-action="all"]');
    },
    "first product in the list": () => {
      return cy.get('[data-article-number="10828141"] > .articleTileV2__link');
    },
  };
}

module.exports = new HoeffnerCatalogPage();
