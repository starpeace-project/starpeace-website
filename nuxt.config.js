const is_development = process.env.NODE_ENV === 'development';

export default defineNuxtConfig({
  css: [
    'bulma',
    '@/assets/stylesheets/bulma-starpeace.sass'
  ],
  app: {
    buildAssetsDir: '/resources/',
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
    }
  },
  runtimeConfig: {
    public: {
      sendAnalytics: !is_development
    }
  },
  render: {
    resourceHints: false
  },
  generate: {
    fallback: false
  },
  telemetry: false,
  static: {
    prefix: false
  },
  build: {
    loaders: {
      sass: {
        implementation: require('sass')
      }
    },
    standalone: true
  },
  buildModules: ['@nuxt/typescript-build']
});
