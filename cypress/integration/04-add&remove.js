describe("add-test", () => {
  it("addTask", () => {
    cy.logIn("kaacper1994@gmail.com", "Test1234")
      .addTask(
        "Cypress test",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis magna at lorem rhoncus aliquam. Etiam accumsan imperdiet varius. Pellentesque tincidunt imperdiet velit nec faucibus."
      )
      //.get(".more_actions_button")
      // .invoke("show")
      //.click();
      .get(".task_checkbox__circle")
      .click()
      .get(".reactist_button.reactist_button--secondary")
      .click()
      .get(".empty-state-illustration")
      .should("be.visible");
  });
});
