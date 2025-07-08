describe('Acesso ao Menu de Administração - Usuário Admin', () => {
  beforeEach(() => {
    cy.visit('/login');
     cy.get('input[type="email"]').type('felipe.henrique@analytichem.com')
    cy.get('input[type="password"]').type('iTsFKSSS.2025*')
    cy.get('button[type="submit"]').click();

     // Selecionar Linguagem da pagina
    cy.contains('button', 'EN', { timeout: 10000 }).click()
    cy.get('[role="option"]').contains('PT').click()

    // Verifica se login foi bem-sucedido (ajuste conforme sua app)
    cy.contains('Painel').should('be.visible');
  });

  it('Deve acessar todas as opções do menu Administração', () => {
    // Expande o menu Administração
    cy.contains('Administração').click();

    // Lista de seções que o admin deve conseguir acessar
    const secoes = ['Usuários', 'Categorias', 'Config SLA', 'Admin BC', 'Integrações', 'Debug'];

    secoes.forEach((secao) => {
      cy.contains('Usuários').click(); // garante que o menu esteja aberto
      cy.contains(secao).click();

      // Verifica se o título da página corresponde
      cy.contains(secao).should('be.visible');

    });
  });
});
