describe('Menu do Usuário - Perfil e Logout', () => {
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


  it('Deve acessar o My Profile', () => {
    // Abre o menu de usuário (clicando na imagem/avatar)
cy.get('#radix-\\:rf\\:').click();
    // Clica em "My Profile"
    cy.contains('Profile').click()
    // Verifica se a URL ou algum conteúdo da página de perfil foi carregado
    cy.url().should('include', '/profile')
    cy.wait(6000) // espera 1 segundo antes de continuar
    cy.contains('Informações Pessoais').should('exist')
  })

  it('Deve acessar Settings', () => {
cy.get('#radix-\\:rf\\:').click();
    cy.wait(1000) // espera 1 segundo antes de continuar
    cy.contains('Settings').click()
    cy.url().should('include', '/settings')
    
  })

  it('Deve realizar Logout com sucesso', () => {
cy.get('#radix-\\:rf\\:').click();
    cy.wait(1000) // espera 1 segundo antes de continuar
    cy.contains('Log out').click()
   // cy.wait(6000) // espera 1 segundo antes de continuar
    cy.url().should('include', '/login')

  })
})
