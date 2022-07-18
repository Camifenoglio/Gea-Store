const { model } = require('mongoose');
const Product = require('../models/product');


const productControllers = {
    getAllProducts: async (req, res) => {
        let products
        let error = null
        try {
            products = await Product.find().populate('shoppingCart')
        } catch (err) {
            error = err
        }
        res.json({
            response: error ? 'ERROR' : products,
            SUCCESS: error ? false : true,
            error: error,
            console: console.log(error)
        })
    },
    getProduct: async (req, res) => {
        let id = req.params.id
        let product
        let error = null
        try {
            product = await Product.finOne({ _id: id }).populate('shoppingCart')
        } catch (err) {
            error = err
        }
        res.json({
            response: error ? 'ERROR' : product,
            success: error ? false : true,
            error: error,
            console: console.log(error)
        })
    },
    createProduct: async (req, res) => {
        const { name, description, price, image, category, stock, imageInfo } = req.body
        let product
        let error = null
        try {
            product = await new Product({
                name,
                description,
                price,
                image,
                category,
                stock,
                imageInfo
            }).save()
        } catch (err) {
            error = err
        }
        res.json({
            response: error ? 'ERROR' : product,
            success: error ? false : true,
            error: error,
            console: console.log(error)
        })
    },
    modifyProduct: async (req, res) => {
        const id = req.params.id
        const product = req.body
        let productdb
        let error = null
        try {
            productdb = await Product.findOneAndUpdate({ _id: id }, product, { new: true })
        }
        catch (err) {
            error = err
        }
        res.json({
            response: error ? 'ERROR' : productdb,
            success: error ? false : true,
            error: error,
            console: console.log(error)
        })
    },
    deleteProduct: async (req, res) => {
        const id = req.params.id
        let product
        let error = null
        try {
            product = await Product.findOneAndDelete({ _id: id })
        }
        catch (err) {
            error = err
        }
        res.json({
            response: error ? 'ERROR' : product,
            success: error ? false : true,
            error: error,
            console: console.log(error)
        })
    },
    addFavorite: async (req, res) => {
        const id = req.params.id
        const user = await User.findOne({ _id: req.user._id })
        await Product.findOne({ _id: id }).populate('favorite').populate('shoppingCart')
            .then((product) => {
                if (product.favorite.inlcudes(user._id)) {
                    Product.findOneAndUpdate({ _id: id }, { $push: { favorite: user._id } }, { new: true }).then((respoonse) => res.json({
                        response: respoonse.favorite,
                        success: true,
                        message: 'Product added to favorite'
                    })).catch((err) => console.log(err))
                } else {
                    Product.findOneAndUpdate({ _id: id }, { $pull: { favorite: user._id } }, { new: true }).then((response) => res.json({
                        response: response.favorite,
                        success: true,
                        message: 'Product removed from favorite'
                    })).catch((err) => console.log(err))
                }
            }).catch((error) => res.json({
                console: console.log(error),
                response: error,
                success: false,
            }))
    },
    


}
module.exports = productControllers