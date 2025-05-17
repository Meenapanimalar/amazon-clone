import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJFG4v_v5ulSWgMiGNnXnuRpTHCp9aE0s",
  authDomain: "clone-2a9b0.firebaseapp.com",
  projectId: "clone-2a9b0",
  storageBucket: "clone-2a9b0.firebasestorage.app",
  messagingSenderId: "244372904660",
  appId: "1:244372904660:web:05d76c9e7e55bbd9d9f941",
  measurementId: "G-QT6J1Y454C"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export{ db , auth};
