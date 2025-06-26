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
    cy.contains('button', 'EN').click()
    cy.get('[role="option"]').contains('PT').click()
  })


  // Definir as categorias e subcategorias como dados de teste
  const categories = [
    {
      nome: 'IT & Technical Support',
      subcategorias: [
        'Bug Report',
        'Hardware - Desktop/Workstation',
        'Feature Request',
        'Hardware - Laptop',
        'Account Issues',
        'Hardware - Server',
        'Hardware - Printer/Scanner',
        'Hardware - Mobile Device',
      ],
    },
    {
      nome: 'Users & Passwords',
      subcategorias: [
        'Employee Offboarding',
        'Forgot my password',
        'Multi factor authentication',
      ],
    },
  ]

  const priorities = [
    { label: '🟢 Low', value: 'low' },
    { label: '🟡 Medium', value: 'medium' },
    { label: '🟠 High', value: 'high' },
    { label: '🔴 Critical', value: 'urgent' },
  ]

  // Teste para criar tickets com todas combinações
  categories.forEach((category) => {
    category.subcategorias.forEach((subcategory) => {
      priorities.forEach((priority) => {
        it(`Cria ticket - ${category.nome} > ${subcategory} > ${priority.label}`, () => {
          // Entrar em novo ticket
          cy.contains('Criar Ticket').click()
          cy.get('input[id="title"]').should('be.visible')

          // Preenche título do ticket com prefixo padrão
          const ticketTitle = `TESTE DE AUTOMAÇÃO QA - ${category.nome} > ${subcategory} > ${priority.label}`
          cy.get('input[id="title"]').type(ticketTitle)

          // Selecionar categoria
          cy.contains('button', 'Select category').click()
          cy.get('[role="option"]').contains(category.nome).click()

          // Selecionar subcategoria
          cy.contains('button', 'Select subcategory (optional)').click()
          cy.get('[role="option"]').contains(subcategory).click()

          // Selecionar prioridade
          cy.contains('button', 'Select priority').click()
          cy.get('[role="dialog"][data-state="open"]', { timeout: 15000 })
            .should('exist')
            .then(($dialog) => {
              if ($dialog.css('pointer-events') === 'none') {
                cy.wrap($dialog).invoke('css', 'pointer-events', 'auto')
              }
            })
          
          cy.get('[role="option"]')
            .contains(priority.label)
            .then(($option) => {
              const style = window.getComputedStyle($option[0])
              if (style.pointerEvents === 'none') {
                cy.wrap($option).invoke('css', 'pointer-events', 'auto')
              }
            })
            .click({ force: true })

          // Verificar prioridade selecionada
          cy.get('button[role="combobox"]')
            .should('contain', priority.label)

          // Preencher descrição
          const ticketDescription = `TESTE DE AUTOMAÇÃO QA - Ticket gerado automaticamente:
          
Categoria: ${category.nome}
Subcategoria: ${subcategory}
Prioridade: ${priority.label} (${priority.value})

Data/hora: ${new Date().toLocaleString()}
Ambiente: ${Cypress.browser.name} ${Cypress.browser.version}

Passos para reprodução:
1. Passo 1 do teste
2. Passo 2 do teste

Resultado esperado:
- O sistema deve comportar-se conforme especificação`

          cy.get('textarea#description')
            .should('exist')
            .then(($textarea) => {
              const style = window.getComputedStyle($textarea[0])
              if (style.pointerEvents === 'none') {
                cy.wrap($textarea).invoke('css', 'pointer-events', 'auto')
              }
            })
            .clear({ force: true })
            .type(ticketDescription, { delay: 20, force: true })

          // Criar ticket
          cy.contains('Create Ticket').click()
          cy.contains('Novo ticket criado:', { timeout: 15000 }).should('be.visible')

          // Voltar para a lista de tickets
          cy.get('body').then(($body) => {
            if ($body.find('button:contains("Back to tickets")').length) {
              cy.contains('button', 'Back to tickets').click()
            } else if ($body.find('a:contains("Tickets")').length) {
              cy.contains('a', 'Tickets').click()
            }
          })
        })
      })
    })
  })
})