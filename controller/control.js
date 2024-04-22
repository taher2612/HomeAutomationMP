const Account = require('../model/account');
const Room = require('../model/room');
const firebaseDb = require('../test_firebase');
const room = require('../model/room');
const Appliance = require('../model/appliance');

// => GET : /control/spaces
exports.getSpaces = async (req, res, next) => {
    try {
        // 1. Extract req.acc_details
        // 2. For that acc_id, get the name and id's of all the spaces.
        // 3. Get the count of each rooms for each space.
        // 4. structure the data properly.
        // 5. send data as response.
    } catch (err) {
        next(err);
    }
}

// => GET : /control/rooms
exports.getRooms = async (req, res, next) => {
    try {
        // 1. Extract req.acc_details and spaceId from req.query;
        // 2. Get the account, then get that particular space, then get the rooms for it, and then get the appliances for it.
        // 3. Structure the data in proper format.
        // 4. respond with the data.
    } catch (err) {
        next(err);
    }
}

// => GET : /control/appliances
exports.getAppliances = async (req, res, next) => {
    try {
        // 1. Extract req.acc_details and spaceId from req.query;
        const appliances = await Appliance.findAll({
            attributes : ['appl_id','appl_name','appl_state','appl_pin_no', 'appl_endpoint'],
            where : {
                acc_id : 321,
                sp_id : 1,
                room_id : 1
            }
        })
        
        res.status(200).json({
            applianceList : appliances
        });
        // 2. Get the account, then get that particular space, then get the rooms for it, and then get the appliances for it.
        // 3. Structure the data in proper format.
        // 4. respond with the data.
    } catch (err) {
        next(err);
    }
}


// exports.getAppliances = async (req, res, next) => {
//     Account.findById({_id : req.accId})
//     .then(acc => {
//         if(!acc){
//             const err = new Error("Account not found!");
//             err.statusCode = 404;
//             throw err;
//         }
//         return acc.getRoomsWithAppl()
//     })
//     .then(async rooms => {
//         if(!rooms.length){
//             const err = new Error("resource not authorized!");
//             err.statusCode = 404;
//             throw err;
//         }

//         syncWithFirebase(rooms);
//         res.status(200).json({rooms:rooms, message:"data fetched successfully"})
        
//     })
//     .catch(err => {
//         if(!err.statusCode){
//             err.statusCode = 500;
//         }
//         next(err);
//     })
// }

// => GET : /control/room-status
// exports.getRoomStatus = (req, res, next )=>{
//     console.log("inside get room status controller");
//     const roomKey = req.body.roomKey;
//     Room.find({roomKey:roomKey})
//     .then(room => {
//         if(!room){
//             const err = new Error("room not fount!");
//             err.statusCode = 401;
//             throw err;
//         }
//         console.log("room found");
//         console.log(room.roomKey);
//         console.log(typeof room.roomKey);
//         let roomRef = firebaseDb.ref(room.roomKey); 
//         roomRef.child('checkIfOnline').set(true);
//         console.log("setting true to checkIfOnline");
//         // checks after 5 seconds if the value 
//         setTimeout(()=>{
//             roomRef.once('value', function(snap){
//                 console.log("in once");
//                 console.log(snap.val());
//                 if(snap.val().confirmOnline){
//                     roomRef.child('confirmOnline').set(false);
//                     return res.status(200).json({isOnline : true, message:"mcu online"});
//                 }
//                 res.status(200).json({isOnline : false, message:"mcu offline"});
//             });
//         }, 5000);
//     })
// }

