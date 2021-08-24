export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'KAI-YOU Medium Tech.',
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#'
    },
    meta: [
      { charset: 'utf-8' },
      { hid: 'description', name: 'description', content: 'わたしたちは、KAI-YOUの運営するメディアを推進するWebサービス開発・コンテンツ制作チームです。10年という歳月にわたって多角的にメディアを運営してきたエンジニアリングと編集力で、超情報化社会の海を泳ぐ推進力を備えたMedium[媒体]を編纂します。' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'keywords', content: 'KAI-YOU Medium Tech.,カイユウメディウムテック,ウムテク,KAI-YOU.net,KAI-YOU Premium,KAI-YOU Videos,界遊' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'KAI-YOU Medium Tech.' },
      { hid: 'og:type', property: 'og:type', content: 'company' },
      { hid: 'og:url', property: 'og:url', content: 'https://umtc.kai-you.co.jp/umtc-kv.jpg' },
      { hid: 'og:title', property: 'og:title', content: 'KAI-YOU Medium Tech.' },
      { hid: 'og:description', property: 'og:description', content: 'わたしたちは、KAI-YOUの運営するメディアを推進するWebサービス開発・コンテンツ制作チームです。10年という歳月にわたって多角的にメディアを運営してきたエンジニアリングと編集力で、超情報化社会の海を泳ぐ推進力を備えたMedium[媒体]を編纂します。' },
      { hid: 'og:image', property: 'og:image', content: 'https://umtc.kai-you.co.jp/umtc-kv.jpg' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:url', content: 'https://umtc.kai-you.co.jp' },
      { name: 'twitter:title', content: 'KAI-YOU Medium Tech.' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon/MediumTech_32_32_fav.ico', sizes: '32x32' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon/MediumTech_16_16_fav.ico', sizes: '16x16' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: '~/assets/sass/style.scss', lang: 'scss' },
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['vue-scrollto/nuxt', { duration: 800 }],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  target: 'static',

  router: {
    base: '/umtc.kai-you.co.jp/'
  },
}
