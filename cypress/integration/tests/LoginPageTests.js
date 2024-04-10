import LoginPage from "../PageObjects/LoginPage";
import HomePage from "../PageObjects/HomePage";

describe("Login Page Tests", () => {
  const loginPage = new LoginPage();
  const homePage = new HomePage();

  beforeEach(function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
    cy.visit(Cypress.env("baseUrl"));
  });

  it("Verify login scenario", function () {
    loginPage.logInToSwagLabs(this.data.username, this.data.password);
    homePage.verifyIfLoggedIn();
  });

  afterEach(function () {
    homePage.logout();
  });
});
