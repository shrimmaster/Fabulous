import firebase from 'firebase';
 require ("@firebase/firestore")

  var firebaseConfig = {
    apiKey: "AIzaSyC7wmoBNc4XPJcRNVHs9gJj7XxOPJYyVYs",
    authDomain: "fabulous-63e0a.firebaseapp.com",
    projectId: "fabulous-63e0a",
    storageBucket: "fabulous-63e0a.appspot.com",
    messagingSenderId: "1037941171136",
    appId: "1:1037941171136:web:6c84aa6496744571cf1e25"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore ;