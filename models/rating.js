'use strict'
const mongoose = require('mongoose');
const ratingSchema = mongoose.Schema({
    ratingtypeid: {
        type:mongoose.Schema.Types.ObjectId
    },
    rating:{
        type: Number
    },
    userid:{
        type:mongoose.Schema.Types.ObjectId
    }
})
module.exports = mongoose.model('rating',ratingSchema,'ratings')