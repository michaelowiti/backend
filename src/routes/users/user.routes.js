const express = require("express")

const { httpGetUser } = require("./user.controller")

const usersRouter = express.Router()

usersRouter.get("/me", httpGetUser)

module.exports = usersRouter