const { Router } = require('express')  // instead of const express = require("express")     and const authrouter = express.router()
const authController = require("../controllers/auth.controller")
const authMiddleware = require("../middlewares/auth.middleware")

const authRouter = Router()


// jsdoc comment 
/**
 * @route POST /api/auth/register
 * @description Register a new user
 * @access Public
 */
authRouter.post("/register", 
    authController.registerUserController)

//jsdoc comment
/**
 * @route POST /api/auth/login
 * @description login user with email and password
 * @access Public
 */
authRouter.post("/login", 
    authController.loginUserController)

//jsdoc comment
/**
 * @route GET /api/auth/logout
 * @description clear token from user cookie and add the token in blacklist
 * @access Public
 */
authRouter.get("/logout", 
    authController.logoutUserController)

//jsdoc comment
/**
 * @route GET /api/auth/get-me
 * @description get the current logged in user details
 * @access Private
 */
authRouter.get("/get-me", 
    authMiddleware.authUser, 
    authController.getMeController)


module.exports = authRouter