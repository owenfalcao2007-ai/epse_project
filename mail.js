const firebaseConfig = {
    apiKey: "AIzaSyDnYt18DHPZOuXrZaLI86E6s1DxwRb6qec",
    authDomain: "contact-6db0e.firebaseapp.com",
    databaseURL: "https://contact-6db0e-default-rtdb.firebaseio.com",
    projectId: "contact-6db0e",
    storageBucket: "contact-6db0e.firebasestorage.app",
    messagingSenderId: "230740904127",
    appId: "1:230740904127:web:e141fcb05124256a6f1e0a",
    measurementId: "G-FRX904B3LQ"
  };
firebase.initializeApp(firebaseConfig);
const contactDB = firebase.database().ref('contact')
