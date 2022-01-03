'use strict'
const mongoose = require('mongoose');
const reviewSchema = mongoose.Schema({
    reviewtext: {
        type:String
    },
    neighboordid:{
        type: mongoose.Schema.Types.ObjectId
    },
    userid:{
        type:mongoose.Schema.Types.ObjectId
    }
})
module.exports = mongoose.model('review',reviewSchema,'reviews')