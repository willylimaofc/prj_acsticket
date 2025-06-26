# Projeto de Testes Automatizados - ACS TicketAdd commentMore actions

Este projeto serve para realizar testes automatizados de ponta a ponta (E2E) na plataforma **ACS Ticket**, validando fluxos de criação de chamados com diferentes categorias, subcategorias e níveis de prioridade.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------

## 📂 Estrutura do Projeto

<pre> ```bash prj_acsticket/ ├── cypress/ │ ├── e2e/ │ │ ├── area-cliente.cy.js │ │ ├── base-conhecimento.cy.js │ │ ├── cadastro-login.cy.js │ │ ├── criar-ticket.cy.js │ │ ├── gerenciamento-tarefas.cy.js │ │ ├── home-principal.cy.js │ │ ├── integracoes.cy.js │ │ ├── login.cy.js │ │ ├── modo-telas.cy.js │ │ ├── reabertura-ticket.cy.js │ │ ├── visualizar-ticket.cy.js │ │ └── Perfis_de_contas.cy.js │ ├── fixtures/ │ │ └── (massas de dados para os testes) │ ├── reports/ │ │ └── (relatórios gerados dos testes) │ ├── screenshots/ │ │ ├── area-cliente.cy.js/ │ │ ├── criar-ticket.cy.js/ │ │ ├── home-principal.cy.js/ │ │ └── visualizar-ticket.cy.js/ │ └── support/ │ └── (comandos e utilitários do Cypress) ├── downloads/ # (pasta auxiliar, se usada para evidências) ├── node_modules/ # Dependências instaladas via npm ├── cypress.config.js # Configurações do Cypress ├── package.json # Dependências e scripts do projeto ├── package-lock.json # Controle de versão das dependências ├── .gitignore # Arquivos e pastas ignorados pelo Git └── README.md # Documentação principal do projeto ``` </pre>

----------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Perfis de Usuário

O arquivo `Perfis_de_contas.cy.js` contém dois usuários utilizados nos testes:

- `admin`: Perfil administrador
- `comum`: Perfil de usuário comum (utilizado por padrão nos testes)

----------------------------------------------------------------------------------------------------------------------------------------------------------------------

##  Casos de Teste

Cada execução cobre múltiplas combinações de:

- **Categorias** (Ex.: IT & Technical Support, Users & Passwords)
- **Subcategorias** (Ex.: Bug Report, Employee Offboarding)
- **Prioridades** (Low, Medium, High, Critical)

Todos os testes acessam a aplicação, realizam login, abrem a tela de criação de ticket e preenchem os dados necessários, validando a criação do chamado com sucesso.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Como Executar

1. **Instalar dependências**:
   ```bash
   npm install

2. Abrir interface do Cypress:
   ```bash
   npx cypress open

2.1 Ou, para rodar todos os testes via terminal:
    
    npx cypress run
----------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Geração de Relatórios

Instale e configure o Allure se desejar visualizar dashboards e históricos dos testes.

Exemplo de comando (após configuração):
   
   npm run merge-reports && npm run generate-report

----------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Tecnologias

Cypress

JavaScript (ES6)

Node.js

----------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Git

📘 Observações
Certifique-se de configurar as credenciais corretas em Perfis_de_contas.cy.js.

As mensagens de sucesso/erro podem ser ajustadas conforme as respostas reais da plataforma.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Autor
Willy Lima
GitHub: willylimaofc