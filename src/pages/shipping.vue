<template>
    <div class="container justify-content-center">
        <!--Sektion mit 3 Karten und Bider-->
        <section>
            <div class="container justify-content-center">
                <div class="row pt-4">
                    <div class="col-12 col-lg-4 customBorder">

                        <h2 class="mt-5">
                            Informationen zum Versand
                        </h2>
                        <p class="pt-5 mt-5">
                            Wir versenden weltweit ausschließlich mit Deutsche Post und DHL.
                        </p>
                        <div class="row">
                            <div class="col-5">
                                <img src="@/assets/images/post.svg" style="width: 100%;" alt="Avatar">
                            </div>
                            <div class="col-5">
                                <img src="@/assets/images/dhl.svg" style="width: 100%;" alt="Avatar">
                            </div>

                        </div>


                    </div>
                    <div class="col customBorder grey p-5">
                        <div class="row">
                            <div class="col-1">

                                <img src="@/assets/svg/forklift.svg" alt="Avatar" class="">
                            </div>
                            <div class="col">
                                <h2>
                                    Standardversand
                                    Deutschland
                                </h2>
                                <p style="font-size: 12px;">
                                    inkl. deutscher Inseln
                                </p>
                            </div>
                            <div class="col">
                                <p class="thick">Versand per DHL–Warenpost oder DHL Paket</p>

                                <p class="m-0">Warenwert bis 19,99 €: 4,99 €</p>
                                <p class="m-0"> Warenwert bis 49,99 €: 6,99 €</p>
                                <p class="thick"> Ab 50 € Warenwert kostenfrei</p>

                            </div>
                        </div>
                        <div class="row">
                            <div class="col-1">
                                <img src="@/assets/svg/captive_portal.svg" alt="Avatar" class="">

                            </div>
                            <div class="col">
                                <h2>
                                    Internationaler Versand
                                </h2>

                            </div>
                            <div class="col">
                                <p>Als Verbraucher im Ausland zahlen Sie Versandkosten abhängig vom Auftragswert.
                                    Auch international versenden wir ausschließlich mit Deutscher Post und DHL.</p>

                                <p class="thick m-0">Europa & Welt</p>
                                <p class="m-0">Warenwert bis 19,99 €: 9,99 €</p>
                                <p class="m-0"> Warenwert bis 59,99 €: 14,99 €</p>
                                <p class="m-0"> Warenwert bis 249,99 €: 33,99 €</p>
                                <p class="m-0"> Warenwert bis 499,99 €: 49,99 €</p>
                                <p class="m-0"> Warenwert ab 500 €: 69,99 €</p>


                                <p style="margin-top: 100px; font-size: 12px;">Stand: 01.05.2023. Irrtümer und Preisänderungen vorbehalten.
                                    Preise ggf. zzgl. gesetzl. Mehrwertsteuer.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    </div>
</template>
     
<script>
import { getApplicationContext } from "@shopware-pwa/composables"
import { invokePost } from "@shopware-pwa/shopware-6-client"
import { onMounted, ref } from "@vue/composition-api"
import 'bootstrap/dist/css/bootstrap.min.css'


export default {
    name: "contact",
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


.p-5 {
    padding: 35px !important;
}
</style>