const Page = require("./Page");

class LoggedInUserWishlistPage extends Page {
  get path() {
    return `/wunschliste`;
  }

  //page selectors
  selectors = {
    // "wishlist icon": () => {
    //   return cy.get(
    //     ".headerBrand__element--wishlist > .headerElement > .headerElement__link > .headerElement__icon"
    //   );
    // },
    // "wishlist icon clicked": () => {
    //   return cy.get(".wishlistIcon--pointer--clicked");
    // },
    // "visitor login button": () => {
    //   // return cy.get('[data-testid="addToWishlistLoginBox"]');
    //   return cy.contains("Anmelden");
    // },
    // "wishlist icon count": () => {
    //   return cy.get(
    //     ".headerBrand__element--wishlist > .headerElement > .headerElement__link > .headerElement__text > .headerElement__status"
    //   );
    // },
  };
}

module.exports = new LoggedInUserWishlistPage();
