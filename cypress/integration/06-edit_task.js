describe("edit-task", () => {
  it("editTask", () => {
    cy.logIn("kaacper1994@gmail.com", "Test1234")
      .addTask(
        "Cypress test",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis magna at lorem rhoncus aliquam. Etiam accumsan imperdiet varius. Pellentesque tincidunt imperdiet velit nec faucibus."
      )
      .get(".markdown_content.task_content")
      .click()
      .get(".item_overview_header")
      .type("{selectall}{backspace}Updated xD")
      .get(".reactist_button.reactist_button--primary")
      .contains("Zapisz")
      .click()
      .get(".markdown_content.task_content")
      .contains("Updated xD")
      .should("be.visible")
      .get(".item_detail_close")
      .click()
      .get(".markdown_content.task_description")
      .contains("Updated xD")
      .should("be.visible")
      .get(".task_checkbox__circle")
      .click();
  });
});
