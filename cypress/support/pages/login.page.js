const Page = require("./Page");

class LoginPage extends Page {
  get path() {
    return `https://www.hoeffner.de/login`;
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
    "cookie accept button": () => {
      return cy.get('[data-accept-action="all"]');
    },
    "person icon": () => {
      //   return cy.get(
      //     ".headerBrand__element--login > .headerElement > .headerElement__link > .headerElement__icon"
      //   );
      // return cy.get(".headerElement__link--login");
      // return cy.get("span.headerElement__icon.headerElement__icon--login");
      return cy.xpath(
        '//span[contains(@class, "headerElement__icon") and contains(@class, "headerElement__icon--login")]'
      );
    },
    "login error text": () => {
      return cy.get("#loginEmail-error");
    },
    "forgot password link": () => {
      return cy.get(".existingAccount__forgotten");
    },
    "forgot password input field": () => {
      return cy.get('[data-testid="passwordForgottenEmailInput"]');
    },
    "forgot password submit button": () => {
      return cy.get('[data-testid="passwordForgottenSubmitId"]');
    },

    "forget password successful message": () => {
      return cy.get(".checkMailbox__text--green");
    },
  };
}

module.exports = new LoginPage();
