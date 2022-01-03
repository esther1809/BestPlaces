'use strict'
const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    pseudoname: {
        type:String
    },
    password:{
        type: String
    }
})
module.exports = mongoose.model('user',userSchema,'users')