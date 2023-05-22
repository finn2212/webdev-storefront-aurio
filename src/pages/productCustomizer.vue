<template>
    <div class="container">
        <!--Sektion mit 3 Karten und Bider-->
        <section class="pt-5">
            <div class="container justify-content-center">
                <div class="row">
                    <div class="col-4 customBorder  p-4 blue">
                        <h2 class="heading-grid">
                            Notenheft 19 x 27 cm
                            »Peters«
                        </h2>
                        <div class="row mt-4">
                            <div class="col-1">
                                <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
                            </div>
                            <div class="col">
                                <p>
                                    Klammerheftung, hervorragend geeignet bspw. für Chorpartituren
                                </p>

                            </div>
                            <div class="w-100 pt-3"></div>
                            <div class="col-1">
                                <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
                            </div>
                            <div class="col">
                                <p>
                                    Innenteil mit klassisch gelblichem Notenpapier
                                </p>
                            </div>
                            <div class="w-100 pt-3"></div>
                            <div class="col-1">
                                <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
                            </div>
                            <div class="col">
                                <p>
                                    Das bekannte Format der Klavierauszüge der EDITION PETERS
                                </p>
                            </div>
                            <div class="row">
                                <div class="col-8 mt-4">
                                    <NuxtLink class="a" to="/productCustomizer">
                                        <button type="button" class="btn btn-dark mt-3">
                                            <img src="@/assets/svg/plus.svg" alt="Avatar" style="margin-right: 10px;">Jetzt
                                            Drucken
                                        </button>
                                    </NuxtLink>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-4 customBorder p-0">
                        <img class="card-img-top img" src="@/assets/images/pic9.png" alt="Card image cap">
                    </div>
                    <div class="col-4 customBorder p-0">

                        <img class="card-img-top img" src="@/assets/images/pic10.png" alt="Card image cap">
                    </div>
                </div>
            </div>
        </section>

        <!--Prouct Cusomizer Sections-->
        <section class="pt-5">
            <div class="container justify-content-center">
                <div class="row">
                    <h1 class="blockStartMarign">
                        Konfiguriere dein Notenheft
                    </h1>
                    <div class="col-8 customBorder  pl-5  p-4 grey">

                        <div class="row">
                            <div class="col-7">
                                <h1>1. Wähle die Seitenanzahl</h1>
                                <p>Bitte gib die Gesamtseitenanzahl deiner Datei an.
                                    Aus produktionstechnischen Gründen muss diese immer durch 4 teilbar sein.
                                    Du kannst zwischen 4 und 88 Seiten Umfang wählen.</p>
                            </div>
                            <div class="col pt-5">
                                <p>Seitenanzahl Inhalt:</p>
                            </div>
                            <div class="col pt-5">
                                <select class="custom-select selectBtn" id="inputGroupSelect01">
                                    <option selected>Bitte Wählen...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div class="w-100 pt-5"></div>
                            <div class="col-7">
                                <h1>2. Wähle den Umschlag</h1>
                                <p>Unser hochweißer Umschlagkarton mit 240g/m2 gibt Farben brillant wieder und besitzt ein
                                    hervorragendes Aufschlagverhalten. Die einseitig matte Oberfläche lässt sich
                                    hervorragend bedrucken und bricht auch bei starker Beanspruchung nicht auf.</p>
                            </div>
                            <div class="col pt-5">
                                <p>Mit Umschlag:</p>
                                <p>Ohne Umschlag:</p>
                            </div>
                            <div class="col pt-5">
                                <p><input type="checkbox" aria-label="Checkbox for following text input"></p>
                                <p><input type="checkbox" aria-label="Checkbox for following text input"></p>
                            </div>
                            <div class="w-100 pt-5"></div>
                            <div class="col-7">
                                <h1>3. Lade deine Noten hoch</h1>
                                <p>Hier lädst du nun die Druckdaten als PDF auf unseren Server – ganz bequem und einfach.
                                    Deine Daten werden verschlüsselt übertragen.
                                    Wir prüfen diese auf Druckbarkeit und melden uns bei dir per E-Mail, falls etwas nicht
                                    passen sollte.</p>
                            </div>
                            <div class="col pt-5" style="margin-top: 15px;">
                                <p>Noten-PDF / Inhalt:</p>
                                <p style="margin-top: 40px;">Noten-PDF / Inhalt:</p>
                            </div>
                            <div class="col pt-5">
                                <!--onclick="document.getElementById('selectedFile').click();"-->
                                <button type="button" class="btn btn uploadBtn">
                                    <img src="@/assets/svg/plusBlack.svg" alt="Avatar"><label class="file-upload"
                                        style="border: 0px;">
                                        <input type="file" multiple="multiple" name="fileToUpload" id="fileToUpload">
                                        Datei Wählen
                                    </label>
                                </button>
                                <button type="button" class="btn btn mt-3 uploadBtn">
                                    <img src="@/assets/svg/plusBlack.svg" alt="Avatar"><label class="file-upload"
                                        style="border: 0px;">
                                        <input type="file" multiple="multiple" name="fileToUpload" id="fileToUpload">
                                        Datei Wählen
                                    </label>
                                </button>


                            </div>

                        </div>
                    </div>
                    <div class="col-4 customBorder  pl-5  p-4 green">
                        <div class="row">
                            <div class="col">
                                <p>Dein Preis pro Stück:</p>
                                <h1>€ 2,67</h1>

                                <p style="font-size: x-small;">Alle Preise inkl. 7% MwSt., zzgl. Versandkosten</p>

                            </div>
                        </div>

                        <div class="row">
                            <div class="col">
                                <p>Deine Auflage:</p>
                                <div class="input-group plus-minus-input">
                                    <div class="input-group-button">
                                        <button type="button" class="button noborder green" data-field="quantity">
                                            <img src="@/assets/svg/remove.svg" alt="Avatar">
                                        </button>
                                    </div>

                                    <input class="input-group-field noborder green" type="number" name="quantity" value="50"
                                        style="width: 50px; font-size: xx-large;">
                                    <div class="input-group-button">
                                        <button type="button" class="button noborder green" data-quantity="plus"
                                            data-field="quantity">
                                            <img src="@/assets/svg/add.svg" alt="Avatar">
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <p>Produktionsdauer:</p>
                                <h1>1–3 Tage</h1>
                                <p style="font-size: x-small;">zzgl. Postlaufzeit</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col align-self-center">
                                <button @click="count" type="button" class="btn btn-dark mt-3">
                                    <img src="@/assets/svg/plus.svg" alt="Avatar" style="margin-right: 10px;">Jetzt
                                    In den Warenkorb legen
                                </button>
                            </div>
                        </div>
                        <div class="row pt-4">
                            <table class="table" style="font-size:small ; border-style: hidden !important;">
                                <thead>
                                    <tr>
                                        <th scope="col">Auflage</th>
                                        <th scope="col">Preis / Stck.</th>
                                        <th scope="col">Du sparst:</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Bis 1</th>
                                        <td>{{ price }}</td>
                                        <td>45%</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Bis 9</th>
                                        <td>€ 7,00</td>
                                        <td>55%</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">Bis 24</th>
                                        <td>€ 7,00</td>
                                        <td>63%</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Bis 49</th>
                                        <td>€ 7,00</td>
                                        <td>68%</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Bis 74</th>
                                        <td>€ 7,00</td>
                                        <td>70%</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Bis 99</th>
                                        <td>€ 7,00</td>
                                        <td>72%</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Bis 149</th>
                                        <td>€ 7,00</td>
                                        <td>49%</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Bis 199</th>
                                        <td>€ 7,00</td>
                                        <td>74%</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Bis 249</th>
                                        <td>€ 7,00</td>
                                        <td>75%</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Ab 250</th>
                                        <td>€ 7,00</td>
                                        <td>76%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- Change the `data-field` of buttons and `name` of input field's for multiple plus minus buttons-->
                    </div>
                </div>
            </div>
        </section>
        <!--Sektion mit 3 Karten und Bider-->
        <section class="pt-5">
            <div class="container justify-content-center">
                <div class="row">
                    <div class="col-4 customBorder  pl-5  p-4 red">

                        <h2 class="heading-grid">
                            Notenheft 19 x 27 cm
                            »Peters«
                        </h2>
                        <div class="row mt-4">
                            <div class="col-1">
                                <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
                            </div>
                            <div class="col">
                                <p>
                                    Klammerheftung, hervorragend geeignet bspw. für Chorpartituren
                                </p>

                            </div>
                            <div class="w-100 pt-3"></div>
                            <div class="col-1">
                                <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
                            </div>
                            <div class="col">
                                <p>
                                    Innenteil mit klassisch gelblichem Notenpapier
                                </p>
                            </div>
                            <div class="w-100 pt-3"></div>
                            <div class="col-1">
                                <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
                            </div>
                            <div class="col">
                                <p>
                                    Das bekannte Format der Klavierauszüge der EDITION PETERS
                                </p>
                            </div>
                            <div class="row">
                                <div class="col-8 mt-4">
                                    <NuxtLink class="a" to="/productCustomizer">
                                        <button type="button" class="btn btn-dark mt-3">
                                            <img src="@/assets/svg/plus.svg" alt="Avatar" style="margin-right: 10px;">Jetzt
                                            Drucken
                                        </button>
                                    </NuxtLink>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 customBorder  pl-5  p-4 yellow">

                        <h2 class="heading-grid">
                            Notenheft 19 x 27 cm
                            »Peters«
                        </h2>
                        <div class="row mt-4">
                            <div class="col-1">
                                <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
                            </div>
                            <div class="col">
                                <p>
                                    Klammerheftung, hervorragend geeignet bspw. für Chorpartituren
                                </p>

                            </div>
                            <div class="w-100 pt-3"></div>
                            <div class="col-1">
                                <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
                            </div>
                            <div class="col">
                                <p>
                                    Innenteil mit klassisch gelblichem Notenpapier
                                </p>
                            </div>
                            <div class="w-100 pt-3"></div>
                            <div class="col-1">
                                <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
                            </div>
                            <div class="col">
                                <p>
                                    Das bekannte Format der Klavierauszüge der EDITION PETERS
                                </p>
                            </div>
                            <div class="row">
                                <div class="col-8 mt-4">
                                    <NuxtLink class="a" to="/productCustomizer">
                                        <button type="button" class="btn btn-dark mt-3">
                                            <img src="@/assets/svg/plus.svg" alt="Avatar" style="margin-right: 10px;">Jetzt
                                            Drucken
                                        </button>
                                    </NuxtLink>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-2 customBorder  pl-5  p-4 pink">

                        <h2 class="heading-grid">
                            Kosten-
                            freier
                            Versand
                        </h2>
                        <p>
                            Ab 50,- Euro
                            Einkaufswert
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <!--TSektion Schrift mit 2 Karten-->
        <section>
            <div class="container justify-content-center">
                <div class="row pt-4">

                    <div class="col-4 customBorder blockStart">
                        <div class="row align-items-start">
                            <h1>
                                Direkt zu den Topsellern

                            </h1>
                            <p>
                                Starte mit unseren meistgefragten Druckprodukten – diese Formate stellen wir täglich zigfach
                                her.
                            </p>

                        </div>
                        <div class="row align-items-end grey p-4" style="margin-top:110%;">
                            <p>Weniger als 88 Seiten Inhalt? Günstigere Preise gesucht? Instrumentalstimmen?</p>
                            <div class="col-8">
                                <h3>
                                    Zu den
                                    Notenheften mit Klammerheftung
                                </h3>

                            </div>
                            <div class="col mb-2 align-self-end">
                                <img src="@/assets/svg/arrow_circle_right.svg" alt="Avatar" style="margin-left: 10px;">
                            </div>
                        </div>



                    </div>
                    <div class="col customBorder blue" style="padding-left: 0px !important; padding-right: 0px !important;">
                        <div class="row">
                            <img class="card-img-top" src="@/assets/images/pic7.png" alt="Card image cap">
                        </div>
                        <div class="row p-4">
                            <h2>Notenbuch DIN A4
                                Spiralbindung hoch</h2>
                            <div class="row mt-2">
                                <div class="col-1">
                                    <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
                                </div>
                                <div class="col">
                                    <p class="">
                                        2–400 Seiten Inhalt + Deckblatt und Rückwand möglich
                                    </p>
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col-1">
                                    <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
                                </div>
                                <div class="col">
                                    <p class="">
                                        Deckblatt zusätzlich mit transparenter Folie möglich
                                    </p>
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col-1">
                                    <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
                                </div>
                                <div class="col">
                                    <p class="">

                                        Inhalt: 90g Notenpapier elfenbeinfarben, schwarzweiß bedruckbar
                                    </p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-8 mt-1">
                                    <NuxtLink class="a" to="/productCustomizer">
                                        <button type="button" class="btn btn-dark mt-3">
                                            <img src="@/assets/svg/plus.svg" alt="Avatar" style="margin-right: 10px;">Jetzt
                                            Drucken
                                        </button>
                                    </NuxtLink>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col customBorder blue" style="padding-left: 0px !important; padding-right: 0px">
                        <div class="row">
                            <img class="card-img-top" src="@/assets/images/pic8.png" alt="Card image cap">
                        </div>
                        <div class="row p-4">
                            <h2>Notenbuch DIN A4
                                Spiralbindung quer</h2>
                            <div class="row mt-2">
                                <div class="col-1">
                                    <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
                                </div>
                                <div class="col">
                                    <p class="">
                                        Perfekt für Orgelnoten geeignet
                                    </p>
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col-1">
                                    <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
                                </div>
                                <div class="col">
                                    <p class="">
                                        Langlebige und praktikable Qualität der Bindung, geräuscharm umzublättern
                                    </p>
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col-1">
                                    <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
                                </div>
                                <div class="col">
                                    <p class="">


                                        Noch ein weiteres zweizeiliges tolles Alleinstellungsmerkmal
                                    </p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-8 mt-4">
                                    <NuxtLink class="a" to="/productCustomizer">
                                        <button type="button" class="btn btn-dark mt-3">
                                            <img src="@/assets/svg/plus.svg" alt="Avatar" style="margin-right: 10px;">Jetzt
                                            Drucken
                                        </button>
                                    </NuxtLink>
                                </div>
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
    components: {

    },
    data: {
        price: 5,
        image: '@/assets/images/Booklet_machine.png'
    },
    created() {
        debugger
     this.price == 5;
    },
    methods: {
        count(event) {
            debugger
            console.log(this.price)
           this.price == this.price + 1
        }
    }
}
</script>
   
<style lang="scss" scoped>
* {
    box-sizing: border-box;
}


@media only screen and (min-width: 1024px) {
    .imgcard {
        width: 100%;
    }
}

@media only screen and (max-width: 1024px) {
    .imgcard {
        float: left;
        margin-right: 25px;
        max-height: 300px;
    }
}


.btn-primary {
    border-color: black;
}

.mrc {
    margin-right: 10px;
}

.card-img-top {
    border-radius: 0px;
}


.card {
    margin: 0px;
    border-radius: 0px;
    padding: 0px;
}


.imgsmall {
    text-align: left;
    width: 100%;
}


* {
    box-sizing: border-box
}

.btn {
    background: #000000;
    border-radius: 100px;
}

@media only screen and (max-width: 1024px) {
    .btn {
        margin-top: 0%;
    }
}

.file-upload {
    padding: 3px;
}

.file-upload input {
    overflow: hidden;
    width: 0;
}

.plus-minus-input {
    align-items: center;

    .input-group-field {
        text-align: center;

        &::-webkit-inner-spin-button,
        ::-webkit-outer-spin-button {
            appearance: none;
        }
    }
}
</style>