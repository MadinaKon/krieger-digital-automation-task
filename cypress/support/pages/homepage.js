const Page = require("./Page");

class Homepage extends Page {
  get path() {
    return `/`;
  }

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
    "main filter": () => {
      return cy.get(".filter");
    },
    // categories
    // "towels checkbox": () => {
    //   return cy.get('.singleFilter__list--checkBox [data-value="Handtücher"]');
    // },
    // "shower towels checkbox": () => {
    //   return cy.get('.singleFilter__list--checkBox [data-value="Duschtücher"]');
    // },
    // "guest towels": () => {
    //   return cy.get('.singleFilter__list--checkBox [data-value="Gästetücher"]');
    // },
    // "wash mitts & soap towels": () => {
    //   return cy.get(
    //     '.singleFilter__list--checkBox [data-value="Waschhandschuhe & Seiftücher"]'
    //   );
    // },
    "show results button": () => {
      return cy.get(
        "#categories > .singleFilter__content > .singleFilter__closeButton > .button"
      );
    },

    // sorting
    "sorting filter": () => {
      return cy.get('[data-filtertype="sorting"]');
    },
    "list sorting filter": () => {
      return cy.get("ul.singleFilter__list--sorting");
    },
    "sorting selected filter": () => {
      return cy.get(
        ".singleFilter__sortingLink--selected > .singleFilter__sortingList"
      );
    },

    // color
    "color filter": () => {
      return cy.get('[data-filtertype="colors"]');
    },
    // prices
    "prices filter": () => {
      return cy.get('[data-filtertype="prices"]');
    },
    "prices range start input field": () => {
      return cy.get('[data-name="startPriceRange"]');
    },
    "prices range end input field": () => {
      return cy.get('[data-name="endPriceRange"]');
    },
    // brands
    "brands button": () => {
      return cy.get("#brands > .singleFilter__header");
    },
    "more filter": () => {
      return cy.get(".filter__moreFilters");
    },
    "more filters overlay": () => {
      return cy.get(
        "#overlayRight > .generalOverlay > .generalOverlay__content > .generalOverlay__text > .filter--right"
      );
    },
    "overlay category button": () => {
      //  return cy.contains("Kategorie");
      return cy.get("#categories");
    },

    
  };
}

module.exports = new Homepage();
