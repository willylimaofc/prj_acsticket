describe('Autenticar', () => {
 beforeEach(() => {
    cy.visit('/login')

    cy.get('input[type="email"]').type('felipe.henrique@analytichem.com')
    cy.get('input[type="password"]').type('iTsFKSSS.2025*')
    cy.contains('button', 'Entrar').click()
    cy.scrollTo('top');
    
    // Espera a tela carregar após login
    cy.contains('Dashboard & Analytics').should('be.visible')
    // Selecionar Linguagem da pagina
    cy.contains('button', 'PT').click()
    cy.get('[role="option"]').contains('PT').click()
  })


  it('Deve navegar para Tickets Abertos', () => {
    cy.contains('Tickets Não Atribuídos').click()
    cy.contains('Expand').should('be.visible')
    cy.contains('Aberto').should('be.visible')
    cy.contains('button', 'Ver detalhes').click();  
  })

  it('Vsualizar detalhes do Ticket criado', () => {
    cy.contains('Transferir Ticket').should('be.visible')
  })

})