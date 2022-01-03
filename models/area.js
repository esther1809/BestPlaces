'use strict'
const mongoose = require('mongoose');
const areaSchema = mongoose.Schema({
    name: {
        type:String
    }
})
module.exports = mongoose.model('area',areaSchema,'areas')