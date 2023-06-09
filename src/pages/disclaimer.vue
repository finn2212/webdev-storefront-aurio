<template>
    <div class="container justify-content-center">
       
      </div>
  </template>
     
  <script>
  import { getApplicationContext } from "@shopware-pwa/composables"
  import { invokePost } from "@shopware-pwa/shopware-6-client"
  import { onMounted, ref } from "@vue/composition-api"
  import 'bootstrap/dist/css/bootstrap.min.css'
  
  
  export default {
      name: "disclaimer",
      components: {
  
      },
      setup(props, { root }) {
          // get the configured api client
          const { apiInstance } = getApplicationContext(root, "home")
      },
      
  
  }
  </script>
     
  <style lang="scss" scoped>
  * {
      box-sizing: border-box;
  }
  
  </style>