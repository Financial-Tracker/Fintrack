import * as firebase from 'firebase'
import {auth} from './firebase'

var provider = new firebase.auth.GoogleAuthProvider()
provider.addScope('https://www.googleapis.com/auth/calendar')


export const googleLogIn = async () => {
  try {
   await firebase.auth().signInWithPopup(provider);

    // var token = request.credential.accessToken;
    // var user = request.user;
  } catch (error) {
    // var errorCode = error.code;
    // var errorMessage = error.message;
    // var credential = error.credential;
    console.error(error)
  }
}


// firebase.auth().signInWithPopup(provider).then(result => {
//   // This gives you a Google Access Token. You can use it to access the Google API.
//   var token = result.credential.accessToken;
//   // The signed-in user info.
//   var user = result.user;
//   // ...
// }).catch(error => {
//    // Handle Errors here.
//    var errorCode = error.code;
//    var errorMessage = error.message;
//    // The email of the user's account used.
//    var email = error.email;
//    // The firebase.auth.AuthCredential type that was used.
//    var credential = error.credential;
//    // ...
// })


// firebase.auth().signOut().then(function() {
//   // Sign-out successful.
// }).catch(function(error) {
//   // An error happened.
// });