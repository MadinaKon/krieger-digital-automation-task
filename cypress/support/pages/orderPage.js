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

    // cy.get('[data-testid="salutation"]')
    // cy.get('[data-testid="firstnameInput"]')
    // cy.get('[data-testid="lastnameInput"]')
    // cy.get('[data-testid="streetNameInput"]')
    // cy.get('[data-testid="streetNumberInput"]')
    // cy.get('[data-testid="addressExtraInput"]')
    // cy.get('[data-testid="floorInput"]')
    // cy.get('[data-testid="zipCodeInput"]')
    // cy.get('[data-testid="townInput"]')
    // cy.get('[data-testid="emailInput"]')

    // cy.get('[data-testid="address-submit"]')
  };
}

module.exports = new OrderPage();
