import extendNuxtConfig from "@shopware-pwa/nuxt-module/config"
const webpack = require('webpack');

export default extendNuxtConfig({
  head: {
    title: "Shopware PWA",
    meta: [{ hid: "description", name: "description", content: "" }],
     link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100&family=Roboto:ital,wght@0,100;1,100&display=swap'
      }
     ],
     plugins: [
      '~plugins/bootstrap.js',
    ],
     build: {
      /*
      ** You can extend webpack config here
      */
      extend(config, ctx) {
      },
      plugins: [
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery',
          Popper: ['popper.js', 'default'],
        }),
      ],
    }
  },
})
