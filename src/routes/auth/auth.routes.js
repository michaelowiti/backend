const express = require("express")

const authRouter = express.Router()

authRouter.post("/signup", httpSignUp)
authRouter.post("/login", httpLoginIn)


module.exports = authRouter