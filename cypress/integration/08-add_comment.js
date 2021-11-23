describe("add-comment", () => {
  it("comment", () => {
    cy.logIn("kaacper1994@gmail.com", "Test1234")
      .addTask(
        "Cypress test",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis magna at lorem rhoncus aliquam. Etiam accumsan imperdiet varius. Pellentesque tincidunt imperdiet velit nec faucibus."
      )
      .get(".markdown_content.task_content")
      .click()
      .get(".reactist")
      .contains("Komentarze")
      .click()
      .get(".comments_editor_container")
      .type("Simple comment xD")
      .get(".ist_button.ist_button_red.sel_submit_note")
      .click()
      .get(".item_detail_close")
      .click()
      .get(".notes_icon")
      .should("be.visible")
      .get(".task_checkbox__circle")
      .click();
  });
});
