import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBlmM0S_kDm7fPRi3E7vfoOrKbAm99BT5o",
    authDomain: "discord-2-clone-d57d9.firebaseapp.com",
    projectId: "discord-2-clone-d57d9",
    storageBucket: "discord-2-clone-d57d9.appspot.com",
    messagingSenderId: "125048197800",
    appId: "1:125048197800:web:a912c843af223ba36ce89d"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };