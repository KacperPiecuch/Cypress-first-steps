describe("add-sub-task", () => {
  it("subTask", () => {
    cy.logIn("kaacper1994@gmail.com", "Test1234")
      .addTask(
        "Cypress test",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis magna at lorem rhoncus aliquam. Etiam accumsan imperdiet varius. Pellentesque tincidunt imperdiet velit nec faucibus."
      )
      .get(".markdown_content.task_content")
      .click()
      .get(".plus_add_button")
      .click()
      .get(".public-DraftStyleDefault-block.public-DraftStyleDefault-ltr")
      .last()
      .type("Sub task 1")
      .get(".task_editor__description_field.no-focus-marker")
      .last()
      .type("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")
      .get(".reactist_button.reactist_button--primary")
      .last()
      .click()
      .get(".item_detail_close")
      .click()
      .get(
        ".task_list_item__info_tags__subtasks.task_list_item__info_tags__subtasks--show-complete"
      )
      .should("be.visible")
      .get(".task_checkbox__circle")
      .click();
  });
});
