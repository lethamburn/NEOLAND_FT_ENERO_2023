describe("test", () => {
  it("pass", () => {
    cy.visit("https://regexp-form-filter-generator.vercel.app/");
    cy.get("h2").should("contain.text", "Password");
  });
});

describe("button", () => {
  it("pass", () => {
    cy.visit("https://regexp-form-filter-generator.vercel.app/");
    cy.get("button").should("contain.text", "submit");
    cy.get("button").should("be.enabled");
  });
});
