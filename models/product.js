const mongose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: [{ type: String, required: true }],
    stock: { type: Number, required: true },
    imageInfo: { type: String, required: true },
    shoppingCart: { type:mongose.Schema.Types.ObjectId, ref:'Store' },
    favorite: { type:mongose.Schema.Types.ObjectId, ref:'User' }
})

const Product = mongose.model('product', productSchema)

module.exports = Product;
