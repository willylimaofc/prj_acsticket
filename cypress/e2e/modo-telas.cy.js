describe('Menu do Usuário - Perfil e Logout', () => {
  beforeEach(() => {
    // Acesse a página de login e realize a autenticação
    cy.visit('/login')

    cy.get('input[type="email"]').type('felipe.henrique@analytichem.com')
    cy.get('input[type="password"]').type('iTsFKSSS.2025*')
    cy.contains('button', 'Entrar').click()

    // Garante que a tela inicial (dashboard) está carregada
  
    cy.contains('Dashboard & Analytics').should('exist')
  })

    it('Deve acessar o My Profile', () => {

    cy.contains('button', 'Switch to light theme').should('exist')
    cy.wait(1000) // espera 1 segundo antes de continuar
    cy.contains('button', 'Switch to light theme').click()
   

     })
})