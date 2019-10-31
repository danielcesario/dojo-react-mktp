import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDhXxJvJDdsZfGeyo2xBzukIaVA2Fkitp4",
    authDomain: "dojo-react-mktp.firebaseapp.com",
    databaseURL: "https://dojo-react-mktp.firebaseio.com",
    projectId: "dojo-react-mktp",
    storageBucket: "dojo-react-mktp.appspot.com",
    messagingSenderId: "694932490024",
    appId: "1:694932490024:web:9a355da540a99e44f1f21d"
};

const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.firestore();

export { db };