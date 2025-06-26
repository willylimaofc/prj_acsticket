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

  it('Deve Acessar tela de Gerenciamento de Tarefas', () => {
    cy.contains('Reabertura').click()
    cy.visit('/todo')
    cy.contains('Gerenciamento de Tarefas').should('be.visible')
  })

  it('Deve criar uma nova tarefa', () => {
    cy.contains('Reabertura').click()
    cy.visit('/todo')
    
    //Acesso a criacao de nova tarefa
    cy.contains('Gerenciamento de Tarefas').should('be.visible')
    cy.get('button').contains('Nova Tarefa').click()
    
    //Preenchimento de campos de nova tarefa 
    cy.get('input[placeholder="Digite um título descritivo para a tarefa..."]').type('Tarefa criada por automacao QA');
    cy.get('textarea[placeholder="Descreva detalhes, objetivos ou instruções específicas para esta tarefa..."]').type('Descrição de teste automatizado para criação de tarefa dentro do sistema ACS Ticket.');

     // Define prioridade
    // cy.get('button[aria-haspopup="listbox"]').first().click();
    //  cy.contains('Média').click(); // ou Média, Baixa, etc.

    // Seleciona o campo de data e define uma data válida
    cy.get('input[type="date"]#dueDate').type('2025-06-27');

    // Horas estimadas
    cy.get('input[placeholder="Ex: 2.5"]').type('1.5');

    cy.scrollTo('top');

    // 1. Clica no botão do combobox
    cy.contains('button', 'Nenhum ticket').click();

    // 2. Aguarda o dropdown abrir (pode ajustar esse tempo se necessário)
    cy.wait(500); // ou usar `.should('be.visible')` para esperar elemento real

    // 3. Seleciona a opção desejada pelo texto
    cy.contains('TESTE DE AUTOMAÇÃO QA - IT & Technical Support > Feature Request > 🟢 Low').click();

    // Atribui tarefa a um usuário
    cy.contains('button', 'Nenhum usuário atribuído').click();

    // 2. Aguarda o dropdown abrir
    cy.wait(300); // ou use should('be.visible') no menu se preferir

    // 3. Seleciona a opção pelo texto
    cy.contains('qa@example.com').click();

    // Adiciona tag
    cy.get('input[placeholder="Digite uma tag e pressione Enter..."]').type('QA Automatizado{enter}');
    cy.get('button:has(svg.lucide-plus)').click();
    cy.contains('span', 'QA Automatizado').should('exist');

    // Ativa lembrete por e-mail
    cy.get('button[type="button"][role="switch"][data-state="unchecked"]').first().click();
    cy.get('button[type="button"][role="switch"]').first().should('have.attr', 'data-state', 'checked');

    // Clica no botão para criar tarefa
    cy.contains('button', 'Criar Tarefa').click();

    // Validação com sucesso
    cy.contains('Tarefa criada com sucesso').should('be.visible');
  });

})
