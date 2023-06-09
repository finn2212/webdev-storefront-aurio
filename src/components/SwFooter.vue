<template>
    <div class="grey mt-4">
        <div class="container justify-content-center">
            <div class="row pt-4">
                <div class="col-4">
                    <img src="@/assets/svg/phone_forwarded.svg" style="margin-right: 10px;" alt="Avatar">
                    <h2 class="pt-4 thick">
                        Service-Hotline
                    </h2>
                    <p>
                        Unterstützung und Beratung unter:
                        <br>
                    <h2 class="pt-2 thick">
                        0180 - 000000
                    </h2>
                    <br>

                    Mo-Fr, 09:00 - 17:00 Uhr

                    <br>
                    Oder über unser Kontaktformular.
                    </p>
                </div>
                <div class="col-4">
                    <img src="@/assets/svg/local_police.svg" style="margin-right: 10px;" alt="Avatar">
                    <h2 class="pt-4 thick">
                        Rechtliches
                    </h2>
                    <div class="row justify-content-start">
                        <div class="col align-self-start">
                            <NuxtLink class="a" to="/impressum">

                                Impressum

                            </NuxtLink>
                        </div>
                    </div>
                    <div class="row justify-content-start">
                        <div class="col align-self-start">
                            <NuxtLink class="a" to="/AGBs">

                                Allgemeine Gechäftsbedingungen

                            </NuxtLink>
                        </div>
                    </div>
                    <div class="row justify-content-start">
                        <div class="col align-self-start">
                            <NuxtLink  class="a" to="/payment">

                                Zahlung & Versand

                            </NuxtLink>
                        </div>
                    </div>
                    <div class="row justify-content-start">
                        <div class="col align-self-start">
                            <NuxtLink class="a" to="/dataSecurity">

                                Datenschutz

                            </NuxtLink>
                        </div>
                    </div>
                    <div class="row justify-content-start">
                        <div class="col align-self-start">
                            <NuxtLink class="a" to="/disclaimer">

                                Widerrufserklärung

                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="col-4">
                    <img src="@/assets/svg/award_star.svg" style="margin-right: 10px;" alt="Avatar">
                    <h2 class="pt-4">
                        Sicher einkaufen
                    </h2>
                    <p>
                        Bei capellaprint kaufst du sicher ein. Dies wird ermöglicht durch SSL Verschlüsselung,
                        bei der eine sichere Verbindung zwischen dem Webserver und deinem Browser aufgebaut wird.
                    </p>
                    <p class="thick">
                        Sicheres Einkaufen nach DSGVO Standards
                    </p>
                </div>
            </div>
            <div class="row pt-4">
                <div class="col">
                    <div class="col-4">
                        <img src="@/assets/svg/local_shipping1.svg" style="margin-right: 10px;" alt="Avatar">
                        <h2 class="pt-4">
                            Versandarten
                        </h2>
                    </div>
                </div>

                <div class="col">
                    <div class="col-4">
                        <img src="@/assets/svg/credit_score.svg" style="margin-right: 10px;" alt="Avatar">
                        <h2 class="pt-4">
                            Zahlungsarten
                        </h2>
                    </div>
                </div>
                <div class="col">
                    <div class="col-4">
                    </div>
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
  