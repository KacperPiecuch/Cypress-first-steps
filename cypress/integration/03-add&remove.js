describe("add-test", () => {
  it("addTask", () => {
    cy.addTask(
      "Cypress test",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis magna at lorem rhoncus aliquam. Etiam accumsan imperdiet varius. Pellentesque tincidunt imperdiet velit nec faucibus."
    )
      .get(".task_checkbox__circle")
      .click();
  });
});
