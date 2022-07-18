const Store = require('../models/store')

// HAY QUE TERMINAR DE DEFINIR EL MODELO Y CONTROLADOR DEL CARRITO

const storeControllers = {

    getStore: async (req, res) => {
        let store
        let error = null
        try {
            store = await Store.find()
        } catch (err) { error = err }
        res.json({
            response: error ? 'ERROR' : { store },
            success: error ? false : true,
            error: error
        })
    },

    getOneStore: async (req, res) => {
        const id = req.params.id
        let store
        let error = null
        try {
            store = await Store.findOne({ _id: id })
        } catch (err) {
            error = err
            console.error(err)
        }
        res.json({
            response: error ? 'ERROR' : store,
            success: error ? false : true,
            error: error
        })
    },

    addStore: async (req, res) => {
        const { storeName, storeImage, price, quantity, totalPrice } = req.body.data
        let store
        let error = null
        try {
            store = await new Store({
                storeName: storeName,
                storeImage: storeImage,
                price: price,
                quantity: quantity,
                totalPrice: totalPrice

            }).save()
                .populate('Product')
        } catch (err) { error = err }
        res.json({
            response: error ? 'ERROR' : store,
            success: error ? false : true,
            error: error
        })
    },

    modifyStore: async (req, res) => {
        const id = req.params.id
        const store = req.body.data
        let storedb
        let error = null
        try {
            storedb = await Store.findOneAndUpdate({ _id: id }, store, { new: true })
                .populate('Product')
        } catch (err) { error = err }
        res.json({
            response: error ? 'ERROR' : storedb,
            success: error ? false : true,
            error: error
        })
    },

    removeStore: async (req, res) => {
        const id = req.params.id
        let store
        let error = null
        try {
            store = await Store.findOneAndDelete({ _id: id })
                .populate('Product')
        } catch (err) { error = err }
        res.json({
            responde: error ? 'ERROR' : store,
            success: error ? false : true,
            error: error
        })
    },
    multiplesStore: async (req, res) => {
        let store = []
        const data = req.body.data //almaceno en la constante data la informacion que le pedi al body
        let error = null
        try {
            data.map(async (item) => {
                await new Store({
                    storeName: item.storeName,
                    storeImage: item.storeImage,
                    price: item.price,
                    quantity: item.quantity,
                    totalPrice: item.totalPrice
                }).save()
            })
        } catch (err) { error = err }
        store = await Store.find()
        res.json({
            response: error ? "ERROR" : store,
            success: error ? false : true,
            error: error
        })
    }
}

module.exports = storeControllers