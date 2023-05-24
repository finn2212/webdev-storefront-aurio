<template>
  <div class="container">
    <!--Sektion mit 3 Karten und Bider-->
    <section>
      <div class="container justify-content-center">
        <div class="row">
          <div class="col-12 p-0 col-md-8 customBorder">
            <img src="@/assets/images/pic1.png" alt="Avatar" class="img">
          </div>
          <div class="col green p-5 customBorder">
            <h2 class="heading-grid">
              Deine Partituren, perfekt gedruckt.


            </h2>
            <p class="p-grid">
              Jetzt neu:
              Mit deiner capella-Software bist es gewöhnt, Partituren in bester Notensatzmanier erstellen zu können; mit
              capellaprint lässt du diese künftig auch in Musikverlagsqualität drucken.
            </p>
            <div class="row align-items-end">
              <div class="col">
                <NuxtLink class="a" to="/productCustomizer">
                  <button type="button" class="btn btn-dark mt-2 mt-xl-5">
                    <img src="@/assets/svg/plus.svg" alt="Avatar" style="margin-right: 5px;">starte jetzt
                  </button>
                </NuxtLink>

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
          <div class="col">
            <h2>
              Deine capella-Noten günstig drucken
            </h2>
          </div>
        </div>

        <div class="row">
          <div class="col customBorder p-5 blue">
            <img src="@/assets/svg/local_library.svg" alt="Avatar" style="margin-bottom: 25px;">
            <h2 class="heading-grid">
              Noten mit Klammerheftung
              drucken
            </h2>
            <p class="p-grid">
              Der Klassiker: Die am meisten verwendete Bindung für Notenhefte bis 23 x 31 cm und 88 Seiten Inhalt.
            </p>
            <NuxtLink class="a" to="/productCustomizer">
              <button type="button" class="btn btn-dark mt-2 mt-xl-5">
                <img src="@/assets/svg/plus.svg" alt="Avatar" style="margin-right: 5px;">starte jetzt
              </button>
            </NuxtLink>
          </div>
          <div class="col customBorder pl-5  p-5 beige">
            <img src="@/assets/svg/animation.svg" alt="Avatar" style="margin-bottom: 25px;">
            <h2 class="heading-grid">
              Noten mit Klammerheftung
              drucken
            </h2>
            <p class="p-grid">
              Der Klassiker: Die am meisten verwendete Bindung für Notenhefte bis 23 x 31 cm und 88 Seiten Inhalt.
            </p>
            <NuxtLink class="a" to="/productCustomizer">
              <button type="button" class="btn btn-dark mt-2 mt-xl-5">
                <img src="@/assets/svg/plus.svg" alt="Avatar" style="margin-right: 5px;">starte jetzt
              </button>
            </NuxtLink>
          </div>
          <div class="col pl-5  p-5 pink customBorder">
            <img src="@/assets/svg/menu_book.svg" alt="Avatar" style="margin-bottom: 25px;">
            <h2 class="heading-grid">
              Noten mit Klammerheftung
              drucken
            </h2>
            <p class="p-grid">
              Der Klassiker: Die am meisten verwendete Bindung für Notenhefte bis 23 x 31 cm und 88 Seiten Inhalt.
            </p>
            <NuxtLink class="a" to="/productCustomizer">
              <button type="button" class="btn btn-dark mt-2 mt-xl-5">
                <img src="@/assets/svg/plus.svg" alt="Avatar" style="margin-right: 5px;">starte jetzt
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!--Sektion mit 3 Karten und Bider-->
    <section class="pt-5">
      <div class="container justify-content-center">
        <div class="row mt-4">
          <div class="col- customBorder">
            <h2>
              Was ist capellaprint?
            </h2>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-8">
            <div class="row justify-content-center">
              <div class="col customBorder p-5  yellow">
                <img src="@/assets/svg/format_quote.svg" alt="Avatar">
                <h2 class="ps-5 heading-grid">
                  »Die Partituren sind übrigens sensationell in Haptik, Aussehen und Nutzbarkeit.«
                </h2>
                <p class="ps-5"> Alexander Mottok – Chefdirigent, Deutsches Ärzteorchester</p>
              </div>
            </div>
            <div class="row justify-content-center" style="min-height: fit-content;">
              <div class="col  p-0 customBorder">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                  <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                  </ol>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img class="d-block w-100" src="@/assets/images/pic1.png" alt="First slide"
                        style="min-height: 500px;">
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w-100" src="@/assets/images/pic1.png" alt="Second slide"
                        style="min-height: 500px;">
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w-100" src="@/assets/images/pic1.png" alt="Third slide"
                        style="min-height: 500px;">
                    </div>
                  </div>
                  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only"></span>
                  </a>
                  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col customBorder blue p-4">
            <h2 class="heading-grid">
              <img src="@/assets/svg/verified.svg" class="mr-2" alt="Avatar">
              Deine Vorteile
            </h2>
            <div class="row mt-5">
              <div class="col-2">
                <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
              </div>
              <div class="col">
                <h5 style="font-weight: bold">Erstklassiger Notendruck</h5>
                Mit elfenbeinfarbigem Notenpapier, einer praktikablen und langlebigen Bindung und einer gestochen scharfen
                Druckqualität erhältst du eine rundum professionelle Partitur.
              </div>
            </div>
            <div class="row mt-2">
              <div class="col-2">
                <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
              </div>
              <div class="col">
                <h5 style="font-weight: bold"> Musikalientypische Papierformate</h5>

                Musikalientypische Formate vom Klavierauszug (19 x 27 cm), DIN A4, Concertformat / NE (22,8 x 30,5 cm) und
                darüber hinaus sind unser tägliches Geschäft.
              </div>
            </div>
            <div class="row mt-2">
              <div class="col-2">
                <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
              </div>
              <div class="col">
                <h5 style="font-weight: bold">Versandfertig in kürzester Zeit</h5>

                Wir versenden prestissimo: Die meisten unserer Notenausgaben verlassen innerhalb von 48 bis 72 Stunden
                nach
                Bestellung unser Haus.
              </div>
            </div>
            <div class="row mt-2">
              <div class="col-2">
                <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
              </div>
              <div class="col">
                <h5 style="font-weight: bold">Günstige Druckpreise</h5>

                Mit deiner capella-Software erhältst du hohe Qualität zum kleinen Preis.
                Diese Maxime gilt auch hier: Bei uns kannst du dein Notenheft günstig drucken – in Topqualität.
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col customBorder green p-5">
            <h2 class="heading-grid">
              Beste Druckqualität für deine Werke – made in Germany.
            </h2>
            <img src="@/assets/svg/music_note.svg" class="mr-2 mt-4" alt="Avatar">
            <div class="row">
              <div class="col-6 mt-2">
                <p class="p-grid">
                  Für capellaprint haben wir uns mit der spezialisierten Musikaliendruckerei AURIOPRINT aus Bayern
                  zusammengeschlossen. AURIOPRINT fertigt für Musikverlage, Orchester und Komponisten weltweit Noten.
                  Unter
                  der
                  Marke capellaprint bieten wir dir gemeinsam ab sofort bestmögliche Druckqualität für deine eigenen
                  Partituren.
                </p>
              </div>
              <div class="col">

              </div>
            </div>

            <div class="row justify-content-end">
              <div class="col">
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!--Sektion mit 3 Karten und Bider-->
    <section class="pt-5">
      <div class="container justify-content-center">
        <div class="row mt-4">
          <div class="col-8">
            <h2>
              So einfach geht’s
            </h2>
          </div>
        </div>

        <div class="row mt-4">
          <div class="col customBorder p-5 grey">
            <img src="@/assets/svg/function.svg" alt="Avatar" style="margin-bottom: 25px;">
            <h2 class="heading-grid">
              Schritt 1:
              Kalkuliere dein
              Notenprojekt.
            </h2>
            <p class="p-grid">
              Es ist ganz einfach: Mit unserem Kalkulator stellst du dir die perfekte Notenausgabe zusammen.
            </p>
          </div>
          <div class="col customBorder pl-5  p-5 grey">
            <img src="@/assets/svg/backup.svg" alt="Avatar" style="margin-bottom: 25px;">
            <h2 class="heading-grid">
              Schritt 2:
              Lade deine Noten bei capellaprint hoch.
            </h2>
            <p class="p-grid">
              Danach übermittelst du die PDF-Datei(en) deines Werks, die du in capella erstellt hast.
            </p>
          </div>
          <div class="col pl-5  p-5 grey customBorder">
            <img src="@/assets/svg/flight.svg" alt="Avatar" style="margin-bottom: 25px;">
            <h2 class="heading-grid">
              Schritt 3:
              Bestelle deine Noten –
              schon fertig!
            </h2>
            <p class="p-grid">
              Zuletzt bestellst du deine Partituren bequem online. Ein paar Tage später ist die Notenpost schon da!
            </p>
            <NuxtLink class="a" to="/productCustomizer">
              <button type="button" class="btn btn-dark mt-2 mt-xl-5">
                <img src="@/assets/svg/plus.svg" alt="Avatar" style="margin-right: 5px;">starte jetzt
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!--Sektion mit 3 Karten und Bider-->
    <section class="pt-5">
      <div class="container justify-content-center">
        <div class="row justify-content-center pt-5">
          <div class="col-8">
            <h2 class="heading-grid">
              »Ein attraktiver Service für Musiker«
            </h2>
          </div>
          <div class="col">
            <h2 class="heading-grid">
              Unser Tipp
            </h2>
          </div>
        </div>
        <div class="row justify-content-center mt-4">
          <div class="col-8">
            <div class="row justify-content-center">
              <div class="col customBorder p-5 yellow">
                <img src="@/assets/svg/format_quote.svg" alt="Avatar">
                <h2 class="ps-5 heading-grid">
                  »Die Partituren sind übrigens sensationell in Haptik, Aussehen und Nutzbarkeit.«
                </h2>
                <p class="ps-5"> Dr. Dominik Hörnel & das Team der capella Software AG</p>
              </div>

            </div>
            <div class="row justify-content-center">
              <div class="col p-0 customBorder">
                <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">
                  <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators2" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators2" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators2" data-slide-to="2"></li>
                  </ol>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img class="d-block w-100" src="@/assets/images/pic1.png" alt="First slide"
                        style="min-height: 650px;">
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w-100" src="@/assets/images/pic1.png" alt="Second slide"
                        style="min-height: 650px;">
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w-100" src="@/assets/images/pic1.png" alt="Third slide"
                        style="min-height: 650px;">
                    </div>
                  </div>
                  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only"></span>
                  </a>
                  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col customBorder red p-4">
            <img src="@/assets/svg/redeem.svg" alt="Avatar">
            <h1 class="mt-5">
              Musterheft
              anfordern
            </h1>
            <p class="">
              Damit du nicht die Katze im Sack kaufst, haben wir ein Musterheft vorbereitet, mit dem du dich von der
              Qualität unseres Notendrucks überzeugen kannst.
            </p>
            <div class="row justify-content-end">
              <div class="col mt-3 ">
                <button type="button" class="btn btn-dark">
                  <img src="@/assets/svg/plus.svg" alt="Avatar" style="margin-right: 5px;">Musterheft kostenfrei bestellen
                </button>
              </div>
            </div>

            <img src="@/assets/svg/contact_support.svg" alt="Avatar" class="mt-5">
            <div class="accordion  accordion-flush" id="accordionFlushExample">
              <div class="accordion-item ">
                <h2 class="accordion-header">
                  <button @click="open(1)" id="flush-collapseOneBtn" class="accordion-button bred collapsed"
                    type="button">
                    Gehe ich ein Abonnement ein?
                  </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse open" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">Nein, capellaprint ist nicht mit einem Abonnement verbunden. Für den
                    Bestellprozess kannst du auf Wunsch zwar ein kostenfreies Kundenkonto erstellen, dies verpflichtet
                    dich
                    aber zu nichts und ist jederzeit wieder deaktivierbar.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button @click="open(2)" class="accordion-button bred collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Kann ich vorab Druckmuster bekommen?
                  </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">Nein, capellaprint ist nicht mit einem Abonnement verbunden. Für den
                    Bestellprozess kannst du auf Wunsch zwar ein kostenfreies Kundenkonto erstellen, dies verpflichtet
                    dich
                    aber zu nichts und ist jederzeit wieder deaktivierbar.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button @click="open(3)" class="accordion-button bred collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Werden meine Druckdaten kontrolliert?
                  </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">Nein, capellaprint ist nicht mit einem Abonnement verbunden. Für den
                    Bestellprozess kannst du auf Wunsch zwar ein kostenfreies Kundenkonto erstellen, dies verpflichtet
                    dich
                    aber zu nichts und ist jederzeit wieder deaktivierbar.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button @click="open(4)" class="accordion-button bred collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Wie erfolgt die Bestellung, was kostet es?
                  </button>
                </h2>
                <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">Nein, capellaprint ist nicht mit einem Abonnement verbunden. Für den
                    Bestellprozess kannst du auf Wunsch zwar ein kostenfreies Kundenkonto erstellen, dies verpflichtet
                    dich
                    aber zu nichts und ist jederzeit wieder deaktivierbar.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button @click="open(5)" class="accordion-button bred collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFiv" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Kann ich gedruckte Noten zurückgeben?
                  </button>
                </h2>
                <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">Nein, capellaprint ist nicht mit einem Abonnement verbunden. Für den
                    Bestellprozess kannst du auf Wunsch zwar ein kostenfreies Kundenkonto erstellen, dies verpflichtet
                    dich
                    aber zu nichts und ist jederzeit wieder deaktivierbar.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--Sektion mit 3 Karten und Bider-->
    <section class="pt-5">
      <div class="container justify-content-center">
        <div class="row mt-4">
          <div class="col-8">
            <h2>
              Unsere Topseller
            </h2>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col cardcol customBorder">
            <div class="card">
              <img class="card-img-top" src="@/assets/images/pic4.png" alt="Card image cap">
              <div class="card-body blue" style="min-height: 290px;">
                <h5 class="card-title">Notenheft DIN A4
                  Klammerheftung</h5>
                <div class="row mt-4">
                  <div class="col-1">
                    <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
                  </div>
                  <div class="col">
                    <p class="card-text">
                      Umschlag aus matt-brillantem Chromokarton mit 240g Stärke
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-1">
                    <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
                  </div>
                  <div class="col">
                    <p class="card-text">
                      Innenteil mit klassisch gelblichem Notenpapier
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-1">
                    <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
                  </div>
                  <div class="col">
                    <p class="card-text">
                      Rechteckiger Heftrücken für ein hochprofessionelles Aussehen
                    </p>
                  </div>
                </div>
                <NuxtLink class="a pt-3" to="/productCustomizer">
                  <button type="button" class="btn btn-dark" style="margin-top: 40px;">
                    <img src="@/assets/svg/plus.svg" alt="Avatar" style="margin-right: 10px;">Jetzt
                    Drucken
                  </button>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="col cardcol customBorder">
            <div class="card">
              <img class="card-img-top" src="@/assets/images/pic5.png" alt="Card image cap">
              <div class="card-body blue" style="min-height: 290px;">
                <h5 class="card-title">Stimmenheft DIN A4
                  Klammerheftung
                  ohne Umschlag</h5>
                <div class="row mt-4">
                  <div class="col-1">
                    <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
                  </div>
                  <div class="col">
                    <p class="card-text">
                      Blendfreies & raschelarmes Notenpapier mit gelblicher Färbung
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-1">
                    <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
                  </div>
                  <div class="col">
                    <p class="card-text">
                      Gestochen scharfer Notentext in sattem Schwarz
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-1">
                    <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
                  </div>
                  <div class="col">
                    <p class="card-text">
                      Hergestellt nach den strengen Regularien der Deutschen Orchestervereinigung e.V.
                    </p>
                  </div>
                </div>
                <NuxtLink class="a" to="/productCustomizer">
                  <button type="button" class="btn btn-dark mt-3">
                    <img src="@/assets/svg/plus.svg" alt="Avatar" style="margin-right: 10px;">Jetzt
                    Drucken
                  </button>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="col cardcol customBorder">
            <div class="card">
              <img class="card-img-top" src="@/assets/images/pic6.png" alt="Card image cap">
              <div class="card-body pink " style="min-height: 290px;">
                <h5 class="card-title">Notenheft DIN A4
                  Klammerheftung</h5>

                <div class="row mt-4">
                  <div class="col-1">
                    <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
                  </div>
                  <div class="col">
                    <p class="card-text">
                      2–400 Seiten Inhalt + Deckblatt und Rückwand möglich
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-1">
                    <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
                  </div>
                  <div class="col">
                    <p class="card-text">
                      Deckblatt zusätzlich mit transparenter Folie möglich
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-1">
                    <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
                  </div>
                  <div class="col">
                    <p class="card-text">
                      Inhalt: 90g Notenpapier elfenbeinfarben, schwarzweiß bedruckbar
                    </p>
                  </div>
                </div>
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
    </section>
  </div>
</template>
 
<script>
import { getApplicationContext } from "@shopware-pwa/composables"
import SwButton from "@/components/atoms/SwButton.vue"
import { invokePost } from "@shopware-pwa/shopware-6-client"
import { onMounted, ref } from "@vue/composition-api"
import 'bootstrap/dist/css/bootstrap.min.css'


export default {
  name: "home",
  setup(props, { root }) {
    // get the configured api client
    const { apiInstance } = getApplicationContext(root, "home")
  },
  data: {
    isOpenOne: true,
    isOpenTwo: false,
    isOpenThree: false,
    isOpenFour: false,
    isOpenFive: false,
    slideIndex: 1
  },
  methods: {
    open: function (num) {
      if (num == 1) {
        if (this.isOpenOne) {
          document.getElementById("flush-collapseOne").classList.replace('open', 'collapse');
          this.isOpenOne = false;
        } else {
          document.getElementById("flush-collapseOne").classList.replace('collapse', 'open');
          document.getElementById("flush-collapseTwo").classList.replace('open', 'collapse');
          document.getElementById("flush-collapseThree").classList.replace('open', 'collapse');
          document.getElementById("flush-collapseFour").classList.replace('open', 'collapse');
          document.getElementById("flush-collapseFive").classList.replace('open', 'collapse');
          this.isOpenOne = true;
          this.isOpenTwo = false;
          this.isOpenThree = false;
          this.isOpenFour = false;
          this.isOpenFive = false;
        }


      }
      if (num == 2) {
        if (this.isOpenTwo) {
          document.getElementById("flush-collapseTwo").classList.replace('open', 'collapse');
          this.isOpenTwo = false;
        } else {
          document.getElementById("flush-collapseTwo").classList.replace('collapse', 'open');
          document.getElementById("flush-collapseOne").classList.replace('open', 'collapse');
          document.getElementById("flush-collapseThree").classList.replace('open', 'collapse');
          document.getElementById("flush-collapseFour").classList.replace('open', 'collapse');
          document.getElementById("flush-collapseFive").classList.replace('open', 'collapse');
          this.isOpenTwo = true;
          this.isOpenOne = false;
          this.isOpenThree = false;
          this.isOpenFour = false;
          this.isOpenFive = false;
        }

      }
      if (num == 3) {
        if (this.isOpenThree) {
          document.getElementById("flush-collapseThree").classList.replace('open', 'collapse');
          this.isOpenThree = false;
        } else {
          document.getElementById("flush-collapseThree").classList.replace('collapse', 'open');
          document.getElementById("flush-collapseTwo").classList.replace('open', 'collapse');
          document.getElementById("flush-collapseOne").classList.replace('open', 'collapse');
          document.getElementById("flush-collapseFour").classList.replace('open', 'collapse');
          document.getElementById("flush-collapseFive").classList.replace('open', 'collapse');
          this.isOpenThree = true;
          this.isOpenOne = false;
          this.isOpenTwo = false;
          this.isOpenFour = false;
          this.isOpenFive = false;
        }

      }
      if (num == 4) {
        if (this.isOpenFour) {
          document.getElementById("flush-collapseFour").classList.replace('open', 'collapse');
          this.isOpenFour = false;
        } else {
          document.getElementById("flush-collapseFour").classList.replace('collapse', 'open');
          document.getElementById("flush-collapseTwo").classList.replace('open', 'collapse');
          document.getElementById("flush-collapseOne").classList.replace('open', 'collapse');
          document.getElementById("flush-collapseThree").classList.replace('open', 'collapse');
          document.getElementById("flush-collapseFive").classList.replace('open', 'collapse');
          this.isOpenThree = false;
          this.isOpenOne = false;
          this.isOpenTwo = false;
          this.isOpenFour = true;
          this.isOpenFive = false;
        }

      }
      if (num == 5) {
        if (this.isOpenFive) {
          document.getElementById("flush-collapseFive").classList.replace('open', 'collapse');
          this.isOpenFive = false;
        } else {
          document.getElementById("flush-collapseFive").classList.replace('collapse', 'open');
          document.getElementById("flush-collapseTwo").classList.replace('open', 'collapse');
          document.getElementById("flush-collapseOne").classList.replace('open', 'collapse');
          document.getElementById("flush-collapseFour").classList.replace('open', 'collapse');
          document.getElementById("flush-collapseThree").classList.replace('open', 'collapse');
          this.isOpenThree = false;
          this.isOpenOne = false;
          this.isOpenTwo = false;
          this.isOpenFour = false;
          this.isOpenFive = true;
        }

      }


    },
    plusSlides: function (n) {
      this.showSlides(this.slideIndex);
      this.showSlides(this.slideIndex += n);
    },
    currentSlide: function (n) {
      this.showSlides(this.slideIndex = n);
    },
    showSlides: function (n) {
      debugger;
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) { this.slideIndex = 1 }
      if (n < 1) { this.slideIndex = slides.length }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[this.slideIndex - 1].style.display = "block";
      dots[this.slideIndex - 1].className += " active";
    }
  }


}
</script>
 
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

.card-img-top {
  border-radius: 0px;
}

.card {
  margin: 0px;
  border-radius: 0px;
  padding: 0px;
  border-width: 0px !important;
}

.cardcol {
  padding: 0px
}



.heading {
  margin-left: 20px
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


.card {
  margin: 0px;
  border-radius: 0px;
  padding: 0px;
}





.fit {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden
}

.imgsmall {
  text-align: left;
  width: 100%;
}

@media only screen and (min-width: 1024px) {
  .btnContainer {
    margin-top: 45%
  }

}

* {
  box-sizing: border-box
}

/* Slideshow container */
.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}

/* Hide the images by default */
.mySlides {
  display: none;
}

/* Next & previous buttons */
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active,
.dot:hover {
  background-color: #717171;
}

/* Fading animation */
.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {
    opacity: .4
  }

  to {
    opacity: 1
  }
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
</style>