const Page = require("./Page");

class LoginPage extends Page {
  //   constructor() {
  //     super();
  //     this.url = "https://www.hoeffner.de/login";
  //     this.email = "";
  //   }

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
      return cy.get(".headerElement__link--login");
    },
  };
}

module.exports = new LoginPage();
