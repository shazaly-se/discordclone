import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyC8Do6W1HtT8l40D-EO1lx8gJVLkdMl5-c",
    authDomain: "discordclone-11b60.firebaseapp.com",
    databaseURL: "https://discordclone-11b60.firebaseio.com",
    projectId: "discordclone-11b60",
    storageBucket: "discordclone-11b60.appspot.com",
    messagingSenderId: "701358361298",
    appId: "1:701358361298:web:249e9f9883325d19bf3b0b"
  };

  const firbaseApp= firebase.initializeApp(firebaseConfig);
  const db = firbaseApp.firestore();
  const auth = firebase.auth();
  const provider=  new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;