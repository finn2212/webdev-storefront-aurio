<template>
  <div class="sw-top-navigation fixed-top" id="headerNav" data-testid="main-header" style="background-color: white;">
    <SfOverlay :visible="isOpen" class="sw-overlay" />

    <SwTopBar />
    <div class="container justify-content-between menueBigScreen">
      <div class="row mt-2 mb-3">
        <div class=" col-1 col-xl-2">
          <button type="button" id="menuBtn0" class="btnMenu p-0 mt-3" @click="setActive(0)">
            <NuxtLink class="a" to="/">
              <img src="@/assets/images/AURIOPRINT_Logo.png" alt="Avatar" style="width: 75%;">
            </NuxtLink>
          </button>
        </div>
        <div class="col-auto mt-3">
          <button type="button" id="menuBtn1" class="btnMenu p-0" @click="setActive(1)">
            <NuxtLink class="a" to="/productCustomizer">
              Notenheft konfigurieren
            </NuxtLink>
          </button>
        </div>
        <div class="col-auto mt-3">
          <button type="button" id="menuBtn2" class="btnMenu p-0" @click="setActive(2)">
            <NuxtLink class="a" to="/klammerheftung">
              Noten mit Klammerheftung
            </NuxtLink>
          </button>
        </div>
        <div class="col-auto mt-3 me-1">
          <button type="button" id="menuBtn3" class="btnMenu p-0" @click="setActive(3)">
            <NuxtLink class="a" to="/spiralbindung">
              Noten mit Spiralbindung
            </NuxtLink>
          </button>
        </div>
        <div class="col-auto mt-3">
          <button type="button" id="menuBtn4" class="btnMenu p-0" @click="setActive(4)">
            <NuxtLink class="a" to="/good-to-know">
              Wissenswertes
            </NuxtLink>
          </button>
        </div>
        <div class="col-auto mt-3">
          <button type="button" id="menuBtn5" class="btnMenu p-0" @click="setActive(5)">
            <NuxtLink class="a" to="/contact">
              Kontakt
            </NuxtLink>
          </button>
        </div>
        <div class="col-auto">
          <div class="sf-header__icons desktop-only" style="margin: 0px !important;">
            <div class="sw-header__icons">
              <SwPluginSlot name="top-header-icons-before" />
              <div class="account-icon" @mouseleave="closeDropdown">
                <SwButton class="sf-button--pure sw-nav-button" data-testid="login-icon" @click="userIconClick">
                  <SfIcon class="sf-header__icon sw-header__icon" :class="{
                    'sf-header__icon is-active': isMyAccountActive,
                  }" icon="profile" size="1.625rem" />
                </SwButton>
                <SfList v-if="isDropdownOpen" class="sw-dropdown">
                  <SfListItem>
                    <nuxt-link class="
                  sf-button sf-button--full-width sf-button--underlined
                  sw-dropdown__item
                " :to="getPageAccount" data-testid="my-account-link" @click.native="isDropdownOpen = false">
                      {{ $t("My account") }}
                    </nuxt-link>
                  </SfListItem>
                  <SfListItem>
                    <SwButton class="
                  sf-button sf-button--full-width sf-button--underlined
                  sw-dropdown__item
                " data-testid="logout-button" @click="logoutUser()">
                      {{ $t("Logout") }}
                    </SwButton>
                  </SfListItem>
                </SfList>
              </div>

              <SwButton class="sf-button--pure sw-nav-button" data-testid="cart-icon" @click.capture="toggleSidebar">
                <SfIcon class="sw-header__icon" icon="empty_cart" size="1.625rem" />
                <SfBadge v-if="count > 0" class="sf-badge--number cart-badge">{{
                  count
                }}</SfBadge>
              </SwButton>
              <SwPluginSlot name="top-header-icons-after" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container justify-content-between menueSmallScreen">
      <NuxtLink class="a" to="/">
        <img src="@/assets/images/AURIOPRINT_Logo.png" alt="Avatar" style="width: 100;">
      </NuxtLink>
    </div>
  </div>
</template>
  
<script>
import { SfHeader, SfOverlay } from "@storefront-ui/vue"

import SwTopBar from "@/components/SwTopBar.vue"
import SwLogo from "@/components/SwLogo.vue"
import SwHeaderIcons from "@/components/SwHeaderIcons.vue"
import SwTopNavigation from "@/components/SwTopNavigation.vue"
import { SfList, SfDropdown, SfIcon, SfBadge } from "@storefront-ui/vue"
import {
  useUser,
  useCart,
  useUIState,
  useWishlist,
} from "@shopware-pwa/composables"

import { computed } from "@vue/composition-api"
import { PAGE_ACCOUNT, PAGE_WISHLIST } from "@/helpers/pages"
import SwPluginSlot from "sw-plugins/SwPluginSlot.vue"
import SwButton from "@/components/atoms/SwButton.vue"

import SwCookieBar from "@/components/gdpr/SwCookieBar.vue"

export default {
  components: {
    SfHeader,
    SfOverlay,
    SwTopBar,
    SwLogo,
    SwHeaderIcons,
    SwTopNavigation,
    SwCookieBar,
    SfDropdown,
    SfList,
    SfIcon,
    SwButton,
    SwPluginSlot,
    SfBadge,
  },
  setup() {
    const { isOpen } = useUIState({ stateName: "MEGA_MENU_OVERLAY_STATE" })

    const { isLoggedIn, isGuestSession, logout } = useUser()
    const { count } = useCart()
    const { count: wishlistCount } = useWishlist()
    const { switchState: toggleSidebar } = useUIState({
      stateName: "CART_SIDEBAR_STATE",
    })
    const { switchState: switchLoginModalState } = useUIState({
      stateName: "LOGIN_MODAL_STATE",
    })
    const isMyAccountActive = computed(
      () => isLoggedIn.value && !isGuestSession.value
    )

    return {
      count,
      switchLoginModalState,
      toggleSidebar,
      logout,
      wishlistCount,
      isMyAccountActive,
      isOpen
    }
  },
  data() {
    return {
      isDropdownOpen: false,
    }
  },
  computed: {
    getPageAccount() {
      return this.$routing.getUrl(PAGE_ACCOUNT)
    },
  },
  methods: {
    closeDropdown() {
      if (!this.isDropdownOpen) return
      this.isDropdownOpen = false
    },
    userIconClick() {
      if (this.isMyAccountActive) this.isDropdownOpen = !this.isDropdownOpen
      else this.switchLoginModalState(true)
    },
    async logoutUser() {
      await this.logout()
      this.isDropdownOpen = false
      this.$router.push(this.$routing.getUrl("/"))
    },
    goToWishlist() {
      this.$router.push(this.$routing.getUrl(PAGE_WISHLIST))
    },
    setActive(id) {
      const element = `menuBtn${id}`
      for (let i = 0; i < 6; i++) {
        const elementToDelete = `menuBtn${i}`;
        document.getElementById(`menuBtn${i}`).classList.remove('active');
      }
      document.getElementById(`menuBtn${id}`).classList.add('active');
    }
  },
}
</script>
  
<style lang="scss">
.sf-header__wrapper {
  header {
    box-sizing: border-box;
    max-width: 1320px;
  }
}
</style>
  
<style lang="scss" scoped>
@import "@/assets/scss/variables";

.sw-top-navigation {
  --header-container-padding: 0 var(--spacer-base);
  --header-navigation-item-margin: 0 1rem 0 0;

  .sw-overlay {
    --overlay-z-index: 1;
  }
  .active{
    font-weight: bold;
  }

  @include for-desktop {
    ::v-deep .sf-header {
      display: flex;
      justify-content: space-between;

      &__sticky-container {
        width: 100%;
      }

      &__navigation {
        flex: 0 0 calc(100% - 22rem);
      }
    }
  }
}

.sw-header {
  position: relative;
  background-color: var(--c-white);

  &__icons {
    display: flex;
  }

  &__icon {
    cursor: pointer;
  }
}

@media only screen and (max-width: 1023px) {
  .menueBigScreen {
    display: none;
  }
}

@media only screen and (min-width: 1023px) {
  .menueSmallScreen {
    display: none;
  }
}



.sw-header__icons {
  display: flex;
  justify-content: space-around;
  margin-left: 1rem;

  .account-icon {
    position: relative;
  }

  .sw-dropdown {
    --button-font-size: var(--font-size--xs);
    position: absolute;
    top: 100%;
    left: -70%;
    border: 2px var(--c-light) solid;

    .sf-button {
      --button-padding: var(--spacer-sm);
    }

    &__item {
      background: var(--c-white);

      &:hover {
        color: var(--c-link-hover);
      }
    }
  }

  .sw-nav-button {
    padding: 10px;
  }
}

.cart-badge {
  position: absolute;
  bottom: 55%;
  left: 50%;
}

@media (min-width: 1400px) {
  .me-1 {
    margin-right: 3rem !important;
  }
}

@media (max-width: 1400px) {
  .me-1 {
    margin-right: 0.5rem !important;
  }
}
</style>
  