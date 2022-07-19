const Router = require('express').Router();
const validator = require ("../config/validator")
const passport =require('../config/passport')


const productControllers = require('../controllers/productControllers')
const {getAllProducts, getProduct, createProduct, modifyProduct, deleteProduct, addFavorite, createMultlipeProduct} = productControllers


const usersControllers = require("../controllers/usersControllers")
const {signUpUsers , logInUser,verifyMail,verifyToken} = usersControllers;

// Products
Router.route('/products')
.get(getAllProducts)
.post(createProduct)

Router.route('/products/:id')
.get(getProduct)
.put(modifyProduct)
.delete(deleteProduct)
.post(addFavorite)

Router.route('/all/products')
.post(createMultlipeProduct)

// Users
Router.route("/verify/:string").get(verifyMail)
Router.route("/auth/signin").post(logInUser)
Router.route("/auth/signup").post(validator,signUpUsers)
Router.route('/auth/token').get(passport.authenticate('jwt', {session: false}),verifyToken)
module.exports = Router;