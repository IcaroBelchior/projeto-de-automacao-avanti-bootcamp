Cypress.Commands.add('typeUsername', (username) => {
  cy.get('#username').type(username);
});

Cypress.Commands.add('typePassword', (password) => {
  cy.get('#password').type(password);
});

Cypress.Commands.add('clickButtonLogin', () => {
  cy.get('input[value="Entrar"]').click();
});

Cypress.Commands.add('clickAvatarPerfil', () => {
  cy.get('a[aria-label="Perfil e Configurações"]').click();
});

Cypress.Commands.add('clickListas', () => {
  cy.contains('a', 'Listas').click();
});

Cypress.Commands.add('clickCriarLista', () => {
  cy.contains('a', 'Criar Lista').click();
});

Cypress.Commands.add('typeNomeLista', (nomeLista) => {
  cy.get('#name').type(nomeLista);
});

Cypress.Commands.add('typeDescricaoLista', (descricaoLista) => {
  cy.get('#description').type(descricaoLista);
});

Cypress.Commands.add('clickContinuar', () => {
  cy.get('input[value="Continuar"]').click();
});

Cypress.Commands.add('clickEditar', () => {
  cy.get('a[title="Editar"]').click()
})

Cypress.Commands.add('clickExcluirLista', () => {
  cy.get('a[href="?active_nav_item=delete"]').should('contain', 'Excluir lista').click()
})

Cypress.Commands.add('clickBotaoExcluir', () => {
  cy.get('button#delete_list').should('be.visible').click()
})

Cypress.Commands.add('clickAdicionarItens', () => {
  cy.get('a[href="?active_nav_item=step_2&sort_by=original_order.desc"]').should('contain', 'Adicionar/Editar itens').click()
})

Cypress.Commands.add('typeItemLista', (itemLista) => {
  cy.get('#list_item_search').type(itemLista);
});

Cypress.Commands.add('clickBotaoExcluir', () => {
  cy.get('button#delete_list').should('be.visible').click()
})

Cypress.Commands.add('clickItemByName', (name) => {
  cy.get('li.k-list-item').contains(name).click();
});
