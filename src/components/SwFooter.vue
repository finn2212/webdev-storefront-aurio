<template>
    <div class="grey" style="margin-top: 100px;">
        <div class="container justify-content-center">
            <div class="row pt-4">
                <div class="col-4">
                    <img src="@/assets/svg/phone_forwarded.svg" style="margin-right: 10px;" alt="Avatar">
                    <h5 class="pt-2 thick">
                        Service-Hotline
                    </h5>
                    <p>
                        Unterstützung und Beratung unter:
                        <br>
                    <p class="pt-2 thick">
                        +49 180 - 000000
                    </p>
                    <br>

                    Mo-Fr, 09:00 - 17:00 Uhr

                    <br>
                    Oder über unser Kontaktformular.
                    </p>
                </div>
                <div class="col-4">
                    <img src="@/assets/svg/local_police.svg" style="margin-right: 10px;" alt="Avatar">
                    <h5 class="pt-2 thick">
                        Rechtliches
                    </h5>
                    <div class="row justify-content-start">
                        <div class="col align-self-start">
                            <NuxtLink class="a" to="/contact">

                                Impressum

                            </NuxtLink>
                        </div>
                    </div>
                    <div class="row justify-content-start">
                        <div class="col align-self-start">
                            <NuxtLink class="a" to="/contact">

                                AGB & Widerruf

                            </NuxtLink>
                        </div>
                    </div>
                    <div class="row justify-content-start">
                        <div class="col align-self-start">
                            <NuxtLink class="a" to="/shipping">

                                Zahlung & Versand

                            </NuxtLink>
                        </div>
                    </div>
                    <div class="row justify-content-start">
                        <div class="col align-self-start">
                            <NuxtLink class="a" to="/contact">

                                Datenschutz

                            </NuxtLink>
                        </div>
                    </div>
                    <div class="row justify-content-start">
                        <div class="col align-self-start">
                            <NuxtLink class="a" to="/contact">

                                Widerrufserklärung

                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="col-4">
                    <img src="@/assets/svg/award_star.svg" style="margin-right: 10px;" alt="Avatar">
                    <h5 class="pt-2">
                        Sicher einkaufen
                    </h5>
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
                    <div class="col">
                        <img src="@/assets/svg/local_shipping1.svg" style="margin-right: 10px;" alt="Avatar">
                        <h5 class="pt-2">
                            Versandarten
                        </h5>
                        <div class="row">
                            <div class="col-auto" style="padding: 0px !important">
                                <img src="@/assets/svg/rhweb-dhl 1.svg" alt="Avatar">
                            </div>
                            <div class="col-auto" style="padding: 0px !important">
                                <img src="@/assets/svg/rhweb-post-germany 1.svg" alt="Avatar">
                            </div>
                            <div class="col-auto" style="padding: 0px !important">
                                <img src="@/assets/svg/rhweb-gogreen 1.svg" alt="Avatar">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="col">
                        <img src="@/assets/svg/credit_score.svg" style="margin-right: 10px;" alt="Avatar">
                        <h5 class="pt-2">
                            Zahlungsarten
                        </h5>
                        <div class="row">
                            <div class="col-auto" style="padding: 0px !important">
                                <img src="@/assets/svg/Rectangle (6).svg" alt="Avatar">
                            </div>
                            <div class="col-auto" style="padding: 0px !important">
                                <img src="@/assets/svg/Rectangle.svg" alt="Avatar">
                            </div>
                            <div class="col-auto" style="padding: 0px !important">
                                <img src="@/assets/svg/Rectangle (1).svg" alt="Avatar">
                            </div>
                            <div class="col-auto" style="padding: 0px !important">
                                <img src="@/assets/svg/Rectangle (2).svg" alt="Avatar">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-auto" style="padding: 0px !important">
                                <img src="@/assets/svg/Rectangle (3).svg" alt="Avatar">
                            </div>
                            <div class="col-auto" style="padding: 0px !important">
                                <img src="@/assets/svg/Rectangle (4).svg" alt="Avatar">
                            </div>
                            <div class="col-auto" style="padding: 0px !important">
                                <img src="@/assets/svg/Rectangle (5).svg" alt="Avatar">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="col">
                        <h5 class="mt-4 pt-4">Wir sind Mitglied im:</h5>
                        <img src="@/assets/svg/bvdm_logo_transparent 1.svg" style="margin-top: 10px;" alt="Avatar">

                    </div>
                </div>
            </div>
            <div class="row" style="margin-top: 100px; padding-bottom: 40px; text-align: center;">
                <div class="col">
                    * Alle Preise inkl. gesetzl. Mehrwertsteuer zzgl. Versandkosten, wenn nicht anders angegeben.
                    © 2023 AURIOPRINT – Alle Rechte vorbehalten.
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
  