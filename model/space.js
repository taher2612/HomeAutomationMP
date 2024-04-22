const sequelize = require('../util/database');
const {DataTypes} = require('sequelize');


const Space = sequelize.define('space', {
    // acc_id will be a foreign key
    acc_id : {
        type : DataTypes.INTEGER,
        primaryKey: true,
    },
    sp_id : {
        type : DataTypes.INTEGER,
        primaryKey: true,
    },
    sp_name : {
        type : DataTypes.STRING(100),
    },
    sp_pass:{
        type : DataTypes.STRING(100),
    }
    // one or many room will belong to the respective space.
},{
    tableName : 'space',
    timestamps:false
});

module.exports = Space;