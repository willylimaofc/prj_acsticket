describe('Visualizar os Dashboards após Login', () => {
  beforeEach(() => {
    cy.visit('/login')

    cy.get('input[type="email"]').type('felipe.henrique@analytichem.com')
    cy.get('input[type="password"]').type('iTsFKSSS.2025*')
    cy.contains('button', 'Entrar').click()
    cy.wait(1000) // espera 1 segundo antes de continuar
    

    // Espera a tela carregar após login
    cy.contains('Dashboard & Analytics').should('be.visible')
    // Selecionar Linguagem da pagina
    cy.contains('button', 'EN').click()
    cy.get('[role="option"]').contains('PT').click()
  })

  it('Deve exibir as métricas principais', () => {
    cy.contains('Total de Chamados').should('exist')
    cy.contains('Agentes Ativos').should('exist')
    cy.contains('SLA Cumprido').should('exist')
  })

  it('Deve navegar para Tickets Abertos', () => {
    cy.contains('Meus Tickets').click()
    cy.contains('Tickets Abertos').click()
    cy.contains('Open Tickets').should('be.visible')
  })

  it('Deve clicar em + Criar Ticket', () => {
      cy.wait(1000) // espera 1 segundo antes de continuar
    cy.contains('Criar Ticket').click()
     cy.wait(1000) // espera 1 segundo antes de continuar
    cy.get('input[id="title"]').should('be.visible') 
  }) 

  it('Deve exibir nome do usuário logado', () => {
    cy.contains('Bem-vindo de volta').should('exist')
  })
})
