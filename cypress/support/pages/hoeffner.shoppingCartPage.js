const Page = require("./Page");

class HoeffnerShoppingCartPage extends Page {
  get path() {
    return `https://www.hoeffner.de/warenkorb`;
  }

  //page selectors
  selectors = {
    "go to the checkout": () => {
      return cy.get('[data-submit-cart="data-submit-cart"]');
    },
    "cart overview summary": () => {
      return cy.get(
        ".cartOverview__summaryContainer--desktop > .cartOverview__summaryBox > .summaryBox"
      );
    },
  };
}

module.exports = new HoeffnerShoppingCartPage();
