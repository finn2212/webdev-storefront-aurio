import extendNuxtConfig from "@shopware-pwa/nuxt-module/config"

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
  },
})
