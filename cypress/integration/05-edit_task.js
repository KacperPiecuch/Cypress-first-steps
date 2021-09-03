describe("edit-task", () => {
  it("editTask", () => {
    cy.logIn("kaacper1994@gmail.com", "Test1234")
      .addTask(
        "Cypress test",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis magna at lorem rhoncus aliquam. Etiam accumsan imperdiet varius. Pellentesque tincidunt imperdiet velit nec faucibus."
      )
      .get(".markdown_content.task_content")
      .click()
      .get(".item_overview_content")
      .click()
      //.get(
      //  ".richtextinput .public-DraftStyleDefault-block.public-DraftStyleDefault-ltr"
      //)
      //.type("Updated")
      .get(".task_editor__description_field.no-focus-marker")
      .type("Updated xD")
      .get(
        ".task_editor__form_actions.reactist_button.reactist_button--primary"
      )
      .click();
  });
});
