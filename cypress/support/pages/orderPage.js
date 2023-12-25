const Page = require("./Page");

class OrderPage extends Page {
  get path() {
    return `/bestellung/login`;
  }

  selectors = {
    "login email input field": () => {
      return cy.get('[data-testid="loginEmailInput"]');
    },
    "login password input field": () => {
      return cy.get('[data-testid="loginPasswordInput"]');
    },

    "login submit button": () => {
      return cy.get('[data-testid="login-submit"]');
    },
    "guest login button": () => {
      return cy.get('[data-testid="guestLogin"]');
    },
    "salutation select": () => {
      return cy.get('[data-testid="salutation"]');
    },
  };
}

module.exports = new OrderPage();
