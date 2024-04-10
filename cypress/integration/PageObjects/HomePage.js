class HomePage {
  elements = {
    burgerBtn: () => cy.get(".bm-burger-button button"),
    logoutBtn: () => cy.get("#logout_sidebar_link"),
    loginUsernamesList: () => cy.get("#login_credentials h4"),
    productsText: () => cy.get(".product_label"),
  };

  verifyIfLoggedIn() {
    this.elements.productsText().should("have.text", "Products");
  }

  logout() {
    this.elements.burgerBtn().click();
    this.elements.logoutBtn().click();
    this.elements.loginUsernamesList().should("be.visible");
  }
}
export default HomePage;
