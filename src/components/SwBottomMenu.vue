<template>
  <SfBottomModal :is-open="true" class="sw-bottom-menu" @click:close="$emit('close')">
    <template>
      <div class="sw-bottom-menu__title" @click="goBack">
        <SfIcon v-if="categoryBreadcrumbs.length" icon="chevron_left" class="icon sf-chevron_left" size="21px"
          view-box="0 0 24 12" />
        {{ currentCategoryName }}
      </div>
    </template>

    <transition :name="menuTransitionName" mode="out-in">
      <SfList :key="categoryBreadcrumbs.length" class="mobile-nav-list">
        <SfListItem >
          <nuxt-link class="navItem" to="/">
            Home
          </nuxt-link>
        </SfListItem>
        <SfListItem>
          <nuxt-link class="navItem" to="/klammerheftung">
            Noten mit Klammerheftung
          </nuxt-link>
        </SfListItem>
        <SfListItem>
          <nuxt-link class="navItem" to="/spiralbindung">
            Noten mit Spiralbindung
          </nuxt-link>
        </SfListItem>
        <SfListItem>
          <nuxt-link class="navItem" to="/good-to-know">
            Wissenswertes
          </nuxt-link>
        </SfListItem>
        <SfListItem>
          <nuxt-link class="navItem" to="/contact">
            Kontakt
          </nuxt-link>
        </SfListItem>
      </SfList>
    </transition>

    <template v-slot:close-mobile>
      <SfButton class="sf-button--full-width sf-bottom-modal__cancel" aria-label="Close" @click="$emit('close')"
        v-text="$t('Close')" />
    </template>
  </SfBottomModal>
</template>

<script>
import { SfBottomModal, SfButton, SfIcon, SfList } from "@storefront-ui/vue"
import { useNavigation, useUIState } from "@shopware-pwa/composables"
import { onMounted } from "@vue/composition-api"
import { getCategoryUrl, getTranslatedProperty } from "@shopware-pwa/helpers"

export default {
  name: "SwBottomMenu",
  components: {
    SfBottomModal,
    SfButton,
    SfIcon,
    SfList,
  },
  data() {
    return {
      categoryBreadcrumbs: [],
      menuTransitionName: "menu-slide-left",
    }
  },
  setup() {
    const { switchState: toggleSidebar, isOpen: isSidebarOpen } = useUIState({
      stateName: "CART_SIDEBAR_STATE",
    })
    const { loadNavigationElements, navigationElements } = useNavigation()
    const { switchState: toggleModal } = useUIState({
      stateName: "LOGIN_MODAL_STATE",
    })

    onMounted(async () => {
      try {
        await loadNavigationElements({ depth: 3 })
      } catch (e) {
        console.error("[SwBottomMenu]", e.messages)
      }
    })
    return {
      navigationElements,
      getCategoryUrl,
      isSidebarOpen,
      toggleSidebar,
      toggleModal,
      getTranslatedProperty,
    }
  },
  computed: {
    currentCategoryName() {
      return this.categoryBreadcrumbs.slice(-1)[0] || "Menu"
    },

    categoriesList() {
      let categoriesToDisplay = this.navigationElements
      for (let i = 0; i < this.categoryBreadcrumbs.length; i++) {
        const foundedCat = categoriesToDisplay.find((cat) => {
          return (
            getTranslatedProperty(cat, "name") === this.categoryBreadcrumbs[i]
          )
        })
        if (foundedCat) {
          categoriesToDisplay = foundedCat.children
        } else {
          categoriesToDisplay = this.navigationElements
          this.categoryBreadcrumbs = []
          break
        }
      }
      return categoriesToDisplay
    },
  },
  watch: {
    $route() {
      this.$emit("close")
    },
  },
  methods: {
    async logoutUser() {
      await this.logout()
      this.$router.push(this.$routing.getUrl("/"))
    },
    goDeeper(name) {
      this.menuTransitionName = "menu-slide-left"
      this.categoryBreadcrumbs.push(name)
    },
    goBack() {
      this.menuTransitionName = "menu-slide-right"
      this.categoryBreadcrumbs.pop()
    },
    toggleMobileNavigation() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>
<style lang="scss" scoped>
.menu-slide-left-leave-active,
.menu-slide-left-enter-active,
.menu-slide-right-leave-active,
.menu-slide-right-enter-active {
  transition: 0.25s;
}

.menu-slide-left-enter,
.menu-slide-right-leave-to {
  transform: translate(100%, 0);
}

.menu-slide-left-leave-to,
.menu-slide-right-enter {
  transform: translate(-100%, 0);
}
.navItem{
  color: black; 
  text-decoration: none;
}

.sw-bottom-menu {
  &__title {
    display: flex;
    align-items: center;
    padding: 10px 5px;
    font-size: 1.5rem;
    line-height: 1.7rem;
    font-weight: 700;
  }

  &__subcategory {
    display: flex;
  }

  .mobile-nav-list {
    background-color: white;
    bottom: 60px;
    box-sizing: border-box;
    left: 0;
    padding: 10px;
    width: 100%;

    .sf-list__item {
      align-items: center;
      display: flex;
      justify-content: space-between;
      margin: 13px 0;
    }

    .back-to-category {
      align-items: center;
      display: flex;
      justify-content: center;
      padding: 15px 0;
      position: relative;
      width: 100%;

      .name {
        font-weight: var(--font-weight--semibold);
      }

      .icon {
        font-weight: var(--font-weight--semibold);
        left: 0;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
}
</style>
