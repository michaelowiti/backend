const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const api = express()

api.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["POST", "GET"]
  })
)

api.use(bodyParser.json())
api.use(bodyParser.urlencoded({extended: true}))

module.exports = api