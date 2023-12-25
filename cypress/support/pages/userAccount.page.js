const Page = require("./Page");

class UserAccountPage extends Page {
  get path() {
    return `/kundenkonto`;
  }

  selectors = {
    "account overview headline": () => {
      return cy.get(".titleHeadline").should("contain", "Hallo");
    },
  };
}

module.exports = new UserAccountPage();
