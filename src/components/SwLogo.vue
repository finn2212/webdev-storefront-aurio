<template>
    <nuxt-link
      :to="$routing.getUrl('/')"
      class="sf-header__logo"
      data-testid="header-logo"
    >
    <img src="@/assets/images/AURIOPRINT_Logo.png"  alt="Avatar">
    </nuxt-link>
  </template>
  
  <script>
  export default {
    components: {},
  }
  </script>
  
  <style lang="scss" scoped>
  @import "@/assets/scss/variables";
  
  .sf-header__logo {
    height: 2rem;
  }
  </style>
  