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

cy.pageMap = {};

const PAGEMAP = {
  "google page": GooglePage,
  "Hoeffner home page": HoeffnerPage,
  "Hoeffner login page": LoginPage,
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

cy.pageMap.getPageRegExp = (pageDescription) => {
  try {
    const page = cy.pageMap.getPageByDescription(pageDescription);
    if (page && page.regexp) {
      return page.regexp;
    } else {
      // Handle the case where the regexp is not found or invalid
      return null; // or throw an error
    }
  } catch (error) {
    // Handle any potential errors
    console.error("Error occurred while getting page regexp:", error);
    return null; // or throw an error
  }
};
