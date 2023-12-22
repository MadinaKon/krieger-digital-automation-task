const Page = require("./Page");

class CheckoutPage extends Page {
  get path() {
    return `/warenkorb`;
  }

  //page selectors
  selectors = {
    "go to the checkout": () => {
      return cy.get('[data-submit-cart="data-submit-cart"]');
    },

    // "go to the checkout": () => {
    //   return cy.contains("Zur Kasse");
    // },

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

module.exports = new CheckoutPage();
