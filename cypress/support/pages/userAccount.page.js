const Page = require("./Page");

class UserAccountPage extends Page {
  get path() {
    return `/kundenkonto`;
  }

  selectors = {
    "account overview headline": () => {
      return cy.get(".accountOverview__headline > .simpleText");
    },
  };
}

module.exports = new UserAccountPage();
