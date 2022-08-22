import firebase from 'firebase'

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC4BF6BB-UzsCEPomBii1ZJl0j70-nPJvs",
    authDomain: "react-contact-form-12148.firebaseapp.com",
    projectId: "react-contact-form-12148",
    storageBucket: "react-contact-form-12148.appspot.com",
    messagingSenderId: "285580066434",
    appId: "1:285580066434:web:af63bf7e8e2e68d623fe9b"
  });

var db = firebaseApp.firestore();
export { db };