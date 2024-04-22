const mongoose = require('mongoose');

const ownerSchema = mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model("Owner", ownerSchema, 'owner');