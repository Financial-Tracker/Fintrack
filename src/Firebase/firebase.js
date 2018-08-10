import * as firebase from 'firebase'
require("firebase/firestore");

var config = {
  apiKey: "AIzaSyAAkUHs_2r1YOLpF0nA8GAX3cVUmrWNGws",
  authDomain: "fintrack-7430a.firebaseapp.com",
  databaseURL: "https://fintrack-7430a.firebaseio.com",
  projectId: "fintrack-7430a",
  storageBucket: "fintrack-7430a.appspot.com",
  messagingSenderId: "358003201569"
};

firebase.initializeApp(config)

const auth = firebase.auth();
const firestore = firebase.firestore()

export {
  auth, firestore
}


