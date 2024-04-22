const sequelize = require('../util/database');
const {DataTypes} = require('sequelize');


const Account = sequelize.define('account', {
    owner_id : {
        type : DataTypes.INTEGER,
        primaryKey : true,        
    },
    acc_id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
    },
    acc_name : {
        type : DataTypes.STRING(50)
    },
    access_key : {
        type : DataTypes.STRING(10)
    }
    // owner id will be a foreign key, of a user id.
},{
    tableName : 'account',
    timestamps:false
});

module.exports = Account;

// const mongoose = require('mongoose');
// const Room = require('./room');

// const accountSchema = mongoose.Schema({
//     accessKey : {
//         type : String,
//         required : true
//     },
//     ownerId : {
//         type : mongoose.Schema.Types.ObjectId,
//         ref: "Owner"
//     }
// })

// // createRoom : 
// accountSchema.methods.createRoom = function(roomObj){
//     return Room.create({...roomObj,accId : this._id});
// }

// // getRooms : // will return room or rooms associate to this account instance 
// accountSchema.methods.getRooms = function(){
//     return Room.where('accId').equals(this._id);
//     // select('-_id -accId -__v')
// }

// accountSchema.methods.getRoomsWithAppl = function(){
//     return Room.where('accId').equals(this._id).populate('appliances', "-__v -power_consumption -roomId");
//     // select('-_id -accId -__v')
// }

// module.exports = mongoose.model("Account", accountSchema, 'account');