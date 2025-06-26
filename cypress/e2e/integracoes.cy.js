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

  it('Deve Acessar tela de Integrações', () => {
    cy.contains('Administração').click()
    cy.contains('Integrações').click()
    cy.visit('/integrations')
    cy.contains('Integrações').should('be.visible')
  })

  it ('Deve ativar uma das "Integrações"', () => { 
      cy.contains('Administração').click()
    cy.contains('Integrações').click()
    cy.visit('/integrations')
    cy.contains('Integrações').should('be.visible')
    //Ativacao multipla de integrações desativadas
    cy.get('button[type="button"][role="switch"][data-state="unchecked"]').first().click();
    cy.get('button[type="button"][role="switch"]').first().should('have.attr', 'data-state', 'checked');
    cy.wait(1000) // espera 1 segundo antes de continuar
  })


it ('Acessar opcao de configuração de uma integração', () => {
    cy.contains('Administração').click()
    cy.contains('Integrações').click()
    cy.visit('/integrations')
    cy.contains('Integrações').should('be.visible')
    //Acessar configuração de uma integração
    cy.get('.pt-0 > .space-y-4 > :nth-child(1) > .flex > .text-sm').click()
    cy.contains('Configurar').should('be.visible')  
    cy.contains('button', 'Configurar').click()
     cy.wait(1000) // espera 1 segundo antes de continuar
    cy.contains('Webhook URL').should('be.visible')
    cy.contains('Canal').should('be.visible')
    cy.contains('Testar Integração').should('be.visible')
  })

  it ('Deve exibir a lista de integrações', () => {
    cy.contains('Administração').click()
    cy.contains('Integrações').click()
    cy.visit('/integrations')
    cy.contains('Integrações').should('be.visible')
    cy.get('.pt-0 > .space-y-4 > :nth-child(1)').should('be.visible')
  })
})