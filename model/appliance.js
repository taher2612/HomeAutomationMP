const sequelize = require('../util/database');
const {DataTypes} = require('sequelize');


const Appliance = sequelize.define('appliance', {
    // room_id will be the foreign key here, as one room can have zero or more appliances.
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
    appl_id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
    },
    appl_name : {
        type : DataTypes.STRING(50),
        allowNull : false
    },
    appl_endpoint : {
        type : DataTypes.STRING(50),
        allowNull : false
    },
    appl_state : {
        type : DataTypes.BOOLEAN,
        allowNull : false
    },
    appl_pin_no : {
        type : DataTypes.INTEGER,
        allowNull : false
    }
    // owner id will be a foreign key, of a user id.
},{
    tableName : 'appliance',
    timestamps : false
});

module.exports = Appliance;


// const mongoose = require('mongoose');

// const applianceSchema = mongoose.Schema({
//     name : {
//         type:String,
//         max : 25
//     },
//     type : {//which type of appliance
//         type:String,
//         enum : ['fan','light','power_outlet'],
//     },
//     status : {
//         type:Boolean,
//         default : () => false
//     },
//     power_consumption : {
//         type:Number,
//         default : () => 0.0
//     },
//     roomId : {
//         type : mongoose.Schema.Types.ObjectId,
//         ref: 'Room'
//     },
//     pinNo : {
//         type : Number,
//         default : 7
//     }
// })

// module.exports = mongoose.model("Appliance", applianceSchema, 'appliance');