<template class="blue">
    <div class="blue" style="margin-bottom: 25px;">
        <div class="container justify-content-center">
            <div class="row blue pt-1  justify-content-center" >
                <div class="col-auto">
                    <p style="margin-bottom: 5px; font-size: 14px; margin-right: 60px;" > <img src="@/assets/svg/military_tech.svg" style="margin-right: 10px;" alt="Avatar">Erstklassige Musikverlagsqualität</p>
                </div>
                <div class="col-auto">
                  <p style="margin-bottom: 5px; font-size: 14px; margin-right: 60px;" >     <img src="@/assets/svg/music_video.svg" style="margin-right: 10px;" alt="Avatar">Bühnenerprobte Notenpapiere</p> 
                </div>
                <div class="col-auto">
                   <p style="margin-bottom: 5px; font-size: 14px; margin-right: 60px;" >  <img src="@/assets/svg/payments.svg" style="margin-right: 10px;" alt="Avatar">Kauf auf Rechnung</p>
                </div>
                <div class="col-auto">
                  <p style="margin-bottom: 5px; font-size: 14px; margin-right: 40px;" >   <img src="@/assets/svg/local_shipping.svg" style="margin-right: 10px;" alt="Avatar">Schneller Versand</p>  
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { SfTopBar } from "@storefront-ui/vue"
import SwCurrencySwitcher from "@/components/SwCurrencySwitcher.vue"
import SwLanguageSwitcher from "@/components/SwLanguageSwitcher.vue"
import { useUser } from "@shopware-pwa/composables"
import SwButton from "@/components/atoms/SwButton.vue"
import 'bootstrap/dist/css/bootstrap.min.css'
export default {
    components: {
        SfTopBar,
        SwCurrencySwitcher,
        SwLanguageSwitcher,
        SwButton,
    },
    setup(props, { root }) {
        const { isGuestSession, isLoggedIn, logout, user } = useUser()

        return {
            isGuestSession,
            isLoggedIn,
            logout,
            user,
        }
    },
}
</script>
  
<style lang="scss">
.sf-top-bar__container {
    box-sizing: border-box;
    margin: 0 auto;
    max-width: 1320px;
    padding: 0 1rem;
}
</style>
  
<style lang="scss" scoped>
@import "@/assets/scss/variables";

.sw-top-bar {
    position: relative;
    z-index: 1;

    &__location-label {
        margin: 0 var(--spacer-sm) 0 0;
    }

    .sf-header {
        &__currency {
            --select-dropdown-z-index: 2;
            position: relative;
            margin: 0 var(--spacer-base) 0 var(--spacer-base);
            width: 2.5rem;
        }

        &__header {
            padding-left: var(--spacer-sm);
        }

        &__icon {
            --icon-size: 1.25rem;
        }
    }
}

.sw-logged-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 2rem;

    span {
        margin-right: 1rem;
    }
}
</style>
  