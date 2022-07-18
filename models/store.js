const mongoose = require('mongoose')

const storeSchema = new mongoose.Schema({
    storeName: { type: String, required: true },
    storeImage: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true }
})

const Store = mongoose.model('store', storeSchema)
module.exports = Store