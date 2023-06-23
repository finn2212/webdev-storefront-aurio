<template>
    <nuxt-link
      :to="$routing.getUrl('/')"
      class="sf-header__logo"
      data-testid="header-logo"
    >
    <img src="@/assets/svg/capella_AURIOPRINT_Logo 1.svg"  alt="Avatar">
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
  