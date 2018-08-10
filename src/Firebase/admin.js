var admin = require("firebase-admin");

var serviceAccount = require("../../serviceAccountKey.js");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fintrack-7430a.firebaseio.com"
});