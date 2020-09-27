const fs = require('fs')
const webpack = require('webpack')

const is_development = process.env.NODE_ENV === 'development'

module.exports = {
  css: [
    { src: '~/assets/stylesheets/bulma-starpeace.sass', lang: 'sass' }
  ],
  head: {
    title: 'STARPEACE',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'STARPEACE: a massively multi-player city-building and economic simulation game with persistent worlds, inter-player commerce, supply-chains and politics, and over 300 different factories, stores, residences, or offices to construct.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico', media: '(prefers-color-scheme:no-preference)'},
      { rel: 'icon', type: 'image/x-icon', href: '/favicon-dark.ico', media: '(prefers-color-scheme:dark)' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon-light.ico', media: '(prefers-color-scheme:light)' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans|Varela+Round' }
    ]
  },
  render: {
    resourceHints: false
  },
  generate: {
    fallback: false
  },
  telemetry: false,
  build: {
    // analyze: true,
    publicPath: '/assets/',
    extend (config, { isDev, isClient }) {
      config.module.rules.push({
        test: /\.coffee$/,
        use: 'coffee-loader',
        exclude: /(node_modules)/
      });
    }
  },
  modules: [
    '@nuxtjs/moment', ['@nuxtjs/google-analytics', { id: 'UA-120729341-1', debug: { sendHitTask: !is_development } }]
  ],
  plugins: [
    { src: '~/plugins/favicon-switcher', ssr: false },
    { src: '~/plugins/font-awesome', ssr: false }
  ]
}
