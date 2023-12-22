const Page = require("./Page");

class ShoppingCartPage extends Page {
  get path() {
    return `/warenkorb`;
  }

  selectors = {
    "go to the checkout": () => {
      return cy.get('[data-submit-cart="data-submit-cart"]');
    },
    "cart overview summary": () => {
      return cy.get(
        ".cartOverview__summaryContainer--desktop > .cartOverview__summaryBox > .summaryBox"
      );
    },
    "cart pickup option": () => {
      return cy.get(".cartEntry__pickup");
    },
  };
}

module.exports = new ShoppingCartPage();
