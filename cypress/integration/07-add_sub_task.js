describe("edit-task", () => {
  it("editTask", () => {
    cy.logIn("kaacper1994@gmail.com", "Test1234")
      .addTask(
        "Cypress test",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis magna at lorem rhoncus aliquam. Etiam accumsan imperdiet varius. Pellentesque tincidunt imperdiet velit nec faucibus."
      )
      .get(".markdown_content.task_content")
      .click()
      .get(".plus_add_button")
      .click()
      .get(".task_editor__input_fields")
      .type("Sub task 1")
      .get(".task_editor__description_field.no-focus-marker")
      .type("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")
      .get(".reactist_button.reactist_button--primary")
      .click();
  });
});
