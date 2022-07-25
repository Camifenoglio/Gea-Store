const Router = require('express').Router();
const validator = require ("../config/validator")
const passport = require('../config/passport')


const productControllers = require('../controllers/productControllers')
const {getAllProducts, getProduct, createProduct, modifyProduct, deleteProduct, addFavorite, createMultlipeProduct} = productControllers

const usersControllers = require("../controllers/usersControllers")
const {signUpUsers , logInUser,verifyMail,verifyToken, getUsers} = usersControllers;



const blogControllers= require('../controllers/blogControllers')
const {getPosts,getOnePost,uploadPost,deletePost,modifyPost,likePost,addComment,modifyComment,deleteComment} = blogControllers



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
Router.route('/users').get(getUsers)
Router.route("/auth/signin").post(logInUser)
Router.route("/auth/signup").post(validator,signUpUsers)
Router.route('/auth/token').get(passport.authenticate('jwt', {session: false}),verifyToken)
module.exports = Router;  

// Upload Blog 
Router.route('/products/upload')
.post(passport.authenticate('jwt', {session: false}), uploadProduct)

// Blog & Comments & Likes
Router.route('/post')
    .get(getPosts)
    .put(passport.authenticate('jwt', {session:false}), modifyPost)
    .post(passport.authenticate('jwt', {session:false}), uploadPost)
Router.route('/post/:id')
    .get(getOnePost)
    .post(passport.authenticate('jwt', {session: false}), deletePost)
Router.route('/post/likes/:id')
    .put(passport.authenticate('jwt', {session:false}), likePost)
Router.route('/comments')
    .post(passport.authenticate('jwt', {session: false}), addComment)
    .put(passport.authenticate('jwt', {session: false}), modifyComment)
Router.route('/comments/:id')
    .post(passport.authenticate('jwt', {session: false}), deleteComment) 
