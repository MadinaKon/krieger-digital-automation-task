const Page = require("./Page");

class OrderPage extends Page {
  get path() {
    return `/bestellung/login`;
  }

  selectors = {
    "login email input": () => {
      return cy.get('[data-testid="loginEmailInput"]');
    },
    "login password input": () => {
      return cy.get('[data-testid="loginPasswordInput"]');
    },

    "login submit": () => {
      return cy.get('[data-testid="login-submit"]');
    },
  };
}

module.exports = new OrderPage();
