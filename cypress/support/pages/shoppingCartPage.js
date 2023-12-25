const Page = require("./Page");

class ShoppingCartPage extends Page {
  get path() {
    return `/warenkorb`;
  }

  selectors = {
    "cart overview summary": () => {
      return cy.get(
        ".cartOverview__summaryContainer--desktop > .cartOverview__summaryBox > .summaryBox"
      );
    },
    "cart overview": () => {
      return cy.get(".cartOverview");
    },
  };
}

module.exports = new ShoppingCartPage();
