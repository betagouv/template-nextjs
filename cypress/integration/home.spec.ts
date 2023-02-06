describe("Home page", () => {
  it("should render the main page", () => {
    cy.visit("http://localhost:3000/");
    cy.title().should("equal", "Template SocialGouv");
    cy.get("h1").should(
      "contain",
      "Template de la fabrique des ministères sociaux"
    );
  });
});
