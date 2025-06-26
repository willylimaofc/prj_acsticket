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


  it('Deve Acessar tela de Base de Conhecimento', () => {
    cy.contains('Base de Conhecimento').click()
    cy.visit('/Knowledge')
    cy.contains('Knowledge Base').should('be.visible')
  })

  it ('Pesquise algo que não existe na Base de Conhecimento', () => {
    cy.contains('Base de Conhecimento').click()
    cy.visit('/Knowledge')
    cy.contains('Knowledge Base').should('be.visible')
    cy.get('input[placeholder="Search articles..."]').type('Conteúdo que não existe')
    cy.contains('No Articles Found').should('be.visible')
  })

  it ('Pesquise algo que existe na Base de Conhecimento e tenha mais de um arquivo', () => {
    cy.contains('Base de Conhecimento').click()
    cy.visit('/Knowledge')
    cy.contains('Knowledge Base').should('be.visible')
    cy.get('input[placeholder="Search articles..."]').type('Pass')
    cy.contains('Search Results (2)').should('be.visible')
  })

  it ('Pesquise algo que existe na Base de Conhecimento e tenha apenas um arquivo', () => {
    cy.contains('Base de Conhecimento').click()
    cy.visit('/Knowledge')
    cy.contains('Knowledge Base').should('be.visible')
    cy.get('input[placeholder="Search articles..."]').type('all')
    cy.contains('Search Results (1)').should('be.visible')
  })

  it ('Uso a opcao de compartilhar um artigo', () => {
    cy.contains('Base de Conhecimento').click()
    cy.visit('/Knowledge')
    cy.contains('Knowledge Base').should('be.visible')
    cy.get(':nth-child(1) > .p-6 > .space-y-4 > .items-start > .lucide-external-link').click()
    cy.contains('button', 'Share').click()
    cy.wait(1000) // espera 1 segundo antes de continuar
  })

  it ('Uso a opcao de compartilhar um artigo', () => {
    cy.contains('Base de Conhecimento').click()
    cy.visit('/Knowledge')
    cy.contains('Knowledge Base').should('be.visible')
    cy.get(':nth-child(1) > .p-6 > .space-y-4 > .items-start > .lucide-external-link').click()
    cy.contains('button', 'Print').click()
    cy.wait(1000) // espera 1 segundo antes de continuar
})

})




