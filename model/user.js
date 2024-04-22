const sequelize = require('../util/database');
const {DataTypes} = require('sequelize');


const User = sequelize.define('user', {
    // acc_id will be a foreign key
    owner_id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
    },
    acc_id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
    },
    user_id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
    },
    user_name : {
        type : DataTypes.STRING(50),
        allowNull : false
    },
    user_pass : {
        type : DataTypes.STRING(50),
        allowNull : false
    },
},{
    tableName : 'user',
    timestamps : false,
});

module.exports = User;


// const mongoose = require('mongoose');

// const userSchema = mongoose.Schema({
//     name : {
//         type:String,
//         max : 25
//     },
//     email : {
//         type:String,
//         required: true,
//         lowercase: true, //transforms to lowercase    
//     },
//     password : {
//         type: String,
//         required:true,
//         max : 255
//     },
//     accessTo : [{
//         type : mongoose.Schema.Types.ObjectId,
//         ref : 'Room'
//     }],
//     createdAt : {
//         type: Date,
//         default: () => Date.now(),
//         immutable: true
//     },
//     isActive : {
//         type:Boolean,
//         default: () => false
//     },
//     ownerId : {
//         type : mongoose.Schema.Types.ObjectId,
//         ref: 'Owner'
//     }
// })

// module.exports = mongoose.model("User", userSchema, 'user');