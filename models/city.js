'use strict'
const mongoose = require('mongoose');
const citySchema = mongoose.Schema({
    name: {
        type:String
    },
    areaid:{
        type: mongoose.Schema.Types.ObjectId
    }
})
module.exports = mongoose.model('city',citySchema,'cities')