import '../../../pages/RegisterPage/RegisterPage.js';

describe('Validar registro de usuário', () => {

  it('CT-001 Validar mensagem de boas vindas ao concluir cadastro com sucesso', () => {

    cy.visit('https://www.themoviedb.org/signup');

    cy.typeUsername("TesteIcro2");
    cy.typePassword("1234");
    cy.typeConfirmPassword("1234")
    cy.typeEmail("testeqa1304@gmail.com");

    cy.clickButtonRegister();

    //Necessário para fazer o captcha que aparece após clicar em registrar
    //Após as interações acima terá esse timer para fazer o CAPTCHA do site, que sempre aparece quando clica em registrar, por isso deve ser feito o CAPTCHA na tela do cypress manualmente.
    cy.wait(20000); //Melhor forma de rodar o teste
    
    cy.contains("Your email address hasn't been verified").should('be.visible') //confirma que a conta foi feita, porém precisa confirmar o email

   }) //talvez dê erro, pq o site não aceita muitas criações de registro e começa a dar erro, mas o código ta funcionando corretamente


  it('CT-005 Validar mensagem quando o usuário não digita o campo "Username" ', () => {

    cy.visit('https://www.themoviedb.org/signup');

    //cy.typeUsername("TesteIcro2"); Não é preciso username
    cy.typePassword("1234");
    cy.typeConfirmPassword("1234")
    cy.typeEmail("testeqa1304@gmail.com");

    cy.clickButtonRegister();

    //Necessário para fazer o captcha que aparece após clicar em registrar
    //Após as interações acima terá esse timer para fazer o CAPTCHA do site, que sempre aparece quando clica em registrar, por isso deve ser feito o CAPTCHA na tela do cypress manualmente.
    cy.wait(20000);

    cy.contains('Username é necessário(a)').should('be.visible')

   }) 

    it('CT-006/CT-010 Validar mensagem quando o usuário não digita o campo "Email"/Quando digita email inválido ', () => {

    cy.visit('https://www.themoviedb.org/signup');

    cy.typeUsername("TesteIcro2");
    cy.typePassword("1234");
    cy.typeConfirmPassword("1234")
    //cy.typeEmail("testeqa1304@gmail.com"); Não é necessário email

    cy.clickButtonRegister();

    //Necessário para fazer o captcha que aparece após clicar em registrar
      //Após as interações acima terá esse timer para fazer o CAPTCHA do site, que sempre aparece quando clica em registrar, por isso deve ser feito o CAPTCHA na tela do cypress manualmente.
    cy.wait(20000);

    
    cy.contains('Email é necessário(a)').should('be.visible')
    cy.contains('Email does not appear to be valid').should('be.visible')

   }) 

    it.only('CT-008 Validar mensagem quando o usuário não digita o campo "Confirmar senha" ', () => {

    cy.visit('https://www.themoviedb.org/signup');

    cy.typeUsername("TesteIcro2");
    cy.typePassword("1234");
    //cy.typeConfirmPassword("1234") Não é necessário confirmar senha
    cy.typeEmail("testeqa1304@gmail.com"); 

    cy.clickButtonRegister();

    //Necessário para fazer o captcha que aparece após clicar em registrar
      //Após as interações acima terá esse timer para fazer o CAPTCHA do site, que sempre aparece quando clica em registrar, por isso deve ser feito o CAPTCHA na tela do cypress manualmente.
    cy.wait(20000);

    
    cy.contains("Password confirm can't be blank").should('be.visible');

   }) 
})
//Autor: Ícaro Miranda Belchior
