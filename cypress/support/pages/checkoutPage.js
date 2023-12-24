const Page = require("./Page");

class CheckoutPage extends Page {
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
      return cy.get('[data-submit-cart="data-submit-cart"]').first();
    },
    "cart overview": () => {
      return cy.get(".cartOverview");
    },
    "cart overview close button": () => {
      return cy.get(".cartEntry__closeButton");
    },
    "empty cart text": () => {
      // return cy.get(".emptyCartOverview__articleList");
      return cy.contains("Ihr Warenkorb ist leer");
    },

    "continue browsing button": () => {
      return cy.contains("Weiter stöbern");
    },
  };
}

module.exports = new CheckoutPage();
