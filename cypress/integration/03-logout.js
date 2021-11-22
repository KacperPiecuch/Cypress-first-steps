describe("logout-test", () => {
  it("Log out", () => {
    cy.logIn("kaacper1994@gmail.com", "Test1234")
      .get(".reactist_menubutton.top_bar_btn.settings_btn")
      .click()
      .get(".reactist_menulist.user_menu .user_menu_label")
      .contains("Wyloguj się")
      .click()
      .get('._2sK9Q ._3XsmI ._2q_cf[href="/users/showlogin"]')
      .should("be.visible");
  });
});
