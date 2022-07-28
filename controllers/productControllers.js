const { model } = require('mongoose');
const Product = require('../models/product');
const crypto = require('crypto') 
const path = require('path') //objeto nativo de node.js


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
            product = await Product.findOne({ _id: id }).populate('shoppingCart')
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
    createMultlipeProduct: async (req, res) => {
        const products = req.body.products
        let product
        let error = null
        try {
        products.map(async (item) =>{
            await new Product({
                name: item.name,
                description: item.description,
                price: item.price,
                image: item.image,
                category: item.category,
                stock: item.stock,
                imageInfo: item.imageInfo
            }).save()
            })
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
    addProduct: async (req,res) => {

        const {name, description, price, category, stock } = req.body
        const { image } = req.files //requiero el archivo subido
        const { imageInfo} = req.files
        let error = null

        try{
            const fileName = crypto.randomBytes(10).toString('hex') + '.' + image.name.split('.')[image.name.split('.').length - 1]
                const routeFile = path.resolve('storage/product', fileName) //resolvemos la ruta 
            const fileNameInfo = crypto.randomBytes(10).toString('hex') + '.' + imageInfo.name.split('.')[imageInfo.name.split('.').length - 1]
                const routeFileTwo = path.resolve('storage/product-info', fileNameInfo)
            image.mv(routeFile, err => {
                if (err) {
                    console.log('error de upload de imagen 1', err)
                } else {
                    console.log('uploaded file 1')
                }
            })
            imageInfo.mv(routeFileTwo, err => {
                if (err) {
                    console.log('error de upload de imagen 2', err)
                } else {
                    console.log('uploaded file 2')
                }
            })
            newProduct = await new Product({
                name,
                description, 
                price, 
                image: `https://gea-store-backend.herokuapp.com/product/${fileName}`, 
                category, 
                stock, 
                imageInfo:`https://gea-store-backend.herokuapp.com/product-info/${fileNameInfo}`,
            }).save()
        } catch(errCatch) {
            error = errCatch
            console.log(error)
        }
        res.json({
            response:error ? 'ERROR' : newProduct,
            success: error ? false : true,
            error: error
        })
    },
}
module.exports = productControllers