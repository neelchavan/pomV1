import LoginPage from "../PageObjects/LoginPage";
import HomePage from "../PageObjects/HomePage";

describe("Home page tets", () => {
  const loginPage = new LoginPage();
  const homePage = new HomePage();

  beforeEach(function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
    cy.visit(Cypress.env("baseUrl"));
  });

  it("Verify if the products are visible", function () {
    loginPage.logInToSwagLabs(this.data.username, this.data.password);
    homePage.elements.productsText().should("have.text", "Products");
  });

  afterEach(() => {
    homePage.logout();
  });
});
