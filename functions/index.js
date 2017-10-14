const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /messages/:pushId/original
// exports.addMessage = functions.https.onRequest((req, res) => {
//   // Grab the text parameter.
//   const original = req.query.teste;
// // Push the new message into the Realtime Database using the Firebase Admin SDK.
// admin.database().ref('/messages').push({original: original}).then(snapshot => {
//   // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
//   res.redirect(303, snapshot.ref);
// });
// });



exports.novaTransac = functions.database.ref('/transac/{pushId}/autor')
  .onWrite(event =>
  {
    const valor = event.data.ref.parent.child('valor');
    if (event.data.previous.exists()) {
      return;
    }

    if (!event.data.exists()) {
      return;
    }


    return event.data.ref.parent.child('tdate').set(new Date().getTime()).then(()=>{
      return console.log(functions.database.ref('/transac/{pushId}/autor').parent.orderByChild('nome'));
    });
  });


