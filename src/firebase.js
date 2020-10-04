import firebase from "firebase";

const firebaseApp = firebase.initializeApp ({
  apiKey: "AIzaSyD6m2eJkE7vipr0XnKwHemQY5BdHSuiufU",
  authDomain: "todo-33ff7.firebaseapp.com",
  databaseURL: "https://todo-33ff7.firebaseio.com",
  projectId: "todo-33ff7",
  storageBucket: "todo-33ff7.appspot.com",
  messagingSenderId: "306056989837",
  appId: "1:306056989837:web:46bd573241a39152c9a6c4",
  measurementId: "G-463TXX0S2N"
});

const db = firebaseApp.firestore();

export { db };  