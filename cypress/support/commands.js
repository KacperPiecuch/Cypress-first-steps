// https://on.cypress.io/custom-commands

Cypress.Commands.add("logIn", (email, password) => {
  cy.visit("https://todoist.com/pl/")
    .get('._2sK9Q ._3XsmI ._2q_cf[href="/users/showlogin"]')
    .click()
    .get("#email")
    .type(email)
    .get("#password")
    .type(password)
    .get(".submit_btn.ist_button.ist_button_red.sel_login")
    .click()
    .wait(5000)
    .get(".simple_content")
    .should("be.visible");
});

Cypress.Commands.add("addTask", (title, description) => {
  cy.logIn("kaacper1994@gmail.com", "Test1234")
      .get(".controller.actions.task_actions.full_width_actions")
      .click()
      .get(".public-DraftStyleDefault-block.public-DraftStyleDefault-ltr")
      .type(title)
      .get(".task_editor__description_field.no-focus-marker")
      .type(description)
      .get(".reactist_button.reactist_button--primary")
      .click()
      .get(".markdown_content.task_content")
      .should("be.visible")
})
