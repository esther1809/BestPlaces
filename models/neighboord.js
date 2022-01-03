'use strict'
const mongoose = require('mongoose');
const neighboordSchema = mongoose.Schema({
    name: {
        type:String
    },
    cityid:{
        type: mongoose.Schema.Types.ObjectId
    }
})
module.exports = mongoose.model('neighboord',neighboordSchema,'neighboords')