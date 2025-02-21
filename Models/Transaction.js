const mongoose = require('mongoose');
let us = mongoose.Schema({
    
    from:{
        type: String,
        required: true
    },
    to:{
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
    },
    createDate:{
        type: Date,
        default: Date.now(),
        required: false
    },
    date:{
        type: Date,
        default: null,
        required: false
    }
    })

let Transaction = module.exports = mongoose.model('Transaction', us);