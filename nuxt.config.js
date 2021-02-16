export default {
  plugins: ['~/plugins/graphcms.js'],
  css: ['@/assets/styles/scss/styles.scss'],
  env: {
    graphcmsEndpoint: process.env.GRAPHCMS_ENDPOINT
  },
  router: {
    linkActiveClass: 'active'
  },
  target: 'static',
  loading: false, // Disables the page change loader on the top
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    script: [
      { hid: 'bootstrap', src: 'assets/js/bootstrap.min.js', defer: true },
      { hid: 'bootstrap', src: 'https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js', defer: true }
    ]
  },
  build: {
    extractCSS: true
  },
  buildModules: [
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      Roboto: [100, 300, 400, 500, 700, 900]
    }
  }
}
