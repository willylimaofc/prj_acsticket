describe('Teste de Login no ACS Ticket', () => {
  it('Deve fazer login com sucesso', () => {
    // Acessa a página de login
    cy.visit('/login') // ou '/' se já cair direto na tela de login
    cy.wait(1000) // espera 1 segundo antes de continuar

    // Preenche o e-mail e a senha
    cy.get('input[type="email"]').type('felipe.henrique@analytichem.com')
    cy.get('input[type="password"]').type('iTsFKSSS.2025*')

    // Clica no botão de login
    cy.contains('button', 'Entrar').click()

    // Valida se foi redirecionado para o dashboard ou se há algum elemento pós-login
    cy.contains('Dashboard & Analytics').should('be.visible') 
  })

  it('Deve fazer login com senha errada e receber notificacao de erro', () => {
    // Acessa a página de login
    cy.visit('/login') // ou '/' se já cair direto na tela de login
    cy.wait(1000) // espera 1 segundo antes de continuar

    // Preenche o e-mail e a senha
    cy.get('input[type="email"]').type('felipe.henrique@analytichem.com')
    cy.get('input[type="password"]').type('Diferente')

    // Clica no botão de login
    cy.contains('button', 'Entrar').click()

    // valida notificacao de erro
    cy.contains('Invalid login credentials').should('be.visible') 

})

it('Deve fazer login com email errada e receber notificacao de erro', () => {
    // Acessa a página de login
    cy.visit('/login') // ou '/' se já cair direto na tela de login
    cy.wait(1000) // espera 1 segundo antes de continuar

    // Preenche o e-mail e a senha
    cy.get('input[type="email"]').type('felipe@analytichem.com')
    cy.get('input[type="password"]').type('iTsFKSSS.2025*')

    // Clica no botão de login
    cy.contains('button', 'Entrar').click()

    // valida notificacao de erro
    cy.contains('Invalid login credentials').should('be.visible') 

})

})