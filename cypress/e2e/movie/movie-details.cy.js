describe('Cenário 11 - Página de Ficha de Filme - Visualização de filme na seção recomendação', () => {
  it('deve acessar a página de um filme recomendado ao clicar em uma recomendação', () => {
    cy.visit('https://www.themoviedb.org/movie');

    cy.get('#onetrust-accept-btn-handler')
     .scrollIntoView()
    .should('be.visible')
    .click({ force: true });

    cy.contains('Todos').click();
    cy.get('.card').should('exist');
    cy.get('.card').its('length').should('be.greaterThan', 5);

    cy.get('.card.style_1').first().click();

    cy.url().should('include', '/movie/');

    cy.wait(30000);
    cy.contains('h3', 'Recomendações').scrollIntoView();

   cy.get('.recommendations a[href*="/movie/"]', { timeout: 10000 })
      .should('have.length.greaterThan', 0)
      .first()
      .click();

      cy.url().should('include', '/movie/');
  });
});

describe('Cenário 11 - Página de Ficha de Filme - Reprodução de trailer' , () => {
  it('deve abrir o trailer do filme ao clicar em "Reproduzir trailer"', () => {
    cy.visit('https://www.themoviedb.org/movie');

    cy.get('#onetrust-accept-btn-handler')
      .scrollIntoView()
      .should('be.visible')
      .click({ force: true });

    cy.contains('Todos').click();

    
    cy.get('.card').should('exist');
    cy.get('.card').its('length').should('be.greaterThan', 5);

    cy.get('.card.style_1').first().click();

    cy.url().should('include', '/movie/');

    cy.get('a.play_trailer').first()
  .scrollIntoView()
  .should('be.visible')
  .click();

cy.get('iframe[src*="youtube.com"]', { timeout: 10000 })
  .should('be.visible');
  });
});


describe('CT-035 - Página de Ficha do Filme - Redes Sociais', () => {
  it('deve abrir a URL oficial da rede social ao clicar no ícone correspondente', () => {
    cy.visit('https://www.themoviedb.org/movie');

    cy.get('#onetrust-accept-btn-handler')
      .should('be.visible')
      .click({ force: true });

    cy.get('.card.style_1').first().click();

    cy.url().should('include', '/movie/');

    cy.get('a[href*="twitter.com"]').should('be.visible').then(($link) => {
      const twitterUrl = $link.prop('href');

      cy.request(twitterUrl).its('status').should('eq', 200);
    });
  });
});

