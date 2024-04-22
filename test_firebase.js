const fb = require('firebase');

// initialize app
fb.initializeApp({
    apiKey: "AIzaSyAVfW7tSJnUt7GLtWWNId6FT6_aDkqj-XA",
    authDomain: "smarthomeautomation-5e173.firebaseapp.com",
    databaseURL: "https://smarthomeautomation-5e173-default-rtdb.firebaseio.com",
    projectId: "smarthomeautomation-5e173",
    storageBucket: "smarthomeautomation-5e173.appspot.com",
    messagingSenderId: "104369832783",
    appId: "1:104369832783:web:1fe1a253a7bdd41375fb3a",
    measurementId: "G-3PBKX7FNXZ"
});

// get database
module.exports = fb.database();

// querying:
// module.exports = () =>{
//     const room = firebaseDb.ref('room2')//.child("Appliances").child('644f1222353ac1701185ae4a').child('pinNo');
//     room.once('value',function(snap){
//         console.log('inside on');
//         room.child('name').remove();
//         room.child('name').set('taher');
//         room.child('date').set(14);
//         room.child('date').set(17);

        
//         // room.off('value');
//     });
//     room.once('child_added', function(snap){
//         console.log('child added');
//         console.log(snap.val());
//     })
//     room.on('child_changed', function(snap){
//         console.log('child changed');
//         console.log(snap.val());
//     });
//     room.once('child_removed', function(snap){
//         console.log('child removed');
//         console.log(snap.val());
//     })

// }

