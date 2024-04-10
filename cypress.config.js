const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    baseUrl: "https://www.saucedemo.com/v1/index.html",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/integration/tests/*.js",
  },
});
