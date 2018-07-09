const fs = require('fs')
const webpack = require('webpack')

module.exports = {
  css: [
    { src: '~/assets/stylesheets/bulma-starpeace.sass', lang: 'sass' }
  ],
  head: {
    title: 'STARPEACE',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'STARPEACE multiplayer economic simulation' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans|Varela+Round' }
    ]
  },
  generate: {
    fallback: false
  },
  build: {
    // analyze: true,
    publicPath: '/assets/',
    vendor: [],
    extend (config, { isDev, isClient }) {
      config.module.rules.push({
        test: /\.coffee$/,
        use: 'coffee-loader',
        exclude: /(node_modules)/
      });
      config.module.rules.push({
        test: /\.haml$/,
        use: 'haml',
        exclude: /(node_modules)/
      });
    }
  },
  modules: [
    '@nuxtjs/moment'
  ],
  plugins: [
    { src: '~/plugins/font-awesome', ssr: false },
    { src: '~/plugins/google-analytics', ssr: false }
  ]
}
