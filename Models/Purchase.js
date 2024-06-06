const mongoose = require('mongoose');
let us = mongoose.Schema({
    type:{
        type:String,
        required: true
    },
    qty:{
        type:String,
        required: true
    },
    priceUSD:{
        type:String,
        required: true
    },
    needSingle:{
        type:String,
        required: true,
        default:"I Need Single NFT",
    },
    sacrifice:{
        type:String,
        required: true,
        default:"I Want to Recieve My NFT",
    },
    points:{
        type:Number,
        required: true,
        default:0,
    },
    priceCrypto:{
        type:String,
        required: true
    },
    isSelfmint:{
        type:Boolean,
        default:false,
        required: true
    },
    isCrypto:{
        type:Boolean,
        default:true,
        required: true
    },
    status:{
        type:String,
        required: true,
        default: "Pending"
    },
    crypto:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    txHash:{
        type:String,
        required: true
    },
    txHashComplete:{
        type:String,
        required: false
    },
    refWallet:{
        type:String,
        required: true
    },
    refEmail:{
        type:String,
        required: false
    },
    userWallet:{
        type:String,
        required: false
    },
    createDate:{
        type:Date,
        default: Date.now(),
        required: false
    },
})

let Purchase = module.exports = mongoose.model('Purchase', us);