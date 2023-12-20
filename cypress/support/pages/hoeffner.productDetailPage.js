const Page = require("./Page");

class HoeffnerProductDetailPage extends Page {
  constructor() {
    super();
    this._articleNumber = "";
  }

  get path() {
    return `https://www.hoeffner.de/${this._articleNumber}`;
  }

  set articleNumber(number) {
    this._articleNumber = number;
  }

  //page selectors
  selectors = {
    "add to cart button": () => {
      return cy.get('[data-testid="addToCartButton"]');
    },
  };
}

module.exports = new HoeffnerProductDetailPage();
