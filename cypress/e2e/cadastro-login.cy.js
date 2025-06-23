describe('Tela de Cadastro - Criar nova conta', () => {
  beforeEach(() => {
    cy.visit('/login'); // ajuste a URL conforme necessário
    cy.contains('Button','Criar nova conta').click();
    cy.contains('Cadastro').should('be.visible');
  });

  it('Deve mostrar erro se as senhas forem diferentes', () => {
    cy.get('input[placeholder="Seu nome completo"]').type('Conta Erro');
    cy.get('input[placeholder="seu@email.com"]').type('erro@example.com');
    cy.get('input[placeholder="Digite sua senha"]').type('Senha123');
    cy.get('input[placeholder="Confirme sua senha"]').type('SenhaDiferente');
    
    // Marca o checkbox de concordância com termos
    cy.get('input[type="checkbox"]').check({ force: true });

    // Clica no botão de criar conta
    cy.contains('button', 'Criar conta').click();

    // Validacao de mensagem de erro 
    cy.contains('As senhas não coincidem').should('be.visible');
  });

    it('Deve preencher todos os campos obrigatórios e criar conta com sucesso', () => {
    const emailUnico = `qa_${Date.now()}@example.com`;

    cy.get('input[placeholder="Seu nome completo"]').type('QA Automação');
    cy.get('input[placeholder="seu@email.com"]').type(emailUnico);
    cy.get('input[placeholder="Digite sua senha"]').type('SenhaSegura123!');
    cy.get('input[placeholder="Confirme sua senha"]').type('SenhaSegura123!');

    // Marca o checkbox de concordância com termos
    cy.get('input[type="checkbox"]').check({ force: true });

    // Clica no botão de criar conta
    cy.contains('button', 'Criar conta').click();

    // Espera a tela carregar após login
    cy.contains('Dashboard & Analytics').should('be.visible')

    });

  it('Validar mensagem de conta ja existente', () => {
    cy.get('input[placeholder="Seu nome completo"]').type('QA Automação');
    cy.get('input[placeholder="seu@email.com"]').type('QA@example.com');
    cy.get('input[placeholder="Digite sua senha"]').type('SenhaSegura123!');
    cy.get('input[placeholder="Confirme sua senha"]').type('SenhaSegura123!');

    // Marca o checkbox de concordância com termos
    cy.get('input[type="checkbox"]').check({ force: true });

    // Clica no botão de criar conta
    cy.contains('button', 'Criar conta').click();

    //Valida mensagem de conta ja registrada
    cy.contains('User already registered').should('be.visible')
    });
});
