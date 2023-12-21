const Page = require("./Page");

class WishlistPage extends Page {
  get path() {
    return `https://www.hoeffner.de`;
  }

  //page selectors
  selectors = {
    "search input field": () => {
      return cy.get("#searchFieldInputId");
    },
    "search result text": () => {
      return cy.get(".categoryHeader__categoryHeadline");
    },

    "wishlist icon": () => {
      return cy.get(
        ".headerBrand__element--wishlist > .headerElement > .headerElement__link > .headerElement__icon"
      );
    },
    "wishlist icon clicked": () => {
      return cy.get(".wishlistIcon--pointer--clicked");
    },
    // "wishlist icon count": () => {
    //   return cy.get(
    //     ".headerBrand__element--wishlist > .headerElement > .headerElement__link > .headerElement__text > .headerElement__status"
    //   );
    // },
  };
}

module.exports = new WishlistPage();
