<template>
    <div class="container justify-content-center top">
        <!--Sektion mit 3 Karten und Bider-->
        <!--Sektion mit 3 Karten und Bider-->
        <section>
            <div class="container justify-content-center">
                <div class="row">
                    <div class="col customBorder blockStartMarign ">
                        <div class="row pb-3">
                            <h2 class="heading-grid">
                                Herzlich willkommen! </h2>
                        </div>
                        <div>
                            <p class="mt-5">Vielen Dank für Ihr Interesse an AURIOPRINT. Wir bieten Ihnen nicht nur
                                erstklassige Druckqualität, sondern sind auch bei Fragen und Anregungen rund um das Thema
                                Musikaliendruck gerne Ihre Gesprächspartner.
                            </p>
                        </div>
                    </div>
                    <div class="col customBorder pl-5  p-4 green">
                        <div class="col-1">
                            <img src="@/assets/svg/shopping_cart_checkout.svg" class="mr-2" style="margin-bottom: 25px;"
                                alt="Avatar">
                        </div>
                        <h2 class="heading-grid">
                            Fragen zur Bestellung?
                        </h2>
                        <div class="row mt-5 pt-3">
                            <p>
                                Bei allgemeinen Fragen rund ums Thema Bestellung wenden Sie sich bitte an:
                            <h5> office@aurioprint.com</h5>
                            </p>
                            <p>
                                Wir melden uns baldmöglichst bei Ihnen zurück. Gemeinsam finden wir eine Lösung!</p>
                        </div>
                    </div>
                    <div class="col customBorder pl-5  p-4  darkblue">
                        <div class="col-1">
                            <img src="@/assets/svg/audio_file.svg" class="mr-2" style="margin-bottom: 25px;" alt="Avatar">
                        </div>
                        <h2 class="heading-grid">
                            FRAGEN ZUR BESTELLUNG?
                        </h2>
                        <div class="row mt-3 pt-3">
                            <p>Vielen Dank für Ihr Interesse an AURIOPRINT. Wir bieten Ihnen nicht nur erstklassige Druckqualität, sondern sind auch bei Fragen und Anregungen rund um das Thema Musikaliendruck gerne Ihre Gesprächspartner.
                            </p>
                            <a href=" https://firebasestorage.googleapis.com/v0/b/pocselfpublish.appspot.com/o/uploads%2FDruckdaten_Print_data_2023.pdf?alt=media&token=e8196ae8-3679-4f5a-9445-48d46724fc65"
                                target="_blank">
                                <button type="button" class="btn btn-dark p-2" style="width: 100%;">
                                    <img src="@/assets/svg/download.svg" alt="Avatar"
                                        style="height: 19px; margin-right: 10px; padding-left: 5px;">
                                    <p class="inline mt-2">Maßvorgaben (PDF)</p>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="container justify-content-center">
                <div class="row pt-4">
                    
                    <div class="col customBorder grey p-5">
                        <div class="row">
                            <div class="col">
                                <img src="@/assets/svg/call_quality.svg" alt="Avatar" style="margin-bottom: 25px;">
                                <h2>
                                    Telefonkontakt
                                </h2>
                                <p class="pt-5 mt-3">Für den Fall, dass jetzt noch Fragen offen sind, stehen wir Ihnen gerne telefonisch zur Verfügung:
                                </p>
                                <h5>+49 (0)8294 – 8601888
                                </h5>
                                <p>Mo–Do, 10–16 Uhr</p>
                            </div>
                            <div class="col">
                                <div class="row">
                                    <div class="col">
                                        <img src="@/assets/svg/local_post_office.svg" style="margin-bottom: 25px;"
                                            alt="Avatar">
                                        <h2>
                                            Postanschrift
                                        </h2>
                                        <p class="pt-5 mt-3 mb-4">Wir freuen uns auch über einen Brief von Ihnen. Diesen senden Sie bitte an:
                                        </p>
                                        <p class="thick m-0">
                                            AURIOPRINT
                                        </p>
                                        <p class="m-0">
                                            Augsburger Straße 9
                                            <br>
                                            D-86497 Horgau
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="container justify-content-center">
                <div class="row" style="margin-top: 100px;">
                    <div class="col-4">
                        <h2>Impressum</h2>
                        <p>
                        <p class="thick">AURIO GmbH</p>
                        Augsburger Straße 9 <br>
                        86497 Horgau<br>
                        Deutschland<br>
                        Tel.: 08294 / 8601888<br>
                        E-Mail: office@aurioprint.com<br><br>

                        Registergericht: Augsburg<br>
                        Registernummer: HRB 33832<br>
                        Geschäftsführer: Sebastian Gabriel<br>

                        Umsatzsteuer-Identifikationsnummer: DE326155106<br>
                        Verantwortliche/r i.S.d. § 18 Abs. 2 MStV:<br>
                        Sebastian Gabriel, c/o AURIO GmbH, Augsburger Straße 9, 86497 Horgau<br><br>

                        Plattform der EU-Kommission zur Online-Streitbeilegung: https://ec.europa.eu/odr<br>
                        Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer
                        Verbraucherschlichtungsstelle<br>
                        weder verpflichtet noch bereit.<br>
                        </p>
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
    mounted() {
        const id = 5
        document.getElementById(`menuBtn${id}`).classList.add('active');
    },
    methods: {
        getFile(file) {
            window.open("https://firebasestorage.googleapis.com/v0/b/pocselfpublish.appspot.com/o/uploads%2FDruckdaten_Print_data_2023.pdf?alt=media&token=e8196ae8-3679-4f5a-9445-48d46724fc65" + "_blank");
        }
    }


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