describe("Funcionalidade de Busca", () => {
  beforeEach(() => {
    cy.visit("https://www.themoviedb.org/");
  });

  it("CT-018 - Busca de filme existente", () => {
    cy.get("#inner_search_v4").type("Homem-Aranha 2{enter}");
    cy.get(":nth-child(1) > :nth-child(1) > .details")
      .should("exist")
      .contains("Homem-Aranha 2")
      .should("be.visible");
  });

  it("CT-019 - Busca de filme inexistente", () => {
    cy.get("#inner_search_v4").type("Awsdjikl{enter}");
    cy.get(".movie > .results > p")
      .should("be.visible")
      .contains(
        "Não foram encontrados filmes que correspondam aos seus critérios de busca."
      );
  });

  it("CT-020 - Busca de pessoa existente", () => {
    cy.get("#inner_search_v4").type("Isabela Merced{enter}");
    cy.get(".results > :nth-child(1) > .flex")
      .should("exist")
      .contains("Isabela Merced")
      .should("be.visible");
  });
});
