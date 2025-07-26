import '../../../pages/CreateListaPage/CreateListaPage.js';

describe('Criação/Edição/Exclusão de Listas', () => {

  it.only('CT-039 Validar a criação de uma lista', () => {

    cy.visit('https://www.themoviedb.org/login');

    cy.typeUsername("IcaroBel");
    cy.typePassword("1234");

    cy.clickButtonLogin();
    cy.clickAvatarPerfil();
    cy.clickListas();
    cy.clickCriarLista();

    cy.typeNomeLista("Teste1");
    cy.typeDescricaoLista("Teste1");

    cy.clickContinuar();

    cy.wait(5000);

   cy.get('ul.settings.panel').within(() => {
      cy.contains('a', 'Editar Lista').should('exist')
      cy.contains('a', 'Adicionar/Editar itens').should('exist')
      cy.contains('a', 'Selecionar imagem').should('exist')
      cy.contains('a', 'Excluir lista').should('exist') //validar o painel de edição da lista, pois a mensagem de sucesso na criação estava sendo reconhecida
   }) 
  })

 it('CT-056 Excluir uma lista', () => {

    cy.visit('https://www.themoviedb.org/login');

    cy.typeUsername("IcaroBel");
    cy.typePassword("1234");

    cy.clickButtonLogin();
    cy.clickAvatarPerfil();
    cy.clickListas();
    cy.contains('a', 'Teste1').click() //tem que conter o título da lista, como criei vários 'Teste1' então deixei.
    cy.clickEditar();
    cy.clickExcluirLista();
    cy.clickBotaoExcluir();

    cy.contains('button', 'Sim').should('be.visible').click()


  })

 it('CT-052 Adicionar um filme/série na lista', () => {

    cy.visit('https://www.themoviedb.org/login');

    cy.typeUsername("IcaroBel");
    cy.typePassword("1234");

    cy.clickButtonLogin();
    cy.clickAvatarPerfil();
    cy.clickListas();
    cy.contains('a', 'Teste1').click() //tem que conter o título da lista, como criei vários 'Teste1' então deixei.
    cy.clickEditar();
    cy.clickAdicionarItens();

    cy.typeItemLista("Interestelar");
    cy.wait(5000);
    cy.clickItemByName('Interestelar'); //Tive que fazer clicar pelo nome, pois a list do site tava tendo uma formatação errada, talvez pudesse clicar no primeiro item, mas achei que desse jeito garantisse mais clicar no item certo

    cy.get('h4').should('contain.text', 'Interestelar');



  })

}) //Autor: Ícaro Miranda Belchior