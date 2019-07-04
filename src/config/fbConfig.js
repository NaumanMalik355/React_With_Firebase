import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// Initialize Firebase
var config = {
    apiKey: "AIzaSyAM0sBc5ZDQtnPzzwbOGuh7MxSSgqXiIZ0",
    authDomain: "nauman-marioplan.firebaseapp.com",
    databaseURL: "https://nauman-marioplan.firebaseio.com",
    projectId: "nauman-marioplan",
    storageBucket: "nauman-marioplan.appspot.com",
    messagingSenderId: "1064887092597"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true})
  export default firebase;