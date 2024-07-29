export const loginTest = () => {};
describe("Testing login and account elimination", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });
  it("Login with wrong credentials causes error", () => {
    cy.get("input[name=username]").type("cy-testing-user");
    cy.get("input[name=password]").type("cy-testing-password2");
    cy.contains("Submit").click();
    cy.contains("Username or/and password incorrect");
  });
  it("Login works properly", () => {
    cy.get("input[name=username]").type("cy-testing-user");
    cy.get("input[name=password]").type("cy-testing-password");
    cy.contains("Submit").click();
  });
  it("Eliminating account works properly", () => {
    cy.get("input[name=username]").type("cy-testing-user");
    cy.get("input[name=password]").type("cy-testing-password");
    cy.contains("Submit").click();
    cy.get("button[name=show]").click();
    cy.contains("Eliminate account").click({ force: true });
    cy.get("input[name=password]").type("cy-testing-password");
    cy.contains("Submit").click();
  });
});
