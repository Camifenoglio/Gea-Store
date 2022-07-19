const Router = require('express').Router();
const validator = require ("../config/validator")
const passport =require('../config/passport')






const usersControllers = require("../controllers/usersControllers")
const {signUpUsers , logInUser,verifyMail,verifyToken} = usersControllers;





Router.route("/verify/:string").get(verifyMail)
Router.route("/auth/signin").post(logInUser)
Router.route("/auth/signup").post(validator,signUpUsers)
Router.route('/auth/token').get(passport.authenticate('jwt', {session: false}),verifyToken)
module.exports = Router;  