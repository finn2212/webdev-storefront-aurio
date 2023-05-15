<template>
    <div class="container text-center">
        <div class="row">
      <div class="col col-md-4">
        <img src="@/assets/svg/local_library.svg" alt="Avatar" style="margin-bottom: 25px;">
        <h2>
          Noten mit Klammerheftung
          drucken
        </h2>
        <p>
          Der Klassiker: Die am meisten verwendete Bindung für Notenhefte bis 23 x 31 cm und 88 Seiten Inhalt.
        </p>
        <button type="button" class="btn btn-dark">
          <img src="@/assets/svg/plus.svg" alt="Avatar" style="margin-right: 5px;">starte jetzt
        </button>
      </div>
      <div class="col col-md-4 col-sm-8">
        <img src="@/assets/svg/local_library.svg" alt="Avatar" style="margin-bottom: 25px;">
        <h2>
          Noten mit Klammerheftung
          drucken
        </h2>
        <p>
          Der Klassiker: Die am meisten verwendete Bindung für Notenhefte bis 23 x 31 cm und 88 Seiten Inhalt.
        </p>
        <button type="button" class="btn btn-dark">
          <img src="@/assets/svg/plus.svg" alt="Avatar" style="margin-right: 5px;">starte jetzt
        </button>
      </div>
      <div class="col col-md-4 col-sm-8">
        <img src="@/assets/svg/local_library.svg" alt="Avatar" style="margin-bottom: 25px;">
        <h2 c>
          Noten mit Klammerheftung
          drucken
        </h2>
        <p >
          Der Klassiker: Die am meisten verwendete Bindung für Notenhefte bis 23 x 31 cm und 88 Seiten Inhalt.
        </p>
        <button type="button" class="btn btn-dark">
          <img src="@/assets/svg/plus.svg" alt="Avatar" style="margin-right: 5px;">starte jetzt
        </button>
      </div>
    </div>
        <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2">
            <div class="row">
                <div class="col">
                    <h2>Einloggen oder registrieren</h2>
                    <h3>Ich bin bereits Kunde</h3>
                    <p>Einloggen mit E-Mail-Adresse und Passwort</p>
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2">
                        <div class="row">
                            <div class="col">
                                <label for="inputPassword2"></label>
                            <input type="password" class="form-control" id="inputPassword2" placeholder="Password">
                            </div>
                        </div>
                        <div class="col ">
                            <label for="inputPassword2"></label>
                            <input type="password" class="form-control" id="inputPassword2" placeholder="Password">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row row-cols-1 row-cols-sm-1 row-cols-md-1">
                <div class="row">
                    <div class="col">
                        <h2>Einloggen oder registrieren</h2>
                        <h3>Ich bin bereits Kunde</h3>
                        <p>Einloggen mit E-Mail-Adresse und Passwort</p>
                    </div>
                </div>
                <div class="col ">
                    <label for="inputPassword2"></label>
                    <input type="password" class="form-control" id="inputPassword2" placeholder="Password">
                </div>
            </div>
            <div class="col ">
                <label for="inputPassword2"></label>
                <input type="password" class="form-control" id="inputPassword2" placeholder="Password">
            </div>
        </div>




    </div>
</template>
<script>
import { db } from '../firebaseDb';
import 'bootstrap/dist/css/bootstrap.min.css'
export default {
    data() {
        return {


        }

    },
    created() {

    },
    methods: {

    }
}
</script>