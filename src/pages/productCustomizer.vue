<template>
    <div class="container top">
        <div id="overlay">
            <div class="container justify-content-center">
                <div class="spinner-border" role="status" style="margin-top: 30%; margin-left: 50%;">
                    <span class="sr-only"></span>
                </div>
                <div v-for="product in products" :key="product.id">
                    <SwProductDetails :product="product.product" :quantityInput="product.quantitiy" />
                </div>
            </div>
        </div>
        <!--Sektion mit 3 Karten und Bider-->
        <section class="pt-5">
            <div class="container justify-content-center">
                <div class="row">
                    <div class="col-12 col-lg-4 customBorder p-4 blue">
                        <img src="@/assets/svg/verified.svg" class="mr-2" alt="Avatar">
                        <h2 class="heading-grid mt-3">
                            Ihre Vorteile bei AURIOPRINT
                        </h2>
                        <div class="row mt-4">
                            <div class="col-1">
                                <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
                            </div>
                            <div class="col">
                                <p> Erstklassiger Notendruck
                                </p>
                            </div>
                            <div class="w-100 pt-2"></div>
                            <div class="col-1">
                                <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
                            </div>
                            <div class="col">
                                <p>
                                    Musikalientypische Papierformate
                                </p>
                            </div>
                            <div class="w-100 pt-2"></div>
                            <div class="col-1">
                                <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
                            </div>
                            <div class="col">
                                <p>
                                    Prestissimo versandfertig
                                </p>
                            </div>
                            <div class="w-100 pt-2"></div>
                            <div class="col-1">
                                <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
                            </div>
                            <div class="col">
                                <p>
                                    Kauf auf Rechnung möglich
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-4 customBorder p-0">
                        <img class="card-img-top img" src="@/assets/images/pic9.png" alt="Card image cap">
                    </div>
                    <div class="col-12 col-lg-4 customBorder p-0">

                        <img class="card-img-top img" src="@/assets/images/pic10.png" alt="Card image cap">
                    </div>
                </div>
            </div>
        </section>

        <!--Prouct Cusomizer Sections-->
        <section class="pt-5">
            <div class="container justify-content-center">

                <div class="row">
                    <h1 class="">
                        Konfigurieren Sie Ihr Notenheft
                    </h1>
                    <div class="col-12 col-lg-8 customBorder  pl-5  p-4 grey">
                        <div class="row">
                            <div class="col-12 col-md-7">
                                <h2 class="blockStartMarign">
                                    1. Projekttitel*
                                </h2>
                                <p>Bitte vergeben Sie hier einen eindeutigen Projekttitel.</p>
                            </div>
                            <div class="col">
                                <input placeholder="Projekttitel eingeben ..." class="grey p-3"
                                    style="border-width: 1px;  width: 300px; border-radius:5px; border-style: solid; border-color: black; margin-top: 20px;"
                                    type="string" v-model="productName">
                            </div>
                        </div>
                        <div v-if="projectType != 3" class="w-100 pt-5"></div>
                        <div class="row">
                            <div class="col-12 col-md-7">
                                <h2>2. Art des Projekts*</h2>
                                <p>Zu Beginn ist es notwendig, zu wissen, um welche Art von Notenprojekt es sich handelt.
                                </p>
                                <p>
                                    Wählen Sie zwischen den gebräuchlichsten Formen: </p>
                                <ul>
                                    <li>Partitur/Notenheft ohne separate Stimmauszüge / Instrumentalstimmen</li>
                                    <li>Partitur mit separaten Stimmauszügen / Instrumentalstimmen</li>
                                    <li> Stimmauszüge / Instrumentalstimmen ohne Partitur"
                                    </li>
                                </ul>
                            </div>
                            <div class="col pt-5">
                                <div class="row mt-3">
                                    <div class="col-8">
                                        <p>Notenheft ohne
                                            Instrumentalstimmen</p>
                                    </div>
                                    <div class="col-1">
                                        <input type="radio" id="one" value="1" v-model="projectType" />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-8">

                                        <p>Notenheft mit
                                            Instrumentalstimmen</p>
                                    </div>
                                    <div class="col-1">
                                        <input type="radio" id="two" value="2" v-model="projectType" />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-8">

                                        <p>Stimmensatz / Chorsatz</p>
                                    </div>
                                    <div class="col-1">
                                        <input type="radio" id="one" value="3" v-model="projectType" />
                                    </div>
                                </div>




                            </div>

                            <div v-if="projectType != 3" class="w-100 pt-5"></div>
                            <div v-if="projectType != 3" class="col-12 col-md-7">
                                <h2>3. Papierformat*</h2>
                                <p>Bitte wählen Sie das Format aus, das die Noten haben.
                                    Sie können zwischen gebräuchlichen musikalientypischen Papierformaten wählen.
                                </p>
                                <p> Bitte beachten Sie: Wenn Sie unterschiedliche Formate innerhalb eines Projekts haben
                                    (bspw. Partitur in DIN A3 und Stimmen in DIN A4), legen Sie bitte für jedes Format ein
                                    neues Projekt an.
                                </p>
                                <p class="m-0">Beispiel:</p>
                                <li> »Klavierauszug Chorheft Cäcilia«, Concertformat</li>
                                <li> »Chorsatz Chorheft Cäcilia«, DIN A4</li>
                            </div>
                            <div v-if="projectType != 3" class="col pt-4">
                                <div class="row mt-3">
                                    <div class="col-8">
                                        <p>DIN A4 (21 x 29,7 cm)</p>
                                    </div>
                                    <div class="col-1">
                                        <input type="radio" id="one" value="1" v-model="paperFormat" />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-8">

                                        <p>Klavierauszug (19 x 27 cm)</p>
                                    </div>
                                    <div class="col-1">
                                        <input type="radio" id="one" value="2" v-model="paperFormat" />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-8">

                                        <p>Concert (22,8 x 30,5 cm)</p>
                                    </div>
                                    <div class="col-1">
                                        <input type="radio" id="two" value="3" v-model="paperFormat" />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-8">

                                        <p>DIN B4 (25 x 35,3 cm)</p>
                                    </div>
                                    <div class="col-1">
                                        <input type="radio" id="two" value="4" v-model="paperFormat" />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-8">

                                        <p>DIN A3 (29,7 x 42 cm)</p>
                                    </div>
                                    <div class="col-1">
                                        <input type="radio" id="one" value="5" v-model="paperFormat" />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-8">

                                        <p>Dirigent (31,5 x 46 cm)</p>
                                    </div>
                                    <div class="col-1">
                                        <input type="radio" id="two" value="6" v-model="paperFormat" />
                                    </div>
                                </div>
                            </div>

                            <div v-if="projectType != 3" class="w-100 pt-5"></div>
                            <div v-if="projectType != 3" class="col-12 col-md-7">
                                <h2>4. Ausrichtung*</h2>
                                <p>Bitte geben Sie nun an, ob die Noten im Hoch– oder im Querformat angelegt sind.

                                </p>
                                <p>
                                    Bitte beachten Sie, dass Sie innerhalb eines Projekts die Ausrichtungen nicht mischen
                                    können.
                                </p>
                            </div>
                            <div v-if="projectType != 3" class="col pt-5">
                                <div class="row mt-3">
                                    <div class="col-8">
                                        <p>Notenheft Hochformat</p>
                                    </div>
                                    <div class="col-1">
                                        <input type="radio" id="one" value="true" v-model="format" />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-8">

                                        <p>Notenheft Querformat</p>
                                    </div>
                                    <div class="col-1">
                                        <input type="radio" id="two" value="false" v-model="format" />
                                    </div>
                                </div>
                            </div>
                            <div v-if="projectType != 3" class="w-100 pt-5"></div>
                            <div v-if="projectType != 3" class="col-12 col-md-7">
                                <h2>5. Farbigkeit Inhalt*</h2>
                                <p>Ihre Noten können im Innenteil entweder schwarzweiß oder farbig gedruckt werden.


                                </p>
                                <p>
                                    Falls Ihr Notenprojekt einen Umschlag hat, wird dieser ohne Aufpreis farbig gedruckt.
                                    Instrumentalstimmen werden generell schwarzweiß gedruckt.
                                </p>
                            </div>
                            <div v-if="projectType != 3" class="col pt-5">
                                <div class="row mt-3">
                                    <div class="col-8">
                                        <p>Inhalt schwarzweiß</p>
                                    </div>
                                    <div class="col-1">
                                        <input type="radio" id="one" value="false" v-model="color" />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-8">

                                        <p>Inhalt farbig</p>
                                    </div>
                                    <div class="col-1">
                                        <input type="radio" id="two" value="true" v-model="color" />
                                    </div>
                                </div>
                            </div>
                            <div v-if="projectType != 3" class="w-100 pt-5"></div>
                            <div v-if="projectType != 3" class="col-12 col-md-7">
                                <h2>6. Seitenanzahl*</h2>
                                <p>Bitte geben Sie die Gesamtseitenanzahl Ihrer Datei an. Aus produktionstechnischen Gründen
                                    muss diese immer durch 4 teilbar sein.
                                </p>
                                <p>Sie können zwischen 4 und 400 Seiten Umfang wählen. Bitte beachten Sie, dass wir Ihr Heft
                                    in den Formaten DIN A4, Klavierauszug und Concert bei weniger als 88 Seiten Inhalt
                                    standardmäßig klammerheften.
                                </p>
                            </div>
                            <div v-if="projectType != 3" class="col-3 pt-5">
                                <p>Seitenanzahl Inhalt:</p>
                            </div>
                            <div v-if="projectType != 3" class="col pt-5">
                                <select id="mySelect" class="custom-select selectBtn" v-model="pagesQuantitiy">
                                    <option selected v-bind:value="4"> 4
                                    </option>
                                    <option v-for="item in pages" v-bind:value="item">{{ item }}
                                    </option>
                                </select>
                            </div>
                            <div v-if="projectType != 3" class="w-100 pt-5"></div>
                            <div v-if="projectType != 3" class="col-12 col-md-7">
                                <h2>7. Bindung*</h2>
                                <p>
                                    Bitte beachten Sie, dass bei den Formaten DIN B4, DIN A3 und Dirigent sowie bei allen
                                    Querformaten und bei mehr als 88 Seiten Inhalt nur Spiralbindung verfügbar ist.
                                </p>
                            </div>
                            <div class="col pt-5">
                                <div class="row mt-3">
                                    <div class="col-8">
                                        <p v-if="bindingType == 'true'">Bindung: Klammerheftung</p>
                                        <p v-if="bindingType == 'false'">Bindung: Spiralbindung</p>
                                    </div>
                                </div>
                            </div>




                            <div v-if="projectType != 3" class="w-100 pt-5"></div>
                            <div v-if="projectType != 3" class="col-12 col-md-7">
                                <h2>8. Umschlag</h2>
                                <p>Unser hochweißer Umschlagkarton mit 260g/m&#178; gibt Farben brillant wieder und besitzt
                                    ein
                                    hervorragendes Aufschlagverhalten. Die einseitig matte Oberfläche lässt sich
                                    hervorragend bedrucken und bricht auch bei starker Beanspruchung nicht auf.</p>
                            </div>
                            <div v-if="projectType != 3" class="col pt-5">
                                <div class="row mt-3">
                                    <div class="col-8">
                                        <p>Mit Umschlag:</p>
                                    </div>
                                    <div class="col-1">
                                        <input type="radio" id="one" value="true" v-model="enveloped" />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-8">

                                        <p>Ohne Umschlag:</p>
                                    </div>
                                    <div class="col-1">
                                        <input type="radio" id="two" value="false" v-model="enveloped" />
                                    </div>
                                </div>
                            </div>

                            <div v-if="projectType != 3" class="w-100 pt-5"></div>
                            <div v-if="projectType != 3" class="col-12 col-md-7">
                                <h2>9. Notenupload*</h2>
                                <p>Hier laden Sie nun die Druckdaten als PDF auf unseren Server – ganz bequem und einfach.
                                    Ihre Daten werden verschlüsselt übertragen.
                                    Wir prüfen diese auf Druckbarkeit und melden uns ggf. per E-Mail, falls etwas nicht
                                    passen sollte.</p>
                            </div>
                            <div v-if="projectType != 3" class="col mt-4">
                                <div class="row">
                                    <div class="col-auto">
                                        <p>Noten-PDF /Inhalt:*</p>
                                    </div>
                                    <div class="col">
                                        <div v-if="pdfData1 == null" class="row">
                                            <div>
                                                <button class="btn btn uploadBtn" style="color: black !important;"
                                                    @click="click1"> <img src="@/assets/svg/plusBlack.svg" alt="Avatar"
                                                        style=" margin-right: 5px;">Datei wählen</button>
                                                <input type="file" ref="input1" style="display: none" @change="previewImage"
                                                    accept="application/pdf">
                                            </div>
                                        </div>
                                        <div v-if="pdfData1 != null && isUpload1 == false" class="row">
                                            <div class="col-auto">
                                                {{ pdfData1.name }}
                                            </div>
                                            <div class="col-auto">
                                                <button class="btn btn uploadBtn"
                                                    style="color: black !important; margin-left:5px" @click="deletePdf">
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
                                    <div class="col-auto">
                                        <p>ggf. <br> Umschlagdatei:</p>
                                    </div>
                                    <div class="col">
                                        <div v-if="pdfData2 == null" class="row">
                                            <div class="" v-if="pdfData2 == null">
                                                <button class="btn btn uploadBtn ms-0 ms-xl-3"
                                                    style="color: black !important;" @click="click2"> <img
                                                        src="@/assets/svg/plusBlack.svg" alt="Avatar"
                                                        style="margin-right: 5px;">Datei wählen
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
                                                <button class="btn btn uploadBtn"
                                                    style="color: black !important;  margin-left:5px " @click="deletePdf2">
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
                        <div class="row pt-5" v-if="projectType != 1">
                            <div class="col-12 col-md-7">
                                <h2 v-if="projectType == 2">10. Instrumentalstimmen*</h2>
                                <h2 v-if="projectType == 3">3. Instrumentalstimmen*</h2>
                                <p>Wenn Ihr Projekt Instrumentalstimmen enthält, können Sie diese hier konfigurieren.
                                </p>
                                <p>


                                    Bitte geben Sie an, wie viele Seiten die Stimmeneinleger haben.

                                </p>
                                <p>Wählen Sie bitte zusätzlich aus, wie viele Exemplare von jeder Stimme pro Set enthalten
                                    sein sollen (bspw. Orchestermusik: 8 Erste Violinen, 6 Zweite Violinen, etc.).
                                </p>
                                <p>
                                    Bitte beachten Sie, dass wir Instrumentalstimmen, die später in ein Heft eingelegt
                                    werden, am rechten Rand 3–5 mm kleiner schneiden, damit diese nicht überstehen.
                                </p>
                            </div>
                            <div class="w-100 pt-2"></div>

                            <div class="col-12 col-md-6">
                                <p class="blockStartMarign">
                                <p class="thick inline"> Stimme benennen </p>(bspw. »Violine 1«)
                                </p>
                                <input type="string" class="grey p-3" placeholder="Stimmenname eingeben ..."
                                    v-model="voiceName"
                                    style="    width: 250px;border-width: 1px; border-radius:5px; border-style: solid; border-color: black; margin-top: 20px;">
                            </div>
                            <div class="col">
                                <div class="row">
                                    <div class="col">
                                        <p>Seitenanzahl Inhalt:</p>
                                        <p>Exemplare pro Set:</p>
                                        <p class="pt-2">Noten-PDF / Inhalt:</p>
                                    </div>
                                    <div class="col">
                                        <p>
                                            <select id="mySelect" class="custom-select selectBtn" v-model="voicePages">
                                                <option selected v-bind:value="4"> 4
                                                </option>
                                                <option v-for="item in pages" v-bind:value="item">{{ item }}
                                                </option>
                                            </select>
                                        </p>
                                        <p>
                                            <select id="mySelect" class="custom-select selectBtn" v-model="voiceQuantity">
                                                <option selected v-bind:value="1"> 1
                                                </option>
                                                <option v-for="item in voiceAmount" v-bind:value="item">{{ item }}
                                                </option>
                                            </select>
                                        </p>
                                        <p>
                                        <div v-if="pdfData3 == null" class="row">
                                            <div class="" v-if="pdfData3 == null">
                                                <button class="btn btn uploadBtn" style="color: black !important"
                                                    @click="voiceUpload"> <img src="@/assets/svg/plusBlack.svg" alt="Avatar"
                                                        style="margin-right: 5px;">Datei wählen
                                                </button>
                                                <input type="file" ref="input3" style="display: none"
                                                    @change="previewImage3" accept="application/pdf">
                                            </div>
                                        </div>
                                        <div v-if="pdfData3 != null && isUpload3 == false" class="row">
                                            <div class="col">
                                                {{ pdfData3.name }}
                                            </div>
                                            <div class="col">
                                                <button class="btn btn uploadBtn"
                                                    style="color: black !important; margin-left:5px" @click="deletePdf3">
                                                    <img src="@/assets/svg/plusBlack.svg" alt="Avatar"
                                                        style="transform: rotate(45deg);">
                                                </button>
                                            </div>
                                        </div>
                                        <div v-if="isUpload3 == true" class="row mt-3">
                                            <div class="progress">
                                                <div class="progress-bar progress-bar-striped" role="progressbar"
                                                    :style="{ width: uploadValue3 + '%' }" aria-valuenow="0"
                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        </p>

                                    </div>
                                    <button class="btn btn uploadBtn" @click="addVoice()"
                                        style="background-color: black !important; margin-right: 5px;"> <img
                                            src="@/assets/svg/iconWhite.svg" alt="Avatar">
                                        <p class="inline mt-1" style="color: white;">
                                            Stimme
                                            Hinzufügen
                                        </p>
                                    </button>
                                    <p class="pt-4">
                                        Sie können beliebig viele weitere
                                        Instrumentalstimmen hinzufügen.
                                    </p>
                                </div>
                            </div>
                            <p class="hidden red-font" id="error-voice">
                                Vergeben Sie der Stimme einen Namen und laden Sie eine Notendatei für die Stimme hoch, bevor
                                Sie die Stimme dem Projekt hinzufügen
                            </p>
                        </div>

                        <div class="row" v-if="projectType != 1">
                            <div class="col-md-12 pt-4 ">
                                <h3 class="ps-2">Hinzugefügte Stimmen:</h3>
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Stimmenname:</th>
                                            <th>Seitenanzahl Inhalt:</th>
                                            <th>Exemplare pro Set:</th>
                                            <th>Datei Name:</th>
                                            <th>Löschen:</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <client-only>
                                            <tr v-for="(voice, index) in voices">
                                                <td>{{ voice.name }}</td>
                                                <td>{{ voice.pages }}</td>
                                                <td>{{ voice.quantity }}</td>
                                                <td>{{ voice.uploadName }}</td>
                                                <td>
                                                    <button @click.prevent="removeVoice(index)" class="btn"
                                                        style="background-color: transparent !important; padding: 0; margin: 0"><img
                                                            src="@/assets/svg/plusBlack.svg" alt="Avatar"
                                                            style="transform: rotate(45deg);"></button>
                                                </td>
                                            </tr>
                                        </client-only>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div class="row pt-5">
                            <div class="col-12 col-md-7">
                                <h2 v-if="projectType == 1">10. In den Warenkorb*</h2>
                                <h2 v-if="projectType == 2">11. In den Warenkorb*</h2>
                                <h2 v-if="projectType == 3">4. In den Warenkorb*</h2>
                                <p>Bitte legen Sie das Projekt nun in den Warenkorb. Sie können danach noch weitere Projekte
                                    anlegen und gemeinsam in einer Lieferung versandkostenoptimiert bestellen.</p>

                            </div>
                            <div class="col-12 col-md">
                                <button @click="createUuid" type="button" class="btn btn-dark mt-5">
                                    <img src="@/assets/svg/plus.svg" alt="Avatar" style="margin-right: 10px;">Jetzt
                                    in den Warenkorb legen
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-lg-4 p-0 customBorder">
                        <div id="stickyBar" class="sticky-top" style="top: 120px">
                            <div class="p-4 green">
                                <div class="row">
                                    <div class="col">
                                        <p>Ihr Preis pro Exemplar:</p>
                                        <h2>€ {{ priceString }}</h2>
                                        <p style="font-size: x-small;">Preis inkl. 7% MwSt., ggf. zzgl. Versandkosten</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <p>Ihr Preis für die gewünschte Auflagenhöhe:</p>
                                        <h2>€ {{ projectPriceString }}</h2>
                                        <p style="font-size: x-small;">APreis inkl. 7% MwSt., ggf. zzgl. Versandkosten</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <p>Ihre Auflage:</p>
                                        <div class="input-group plus-minus-input">
                                            <div class="input-group-button">
                                                <button @click="count(false)" type="button" class="button noborder green"
                                                    data-field="quantity">
                                                    <img src="@/assets/svg/remove.svg" alt="Avatar">
                                                </button>
                                            </div>
                                            <input class="input" max="300" type="number" min="0" v-model="quantitiy">
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
                                        <h2>{{ productionTime }} </h2>
                                        <p style="font-size: x-small;">zzgl. Postlaufzeit</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col align-self-center">
                                        <button @click="createUuid" type="button" class="btn btn-dark mt-3">
                                            <img src="@/assets/svg/plus.svg" alt="Avatar" style="margin-right: 10px;">Jetzt
                                            in den Warenkorb legen
                                        </button>
                                    </div>
                                </div>
                                <div class="row pt-4">
                                    <table class="table" style="font-size:small ; border-style: hidden !important;">
                                        <thead>
                                            <tr>
                                                <th scope="col">Auflage</th>
                                                <th scope="col">Preis / Stck.</th>
                                                <th scope="col">Sie sparen:</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr style="cursor: pointer;" :id="'discountgroup' + discount.id"
                                                v-for="(discount, index) in discounts" @click="setAmount(discount.amount)">
                                                <th v-if="discount.amount == 1" scope="row">1</th>
                                                <th v-if="discount.amount > 1 && discount.amount <= 200" scope="row">{{
                                                    discount.amount }} – {{ discounts[index + 1].amount - 1 }}</th>
                                                <th v-if="discount.amount > 200" scope="row">Ab 250</th>

                                                <td>€ {{ (singlePrice * (1 - discount.discount)).toFixed(2) }}</td>
                                                <td>{{ (discount.discount * 100).toFixed(0) }} %</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                                <!-- Change the `data-field` of buttons and `name` of input field's for multiple plus minus buttons-->
                            </div>
                            <div class="p-4 pink" style="margin-top: 20px;">

                                <h1>
                                    Kostenfreier
                                    Versand
                                </h1>
                                <img src="@/assets/svg/local_shipping.svg" alt="Avatar"
                                    style=" margin-top: 150px; width: 10%; ">
                                <h1 class="mt-2">
                                    Ab 50,- Euro
                                    Einkaufswert
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--Sektion mit 3 Karten und Bider-->
        <section class="pt-5">
            <div class="container justify-content-center">
                <div class="row">
                    <div class="col customBorder  pl-5  p-4 red">
                        <div class="row">
                            <div class="col-2"> <img src="@/assets/svg/report.svg" class="mr-2" alt="Avatar"></div>
                            <div class="col">
                                <h2>Maßvorgaben</h2>
                            </div>
                        </div>
                        <p style="margin-top: 80px;">Um bestmögliche Qualität in der Druckproduktion zu gewährleisten, ist
                            es notwendig, dass die
                            Druckdaten korrekt angelegt sind.
                            Bitte laden Sie die Maßvorgaben herunter und legen Sie Ihre Druckdaten danach an.
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
                    <div class="col customBorder  pl-5  p-4 yellow">
                        <img src="@/assets/svg/mark_email_read.svg" class="mr-2" alt="Avatar">
                        <h2 style="margin-top: 60px;">
                            Sie benötigen Hilfe?
                            Schreiben Sie uns!
                        </h2>
                        <p> Kommen Sie nicht weiter? Gerne sind wir für Sie da. Bitte schreiben Sie uns eine E-Mail:
                        </p>
                        <h5> fragen@capellaprint.com
                        </h5>
                        <p> Wir melden uns baldmöglichst bei Ihnen zurück. Gemeinsam finden wir eine Lösung!</p>

                    </div>
                    <div class="col-4">

                    </div>

                </div>
            </div>
        </section>
        <!--TSektion Schrift mit 2 Karten-->

        <SfModal v-model="isOpen" class="max-w-[90%] md:max-w-lg" tag="section" role="alertdialog"
            aria-labelledby="promoModalTitle" aria-describedby="promoModalDesc">
            <header>
                <p id="promoModalTitle" class="font-bold typography-headline-4 md:typography-headline-3">
                    {{ errorMassage }}
                </p>
                <button square variant="tertiary" class="absolute btn right-2 top-2" style="color: white;" @click="close">
                    Schließen
                </button>
            </header>
        </SfModal>
    </div>
</template>
   
<script>
import { getApplicationContext } from "@shopware-pwa/composables"
import { invokePost } from "@shopware-pwa/shopware-6-client"
import { onMounted, ref } from "@vue/composition-api"
import 'bootstrap/dist/css/bootstrap.min.css'
import { db } from '../firebaseDb';
import axios from 'axios';
import { SfModal, SfButton } from "@storefront-ui/vue"
import SwProductDetails from "@/components/SwProductDetails.vue"


export default {
    components: {
        SfModal,
        SfButton,
        SwProductDetails
    },

    data() {
        return {
            price: 0,
            products: [],
            priceString: '0',
            projectPriceString: '0',
            productionTime: "1–3 Tage",
            isOpen: false,
            enveloped: 'false',
            discount: 1,
            pagesQuantitiy: 4,
            voiceName: "",
            voicePages: 4,
            voiceQuantity: 1,
            handlingPrice: 3.8,
            singlePrice: 4.29,
            pagePrice: 0.15,
            quantitiy: 1,
            handlingVoice: 1,
            pdf1: '',
            pdf2: '',
            pdfData1: null,
            pdfData2: null,
            pdfData3: null,
            progress1: null,
            isUpload1: false,
            isUpload2: false,
            isUpload3: false,
            voicePagePrice: 0.15,
            access_token: '',
            projectType: 1,
            uploadValue: 0,
            uploadValue2: 0,
            uploadValue3: 0,
            productName: "",
            format: 'true',
            paperFormat: 1,
            color: 'false',
            voicePrice: 0,
            envelopedPrice: 0,
            bindingType: "true",
            errorMassage: "",
            totalVoicePrice: 0,
            bindingTypePrice: 0,
            weight: 0,
            voices: [

            ],
            voiceAmount: [
                2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50
            ],
            pages: [
                8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96, 100, 104, 108, 112, 116, 120, 124, 128, 132, 136, 140, 144, 148, 152, 156, 160, 164, 168, 172, 176, 180, 184, 188, 192, 196, 200, 204, 208, 212, 216, 220, 224, 228, 232, 236, 240, 244, 248, 252, 256, 260, 264, 268, 272, 276, 280, 284, 288, 292, 296, 300, 304, 308, 312, 316, 320, 324, 328, 332, 336, 340, 344, 348, 352, 356, 360, 364, 368, 372, 376, 380, 384, 388, 392, 396, 400


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
        const id = 1
        document.getElementById(`menuBtn${id}`).classList.add('active');
    },
    methods: {
        reset() {
            this.productionTime = "1–3 Tage";
            this.enveloped = 'false';
            this.discount = 1;
            this.pdf1 = '';
            this.pdf2 = '';
            this.pdfData1 = null;
            this.pdfData2 = null;
            this.projectTypeproductName = "";
            this.format = 'true'
            this.paperFormat = 1;
            this.color = 'false';
            this.bindingType = "true";
            this.bindingTypePrice = 0;
            this.calculatePrice();

        },
        close() {
            this.isOpen = false;
            document.getElementById("stickyBar").classList.add('sticky-top');
        },
        open() {
            document.getElementById("stickyBar").classList.remove('sticky-top');
            this.isOpen = true;

        },
        createUuid() {
            if (this.validate()) {
                document.getElementById("overlay").style.display = "block";
                axios({
                    url: 'https://www.uuidtools.com/api/generate/v1', // File URL Goes Here
                    method: 'GET',
                }).then((res) => {
                    this.createNewProductInStore(res.data[0]);
                }).catch((error) => {
                    //try to fix the error or
                    document.getElementById("overlay").style.display = "none";
                    console.log(error.message)
                });
            }

        },
        createNewProductInStore(productNumber) {
            // const productNumber = 'xxx'
            const propertieIds = this.getProperties();
            const desc = this.getDesc();
            axios({
                url: 'https://s23511.creoline.cloud/api/oauth/token', // File URL Goes Here
                method: 'POST',
                data: {
                    grant_type: 'client_credentials',
                    client_id: 'SWIAEJZYQ09VBFPSNZZ0T0VLUG',
                    client_secret: 'cTAxWmRsZ2kxaHppRjN1WldrUTBIYWoyS1czUHV0TlJzdWVMZWM'
                },
            }).then((res) => {
                console.log(res.data.access_token)
                axios({
                    url: 'https://s23511.creoline.cloud/api/product',
                    headers: {
                        "Accept": 'application/json',
                        "Authorization": res.data.access_token,
                        "Content-Type": 'application/json',
                    },
                    method: 'POST',
                    data: {
                        "name": this.productName,
                        "productNumber": productNumber,
                        "properties": propertieIds,
                        "stock": 10,
                        "taxId": "49ad39168485457a836441d13c6bd473",
                        "active": true,
                        "keywords": "2212",
                        "description": desc + 'Seitenzahl: ' + this.pagesQuantitiy,
                        "weight": this.weight,
                        "media": [{
                            "id": "6bd19a84161f44e3b7efb37e835c5ec2", // random UUID selfgenerated will be used as "coverId"

                            "mediaId": "b1c75efd9ff24aee9fc6338c6b175cdc",
                            "position": 0,
                            "url": "https://s23511.creoline.cloud/media/9b/e6/96/1687422934/capellaProduct.jpeg",
                        }],
                        "coverId": "6bd19a84161f44e3b7efb37e835c5ec2",
                        "price": [
                            {
                                "currencyId": "b7d2554b0ce847cd82f3ac9bd1c0dfca",
                                "gross": this.price,
                                "net": this.price,
                                "linked": false
                            }

                        ],
                        'visibilities': [
                            {
                                'salesChannelId': '9b0f2ae9856642dbbeb9f5cc8ee76511',
                                'visibility': 30
                            }

                        ]
                    },
                })
            }).then((res) => {
                setTimeout(() => this.getCreatedProduct(productNumber), 500);
            }).catch((error) => {
                //try to fix the error or
                document.getElementById("overlay").style.display = "none";
                console.log(error.message)
            });
        },
        getCreatedProduct(productNumber) {
            axios({
                url: 'https://s23511.creoline.cloud/store-api/search', // File URL Goes Here
                method: 'POST',
                headers: {
                    "Accept": 'application/json',
                    "Content-Type": 'application/json',
                    "sw-access-key": 'SWSCRZFKNNVIMJUZV2FIRFDTTG'
                },
                data: {
                    "search": productNumber
                }
            }).then(async (res) => {
                //this.changeProduct(res.data.elements[0]);

                this.products.push({
                    product: res.data.elements[0],
                    quantitiy: this.quantitiy
                });
                document.getElementById("overlay").style.display = "none";
                this.reset();
            }).catch((error) => {
                //try to fix the error or
                document.getElementById("overlay").style.display = "none";
                console.log(error.message)
            });
        },
        //Not Used Anymore
        // add(id) {
        //     const contextToken = this.$cookies.get("sw-context-token") || "";
        //     axios({
        //         url: 'https://s23511.creoline.cloud/store-api/checkout/cart/line-item', // File URL Goes Here
        //         method: 'POST',
        //         headers: {
        //             "Accept": 'application/json',
        //             "Content-Type": 'application/json',
        //             "sw-access-key": 'SWSCUHZMWDM2TTLINJFXMKG3TW',
        //             "sw-context-token": contextToken
        //         },
        //         data: {
        //             "items": [
        //                 {
        //                     id: id,
        //                     quantity: this.quantitiy,
        //                     referencedId: id,
        //                     type: "product",
        //                 }
        //             ]
        //         }
        //     }).then((res) => {

        //     }).catch((error) => {

        //     });
        // },
        setDiscountGroup: function (id) {
            const element = `discountgroup${id}`
            for (let i = 1; i < 11; i++) {
                const elementToDelete = `discountgroup${i}`;
                document.getElementById(`discountgroup${i}`).classList.remove('activeDiscount');
            }
            document.getElementById(`discountgroup${id}`).classList.add('activeDiscount');
        },
        setAmount: function (amount) {
            this.quantitiy = amount;
        },
        quantitiyInput: function () {
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
            this.setPagePrice();
            this.setBinding();
            this.setBindingPrice();
            this.caluclateVoicePrices();
            this.calculateWeight();
            this.calculateProjectPrice();
            if (document.getElementById("error-voice")) {
                document.getElementById("error-voice").classList.add("hidden");
            }

            if (this.projectType == 3) {
                this.price = this.totalVoicePrice + 10
                this.singlePrice = this.totalVoicePrice + 10
            } else {
                this.price = (this.pagePrice * this.pagesQuantitiy) + this.handlingPrice + this.bindingTypePrice + this.totalVoicePrice + this.envelopedPrice;
                if (this.discount != 1) {
                    this.price = this.price * (1 - this.discount);
                }
                this.singlePrice = this.handlingPrice + (this.pagePrice * (this.pagesQuantitiy)) + this.bindingTypePrice + this.totalVoicePrice + this.envelopedPrice;
            }
        },
        calculateWeight: function () {
            let weightPerPage = 3;
            let envelopedWeight = 0;
            let formatWeight = 0;
            let voiceWeight = 0;
            if (this.paperFormat === 6 || this.paperFormat === 5) {
                this.weightPerPage = 6;
            }
            if (this.enveloped && (this.paperFormat === 6 || this.paperFormat === 5)) {
                envelopedWeight = 80;
            } else if (this.enveloped) {
                envelopedWeight = 40;
            }
            if (!this.bindingType) {
                formatWeight = 50;
            }
            if (this.voices) {
                this.voices.forEach(voice => {
                    voiceWeight = voiceWeight + (voice.pages * 3)
                });
            }
            this.weight = (weightPerPage * this.pagesQuantitiy + envelopedWeight + formatWeight + voiceWeight ) / 1000;
        },
        calculateProjectPrice: function () {
            this.priceString = this.price.toFixed(2).toString().replace(".", ",");
            if (this.quantitiy === 0) {
                this.projectPriceString = this.priceString
            } else {
                this.projectPriceString = (this.price * this.quantitiy).toFixed(2).toString().replace(".", ",");
            }

        },
        calculateDiscount: function () {
            if (this.quantitiy == 1) {
                this.discount = 1
                this.productionTime = "1–3 Tage"
                this.setDiscountGroup(1);
            } else if (this.quantitiy > 1 && this.quantitiy < 10) {
                this.discount = 0.45
                this.productionTime = "1–3 Tage"
                this.setDiscountGroup(2);
            } else if (this.quantitiy > 9 && this.quantitiy < 24) {
                this.discount = 0.55
                this.productionTime = "1–3 Tage"
                this.setDiscountGroup(3);
            } else if (this.quantitiy > 24 && this.quantitiy < 50) {
                this.discount = 0.63
                this.productionTime = "1–3 Tage"
                this.setDiscountGroup(4);
            } else if (this.quantitiy > 49 && this.quantitiy < 75) {
                this.discount = 0.68
                this.productionTime = "1–3 Tage"
                this.setDiscountGroup(5);
            } else if (this.quantitiy > 74 && this.quantitiy < 100) {
                this.discount = 0.70
                this.productionTime = "1–3 Tage"
                this.setDiscountGroup(6);
            } else if (this.quantitiy > 99 && this.quantitiy < 150) {
                this.discount = 0.72
                this.productionTime = "3–5 Tage"
                this.setDiscountGroup(7);
            } else if (this.quantitiy > 149 && this.quantitiy < 200) {
                this.discount = 0.74
                this.productionTime = "3–5 Tage"
                this.setDiscountGroup(8);
            } else if (this.quantitiy > 199 && this.quantitiy < 250) {
                this.discount = 0.75
                this.productionTime = "3–5 Tage"
                this.setDiscountGroup(9);
            } else if (this.quantitiy >= 250) {
                this.discount = 0.76
                this.productionTime = "3–5 Tage"
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
        deletePdf3: function () {
            db.storage().ref(`uploads/${this.pdfData3.name}`).delete();
            this.pdfData3 = null;
        },
        caluclateVoicePrices() {
            this.totalVoicePrice = 0;
            if (this.voices.length > 0) {
                this.voices.forEach(voice => {
                    this.totalVoicePrice = this.totalVoicePrice + (this.handlingVoice + (voice.pages * this.voicePagePrice) * voice.quantity)
                });
            }
        },
        getDesc() {
            let desc = '';
            desc = 'Proejekt Name:' + this.productName + '\n Downloadlink Notenheft: ' + this.pdf1 +
                + ' \n Downloadlink Umschlag:' + this.pdf2 + ' \n';
            if (this.voices.length > 0) {
                desc = desc + '\n Stimmen: '
                this.voices.forEach((voice, i) => {
                    desc = desc + ' \n Stimme: ' + voice.name + ' ' + '\n Nummer: ' + (i + 1) + '\n Downloadlink: ' + voice.url
                });
            }
            return desc
        },
        setBinding() {
            if (this.pagesQuantitiy >= 88 || this.format == 'false' || this.paperFormat > 3) {
                this.bindingType = 'false'
            } else {
                this.bindingType = 'true'
            }
        },
        setBindingPrice() {
            if (this.bindingType == 'true') {
                this.bindingTypePrice = 0;
            } else {
                if (this.paperFormat < 4) {
                    this.bindingTypePrice = 3.5;
                } else {
                    this.bindingTypePrice = 4.5;
                }
            }
        },
        setPagePrice() {
            if (this.color == 'false') {
                if (this.paperFormat < 4) {
                    this.pagePrice = 0.15
                } else {
                    this.pagePrice = 0.25
                }
            } else {

                if (this.paperFormat < 4) {
                    this.pagePrice = 0.20
                } else {
                    this.pagePrice = 0.30
                }
            }
        },
        click1() {
            this.$refs.input1.click()
        },
        click2() {
            this.$refs.input2.click()
        },
        voiceUpload() {
            this.$refs.input3.click()
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
        previewImage3(event) {
            this.pdfData3 = 0;
            this.pdf3 = null;
            this.pdfData3 = event.target.files[0];
            this.onUpload3()
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

                        this.isUpload1 = false;
                        console.log(url)
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
                        this.isUpload2 = false;
                    });
                }
            );
        },
        onUpload3() {
            this.pdf3 = null;
            this.isUpload3 = true;
            const storageRef = db.storage().ref(`uploads/${this.pdfData3.name}`).put(this.pdfData3);
            storageRef.on(`state_changed`, snapshot => {
                this.uploadValue3 = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("uploadvalue3:" + this.uploadValue3);
            }, error => { console.log(error.message) },
                () => {
                    this.uploadValue3 = 100;
                    storageRef.snapshot.ref.getDownloadURL().then((url) => {
                        this.pdf3 = url;
                        this.isUpload3 = false;
                    });
                }
            );
        },
        addVoice() {
            let voiceError = document.getElementById("error-voice");
            voiceError.classList.add("hidden");
            if (this.pdfData3 != null && this.voiceName != "") {
                let _pages = 0,
                    _quantity = 0;
                if (this.voicePages == 4) {
                    _pages = 4
                } else {
                    _pages = this.voicePages
                }
                if (this.voiceQuantity == 1) {
                    _quantity = 1
                } else {
                    _quantity = this.voiceQuantity
                }
                this.voices.push(
                    {
                        name: this.voiceName,
                        pages: _pages,
                        quantity: _quantity,
                        uploadName: this.pdfData3.name,
                        url: this.pdf3
                    }
                )
                this.calculatePrice();
                this.voiceName = "";
                this.voicePages = 4;
                this.voiceQuantity = 1;
                this.pdfData3 = null;
            } else {
                voiceError.classList.remove("hidden");
            }
        },
        removeVoice(n) {
            this.voices.splice(n, 1);
            this.calculatePrice();
        },
        getProperties() {
            let ids = [];

            if (this.projectType == 1) {
                ids.push({ "id": 'a2dcd3008de644c784d2cdfec32d91d0' })
            } else if (this.projectType == 2) {
                ids.push({ "id": '92c1ed6e0a11440aa5c544d87fc780c9' })
            } else if (this.projectType == 3) {
                ids.push({ "id": '587a3d6981404ed4b9de471d120e14ad' })
            }
            if (this.format == 'false') {
                ids.push({ "id": 'e1d6ac670a3442448644bc34a7f0d469' })
            } else if (this.format == 'true') {
                ids.push({ "id": 'bb3741f73af54d46b1d0808f74f3923d' })
            }
            if (this.color == 'true') {
                ids.push({ "id": 'cfdae0f64bf240a6ae5202db7579f8a0' })
            } else if (this.color == 'false') {
                ids.push({ "id": '7c2ad08862fb4011ae45d912c1ca4c3d' })
            }
            if (this.paperFormat == 1) {
                ids.push({ "id": '6753f984ea17467794b4068f294053be' })
            } else if (this.paperFormat == 2) {
                ids.push({ "id": 'afe5b55949fc41d399ac39e5ff24f4b6' })
            } else if (this.paperFormat == 3) {
                ids.push({ "id": '6753f984ea17467794b4068f294053be' })
            } else if (this.paperFormat == 4) {
                ids.push({ "id": '4ddf6e278920458cba821346e53b04e9' })
            } else if (this.paperFormat == 5) {
                ids.push({ "id": '2866e65da9a749cd88a84412e212f12a' })
            } else if (this.paperFormat == 6) {
                ids.push({ "id": '378502b6aa384914b27369996fabd0bc' })
            }
            if (this.bindingType == 'true') {
                ids.push({ "id": 'd5e18caaadd34f70877e38b742ad22ff' })
            } else if (this.bindingType == 'false') {
                ids.push({ "id": 'b5559576c3634ab0ba178c92194b5691' })
            }
            if (this.enveloped == 'true') {
                ids.push({ "id": '28e2313979804380b8f303e0f21ffcad' })
            } else if (this.enveloped == 'false') {
                ids.push({ "id": '242e68c2dfde4ec2afe3fd478e2a0f85' })
            }
            return ids

        },
        validate() {
            if (this.projectType == 1) {
                if (this.pdf1 == "" || this.productName == "") {
                    this.errorMassage = "Bitte laden Sie eine Notendatei hoch und vergeben Sie einen Projektnamen, bevor Sie das Produkt in Ihren Warenkorb legen."
                    this.open();
                    return false
                } else {
                    return true
                }
            } else if (this.projectType == 2) {
                if (this.pdf1 == "" && this.pdf3 == null) {
                    this.errorMassage = "Bitte laden Sie 2 eine Notendatei hoch, bevor Sie das Produkt in Ihren Warenkorb legen"
                    this.open();
                    return false

                } else if (this.voices.size == 0) {
                    this.errorMassage = "Bitte fügen Sie eine Stimme hinzu, bevor Sie das Produkt in Ihren Warenkorb legen"
                    this.open();
                    return false
                } else {
                    return true
                }
            } else if (this.projectType == 3) {
                if (this.voices.length == 0) {
                    this.errorMassage = "Bitte vergeben Sie eine Stimmenbezeichnung und und laden Sie eine Notendatei hoch, bevor Sie die Stimme dem Projekt hinzufügen."
                    this.open();
                    return false
                } else {
                    return true
                }
            }

        }
    },
    watch: {
        projectType() {
            this.reset();
        },
        color() {
            this.calculatePrice();
        },
        paperFormat() {
            this.calculatePrice();
        },
        price: function () {
            this.calculateProjectPrice();
        },
        enveloped: function (val) {

            if (val) {
                if (val == "true") {
                    this.envelopedPrice = 1.5
                } if (val == "false") {
                    this.envelopedPrice = 0
                }
            }
            this.calculatePrice();
        },
        pagesQuantitiy(val) {
            this.calculatePrice();
        },
        quantitiy: function () {
            if (this.quantitiy < 0) {
                this.quantitiy = 0;
            }
            this.calculatePrice();
        },
        format: function (val) {
            this.calculatePrice();
        },
        bindingType: function (val) {
            this.calculatePrice();
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

@media only screen and (max-width: 1024px) {
    .card-img-top {
        margin-top: 0%;
        height: 300px;
        object-fit: cover;
    }
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

.wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300px;
    text-align: center;
    transform: translateX(-50%);
}

.spanner {
    position: absolute;
    top: 50%;
    left: 0;
    background: #2a2a2a55;
    width: 100%;
    display: block;
    text-align: center;
    height: 300px;
    color: #FFF;
    transform: translateY(-50%);
    z-index: 1000;
    visibility: hidden;
}

.overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    visibility: hidden;
}

.loader,
.loader:before,
.loader:after {
    border-radius: 50%;
    width: 2.5em;
    height: 2.5em;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation: load7 1.8s infinite ease-in-out;
    animation: load7 1.8s infinite ease-in-out;
}

.loader {
    color: #ffffff;
    font-size: 10px;
    margin: 80px auto;
    position: relative;
    text-indent: -9999em;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
}

.loader:before,
.loader:after {
    content: '';
    position: absolute;
    top: 0;
}

.loader:before {
    left: -3.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
}

.loader:after {
    left: 3.5em;
}

@-webkit-keyframes load7 {

    0%,
    80%,
    100% {
        box-shadow: 0 2.5em 0 -1.3em;
    }

    40% {
        box-shadow: 0 2.5em 0 0;
    }
}

@keyframes load7 {

    0%,
    80%,
    100% {
        box-shadow: 0 2.5em 0 -1.3em;
    }

    40% {
        box-shadow: 0 2.5em 0 0;
    }
}

.p-5 {
    padding: 35px !important;
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

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
input[type=number] {
    -moz-appearance: textfield;
}

#overlay {
    position: fixed;
    /* Sit on top of the page content */
    display: none;
    /* Hidden by default */
    width: 100%;
    /* Full width (cover the whole page) */
    height: 100%;
    /* Full height (cover the whole page) */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    /* Black background with opacity */
    z-index: 2;
    /* Specify a stack order in case you're using a different order for other elements */
    cursor: pointer;
    /* Add a pointer on hover */
}
</style>