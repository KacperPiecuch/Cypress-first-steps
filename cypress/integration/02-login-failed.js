describe("login-fail", () => {
  it("Wrong password", () => {
    cy.visit("https://todoist.com/pl/")
      .get('._2sK9Q ._3XsmI ._2q_cf[href="/users/showlogin"]')
      .click()
      .get("#email")
      .type("kaacper1994@gmail.com")
      .get("#password")
      .type("Test123")
      .get(".submit_btn.ist_button.ist_button_red.sel_login")
      .click()
      .get(".error_msg")
      .contains("Niepoprawny e-mail lub hasło.")
      .should("be.visible");
  });
  it("Wrong email adress", () => {
    cy.visit("https://todoist.com/pl/")
      .get('._2sK9Q ._3XsmI ._2q_cf[href="/users/showlogin"]')
      .click()
      .get("#email")
      .type("kaacper1994@gmail")
      .get("#password")
      .type("Test1234")
      .get(".submit_btn.ist_button.ist_button_red.sel_login")
      .click()
      .get(".error_msg")
      .contains("Nieprawidłowy adres e-mail.")
      .should("be.visible");
  });
  it("Wrong email adress @ password", () => {
    cy.visit("https://todoist.com/pl/")
      .get('._2sK9Q ._3XsmI ._2q_cf[href="/users/showlogin"]')
      .click()
      .get("#email")
      .type("kaacper1994@gmail")
      .get("#password")
      .type("Test123")
      .get(".submit_btn.ist_button.ist_button_red.sel_login")
      .click()
      .get(".error_msg")
      .contains("Nieprawidłowy adres e-mail.")
      .should("be.visible");
  });
  it("No password", () => {
    cy.visit("https://todoist.com/pl/")
      .get('._2sK9Q ._3XsmI ._2q_cf[href="/users/showlogin"]')
      .click()
      .get("#email")
      .type("kaacper1994@gmail.com")
      .get(".submit_btn.ist_button.ist_button_red.sel_login")
      .click()
      .get(".error_msg")
      .contains("Nie wprowadzono hasła.")
      .should("be.visible");
  });
  it("No email", () => {
    cy.visit("https://todoist.com/pl/")
      .get('._2sK9Q ._3XsmI ._2q_cf[href="/users/showlogin"]')
      .click()
      .get("#password")
      .type("Test1234")
      .get(".submit_btn.ist_button.ist_button_red.sel_login")
      .click()
      .get(".error_msg")
      .contains("Nieprawidłowy adres e-mail.")
      .should("be.visible");
  });
  it("Empty fields", () => {
    cy.visit("https://todoist.com/pl/")
      .get('._2sK9Q ._3XsmI ._2q_cf[href="/users/showlogin"]')
      .click()
      .get(".submit_btn.ist_button.ist_button_red.sel_login")
      .click()
      .get(".error_msg")
      .contains("Nieprawidłowy adres e-mail.")
      .should("be.visible");
  });
});
