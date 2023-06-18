<template>
    <div class="container">
        <div id="overlay">
            <div class="container justify-content-center">
                <div class="spinner-border" role="status" style="margin-top: 30%; margin-left: 50%;">
                    <span class="sr-only"></span>
                </div>
            </div>
        </div>
        <!--Sektion mit 3 Karten und Bider-->
        <section class="pt-5">
            <div class="container justify-content-center">
                <div class="row">
                    <div class="col-4 customBorder  p-4 blue">
                        <img src="@/assets/svg/verified.svg" class="mr-2" alt="Avatar">
                        <h2 class="heading-grid mt-3">
                            Ihre Vorteile bei capellaprint
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
                    <h1 class="">
                        Konfiguriere dein Notenheft
                    </h1>
                    <div class="col-8 customBorder  pl-5  p-4 grey">
                        <div class="row">
                            <div class="col-7">
                                <h2 class="blockStartMarign">
                                    1. Projekttitel
                                </h2>
                                <p>Bitte vergib hier einen eindeutigen Projekttitel.</p>
                            </div>
                            <div class="col">
                                <input placeholder="Projekttitel eingeben ..." class="grey p-3"
                                    style="border-width: 1px;  width: 300px; border-radius:5px; border-style: solid; border-color: black; margin-top: 20px;"
                                    type="string" v-model="productName">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-7 pt-4">
                                <h2>2. Art des Projekts</h2>
                                <p>Zu Beginn ist es notwendig, zu wissen, um welche Art von Notenprojekt es sich handelt.
                                </p>
                                <p>
                                    Wählen Sie zwischen den gebräuchlichsten Formen: </p>
                                <ul>
                                    <li>Partitur ohne Instrumentalstimmen</li>
                                    <li>Partitur mit Stimmeneinlegern (oder mit Stimmenset, bspw. bei Dirigierpartituren +
                                        Orchestermaterial)</li>
                                    <li> Reiner Stimmensatz ohne Partitur, bspw. Chorsätze</li>
                                </ul>
                            </div>
                            <div class="col pt-5">
                                <div class="row mt-3">
                                    <div class="col-8">
                                        <p>Notenheft ohne
                                            Instrumentalstimmen</p>
                                    </div>
                                    <div class="col-1">
                                        <p><input type="radio" id="one" value="1" v-model="projectType" /></p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-8">

                                        <p>Notenheft mit
                                            Instrumentalstimmen</p>
                                    </div>
                                    <div class="col-1">
                                        <p><input type="radio" id="two" value="2" v-model="projectType" /></p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-8">

                                        <p>Stimmensatz / Chorsatz</p>
                                    </div>
                                    <div class="col-1">
                                        <p><input type="radio" id="one" value="3" v-model="projectType" /></p>
                                    </div>
                                </div>




                            </div>

                            <div v-if="projectType != 3" class="w-100 pt-5"></div>
                            <div  v-if="projectType != 3" class="col-7">
                                <h2>3. Ausrichtung des Hefts</h2>
                                <p>Bitte geben Sie nun an, ob die Noten im Hoch– oder im Querformat angelegt sind.

                                </p>
                                <p>
                                    Bitte beachten Sie, dass Sie innerhalb eines Projekts die Ausrichtungen nicht mischen
                                    können.
                                </p>
                            </div>
                            <div  v-if="projectType != 3" class="col pt-5">
                                <div class="row mt-3">
                                    <div class="col-8">
                                        <p>Notenheft Hochformat</p>
                                    </div>
                                    <div class="col-1">
                                        <p><input type="radio" id="one" value="true" v-model="format" /></p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-8">

                                        <p>Notenheft Querformat</p>
                                    </div>
                                    <div class="col-1">
                                        <p><input type="radio" id="two" value="false" v-model="format" /></p>
                                    </div>
                                </div>
                            </div>
                            <div v-if="projectType != 3" class="w-100 pt-5"></div>
                            <div v-if="projectType != 3" class="col-7">
                                <h2>4. Farbigkeit des Inhalts</h2>
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
                                        <p>Nur Schwarzweiß</p>
                                    </div>
                                    <div class="col-1">
                                        <p><input type="radio" id="one" value="false" v-model="color" /></p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-8">

                                        <p>Farbseiten im Inhalt</p>
                                    </div>
                                    <div class="col-1">
                                        <p><input type="radio" id="two" value="true" v-model="color" /></p>
                                    </div>
                                </div>
                            </div>

                            <div v-if="projectType != 3" class="w-100 pt-5"></div>
                            <div v-if="projectType != 3" class="col-7">
                                <h2>5. Papierformat</h2>
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
                                        <p><input type="radio" id="one" value="1" v-model="paperFormat" /></p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-8">

                                        <p>Klavierauszug (19 x 27 cm)</p>
                                    </div>
                                    <div class="col-1">
                                        <p><input type="radio" id="one" value="2" v-model="paperFormat" /></p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-8">

                                        <p>Concert (22,8 x 30,5 cm)</p>
                                    </div>
                                    <div class="col-1">
                                        <p><input type="radio" id="two" value="3" v-model="paperFormat" /></p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-8">

                                        <p>DIN B4 (25 x 35,3 cm)</p>
                                    </div>
                                    <div class="col-1">
                                        <p><input type="radio" id="two" value="4" v-model="paperFormat" /></p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-8">

                                        <p>DIN A3 (29,7 x 42 cm)</p>
                                    </div>
                                    <div class="col-1">
                                        <p><input type="radio" id="one" value="5" v-model="paperFormat" /></p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-8">

                                        <p>Farbseiten im Inhalt</p>
                                    </div>
                                    <div class="col-1">
                                        <p><input type="radio" id="two" value="6" v-model="paperFormat" /></p>
                                    </div>
                                </div>
                            </div>


                            <div v-if="projectType != 3" class="w-100 pt-5"></div>
                            <div v-if="projectType != 3" class="col-7">
                                <h2>6. Wähle die Seitenanzahl</h2>
                                <p>Bitte geben Sie die Gesamtseitenanzahl Ihrer Datei an.
                                    Aus produktionstechnischen Gründen muss diese immer durch 2 (Spiralbindung) bzw. 4
                                    (Klammerheftung) teilbar sein.
                                </p>
                                <p>Sie können zwischen 2 und 400 Seiten Umfang wählen.</p>
                            </div>
                            <div v-if="projectType != 3" class="col-3 pt-5">
                                <p>Seitenanzahl Inhalt:</p>
                            </div>
                            <div v-if="projectType != 3" class="col pt-5">

                                <select v-if="bindingType == 'true'" id="mySelect" class="custom-select selectBtn"
                                    v-model="selectedPagesClip">
                                    <option selected v-bind:value="4"> 4
                                    </option>
                                    <option v-for="item in pages" v-bind:value="item">{{ item }}
                                    </option>
                                </select>
                                <select v-if="bindingType == 'false'" id="mySelect" class="custom-select selectBtn"
                                    v-model="selectedPagesSpiral">
                                    <option selected v-bind:value="2"> 2
                                    </option>
                                    <option v-for="item in pages" v-bind:value="item">{{ item }}
                                    </option>
                                </select>

                            </div>
                            <div v-if="projectType != 3" class="w-100 pt-5"></div>
                            <div v-if="projectType != 3" class="col-7">
                                <h2>7. Bindeart des Hefts</h2>
                                <p>Hier haben Sie die Möglicheit, zwischen den verfügbaren Bindearten zu wählen.
                                <p>

                                    Bitte beachten Sie, dass bei den Formaten DIN B4, DIN A3 und Dirigent sowie bei allen
                                    Querformaten und bei mehr als 88 Seiten Inhalt nur Spiralbindung verfügbar ist.</p>

                                </p>
                            </div>
                            <div v-if="projectType != 3" class="col pt-5">
                                <div class="row mt-3" v-if="format == 'true'">
                                    <div class="col-8">
                                        <p v-if="format == 'true'">Klammerheftung</p>

                                    </div>
                                    <div class="col-1">
                                        <p><input type="radio" id="one" value="true" v-model="bindingType" /></p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-8">

                                        <p>Spiralbindung</p>
                                    </div>
                                    <div class="col-1">
                                        <p><input type="radio" id="two" value="false" v-model="bindingType" /></p>
                                    </div>
                                </div>
                            </div>

                            <div v-if="projectType != 3" class="w-100 pt-5"></div>
                            <div v-if="projectType != 3" class="col-7">
                                <h2>8. Wähle den Umschlag</h2>
                                <p>Unser hochweißer Umschlagkarton mit 260g/m&#178; gibt Farben brillant wieder und besitzt
                                    ein
                                    hervorragendes Aufschlagverhalten. Die einseitig matte Oberfläche lässt sich
                                    hervorragend bedrucken und bricht auch bei starker Beanspruchung nicht auf.</p>
                            </div>
                            <div  v-if="projectType != 3" class="col pt-5">
                                <div class="row mt-3">
                                    <div class="col-8">
                                        <p>Mit Umschlag:</p>
                                    </div>
                                    <div class="col-1">
                                        <p><input type="radio" id="one" value="true" v-model="enveloped" /></p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-8">

                                        <p>Ohne Umschlag:</p>
                                    </div>
                                    <div class="col-1">
                                        <p><input type="radio" id="two" value="false" v-model="enveloped" /></p>
                                    </div>
                                </div>
                            </div>

                            <div v-if="projectType != 3" class="w-100 pt-5"></div>
                            <div v-if="projectType != 3" class="col-7">
                                <h2>9. Lade deine Noten hoch</h2>
                                <p>Hier laden Sie nun die Druckdaten als PDF auf unseren Server – ganz bequem und einfach.
                                    Ihre Daten werden verschlüsselt übertragen.
                                    Wir prüfen diese auf Druckbarkeit und melden uns ggf. per E-Mail, falls etwas nicht
                                    passen sollte.</p>
                            </div>
                            <div v-if="projectType != 3" class="col mt-4">
                                <div class="row">
                                    <div class="col">
                                        <p>Noten-PDF /Inhalt:</p>
                                    </div>
                                    <div class="col-8">
                                        <div v-if="pdfData1 == null" class="row">
                                            <div>
                                                <button class="btn btn uploadBtn" @click="click1"> <img
                                                        src="@/assets/svg/plusBlack.svg" alt="Avatar"
                                                        style="margin-right: 5px;">Datei wählen</button>
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
                                        <p>Noten-PDF /Inhalt:</p>
                                    </div>
                                    <div class="col-8">
                                        <div v-if="pdfData2 == null" class="row">
                                            <div class="" v-if="pdfData2 == null">
                                                <button class="btn btn uploadBtn" @click="click2"> <img
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
                        <div class="row pt-5" v-if="projectType != 1">
                            <div class="col-7">
                                <h2 v-if="projectType == 2">10. Instrumentalstimmen</h2>
                                <h2 v-if="projectType == 3">3. Instrumentalstimmen</h2>
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

                            <div class="col-6">
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
                                                <option selected v-bind:value="4"> 4
                                                </option>
                                                <option v-for="item in pages" v-bind:value="item">{{ item }}
                                                </option>
                                            </select>
                                        </p>
                                        <p>
                                        <div v-if="pdfData3 == null" class="row">
                                            <div class="" v-if="pdfData3 == null">
                                                <button class="btn btn uploadBtn" @click="voiceUpload"> <img
                                                        src="@/assets/svg/plusBlack.svg" alt="Avatar"
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
                                                <button class="btn btn uploadBtn" @click="deletePdf3"
                                                    style="margin-left:5px">
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
                                        style="background-color: black !important;"> <img src="@/assets/svg/iconWhite.svg"
                                            alt="Avatar" style="margin-right: 5px;  ">
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
                                            <th>Aktion:</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(voice, index) in voices">
                                            <td>{{ voice.name }}</td>
                                            <td>{{ voice.pages }}</td>
                                            <td>{{ voice.quantity }}</td>
                                            <td>{{ voice.uploadName }}</td>
                                            <td>
                                                <button @click.prevent="removeVoice(index)" class="btn"
                                                    style="background-color: transparent; padding: 0; margin: 0"><img
                                                        src="@/assets/svg/plusBlack.svg" alt="Avatar"
                                                        style="transform: rotate(45deg);"></button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>

                    <div class="col-4 customBorder">
                        <div id="stickyBar" class="sticky-top">
                            <div class="p-4 green">
                                <div class="row">
                                    <div class="col">
                                        <p>Dein Preis pro Stück:</p>
                                        <h2>€ {{ price.toFixed(2) }}</h2>
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
                                        <h2>1–3 Tage</h2>
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
                            <div class="p-4 pink" style="margin-top: 20px;">

                                <h1 class="heading-grid">
                                    Kostenfreier
                                    Versand
                                </h1>
                                <img src="@/assets/svg/local_shipping.svg" alt="Avatar"
                                    style=" margin-top: 150px; width: 10%; ">
                                <h2 class="mt-2">
                                    Ab 50,- Euro
                                    Einkaufswert
                                </h2>
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
                        <p style="margin-top: 130px;">Um bestmögliche Qualität in der Druckproduktion zu gewährleisten, ist
                            es notwendig, dass die
                            Druckdaten korrekt angelegt sind.
                            Bitte laden Sie die Maßvorgaben herunter und legen Sie Ihre Druckdaten danach an.
                        </p>
                        <button type="button" class="btn btn-dark">
                            <img src="@/assets/svg/plus.svg" alt="Avatar" class="plusBtn">Maßvorgaben herunterladen
                            (PDF)
                        </button>


                    </div>
                    <div class="col customBorder  pl-5  p-4 yellow">
                        <img src="@/assets/svg/mark_email_read.svg" class="mr-2" alt="Avatar">
                        <h2 style="margin-top: 60px;">
                            Sie benötigen Hilfe?
                            Schreiben Sie uns!
                        </h2>
                        <p> Kommen SIe nicht weiter? Gerne sind wir für Sie da. Bitte schreiben Sie uns eine E-Mail:
                        </p>
                        <p class="thick"> fragen@capellaprint.com
                        </p>
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
                    Bitte laden Sie eine Notendatei hoch, bevor Sie das Produkt in Ihren Warenkorb legen
                </p>
                <SfButton square variant="tertiary" class="absolute right-2 top-2" @click="close">
                    Schließen
                </SfButton>
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


export default {
    components: {
        SfModal,
        SfButton,
    },
    data() {
        return {
            price: 4.29,
            isOpen: false,
            enveloped: false,
            discount: 1,
            pagesQuantitiy: 4,
            selectedPagesClip: 4,
            selectedPagesSpiral: 2,
            voiceName: "",
            voicePages: 4,
            voiceQuantity: 4,
            basePrice: 3.85,
            singlePrice: 4.29,
            pagePrice: 0.11,
            quantitiy: 1,
            pdf1: '',
            pdf2: '',
            pdfData1: null,
            pdfData2: null,
            pdfData3: null,
            progress1: null,
            isUpload1: false,
            isUpload2: false,
            isUpload3: false,
            access_token: '',
            projectType: 1,
            uploadValue: 0,
            uploadValue2: 0,
            uploadValue3: 0,
            productName: "",
            format: 'true',
            paperFormat: 1,
            color: false,
            voicePrice: 0,
            bindingType: "true",
            voices: [

            ],
            spiralPages: [
                4, 6, 8, 10,
                12,
                14,
                18,
                20,
                22,
                24,
                26,
                28,
                30,
                32,
                34,
                36,
                38,
                40,
                42,
                44,
                48,
                50,
                52,
                54,
                56,
                58,
                60,
                62,
                64,
                68,
                70,
                82,
                84,
                86,
                88,
                90,
                92,
                94,
                98,
                100,
                102,
                104,
                106,
                108,
                120,
                122,
                124,
                126,
                128,
                130,
                120,
                122,
                124,
                126,
                128,
                130,
                132,
                134,
                136,
                138,
                140,
                142,
                144,
                146,
                148,
                150,



            ],
            clipPages: [
                8,
                12,
                14,
                18,
                22,
                24,
                28,
                32,
                36,
                40,
                44,
                48,
                52,
                54,
                58,
                62,
                64,
                68,
                72,
                76,
                80,
                84,
                88
            ],
            pages: [

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
        this.pages = this.clipPages;
    },
    methods: {
        close() {
            this.isOpen = false;
            document.getElementById("stickyBar").classList.add('sticky-top');
        },
        open() {
            this.isOpen = true;
            document.getElementById("stickyBar").classList.remove('sticky-top');
        },
        createUuid() {
            if (this.pdfData1) {
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
            } else {
                this.isOpen = true;
            }

        },
        createNewProductInStore(productNumber) {
            // const productNumber = 'xxx'
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
                        "properties": [
                            { "id": "4ddf6e278920458cba821346e53b04e9" },
                            { "id": "6f9359239c994b48b7de282ee19a714d" },
                            { "id": "c53fa30db00e4a84b4516f6b07c02e8d" }
                        ],
                        "stock": 10,
                        "taxId": "49ad39168485457a836441d13c6bd473",
                        "active": true,
                        "keywords": "2212",
                        "description": this.pdf1 + ' \n ' + this.pdf2,
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
                                'salesChannelId': 'fac913bddf1244098e07a811fd301f75',
                                'visibility': 30
                            }

                        ]
                    },
                })
            }).then((res) => {
                setTimeout(() => this.getCreatedProduct(productNumber), 50);
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
                    "sw-access-key": 'SWSCUHZMWDM2TTLINJFXMKG3TW'
                },
                data: {
                    "search": productNumber
                }
            }).then((res) => {
                console.log('res.data.elements[0]._uniqueIdentifier');
                console.log(res.data.elements[0]._uniqueIdentifier);
                this.add(res.data.elements[0]._uniqueIdentifier)
            }).catch((error) => {
                //try to fix the error or
                document.getElementById("overlay").style.display = "none";
                console.log(error.message)
            });


        },
        add(id) {
            const contextToken = this.$cookies.get("sw-context-token") || "";
            axios({
                url: 'https://s23511.creoline.cloud/store-api/checkout/cart/line-item', // File URL Goes Here
                method: 'POST',
                headers: {
                    "Accept": 'application/json',
                    "Content-Type": 'application/json',
                    "sw-access-key": 'SWSCUHZMWDM2TTLINJFXMKG3TW',
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
                document.getElementById("overlay").style.display = "none";
                window.location.reload();
            }).catch((error) => {
                //try to fix the error or
                document.getElementById("overlay").style.display = "none";
                console.log(error.message)
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

            this.pagesQuantitiy = pages
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
        deletePdf3: function () {
            db.storage().ref(`uploads/${this.pdfData3.name}`).delete();
            this.pdfData3 = null;
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
                        this.pdf1 = "Notendatei: " + url;
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
                        this.pdf2 = "Umschlagdatei: " + url;
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
                        this.pdf3 = "Umschlagdatei: " + url;
                        this.isUpload3 = false;
                    });
                }
            );
        },
        addVoice() {
            if (this.pdfData3 != null && this.voiceName != "") {
                let _pages = 0,
                    _quantity = 0;
                if (this.voicePages == 4) {
                    _pages = 4
                } else {
                    _pages = this.voicePages
                }
                if (this.voiceQuantity == 4) {
                    _quantity = 4
                } else {
                    _quantity = this.voiceQuantity
                }
                this.voices.push(
                    {
                        name: this.voiceName,
                        pages: _pages,
                        quantity: _quantity,
                        uploadName: this.pdfData3.name
                    }
                )
                this.voiceName = "";
                this.voicePages = 4;
                this.voiceQuantity = 4;
                this.pdfData3 = null;
            } else {
                this.isOpen = true;
            }

        },
        removeVoice(n) {
            this.voices.splice(n, 1);
        }
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
        selectedPagesClip: function (pages) {
            if (pages == 4) {
                this.pagesQuantitiy = 4;
                this.calculatePrice();
            }
            else {
                this.pagesQuantitiy = pages;
                this.calculatePrice();
            }
        },
        selectedPagesSpiral: function (pages) {
            if (pages == 2) {
                this.pagesQuantitiy = 2;
                this.calculatePrice();
            }
            else {
                this.pagesQuantitiy = pages;
                this.calculatePrice();
            }
        },
        quantitiy: function () {
            this.calculatePrice();
        },
        format: function (val) {
            if (val == "false") {
                this.bindingType = false;
            }
        },
        bindingType: function (val) {
            console.log(val);
            if (val == "true") {
                this.pages = this.clipPages;
                this.pagesQuantitiy = 4;
                this.calculatePrice();
            }
            else {
                this.pages = this.spiralPages;
                this.pagesQuantitiy = 2;
                this.calculatePrice();

            }
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