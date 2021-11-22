describe("search-test", () => {
  it("search", () => {
    cy.logIn("kaacper1994@gmail.com", "Test1234")
      .addTask(
        "Cypress test",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis magna at lorem rhoncus aliquam. Etiam accumsan imperdiet varius. Pellentesque tincidunt imperdiet velit nec faucibus."
      )
      .get("#quick_find")
      .type("Cy{enter}")
      .get(".search_view__results")
      .should("be.visible")
      .get("#filter_today")
      .click()
      .get(".task_checkbox__circle")
      .click();
  });
});
