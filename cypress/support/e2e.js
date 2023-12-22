import "./helper.js";
import "./localization.js";
import "./maps/page.map.js";
import "./scope.js";
import "./logger.js";
import "@cypress/xpath";
import "cypress-real-events";
import "cypress-mochawesome-reporter/register";

Cypress.on("uncaught:exception", (_) => {
  return false;
});

if (Cypress.config("hideXHR")) {
  const app = window.top;

  if (
    app &&
    !app.document.head.querySelector("[data-hide-command-log-request]")
  ) {
    const style = app.document.createElement("style");
    style.innerHTML =
      ".command-name-request, .command-name-xhr { display: none }";
    style.setAttribute("data-hide-command-log-request", "");

    app.document.head.appendChild(style);
  }
}

afterEach(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
});
