'use strict'
const mongoose = require('mongoose');
const ratingtypeSchema = mongoose.Schema({
    name: {
        type:String
    }
})
module.exports = mongoose.model('ratingtype',ratingtypeSchema,'ratingtypes')