describe("login-test", () => {
  it("Log in", () => {
    cy.visit("https://trello.com/")
      .get(".gdpr-cookie-consent-button")
      .click()
      .get(".btn.btn-sm.btn-link.text-primary")
      .click()
      .get("#user")
      .type("test736tr@gmail.com")
      .wait(5000)
      .get(".button.account-button.button-green.btn.btn-success")
      .click()
      .get("#password")
      .type("Test123!")
      .get(".css-19kyp58")
      .click()
      .get("._2LKdO6O3n25FhC")
      .should("be.visible");
  });
});
