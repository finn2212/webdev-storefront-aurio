<template>
    <div class="container justify-content-center">
        <!--Sektion mit 3 Karten und Bider-->
        <!--Sektion mit 3 Karten und Bider-->
        <section class="pt-5">
            <div class="container justify-content-center">
                <div class="row">
                    <div class="col customBorder blockStartMarign ">
                        <div class="row pb-3">
                            <h2 class="heading-grid">
                                Herzlich willkommen! </h2>
                        </div>
                        <div>
                            <p class="mt-5">Vielen Dank für Ihr Interesse an capellaprint. Wir bieten Ihnen nicht nur
                                erstklassige
                                Druckqualität, sondern sind auch bei Fragen und Anregungen rund um das Thema Musikaliendruck
                                gerne Ihre Gesprächspartner.
                            </p>

                        </div>


                    </div>
                    <div class="col customBorder pl-5  p-4 green">
                        <div class="col-1">
                            <img src="@/assets/svg/shopping_cart_checkout.svg" class="mr-2" alt="Avatar">
                        </div>

                        <h2 class="heading-grid">
                            Fragen zur Bestellung?
                        </h2>
                        <div class="row mt-5 pt-5">
                            <p>
                                Bei allgemeinen Fragen rund ums Thema Bestellung wenden Sie sich bitte an:
                            <p class="thick"> fragen@capellaprint.com</p>


                            </p>
                            <p>
                                Wir melden uns baldmöglichst bei Ihnen zurück. Gemeinsam finden wir eine Lösung!</p>

                        </div>
                    </div>
                    <div class="col customBorder pl-5  p-4  darkblue">
                        <div class="col-1">
                            <img src="@/assets/svg/audio_file.svg" class="mr-2" alt="Avatar">
                        </div>

                        <h2 class="heading-grid">
                            Fragen zu Ihren gedruckten Noten?
                        </h2>
                        <div class="row mt-5 pt-3">

                            <p>Falls Sie Fragen zur korrekten Vorbereitung Ihrer Noten zum Druck haben, möchten wir Sie
                                bitten, sich zunächst unsere Druckdatenvorgaben herunterzuladen und aufmerksam durchzulesen:

                            </p>
                            <button type="button" class="btn btn-dark">
                                <img src="@/assets/svg/plus.svg" alt="Avatar" class="plusBtn">Maßvorgaben herunterladen
                                (PDF)
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="container justify-content-center">
                <div class="row pt-4">
                    <div class="col-12 col-lg-4 pink customBorder p-4">
                        <div class="col-1">
                            <img src="@/assets/svg/unknown_document.svg" class="mr-2" alt="Avatar">
                        </div>
                        <h2 class="mt-5">
                            Tipp: <br>
                            Nutzen Sie unsere capella-Vorlagen!
                        </h2>
                        <p>
                            Wir haben für Sie in capella fertige Mustervorlagen erstellt, die exakt auf die Vorgaben für
                            capellaprint abgestimmt sind. Diese Vorlagen finden Sie direkt in Ihrer capella Software.
                        </p>


                    </div>
                    <div class="col customBorder grey p-5">
                        <div class="row">
                            <div class="col">
                                <img src="@/assets/svg/call_quality.svg" alt="Avatar" class="">
                                <h2 class="pt-3">

                                    Telefonkontakt
                                </h2>
                                <p class="pt-5 mt-3">Für den Fall, dass jetzt noch Fragen offen sind, steht Ihnen unser
                                    Partner AURIOPRINT aus
                                    gerne telefonisch zur Verfügung:
                                </p>
                                <h2>+49 (0)8294 – 8601888

                                </h2>
                                <p>Mo–Do, 10–16 Uhr</p>

                            </div>
                            <div class="col">
                                <div class="row">
                                    <div class="col">
                                        <img src="@/assets/svg/local_post_office.svg" class="" alt="Avatar">


                                        <h2 class="pt-3">

                                            Postanschrift
                                        </h2>


                                        <p class="pt-5 mt-3">Wir freuen uns auch über einen Brief von Ihnen. Diesen senden
                                            Sie
                                            bitte an:

                                            capellaprint

                                        </p>
                                        <p class="thick">
                                            capellaprint
                                            <br>
                                            c/o AURIOPRINT
                                        </p>
                                        <p>
                                            Augsburger Straße 9
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
                <div class="row pt-4">
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