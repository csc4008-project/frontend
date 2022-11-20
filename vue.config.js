const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  outputDir: 'csc4008-project-ui',
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/login": {
        target: 'http://localhost:5000/',
      },
      "/register": {
        target: 'http://localhost:5000/',
      },
      "/updateAccount": {
        target: 'http://localhost:5000/',
      }
    }
  }
})
