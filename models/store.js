const mongoose = require('mongoose')

const storeSchema = new mongoose.Schema({
    storeName: { type: String, required: true }, // Albert Fijate que todo lo que venga desde el modelo de Product lo vas a tener que popular con el modelo de Product.
    storeImage: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true }// Esto no... Esto es propio del carrito.
})

const Store = mongoose.model('store', storeSchema)
module.exports = Store