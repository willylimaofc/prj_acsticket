// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// cypress/support/e2e.js

// Verifica se está rodando em modo headless
const isHeadless = Cypress.config('isHeadless') || !Cypress.config('headed')

if (isHeadless) {
  Cypress.on('window:load', (win) => {
    const style = win.document.createElement('style')
    style.innerHTML = `
      *, *::before, *::after {
        transition-property: none !important;
        animation: none !important;
        scroll-behavior: auto !important;
      }
    `
    win.document.head.appendChild(style)
    
    // Força a repaint imediata
    win.document.body.getBoundingClientRect()
  })

  // Adiciona observer para elementos dinâmicos (SPAs)
  Cypress.on('window:load', (win) => {
    new win.MutationObserver(() => {
      win.document.querySelectorAll('*').forEach(el => {
        el.style.animation = 'none !important'
        el.style.transition = 'none !important'
      })
    }).observe(win.document.body, {
      subtree: true,
      childList: true
    })
  })
}