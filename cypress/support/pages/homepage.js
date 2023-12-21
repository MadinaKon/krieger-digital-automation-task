const Page = require("./Page");

class Homepage extends Page {
  get path() {
    return `/`;
  }

  //page selectors
  selectors = {
    "search input field": () => {
      return cy.get("#searchFieldInputId");
    },
    "search result text": () => {
      return cy.get(".categoryHeader__categoryHeadline");
    },
    "cookie accept button": () => {
      return cy.get('[data-accept-action="all"]');
    },
  };
}

module.exports = new Homepage();
