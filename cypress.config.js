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

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://acsticket.vercel.app',
    supportFile: 'cypress/support/e2e.js',
  },
});

