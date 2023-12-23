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
    "to checkout button": () => {
      return cy.contains("Zur Kasse");
    },
  };
}

module.exports = new ShoppingCartPage();
