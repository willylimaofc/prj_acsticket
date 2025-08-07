describe('Visualizar os Dashboards após Login', () => {
  beforeEach(() => {
    cy.visit('/login')

    cy.get('input[type="email"]').type('felipe.henrique@analytichem.com')
    cy.get('input[type="password"]').type('iTsFKSSS.2025*')
    cy.contains('button', 'Entrar').click()
    cy.scrollTo('top');
    
    // Espera a tela carregar após login
    cy.contains('Dashboard & Analytics').should('be.visible')
    // Selecionar Linguagem da pagina
    cy.contains('button', 'EN').click()
    cy.get('[role="option"]').contains('PT').click()
  })

  it('Deve Acessar tela de abertura de tickets', () => {
    cy.contains('Reabertura').click()
    cy.visit('/reopen-requests')
    cy.contains('Solicitações de Reabertura').should('be.visible')
  })
})