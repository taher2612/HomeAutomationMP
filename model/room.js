const sequelize = require('../util/database');
const {DataTypes} = require('sequelize');


const Room = sequelize.define('room', {
    // sp_id will be a foreign key, as one space can have 1 or more rooms
    acc_id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
    },
    sp_id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
    },
    room_id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
    },
    room_name : {
        type : DataTypes.STRING(50),
        allowNull : false
    },
    room_key : { // for mqtt
        type : DataTypes.STRING(20),
        allowNull : false
    },
    room_active : {
        type : DataTypes.BOOLEAN
    },
    // one or more appliance will belong to this respective room.
},{
    tableName : 'room',
    timestamps : false

});

module.exports = Room;


// const mongoose = require('mongoose');
// const Appliance = require('./appliance');


// const roomSchema = mongoose.Schema({
//     name : {
//         type:String,
//         max : 25
//     },
//     roomKey : String, // used for sockets room
//     isActive : {
//         type:Boolean,
//         default : () => false
//     },
//     accId : {
//         type : mongoose.Schema.Types.ObjectId,
//         ref: 'Account'
//     },
//     appliances : [{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:'Appliance'
//     }]
// })

// // createAppliance : 
// roomSchema.methods.createAppliance = async function(applObj){
//     const appliance = await Appliance.create({roomId:this._id, ...applObj});
//     this.appliances.push(appliance._id); // adding the appliance ref to the room instance
//     await this.save();
//     return Promise.resolve(appliance);
// }
// //get appliance : 
// roomSchema.methods.getAppliances = function(){
//     return Appliance.where('roomId').equals(this._id);
//     // .select('-_id -roomId -__v');
// }


// module.exports = mongoose.model("Room", roomSchema, 'room');