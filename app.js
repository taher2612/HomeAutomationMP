const express = require("express");
const helmet = require('helmet');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');
const middlewares = require("./middleware/cors");
const jwt = require('jsonwebtoken');
require('dotenv').config();
// -------------------------------- Sequelize and models import

const sequelize = require('./util/database');
const Account = require('./model/account');
const Room = require('./model/room');
const Appliance = require('./model/appliance');
const User = require('./model/user');
const Space = require('./model/space');
 

// -------------------------------- Router:

const controlRoutes = require('./routes/control');
const authRoutes = require('./routes/auth');
const { where } = require("sequelize");


app.use(helmet());
// app.use(morgan('combined'))
app.use(middlewares.cors_controller);
app.use(bodyParser.json());

app.use('/auth', authRoutes);

app.use('/control', controlRoutes);

// ----------------------------------- Error Middleware:
app.use((error, req, res, next) => {
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data });
});


// ----------------------------------- Database Connection
// mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.th1oxbo.mongodb.net/test_automation`)
// .then(connect => {
//     console.log("connected");
//     // require('./firebase')();
//     const serverInstance = app.listen(process.env.PORT || 3000);
//     console.log(process.env.PORT);
//     // ----------------------------------- Sockets :
//     const io = require('socket.io')(serverInstance,{
//         cors : {
//             origin: "*",
//             allowedHeaders: ["*"],
//             credentials: true
//         }
//     });

//     io.on('connection', socket => {
//         socket.on('join-account', (authToken, cb) => {
//             try {
//                 decodedToken = jwt.verify(authToken, process.env.ACCESS_TOKEN_SECRET);
//                 if(!decodedToken){
//                     err = new Error('No Authorization');
//                     throw err;
//                 }
//                 socket.join(decodedToken.accId);
//                 // console.log('Joined Account '+decodedToken.accId);
//             } catch (err) {
//                 cb(err);
//             }
//         })

//         socket.on('leave-account', (authToken, cb) => {
//             try {
//                 decodedToken = jwt.verify(authToken, process.env.ACCESS_TOKEN_SECRET);
//                 if(!decodedToken){
//                     err = new Error('No Authorization');
//                     throw err;
//                 }
//                 socket.leave(decodedToken.accId);
//                 // console.log('left Account '+decodedToken.accId);
//             } catch (err) {
//                 cb(err);
//             }
//         })

//         // The below 'room' related channels are only for the MCU.
//         // socket.on('join-room', (roomKey, cb) => {
//         //     socket.join(roomKey);
//         //     console.log('mcu joined room');
//         //     // console.log('joined room '+ socket.id);
//         //     // cb(); only for error handling
//         // });
//         // socket.on('leave-room', (roomKey, cb) => {
//         //     socket.leave(roomKey);
//         //     console.log('mcu disconnected from room');
//         //     // console.log('Left room '+ socket.id);
//         //     // cb(); only for error handling
//         // });
//         socket.on('switch-state', (applData, roomKey, cb) => {
//             Appliance.findOne({_id: applData.applId})
//             .then(async appl => {
//                 try{
//                     if(!appl){
//                         err = new Error('Invalid Appliance id : '+ applData.applId);
//                         throw err;
//                     }
//                     appl.status = !appl.status;
//                     await appl.save(); 
//                     // ---------- payload for state-change to account room.
//                     const changedAppl = {
//                         roomId : applData.roomId,
//                         applId : appl._id,
//                         changedState : appl.status,
//                         type : appl.type
//                     }

//                     // ---------- Decoding the authToken from applData, payload of the current socket channel
//                     let decodedToken;
//                     decodedToken = jwt.verify(applData.authToken, process.env.ACCESS_TOKEN_SECRET);
//                     if(!decodedToken){
//                         err = new Error('No Authorization');
//                         throw err;                        
//                     }
//                     // decodedToken.accId is not the accessKey

//                     // to set status in the real time db
//                     // firebaseDb.ref(applData.roomId).child("Appliances").child(appl._id.toString()).child('status').set(appl.status);
//                     // for indicating the current socket.
//                     cb(null, changedAppl); 
//                     // goes to all users, who belongs to the that account
//                     socket.to(decodedToken.accId).emit('state-changed', changedAppl);
//                 }catch(err){
//                     console.log(err);
//                     // console.log("in error ");
//                     // err = new Error('Invalid Appliance id : '+ applData.applId);
//                     cb(err);
//                 }
//             })
//         });  
//     })
// })
// .catch(err => console.log(err));

// Defining sequelize relationships : 
// Account.hasMany(Space, {foreignKey:{name:'acc_id'}, onDelete:'CASCADE'});
// Space.belongsTo(Account, {foreignKey:{name:'acc_id'}});
// Account.hasMany(User, {foreignKey:{name:'acc_id'}, onDelete:'CASCADE'});
// User.belongsTo(Account, {foreignKey:{name:'acc_id'}});
// Space.hasMany(Room, {foreignKey:{name:'sp_id'}, onDelete:'CASCADE'});
// Room.belongsTo(Space, {foreignKey:{name:'sp_id'}});
// Room.hasMany(Appliance, {foreignKey:{name:'room_id'}, onDelete:'SET NULL'});
// Appliance.belongsTo(Room, {foreignKey:{name:'room_id'}});
// User.hasOne(Account, {foreignKey:{name:'owner_id'}, onDelete:'CASCADE'});
// Account.belongsTo(User, {foreignKey:{name:'owner_id'}, onDelete:'CASCADE'});



sequelize.sync({alter : false})
.then(synced => {
    const serverInstance = app.listen(3000);
    const io = require('socket.io')(serverInstance,{
        cors : {
            origin: "*",
            allowedHeaders: ["*"],
            credentials: true
        }
    });
    io.on('connection', socket => {
    socket.on('join-space', (data, cb) => {
        try {
            socket.join(`${data.acc_id}-${data.sp_id}`);
            // console.log('Joined Account '+decodedToken.accId);
        } catch (err) {
            cb(err);
        }
    })

    // The below 'room' related channels are only for the MCU.
    // socket.on('join-room', (roomKey, cb) => {
    //     socket.join(roomKey);
    //     console.log('mcu joined room');
    //     // console.log('joined room '+ socket.id);
    //     // cb(); only for error handling
    // });
    // socket.on('leave-room', (roomKey, cb) => {
    //     socket.leave(roomKey);
    //     console.log('mcu disconnected from room');
    //     // console.log('Left room '+ socket.id);
    //     // cb(); only for error handling
    // });
    socket.on('switch-state', async (applData) => {
        try{
            await Appliance.update({
                appl_state:applData.appl_state,  
            }, {
                where : {
                    acc_id:321,
                    sp_id:1,
                    room_id:1,    
                    appl_id:applData.appl_id
                }
            });
            // goes to all users, who belongs to the that account
            socket.to(`${applData.acc_id}-${applData.sp_id}`).emit('state-changed', applData);
        }catch(err){
            console.log(err);
            // console.log("in error ");
            // err = new Error('Invalid Appliance id : '+ applData.applId);
        }
    });
})
})


