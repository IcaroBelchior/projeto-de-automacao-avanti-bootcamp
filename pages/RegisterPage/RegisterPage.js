Cypress.Commands.add('typeUsername', (username) => {
  cy.get('#username').type(username);
});

Cypress.Commands.add('typeEmail', (email) => {
  cy.get('#email').type(email);
});

Cypress.Commands.add('typePassword', (password) => {
  cy.get('#password').type(password);
});

Cypress.Commands.add('typeConfirmPassword', (confirmPassword) => {
  cy.get('#password_confirm').type(confirmPassword);
});

Cypress.Commands.add('clickButtonRegister', () => {
  cy.get('input[value="Registrar"]').click();
});
