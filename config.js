import firebase from "firebase"
require("firebase/firestore")
const firebaseConfig = {
    apiKey: "AIzaSyDdF8dEALK4A5Vq9nSbbLXI5xhKYzDF0DY",
    authDomain: "elibapp-cdc05.firebaseapp.com",
    projectId: "elibapp-cdc05",
    storageBucket: "elibapp-cdc05.appspot.com",
    messagingSenderId: "924133839191",
    appId: "1:924133839191:web:ec443c04cd84e72d88ae12"
  };
  firebase.initlailizeApp(firebaseConfig)
  export default firebase.firestore()