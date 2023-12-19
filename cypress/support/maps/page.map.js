/**
 *
 * this class is forwarding the correct page object model or representive variables of it
 * based on the page description provided over the gherkin bdd definition
 * @author Marco Bierbach
 */

import { WILD_CARDS } from "../constants.js";
import WildCard from "../objects/wildcard.js";

const GooglePage = require("../pages/google.page");
const HoeffnerPage = require("../pages/hoeffner.page.js");
const LoginPage = require("../pages/login.page.js");
const UserAccountPage = require("../pages/userAccount.page.js");

cy.pageMap = {};

const PAGEMAP = {
  "google page": GooglePage,
  "Hoeffner home page": HoeffnerPage,
  "Hoeffner login page": LoginPage,
  "Hoeffner account page": UserAccountPage,
};

cy.pageMap.getPageByDescription = (pageDescription) => {
  if (PAGEMAP[pageDescription] === undefined) {
    cy.logger.log(
      "INFO",
      `Pagemap does not contain a definition for [${pageDescription}].`
    );
  }
  return PAGEMAP[pageDescription];
};

cy.pageMap.getPageUrl = (pageDescription) => {
  let pageUrl = cy.pageMap.getPageByDescription(pageDescription)?.path;
  if (pageUrl === undefined) return null;

  if (pageUrl.includes("<")) {
    pageUrl = cy.pageMap.replaceWildCard(
      pageUrl,
      new WildCard(WILD_CARDS.LANG_CODE, cy.localization.getLangCode())
    );
  }
  return pageUrl;
};

/**
 * Function to replace a wildcard inside a URL
 * DO NOT USE THIS FOR LOCATORS/SELECTORS
 */
cy.pageMap.replaceWildCard = (text, wildCard) => {
  if (wildCard.value === undefined) {
    cy.logger.log(
      "Error",
      `Value is undefined, so we can not replace anything in the text [${text}] with wildcard [${wildCard.wildCard}]`
    );
  }
  console.log(`Going to replace ${wildCard.wildCard} with ${wildCard.value}`);
  return text.replace(wildCard.wildCard, wildCard.value);
};

cy.pageMap.replaceWildCards = (text, wildCards) => {
  let modifiedText;
  wildCards.forEach((wildCard) => {
    modifiedText = cy.pageMap.replaceWildCard(
      wildCard.wildCard,
      wildCard.value
    );
  });
  return modifiedText;
};

// cy.pageMap.getPageRegExp = (pageDescription) => {
//   return cy.pageMap.getPageByDescription(pageDescription).regexp;
// };
// cy.pageMap.getPageRegExp = (pageDescription) => {
//   if (pageDescription === undefined && pageDescription === null) {
//     const url = cy.pageMap.getPageUrl(pageDescription);
//     cy.url().should("contain", url);
//   } else {
//     cy.url().should("include", pageDescription);
//     // cy.url().should("match", new RegExp(pageDescription));
//   }

//   cy.scope.currentPage = pageDescription;
//   cy.scope.currentPageObject = cy.pageMap.getPageByDescription(pageDescription);
// };
