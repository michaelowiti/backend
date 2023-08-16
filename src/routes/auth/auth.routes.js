const express = require("express")
const { httpLogin, httpSignUp } = require("./auth.controller")

const authRouter = express.Router()

authRouter.post("/signup", httpSignUp)
authRouter.post("/login", httpLogin)

module.exports = authRouter
