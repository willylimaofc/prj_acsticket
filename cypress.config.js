const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: false,
    json: true
  },
  });

//aummento de tempo 
module.exports = defineConfig({
  defaultCommandTimeout: 10000 // aumenta para 10 segundos
})

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://acsticket.vercel.app',
    supportFile: 'cypress/support/e2e.js',
    experimentalRunAllSpecs: true,
    experimentalMemoryManagement: true,
    chromeWebSecurity: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    defaultCommandTimeout: 20000,
    pageLoadTimeout: 60000,
    video: true, // Habilita gravação para análise
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.name === 'electron' && browser.isHeadless) {
          launchOptions.preferences.fullscreen = true
          launchOptions.preferences.darkTheme = true
          launchOptions.args.push('--force-device-scale-factor=1')
        }
        return launchOptions
      })
  },

  },
});

