const functions = require('firebase-functions');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

// exports.helloorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebe!");
// });

const admin = require('firebase-admin ')
admin.inititalizeApp()

exports.addMessage = functions.https.onRequest((req,res)=> {
    const original = req.query.text;
    return admin.daatabase().ref('/messages'.push ({original:original}).then((snapshot)=>{
        return res.redirect(303,snapshot.ref.toString())
    }))
})
