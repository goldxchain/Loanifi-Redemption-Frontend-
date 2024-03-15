const mongoose = require('mongoose');
let us = mongoose.Schema({
    
    from:{
        type: String,
        required: true
    },
    tx:{
        type: String,
        required: true
    },
    value:{
        type: Number,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    data:{
        type: Object,
        required: false
    }
    })

let Transaction = module.exports = mongoose.model('Transaction', us);