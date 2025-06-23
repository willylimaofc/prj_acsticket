describe('Menu do Usuário - Perfil e Logout', () => {
  beforeEach(() => {
    // Acesse a página de login e realize a autenticação
    cy.visit('/login')

   cy.get('input[type="email"]').type('felipe.henrique@analytichem.com')
    cy.get('input[type="password"]').type('iTsFKSSS.2025*')
    cy.contains('button', 'Entrar').click()

    // Garante que a tela inicial (dashboard) está carregada
  
    cy.contains('Dashboard & Analytics').should('exist')
    // Selecionar Linguagem da pagina
    cy.contains('button', 'EN').click()
    cy.get('[role="option"]').contains('PT').click()
  })

  it('Deve acessar o My Profile', () => {
    // Abre o menu de usuário (clicando na imagem/avatar)
    document.querySelector('#radix-\\:rg')
    // Clica em "My Profile"
    cy.contains('Perfil').click()
    // Verifica se a URL ou algum conteúdo da página de perfil foi carregado
    cy.url().should('include', '/profile')
    cy.wait(6000) // espera 1 segundo antes de continuar
    cy.contains('Informações Pessoais').should('exist')
  })

  it('Deve acessar Settings', () => {
    cy.get('#radix-\\:rg', { timeout: 10000 }).should('be.visible').click();
    cy.contains('Configurações').click()
    cy.url().should('include', '/settings')
    
  })

  it('Deve realizar Logout com sucesso', () => {
    cy.get('#radix-\\:rg', { timeout: 10000 }).should('be.visible').click();
    cy.wait(1000) // espera 1 segundo antes de continuar
    cy.contains('Sair').click()
   // cy.wait(6000) // espera 1 segundo antes de continuar
    cy.url().should('include', '/login')

  })
})
