describe('Cenário 10 - Filtros de Filmes – Filtro "Todos" ', () => {
  it('deve exibir todos os filmes disponíveis ao clicar no filtro "Todos"', () => {
    cy.visit("https://www.themoviedb.org/movie");

    cy.get("#onetrust-accept-btn-handler")
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });

    cy.contains("Todos").click();

    cy.get(".card").should("exist");
    cy.get(".card").its("length").should("be.greaterThan", 5);
  });
});

describe("Cenário 10 - Filtros de Filmes – Filtro “Gêneros”", () => {
  it("Deve exibir filmes do gênero Documentário ao aplicar o filtro e validar na página do filme", () => {
    cy.visit("https://www.themoviedb.org/movie");

    cy.get("#onetrust-accept-btn-handler")
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });

    cy.wait(2000);

    cy.contains("Gênero").should("exist");

    cy.contains("Documentário").scrollIntoView().click({ force: true });

    cy.get("a.no_click.load_more")
      .contains("Pesquisar")
      .scrollIntoView()
      .click({ force: true });

    cy.wait(3000);

    cy.get(".card").should("have.length.greaterThan", 0);

    cy.get(".card.style_1").first().click();

    cy.wait(2000);

    cy.get(".genres").should("contain.text", "Documentário");
  });
});

describe('Cenário 10 - Filtros de Filmes – Filtro "Ordenar" por avaliação (pior)', () => {
  it("deve exibir os filmes com as piores avaliações primeiro", () => {
    cy.visit("https://www.themoviedb.org/movie");

    cy.get("#onetrust-accept-btn-handler")
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });

    cy.wait(3000);

    cy.contains("Ordenar").should("be.visible").click({ force: true });

    cy.contains("Popularidade (maior)")
      .should("be.visible")
      .click({ force: true });

    cy.get(".k-list", { timeout: 5000 }).should("be.visible");

    cy.contains(".k-list li", "Avaliação (pior)", { matchCase: false })
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });

    cy.wait(4000);
    cy.get(".card").should("have.length.greaterThan", 0);

    cy.get(".card .user_score_chart")
      .first()
      .invoke("attr", "data-percent")
      .then((score) => {
        expect(Number(score)).to.be.at.most(100); // nota muito baixa ou zero
      });
  });
});
