const Page = require("./Page");

class LoggedInUserWishlistPage extends Page {
  get path() {
    return `/wunschliste`;
  }

  selectors = {
    "add all to cart": () => {
      return cy.get('[data-testid="addAddToWishlist"]');
    },
    "continue shopping": () => {
      return cy.get('[data-testid="goToHome"]');
    },
  };
}

module.exports = new LoggedInUserWishlistPage();
