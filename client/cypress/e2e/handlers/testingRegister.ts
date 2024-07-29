export const registerTest = () => {
  describe("Testing creating user", () => {
    beforeEach(() => {
      cy.visit("http://localhost:5173/");
    });
    it("Registering works properly", () => {
      cy.request({
        method: "DELETE",
        url: "https://event-fs.onrender.com/api/users",
        body: {
          username: "cy-testing-user",
          password: "cy-testing-password",
        },
        failOnStatusCode: false,
      });
      cy.contains(
        `Don't you have an account? Click here to create one!`,
      ).click();
      cy.get("input[name=username]").type("cy-testing-user");
      cy.get("input[name=password]").type("cy-testing-password");
      cy.contains("Create account").click();
      cy.contains("Login").click();
    });
    it("Registering with a created user causes error", () => {
      cy.contains(
        `Don't you have an account? Click here to create one!`,
      ).click();
      cy.get("input[name=username]").type("cy-testing-user");
      cy.get("input[name=password]").type("cy-testing-password");
      cy.contains("Create account").click();
      cy.contains("Login").click();
      cy.contains("User already exists");
    });
  });
};
