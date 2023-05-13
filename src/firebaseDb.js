import firebase from 'firebase'
import 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyARlD478BuV8WtMrjald8lxx8JMu8cxklk",
  authDomain: "pocselfpublish.firebaseapp.com",
  databaseURL: "https://pocselfpublish-default-rtdb.firebaseio.com",
  projectId: "pocselfpublish",
  storageBucket: "pocselfpublish.appspot.com",
  messagingSenderId: "4689748858",
  appId: "1:4689748858:web:b72d80c7aa6d2515b4ecc3",
  measurementId: "G-VCH5J9ZH1J"
};



let firebaseApp
if (!firebase.apps.length) {
    firebaseApp =   firebase.initializeApp(firebaseConfig);
}else {
    firebaseApp = firebase.app(); // if already initialized, use that one
 }
export const db = firebaseApp.firestore();