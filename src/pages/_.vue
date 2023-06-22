<template>
  <div class="container top">
    <!--Sektion mit 3 Karten und Bider-->
    <section>
      <div class="container justify-content-center">
        <div class="row">
          <div class="col-12 col-xl-8 p-0 customBorder">
            <img src="@/assets/images/pic1.png" alt="Avatar" class="img">
          </div>
          <div class="col green p-5 customBorder">
            <h2 class="heading-grid">
              <i18n path="your score printed" :tag="false">
              </i18n>
            </h2>
            <p class="p-grid">
            <p class="thick" style="margin:0px">
              Jetzt neu:
            </p>
            Mit Ihrer capella-Software sind Sie es gewohnt, Partituren in bester Notensatzmanier erstellen zu können; mit
            capellaprint lassen Sie diese künftig auch in Musikverlagsqualität drucken.
            </p>
            <div class="row align-items-end">
              <div class="col">
                <NuxtLink class="a" to="/productCustomizer">
                  <button type="button" class="btn btn-dark mt-2">
                    <img src="@/assets/svg/plus.svg" alt="Avatar" class="plusBtn">
                    <i18n path="start now" :tag="false"> </i18n>
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
          <div class="col customBorder blockStartMarign">

            <h2 class="heading-grid">
              Ihr Druckservice für capella-Musiknoten
            </h2>
            <p class="p-grid pt-3">
              capellaprint ist der Druckservice für capella-User: Eine Kooperation von capella-software und AURIOPRINT.
              Günstig Notenhefte drucken – das ist das Motto unseres neuen Services.
            </p>

          </div>
          <div class="col customBorder pl-5  p-5 blue">
            <img src="@/assets/svg/audio_file.svg" alt="Avatar" style="margin-bottom: 25px;">
            <h2 class="heading-grid">
              Noten mit Klammerheftung
              drucken
            </h2>
            <p class="p-grid">
              Der Klassiker: Die am meisten verwendete Bindung für Notenhefte bis 23 x 31 cm und 88 Seiten Inhalt.
            </p>
            <NuxtLink class="a" to="/productCustomizer">
              <button type="button" class="btn btn-dark mt-5 pt-2">
                <img src="@/assets/svg/plus.svg" alt="Avatar" class="plusBtn">
                <i18n path="start now" :tag="false"> </i18n>
              </button>
            </NuxtLink>
          </div>
          <div class="col pl-5  p-5 brwon customBorder">
            <img src="@/assets/svg/animation.svg" alt="Avatar" style="margin-bottom: 25px;">
            <h2 class="heading-grid">
              Noten mit
              Spiralbindung
              drucken
            </h2>
            <p class="p-grid">
              Für die großen Werke: Unsere Coilbindung lässt sich fast geräuschlos umblättern und fasst 400 Seiten bis zu
              DIN A3+.
            </p>
            <NuxtLink class="a" to="/productCustomizer">
              <button type="button" class="btn btn-dark mt-5">
                <img src="@/assets/svg/plus.svg" alt="Avatar" class="plusBtn">
                <i18n path="start now" :tag="false"> </i18n>
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
          <div class="col blockStart customBorder">
            <h2>
              Was ist capellaprint?
            </h2>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-12 col-xl-8">
            <div class="row justify-content-center">
              <div class="col customBorder  yellow">
                <img src="@/assets/svg/format_quote.svg" alt="Avatar" class="ms-5 mt-5">
                <div class="slideshow-container mb-5">
                  <div class="mySlides">
                    <div class="ps-5">
                      <p class="p-grid">
                      <h5>»Die Partituren sind übrigens sensationell in Haptik, <br> Aussehen und Nutzbarkeit.«</h5>
                      <p class="thick" style="margin:0px;  display: inline;">
                        Alexander Mottok
                      </p>
                      – Chefdirigent, Deutsches Ärzteorchester
                      </p>
                    </div>
                  </div>
                  <div class="mySlides">
                    <div >
                      <div class="ps-5 ">
                        <p class="p-grid">
                        <h5>»Voll krasse Quailität.«</h5>
                        <p class="thick" style="margin:0px;  display: inline;">
                          Peter Meyer
                        </p>
                        – Testuser, Deutsches Ärzteorchester
                        </p>
                      </div>
                    </div>

                  </div>
                  <a class="prev" style="color: black; font-size: 15px;" @click="plusSlides(-1)">❮</a>
                  <a class="next" style="color: black; font-size: 15px;" @click="plusSlides(1)">❯</a>
                </div>

              </div>
            </div>
            <div class="row justify-content-center" style="min-height: fit-content;">
              <div class="col  p-0 customBorder">

                <img src="@/assets/images/pic2.png" alt="Avatar" class="img" style="width: 100%; height: 100%;">

              </div>
            </div>
          </div>
          <div class="col customBorder green p-4">
            <h2 class="heading-grid">
              <img src="@/assets/svg/verified.svg" class="mr-2" alt="Avatar">
              Ihre Vorteile
            </h2>
            <div class="row" style="margin-top: 50px">
              <div class="col-2">
                <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
              </div>
              <div class="col">
                <p class="thick" style="margin: 0px;"> Erstklassiger Notendruck </p>
                <p>
                  Mit elfenbeinfarbigem Notenpapier, einer praktikablen und langlebigen Bindung und einer gestochen
                  scharfen Druckqualität erhalten Sie eine rundum professionelle Partitur.
                </p>
              </div>
            </div>
            <div class="row mt-2">
              <div class="col-2">
                <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
              </div>
              <div class="col">
                <p class="thick" style="margin: 0px;">Musikalientypische Papierformate</p>
                <p>
                  Musikalientypische Formate vom Klavierauszug (19 x 27 cm), DIN A4, Concertformat / NE (22,8 x 30,5 cm)
                  und darüber hinaus sind unser tägliches Geschäft.
                </p>
              </div>
            </div>
            <div class="row mt-2">
              <div class="col-2">
                <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
              </div>
              <div class="col">
                <p class="thick" style="margin: 0px;">Versandfertig in kürzester Zeit</p>
                <p>
                  Wir versenden prestissimo: Die meisten unserer Notenausgaben verlassen innerhalb von 48 bis 72 Stunden
                  nach Bestellung unser Haus.
                </p>
              </div>
            </div>
            <div class="row mt-2">
              <div class="col-2">
                <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
              </div>
              <div class="col">
                <p class="thick" style="margin: 0px;">Kauf auf Rechnung & Lastschrift</p>
                <p>
                  Die beliebteste Zahlart in Deutschland – natürlich auch bei capellaprint! Mit unserem Paymentpartner
                  genießen Sie 14 Tage Zahlungsziel nach Warenerhalt.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col customBorder pink p-4">
            <h2 class="heading-grid">
              Beste Druckqualität für Ihre Noten – made in Germany.
            </h2>




            <div class="row mt-3">
              <div class="col-7">
                <p class="p-grid">
                  Für capellaprint haben sich capella-software und die spezialisierte Musikaliendruckerei AURIOPRINT aus
                  Bayern zusammengeschlossen. AURIOPRINT fertigt für Musikverlage, Orchester und Komponisten weltweit
                  Noten. Unter der Marke capellaprint bieten wir Ihnen gemeinsam ab sofort die bestmögliche Druckqualität
                  für Ihre eigenen Partituren.
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
              Notenprojekt kalkulieren.
            </h2>
            <p class="p-grid">
              Es ist ganz einfach: Mit unserem Kalkulator stellen Sie sich die perfekte Notenausgabe zusammen.
            </p>
          </div>
          <div class="col customBorder pl-5  p-5 grey">
            <img src="@/assets/svg/backup.svg" alt="Avatar" style="margin-bottom: 25px;">
            <h2 class="heading-grid">
              Schritt 2:
              Laden Sie Ihre Noten-PDF hoch.
            </h2>
            <p class="p-grid">
              Als zweiten Schritt übermitteln Sie uns die PDF-Datei(en) Ihres Werks, die Sie in capella erstellt haben.
            </p>
          </div>
          <div class="col pl-5  p-5 grey customBorder">
            <img src="@/assets/svg/flight.svg" alt="Avatar" style="margin-bottom: 25px;">
            <h2 class="heading-grid">
              Schritt 3:
              Bestellen – schon fertig!
            </h2>
            <p class="p-grid">
              Zuletzt bestellen Sie Ihre Noten ganz bequem online. Ein paar Tage später ist die Musikpost schon da!
            </p>
            <NuxtLink class="a" to="/productCustomizer">
              <button type="button" class="btn btn-dark mt-2 mt-xl-5">
                <img src="@/assets/svg/plus.svg" alt="Avatar" class="plusBtn">
                <i18n path="start now" :tag="false"> </i18n>
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
          <div class="col-12 col-xl-8">
            <div class="row">
              <div class="col customBorder p-0">
                <h2 class="heading-grid">
                  »Ein attraktiver Service für Musiker«
                </h2>
                <div class="yellow p-4">
                  <img src="@/assets/svg/format_quote.svg" alt="Avatar">
                  <div class="slideshow-container">
                    <div class="mySlides2">
                      <div style="padding: 15px">
                        <p class="p-grid">
                          <div class="row ms-3 me-3">
                        <h5 style="line-height: 1.5;">»capellaprint ist ein attraktiver Service und hervorragend geeignet, um aus
                          Ihren Partituren das
                          Optimum herauszuholen.«</h5>
                        </div>

                        <p class="thick ms-4 ps-1" style="margin:0px;  display: inline;">
                          Dr. Dominik Hörnel,
                        </p>
                        Vorstandsvorsitzender, capella-software AG
                        </p>
                      </div>
                    </div>
                    <div class="mySlides2">
                      <div>
                        <div style="padding: 15px">
                        <p class="p-grid">
                          <div class="row ms-3 me-3">
                        <h5 style="line-height: 1.5;">»Es macht mich stolz, mit unserer Musikaliendruckerei einen echten Mehrwert für alle capella-Nutzer:innen bieten zu können.«</h5>
                        </div>

                        <p class="thick ms-4 ps-1" style="margin:0px;  display: inline;">
                          Sebastian Gabriel, 
                        </p>
                        Geschäftsführer AURIOPRINT
                        </p>
                      </div>
                      </div>
                    </div>
                    <a class="prev" style="color: black; font-size: 15px;" @click="plusSlides(-1)">❮</a>
                    <a class="next" style="color: black; font-size: 15px;" @click="plusSlides(1)">❯</a>
                  </div>

                </div>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col p-0 customBorder">
              
                <div v-if="slideIndex == 1">
                  <img src="@/assets/images/pic3.png" alt="Avatar" class="img" style="width: 100%; height: 100%;">
                </div>
                <div v-if="slideIndex == 2">
                  <img src="@/assets/images/sebastianQuote.jpeg" alt="Avatar" class="img" style="width: 100%; height: 100%;">
                </div>
              
              
              </div>
            </div>
          </div>
          <div class="col p-0">
            <h2 class="heading-grid ms-3">
              Unser Tipp
            </h2>
            <div class="customBorder blue p-4">

              <img src="@/assets/svg/redeem.svg" alt="Avatar">
              <h1 class="mt-5" style="font-size: 60px;">
                Musterheft
                anfordern
              </h1>
              <p class="">
                Damit Sie nicht die Katze im Sack kaufen, haben wir ein Musterheft vorbereitet, mit dem Sie sich von der
                Qualität unseres Notendrucks überzeugen können.
              </p>
              <div class="row justify-content-end">
                <div class="col mt-2 ">
                  <button type="button" class="btn btn-dark" @click="addToCart">
                    <img src="@/assets/svg/plus.svg" alt="Avatar" class="plusBtn">Musterheft
                    kostenfrei bestellen
                  </button>

                </div>
              </div>

              <img src="@/assets/svg/contact_support.svg" alt="Avatar" class="mt-4">
              <div class="accordion  accordion-flush" id="accordionFlushExample">
                <div class="accordion-item mt-3">
                  <h2 class="accordion-header thick">
                    <button @click="open(1)" id="flush-collapseOneBtn" class="accordion-button bred collapsed"
                      type="button" style="padding-bottom: 0px;">
                      <p class="thick"> Gehe ich ein Abonnement ein?</p>

                    </button>
                  </h2>
                  <div id="flush-collapseOne" class="accordion-collapse open" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                      <p class="small">
                        Nein, capellaprint ist nicht mit einem Abonnement verbunden. Für den
                        Bestellprozess können Sie auf Wunsch zwar ein kostenfreies Kundenkonto erstellen, dies
                        verpflichtet
                        Sie aber zu nichts und ist jederzeit wieder deaktivierbar.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header thick">
                    <button @click="open(2)" class="accordion-button bred collapsed" type="button"
                      data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false"
                      aria-controls="flush-collapseTwo">
                      <p class="thick"> Kann ich vorab Druckmuster bekommen?</p>

                    </button>
                  </h2>
                  <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                      <p class="small">
                        Ja natürlich. Gerne senden wir Ihnen Muster unserer exzellenten Notendrucke per Post zu. Bitte
                        wenden Sie sich hierfür an info@capellaprint.com. Vielen Dank!
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header thick">
                    <button @click="open(3)" class="accordion-button bred collapsed" type="button"
                      data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false"
                      aria-controls="flush-collapseThree">
                      <p class="thick"> Werden meine Druckdaten kontrolliert? </p>
                    </button>
                  </h2>
                  <div id="flush-collapseThree" class="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                      <p class="small">
                        Ja. Jede hochgeladene PDF-Datei wird von unseren Systemen standardisiert kontrolliert und ggf.
                        gleich korrigiert, um ein professionelles Druckbild zu gewährleisten. Sollten Datenfehler ein
                        manuelles Eingreifen notwendig machen, wird sich ein Mitarbeiter vor Ausführung der Produktion mit
                        Ihnen per E-Mail in Verbindung setzen. Bitte beachten Sie unbedingt unsere Druckdatenvorgaben!
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header thick">
                    <button @click="open(4)" class="accordion-button bred collapsed" type="button"
                      data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false"
                      aria-controls="flush-collapseTwo">
                      <p class="thick"> Wie erfolgt die Bestellung, was kostet es? </p>
                    </button>
                  </h2>
                  <div id="flush-collapseFour" class="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample">
                    <p class="small">
                      Transparenz für unsere Kunden ist unser Leitmotiv. capellaprint garantiert
                      Ihnen dauerhaft niedrige Preise ohne versteckte Zusatzkosten. Die Nutzung unseres Druckportals ist
                      selbstverständlich kostenfrei.</p>
                    <br>
                    <p class="small">
                      Sie bezahlen, wie im normalen Online-Shopping auch, bei der Bestellung Ihrer Notenausgaben. Hierfür
                      haben Sie die Wahl zwischen den sicheren Zahlungsarten PayPal, Klarna Rechnung und Kreditkarte.
                    </p>
                    <div class="accordion-body">
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header thick">
                    <button @click="open(5)" class="accordion-button bred collapsed" type="button"
                      data-bs-toggle="collapse" data-bs-target="#flush-collapseFiv" aria-expanded="false"
                      aria-controls="flush-collapseTwo">
                      <p class="thick"> Kann ich gedruckte Noten zurückgeben? </p>
                    </button>
                  </h2>
                  <div id="flush-collapseFive" class="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                      <p class="small">
                        Ihre Partituren werden nach Ihren Vorgaben individuell für Sie gefertigt. Ein Rückgaberecht ist
                        deshalb leider nicht möglich. Sollten wir trotz korrekter Druckdaten von Ihnen fehlerhaft drucken,
                        liefern wir selbstverständlich kostenfrei Ersatz.
                      </p>
                    </div>
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
          <div class="col-12 col-lg-4  cardcol customBorder">
            <div class="card">
              <img class="card-img-top" src="@/assets/images/pic4.png" alt="Card image cap">
              <div class="card-body blue p-5" style="min-height: 290px;">
                <h2 class="card-title">Notenheft DIN A4
                  Klammerheftung</h2>
                <div class="row mt-5">
                  <div class="col-1">
                    <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
                  </div>
                  <div class="col">
                    <p class="card-text">
                      Umschlag aus matt-brillantem Chromokarton mit 260g Stärke
                    </p>
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-1">
                    <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
                  </div>
                  <div class="col">
                    <p class="card-text">
                      Innenteil mit klassisch gelblichem Notenpapier
                    </p>
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-1">
                    <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
                  </div>
                  <div class="col">
                    <p class="card-text">
                      Rechteckiger Heftrücken für ein hochprofessionelles Aussehen
                    </p>
                  </div>
                </div>
                <NuxtLink class="a pt-5" to="/productCustomizer">
                  <button type="button" class="btn btn-dark mt-5" style="margin-top: 53px !important;">
                    <img src="@/assets/svg/plus.svg" alt="Avatar" class="plusBtn">
                    <i18n path="print now" :tag="false"> </i18n>
                  </button>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-4  cardcol customBorder">
            <div class="card">
              <img class="card-img-top" src="@/assets/images/pic5.png" alt="Card image cap">
              <div class="card-body blue p-5" style="min-height: 290px;">
                <h2 class="card-title">Stimmenheft DIN A4
                  Klammerheftung
                  ohne Umschlag</h2>
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
                <div class="row mt-3">
                  <div class="col-1">
                    <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
                  </div>
                  <div class="col">
                    <p class="card-text">
                      Gestochen scharfer Notentext in sattem Schwarz
                    </p>
                  </div>
                </div>
                <div class="row mt-3">
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
                    <img src="@/assets/svg/plus.svg" alt="Avatar" class="plusBtn">
                    <i18n path="print now" :tag="false"> </i18n>
                  </button>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-4  cardcol customBorder">
            <div class="card">
              <img class="card-img-top" src="@/assets/images/pic6.png" alt="Card image cap">
              <div class="card-body pink p-5 " style="min-height: 290px;">
                <h2 class="card-title">Notenbuch DIN A4
                  Spiralbindung hoch</h2>

                <div class="row mt-5">
                  <div class="col-1">
                    <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
                  </div>
                  <div class="col">
                    <p class="card-text">
                      2–400 Seiten Inhalt + Deckblatt und Rückwand möglich
                    </p>
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-1">
                    <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
                  </div>
                  <div class="col">
                    <p class="card-text">
                      Deckblatt zusätzlich mit transparenter Folie möglich
                    </p>
                  </div>
                </div>
                <div class="row mt-3">
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
                  <button type="button" class="btn btn-dark mt-4" style="margin-bottom: 5px;">
                    <img src="@/assets/svg/plus.svg" alt="Avatar" class="plusBtn">
                    <i18n path="print now" :tag="false"> </i18n>
                  </button>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <SfModal v-model="isOpen" class="max-w-[90%] md:max-w-lg" tag="section" role="alertdialog"
      aria-labelledby="promoModalTitle" aria-describedby="promoModalDesc">
      <header>

        <p id="promoModalTitle" class="font-bold typography-headline-4 md:typography-headline-3">
          {{ modalMessage }}
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
import SwButton from "@/components/atoms/SwButton.vue"
import { invokePost } from "@shopware-pwa/shopware-6-client"
import { onMounted, ref } from "@vue/composition-api"
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';

import { SfModal, SfButton } from "@storefront-ui/vue"


export default {
  name: "home",
  setup(props, { root }) {
    // get the configured api client
    const { apiInstance } = getApplicationContext(root, "home");

  },
  components: {
    SfModal,
    SfButton,
  },
  data() {
    return {
      isOpenOne: true,
      isOpenTwo: false,
      isOpenThree: false,
      isOpenFour: false,
      isOpenFive: false,
      slideIndex: 1,
      modalMessage: "Kostenloses Musterheft wurde dem Warenkorb hinzugefügt",
      isOpen: false
    }
  },
  mounted() {
    this.showSlides();
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
    close() {
      this.isOpen = false;
      window.location.reload();
    },
    cart() {
      console.log("cart")
    },
    addToCart() {
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
              id: 'edbbd21060624c8ab41b6a6187dbec79',
              quantity: 1,
              referencedId: 'edbbd21060624c8ab41b6a6187dbec79',
              type: "product",
            }
          ]
        }
      }).then((res) => {


        this.isOpen = true;
      }).catch((error) => {
        //try to fix the error or

        console.log(error.message);
      });

    },
    // Next/previous controls
    plusSlides(n) {
      this.showSlides(this.slideIndex += n);
    },
    // Thumbnail image controls
    currentSlide(n) {
      this.showSlides(this.slideIndex = n);
    },
    showSlides(n) {
      this.slideIndex = 1
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let slides2 = document.getElementsByClassName("mySlides2");
      if (n > slides.length) { this.slideIndex = 1 }
      if (n < 1) { this.slideIndex = slides.length }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[this.slideIndex - 1].style.display = "block";

      if (n > slides2.length) { this.slideIndex = 1 }
      if (n < 1) { this.slideIndex = slides.length }
      for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
      }
      slides2[this.slideIndex - 1].style.display = "block";
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

.p-5 {
  padding: 35px !important;
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

.accordion-button {
  padding: 5px;
}

/* Fading animation */
.fade {
  animation-name: fade;
  animation-duration: 30s;
}

@keyframes fade {
  from {
    opacity: .4
  }

  to {
    opacity: 1
  }
}
</style>