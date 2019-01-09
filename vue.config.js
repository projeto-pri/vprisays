module.exports = {
  productionSourceMap: false,

  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/styles/_variables.scss";
          @import "@/styles/_mixins.scss";
        `
      }
    }
  },

  pwa: {
    name: 'VPriSays',
    themeColor: '#4085F5'
  }
}
