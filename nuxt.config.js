import extendNuxtConfig from "@shopware-pwa/nuxt-module/config"
const webpack = require('webpack');

export default extendNuxtConfig({
  head: {
    title: "AURIOPRINT - günstig Musiknoten drucken lassen",
    script: [
      {
        type: "text/javascript",
        ab: "1",
        src: "https://cdn.consentmanager.net/delivery/autoblocking/64f17ad2414dc.js",
        host: "d.delivery.consentmanager.net",
        cdn: "cdn.consentmanager.net",
        codesrc: "0"
      }
    ],
    target: 'static',
    meta: [
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Eigene Komposition veröffentlichen und Klavierstück drucken lassen'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Eigene Komposition veröffentlichen und Klavierstück drucken lassen'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '@/assets/svg/favicon.svg'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://aurioprint.com/'
      },
      {
        property: 'og:locale',
        content: 'de_DE'
      }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100&family=Roboto:ital,wght@0,100;1,100&display=swap'
      }
    ],
    plugins: [
      '~plugins/bootstrap.js',
    ],
    target: 'static',
    build: {
      /*
      ** You can extend webpack config here
      */
      extend(config, ctx) {
      },
    }
  },
})
