const Router = require('express').Router();
const validator = require ("../config/validator")
const passport =require('../config/passport')






const usersControlers = require("../controlers/usersControlers")
const {signUpUsers , logInUser,verifyMail,verifyToken} = usersControlers;





Router.route("/verify/:string").get(verifyMail)
Router.route("/auth/signin").post(logInUser)
Router.route("/auth/signup").post(validator,signUpUsers)
Router.route('/auth/token').get(passport.authenticate('jwt', {session: false}),verifyToken)
module.exports = Router;