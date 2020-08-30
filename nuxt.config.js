export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'OTTgang',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          '我々OTTgang（オーティーティーギャング）は、PC一台で音楽制作をする卓です。劇伴、EDM、HipHopなど、ジャンルを問わず頭の中にある自分の世界観を音楽で表現し、それらをOTTサービス（Youtube、SoundCloudなど）を用いて世界中に公開していきます。',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '~/assets/images/ott_logo.png',
      },
      { hid: 'og:title', property: 'og:title', content: 'OTTgang' },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          '我々OTTgang（オーティーティーギャング）は、PC一台で音楽制作をする卓です。劇伴、EDM、HipHopなど、ジャンルを問わず頭の中にある自分の世界観を音楽で表現し、それらをOTTサービス（Youtube、SoundCloudなど）を用いて世界中に公開していきます。',
      },
      { name: 'twitter:card', content: 'summary' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: ['~/assets/scss/style.scss'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    '~/plugins/vue-scrollto.js',
    { src: '~/plugins/sound-cloud-api.js', mode: 'client' },
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/style-resources'],
  styleResources: {
    scss: [
      '~/assets/scss/base/_variable.scss',
      '~/assets/scss/base/_mixin.scss',
    ],
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
};