import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD5qsGJVOpGJBQGNjoRGZjHMjQG5JHdABQ",
    authDomain: "lentenativologin.firebaseapp.com",
    projectId: "lentenativologin",
    storageBucket: "lentenativologin.appspot.com",
    messagingSenderId: "359436918366",
    appId: "1:359436918366:web:7e4fa4d22bbd192631decf",
    name: "lenteNativoLogin"
  };

  firebase.initializeApp(firebaseConfig)

  const auth = firebase.auth();
  const db = firebase.firestore();

  export {auth, db}