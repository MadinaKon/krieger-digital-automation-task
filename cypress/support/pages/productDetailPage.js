const Page = require("./Page");

class HoeffnerProductDetailPage extends Page {
  constructor() {
    super();
    this._articleNumber = "";
  }

  get path() {
    return `/${this._articleNumber}`;
  }

  set articleNumber(number) {
    this._articleNumber = number;
  }

  selectors = {
    "add to cart button": () => {
      return cy.get('[data-testid="addToCartButton"]');
    },
    // "add to cart overlay": () => {
    //   return cy.get(
    //     "#overlayRight > .generalOverlay > .generalOverlay__content > .addToCartOverlay"
    //   );
    // },
    "go to cart button": () => {
      return cy.contains("Zum Warenkorb");
    },
    "continue button": () => {
      return cy.get('[data-testid="cartOverlayContinueButton"]');
    },
    "overlay close icon": () => {
      return cy.get(
        "#overlayRight > .generalOverlay > .generalOverlay__headlineContainer > .generalOverlay__close"
      );
    },
    "header cart icon": () => {
      return cy.get(
        ".headerBrand__element--cart > .headerElement > .headerElement__link > .headerElement__icon"
      );
    },
  };
}

module.exports = new HoeffnerProductDetailPage();
