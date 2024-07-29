export const eventsTest = () => {
  describe("Testing events", () => {
    beforeEach(() => {
      cy.visit("http://localhost:5173/");
      cy.contains(
        `Don't you have an account? Click here to create one!`,
      ).click();
      cy.get("input[name=username]").type("cy-testing-user");
      cy.get("input[name=password]").type("cy-testing-password");
      cy.contains("Create account").click();
      cy.contains("Login").click();
      cy.get("input[name=username]").type("cy-testing-user");
      cy.get("input[name=password]").type("cy-testing-password");
      cy.contains("Submit").click();
    });
    it("Testing reservation an cancelation of tickets", () => {
      cy.contains("Available events");
      cy.contains("The Weeknd").click();
      cy.get("button[name=reservation]").first().click();
      cy.get("button[name=show]").click();
      cy.contains("Events").click({ force: true });
      cy.contains("My tickets").click({ force: true });
      cy.contains("Cancel").click();
      cy.contains("Logout").click({ force: true });
    });
  });
};
