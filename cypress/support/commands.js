// https://on.cypress.io/custom-commands

Cypress.Commands.add('logIn', (email, password)=> {
    cy.visit("https://todoist.com/pl/")
      .get('._2sK9Q ._3XsmI ._2q_cf[href="/users/showlogin"]')
      .click()
      .get("#email")
      .type(email)
      .get("#password")
      .type(password)
      .get(".submit_btn.ist_button.ist_button_red.sel_login")
      .click()
      .get(".simple_content")
      .should("be.visible");
});