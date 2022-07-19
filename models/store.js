const mongoose = require('mongoose')


// HAY QUE TERMINAR DE DEFINIR EL MODELO Y CONTROLADOR DEL CARRITO

const storeSchema = new mongoose.Schema({
    product: [{
        productShop: { type: mongoose.Types.ObjectId, ref: 'Product' },
        quantity: { type: Number, required: true },
        subtotal: { type: Number, required: true }
    }],
    totalPrice: { type: Number, required: true },

})

const Store = mongoose.model('store', storeSchema)
module.exports = Store