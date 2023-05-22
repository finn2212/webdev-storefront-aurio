<template>
    
    <div class="blue mt-4">
        <div class="container justify-content-center">
            <div class="row blue pt-4">
                <div class="col">
                    <p> FAQ</p>
                    <p> Impressum</p>
                    <p> Datenschutz</p>
                </div>
                <div class="col">
                    <img src="@/assets/svg/sell.svg" style="margin-right: 10px;" alt="Avatar"> Günstige Druckpreise
                </div>
                <div class="col">
                    <img src="@/assets/svg/local_shipping.svg" style="margin-right: 10px;" alt="Avatar">Schneller Versand
                </div>
                <div class="col">
                    <img src="@/assets/svg/music_video.svg" style="margin-right: 10px;" alt="Avatar">  Bühnenerprobte Notenpapiere
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import SwPluginSlot from "sw-plugins/SwPluginSlot.vue"
import SwFooterNavigation from "@/components/organisms/SwFooterNavigation.vue"

export default {
    name: "SwFooter",
    components: {
        SwPluginSlot,
        SwFooterNavigation,
    },
    props: {
        column: {
            type: Number,
            default: 4,
        },
    },
}
</script>
  
<style lang="scss" scoped>
@import "@/assets/scss/variables";

.sw-footer {
    align-items: flex-end;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: auto;
    justify-content: center;
    margin-top: 1em;
    width: 100%;

    @include for-desktop {
        margin-bottom: 0;
        margin-top: 2em;
    }

    &__link {
        font-weight: 500;

        &:hover {
            color: var(--_c-green-primary);
            text-decoration: underline;
        }
    }

    &__signature {
        text-align: center;
        width: 100%;

        @include for-desktop {
            margin-bottom: 0;
        }
    }

    &__bottom-navigation {
        border-top: var(--c-primary) solid 4px;
        margin-bottom: var(--spacer-sm);
    }
}
</style>
  