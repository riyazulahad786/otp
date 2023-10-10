import firebase from 'firebase/app'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyA5OlD2xeLeBSgNNQ6LADAHHKf3IDGgsvA",
  authDomain: "digi-c3b9e.firebaseapp.com",
  projectId: "digi-c3b9e",
  storageBucket: "digi-c3b9e.appspot.com",
  messagingSenderId: "255665590122",
  appId: "1:255665590122:web:629838cde50913ac2adf13",
  measurementId: "G-5GKYKPV5FP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
export default firebase
