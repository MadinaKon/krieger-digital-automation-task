const Page = require("./Page");

class PaymentMethodPage extends Page {
  get path() {
    return `/bestellung/zahlart`;
  }

  selectors = {
    "login email input field": () => {
      return cy.get('[data-testid="loginEmailInput"]');
    },
  };
}

module.exports = new PaymentMethodPage();
