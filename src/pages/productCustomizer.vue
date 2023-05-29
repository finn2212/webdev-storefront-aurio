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

                                <select id="mySelect" class="custom-select selectBtn" v-model="selected">
                                    <option v-for="page in pages" v-bind:value="{ val: page.val }">{{ page.val }}
                                    </option>
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
                                <p><input type="radio" id="one" value="true" v-model="enveloped" /></p>
                                <p><input type="radio" id="two" value="false" v-model="enveloped" /></p>
                            </div>
                            <div class="w-100 pt-5"></div>
                            <div class="col-6">
                                <h1>3. Lade deine Noten hoch</h1>
                                <p>Hier lädst du nun die Druckdaten als PDF auf unseren Server – ganz bequem und einfach.
                                    Deine Daten werden verschlüsselt übertragen.
                                    Wir prüfen diese auf Druckbarkeit und melden uns bei dir per E-Mail, falls etwas nicht
                                    passen sollte.</p>
                            </div>
                            <div class="col mt-5">
                                <div class="row">
                                    <div class="col">
                                        <p>Noten-PDF / Inhalt:</p>
                                    </div>
                                    <div class="col-8">
                                        <div v-if="pdfData1 == null" class="row">
                                            <div>
                                                <button class="btn btn uploadBtn" @click="click1"> <img
                                                        src="@/assets/svg/plusBlack.svg" alt="Avatar"
                                                        style="margin-right: 5px;">Wähle
                                                    Noten</button>
                                                <input type="file" ref="input1" style="display: none" @change="previewImage"
                                                    accept="application/pdf">
                                            </div>
                                        </div>
                                        <div v-if="pdfData1 != null && isUpload1 == false" class="row">
                                            <div class="col-8">
                                                {{ pdfData1.name }}
                                            </div>
                                            <div class="col">
                                                <button class="btn btn uploadBtn" @click="deletePdf"
                                                    style="margin-left:5px">
                                                    <img src="@/assets/svg/plusBlack.svg" alt="Avatar"
                                                        style="transform: rotate(45deg);">
                                                </button>
                                            </div>
                                        </div>
                                        <div v-if="isUpload1 == true" class="row mt-3">
                                            <div class="progress">
                                                <div class="progress-bar progress-bar-striped" role="progressbar"
                                                    :style="{ width: uploadValue + '%' }" aria-valuenow="0"
                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row mt-5">
                                    <div class="col">
                                        <p>Noten-PDF / Inhalt:</p>
                                    </div>
                                    <div class="col-8">
                                        <div v-if="pdfData2 == null" class="row">
                                            <div class="" v-if="pdfData2 == null">
                                                <button class="btn btn uploadBtn" @click="click2"> <img
                                                        src="@/assets/svg/plusBlack.svg" alt="Avatar"
                                                        style="margin-right: 5px;">Wähle
                                                    Noten
                                                </button>
                                                <input type="file" ref="input2" style="display: none"
                                                    @change="previewImage2" accept="application/pdf">
                                            </div>
                                        </div>
                                        <div v-if="pdfData2 != null && isUpload2 == false" class="row">
                                            <div class="col-8">
                                                {{ pdfData2.name }}
                                            </div>
                                            <div class="col">
                                                <button class="btn btn uploadBtn" @click="deletePdf2"
                                                    style="margin-left:5px">
                                                    <img src="@/assets/svg/plusBlack.svg" alt="Avatar"
                                                        style="transform: rotate(45deg);">
                                                </button>
                                            </div>
                                        </div>
                                        <div v-if="isUpload2 == true" class="row mt-3">
                                            <div class="progress">
                                                <div class="progress-bar progress-bar-striped" role="progressbar"
                                                    :style="{ width: uploadValue2 + '%' }" aria-valuenow="0"
                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-4 customBorder  pl-5  p-4 green">
                        <div class="row">
                            <div class="col">
                                <p>Dein Preis pro Stück:</p>
                                <h1>€ {{ price.toFixed(2) }}</h1>
                                <p style="font-size: x-small;">Alle Preise inkl. 7% MwSt., zzgl. Versandkosten</p>

                            </div>
                        </div>

                        <div class="row">
                            <div class="col">
                                <p>Deine Auflage:</p>

                                <div class="input-group plus-minus-input">
                                    <div class="input-group-button">
                                        <button @click="count(false)" type="button" class="button noborder green"
                                            data-field="quantity">
                                            <img src="@/assets/svg/remove.svg" alt="Avatar">
                                        </button>
                                    </div>
                                    <input class="input" max="300" type="number" v-model="quantitiy">

                                    <div class="input-group-button">
                                        <button @click="count(true)" type="button" class="button noborder green"
                                            data-quantity="plus" data-field="quantity">
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
                                <button @click="createUuid" type="button" class="btn btn-dark mt-3">
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
                                    <tr style="cursor: pointer;" :id="'discountgroup' + discount.id"
                                        v-for="discount in discounts" @click="setAmount(discount.amount)">
                                        <th scope="row">Bis {{ discount.amount }}</th>
                                        <td>€ {{ (singlePrice * (1 - discount.discount)).toFixed(2) }}</td>
                                        <td>{{ (discount.discount * 100).toFixed(0) }} %</td>
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
import { db } from '../firebaseDb';
import axios from 'axios';


export default {
    components: {

    },
    data() {
        return {
            price: 4.29,
            enveloped: false,
            discount: 1,
            pagesQuantitiy: 4,
            selected: '',
            basePrice: 3.85,
            singlePrice: 4.29,
            pagePrice: 0.11,
            quantitiy: 1,
            pdf1: '',
            pdf2: '',
            pdfData1: null,
            pdfData2: null,
            progress1: null,
            pdfData1: null,
            pdfData12: null,
            isUpload1: false,
            isUpload2: false,
            uploadValue: 0,
            uploadValue2: 0,
            productName: "Notenbuch Klammerheftung",
            pages: [
                { val: 4 },
                { val: 8 },
                { val: 12 },
                { val: 14 },
                { val: 18 },
                { val: 22 },
                { val: 24 },
                { val: 28 },
                { val: 32 },
                { val: 36 },
                { val: 40 },
                { val: 44 },
                { val: 48 },
                { val: 52 },
                { val: 54 },
                { val: 58 },
                { val: 62 },
                { val: 64 },
                { val: 68 },
                { val: 72 },
                { val: 76 },
                { val: 80 },
                { val: 84 },
                { val: 88 },
            ],
            discounts: [
                { id: 1, discount: 0, amount: 1 },
                { id: 2, discount: 0.45, amount: 2 },
                { id: 3, discount: 0.55, amount: 10 },
                { id: 4, discount: 0.63, amount: 25 },
                { id: 5, discount: 0.68, amount: 50 },
                { id: 6, discount: 0.70, amount: 75 },
                { id: 7, discount: 0.72, amount: 100 },
                { id: 8, discount: 0.74, amount: 150 },
                { id: 9, discount: 0.75, amount: 200 },
                { id: 10, discount: 0.76, amount: 250 }

            ]
        }
    },
    mounted() {
        this.calculatePrice();
        document.querySelector('#mySelect').querySelector('option').selected = 'selected'
    },
    methods: {
        createUuid() {
            axios({
                url: 'https://www.uuidtools.com/api/generate/v1', // File URL Goes Here
                method: 'GET',
            }).then((res) => {
                this.createNewProductInStore(res.data[0]);
            });


        },
        createNewProductInStore(productNumber) {
            // const productNumber = 'xxx'
            axios({
                url: 'https://26485.s15269.creoline.cloud/api/oauth/token', // File URL Goes Here
                method: 'POST',
                data: {
                    grant_type: 'client_credentials',
                    client_id: 'SWIAUGVGATL1T0TKA0VBNNRSNQ',
                    client_secret: 'blJmVmpFWTRpTzlVVHN5bVhRMnJWZlZOck1tQklaMEdIZ0hVNXo'
                },
            }).then((res) => {
                console.log(res.data.access_token)
                axios({
                    url: 'https://26485.s15269.creoline.cloud/api/product',
                    headers: {
                        "Accept": 'application/json',
                        "Authorization": res.data.access_token,
                        "Content-Type": 'application/json',
                    },
                    method: 'POST',
                    data: {
                        "name": this.productName,
                        "productNumber": productNumber,
                        "stock": 10,
                        "taxId": "49ad39168485457a836441d13c6bd473",
                        "active": true,
                        "keywords": "2212",
                        "price": [
                            {
                                "currencyId": "b7d2554b0ce847cd82f3ac9bd1c0dfca",
                                "gross": this.singlePrice,
                                "net": this.singlePrice,
                                "linked": false
                            }

                        ],
                        'visibilities': [
                            {
                                'salesChannelId': 'fac913bddf1244098e07a811fd301f75',
                                'visibility': 30
                            }

                        ]
                    },
                })
            }).then((res) => {

                setTimeout(() => this.getCreatedProduct(productNumber), 1000);


            });
        },
        getCreatedProduct(productNumber) {
            axios({
                url: 'https://26485.s15269.creoline.cloud/store-api/search', // File URL Goes Here
                method: 'POST',
                headers: {
                    "Accept": 'application/json',
                    "Content-Type": 'application/json',
                    "sw-access-key": 'SWSCZNPHTKX6VHMYYJK3UZDGRW'
                },
                data: {
                    "search": productNumber
                }
            }).then((res) => {
                debugger
                console.log('res.data.elements[0]._uniqueIdentifier');
                console.log(res.data.elements[0]._uniqueIdentifier);
                this.add(res.data.elements[0]._uniqueIdentifier)
            });


        },
        add(id) {
            const contextToken = this.$cookies.get("sw-context-token") || "";
            axios({
                url: 'https://26485.s15269.creoline.cloud/store-api/checkout/cart/line-item', // File URL Goes Here
                method: 'POST',
                headers: {
                    "Accept": 'application/json',
                    "Content-Type": 'application/json',
                    "sw-access-key": 'SWSCZNPHTKX6VHMYYJK3UZDGRW',
                    "sw-context-token": contextToken
                },
                data: {
                    "items": [
                        {
                            id: id,
                            quantity: this.quantitiy,
                            referencedId: id,
                            type: "product",
                        }
                    ]
                }
            }).then((res) => {

                window.location.reload()
            });
        },
        setDiscountGroup: function (id) {

            const element = `discountgroup${id}`
            for (let i = 1; i < 11; i++) {
                const elementToDelete = `discountgroup${i}`
                document.getElementById(elementToDelete).classList.remove('activeDiscount');
            }
            document.getElementById(element).classList.add('activeDiscount');
        },
        setAmount: function (amount) {
            this.quantitiy = amount;
        },
        quantitiyInput: function () {

            this.pagesQuantitiy = pages.val
            this.calculatePrice();
        },
        count(isAdd) {
            if (isAdd) {
                this.quantitiy++
            } else {
                if (this.quantitiy > 1)
                    this.quantitiy--
            }

            this.calculatePrice();
        },
        calculatePrice: function () {
            this.calculateDiscount();
            this.price = this.basePrice + (this.pagePrice * (this.pagesQuantitiy));
            if (this.discount != 1) {
                this.price = this.price * (1 - this.discount);
            }
            this.singlePrice = this.basePrice + (this.pagePrice * (this.pagesQuantitiy));

        },
        calculateDiscount: function () {
            if (this.quantitiy == 1) {
                this.discount = 1
                this.setDiscountGroup(1);
            } else if (this.quantitiy > 1 && this.quantitiy < 9) {
                this.discount = 0.45
                this.setDiscountGroup(2);
            } else if (this.quantitiy >= 9 && this.quantitiy < 24) {
                this.discount = 0.55
                this.setDiscountGroup(3);
            } else if (this.quantitiy >= 24 && this.quantitiy < 49) {
                this.discount = 0.63
                this.setDiscountGroup(4);
            } else if (this.quantitiy >= 49 && this.quantitiy < 74) {
                this.discount = 0.68
                this.setDiscountGroup(5);
            } else if (this.quantitiy >= 74 && this.quantitiy < 99) {
                this.discount = 0.70
                this.setDiscountGroup(6);
            } else if (this.quantitiy >= 99 && this.quantitiy < 149) {
                this.discount = 0.72
                this.setDiscountGroup(7);
            } else if (this.quantitiy >= 149 && this.quantitiy < 199) {
                this.discount = 0.74
                this.setDiscountGroup(8);
            } else if (this.quantitiy >= 199 && this.quantitiy < 249) {
                this.discount = 0.75
                this.setDiscountGroup(9);
            } else if (this.quantitiy >= 249) {
                this.discount = 0.76
                this.setDiscountGroup(10);
            }
        },
        deletePdf: function () {
            db.storage().ref(`uploads/${this.pdfData1.name}`).delete();
            this.pdfData1 = null;
        },
        deletePdf2: function () {
            db.storage().ref(`uploads/${this.pdfData2.name}`).delete();
            this.pdfData2 = null;
        },
        click1() {
            this.$refs.input1.click()
        },
        click2() {
            this.$refs.input2.click()
        },
        previewImage(event) {
            this.pdfData1 = 0;
            this.pdf1 = null;
            this.pdfData1 = event.target.files[0];
            this.onUpload()
        },
        previewImage2(event) {
            this.pdfData2 = 0;
            this.pdf2 = null;
            this.pdfData2 = event.target.files[0];
            this.onUpload2()
        },

        onUpload() {
            this.pdf1 = null;
            this.isUpload1 = true;
            const storageRef = db.storage().ref(`uploads/${this.pdfData1.name}`).put(this.pdfData1);
            storageRef.on(`state_changed`, snapshot => {
                this.uploadValue = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log(this.uploadValue);
            }, error => { console.log(error.message) },
                () => {
                    this.uploadValue = 100;
                    storageRef.snapshot.ref.getDownloadURL().then((url) => {
                        this.pdf1 = url;
                        console.log(this.pdf1);
                        this.isUpload1 = false;
                    });
                }
            );
        },
        onUpload2() {
            this.pdf2 = null;
            this.isUpload2 = true;
            const storageRef = db.storage().ref(`uploads/${this.pdfData2.name}`).put(this.pdfData2);
            storageRef.on(`state_changed`, snapshot => {
                this.uploadValue2 = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("uploadvalue2:" + this.uploadValue2);
            }, error => { console.log(error.message) },
                () => {
                    this.uploadValue2 = 100;
                    storageRef.snapshot.ref.getDownloadURL().then((url) => {
                        this.pdf2 = url;
                        console.log(this.pdf2);
                        this.isUpload2 = false;
                    });
                }
            );
        },
    },
    watch: {
        enveloped: function (val) {
            if (val) {
                if (val == "true") {
                    this.price = this.price + 0.23
                } if (val == "false") {
                    this.price = this.price - 0.23
                }

            }
        },
        selected: function (pages) {
            if (pages) {
                this.pagesQuantitiy = pages.val
                this.calculatePrice();
            }
        },
        quantitiy: function () {
            this.calculatePrice();
        },
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

.input {
    width: 100px;
    margin-left: 5px;
    margin-right: 3px;
    background-color: #CCD96A;
    border: 0px;
    text-align: center;
    font-size: xx-large;
}

.file-upload {
    padding: 3px;
}

.file-upload input {
    overflow: hidden;
    width: 0;
}

.activeDiscount {
    background-color: white;
    border: 1pt solid black !important;
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