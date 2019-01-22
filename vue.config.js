module.exports = {
  productionSourceMap: false,

  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/styles/_variables.scss";
          @import "@/styles/_mixins.scss";
          @import "@/styles/grid.scss";
        `
      }
    }
  },

  pwa: {
    name: 'VPriSays',
    themeColor: '#0786ec',
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
    }
  }
}
