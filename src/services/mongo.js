const mongoose = require("mongoose")

const MONGO_URL = "mongodb+srv://jr:batVvZEzkg309gl@cluster0.bbh63fb.mongodb.net/?retryWrites=true&w=majority"

mongoose.connection.once("open", ()=>{
  console.log("Mongo DB connected successfully!!")
})

mongoose.connection.on("err", ()=>{
  console.log(err)
})


async function mongoConnect(){
  await mongoose.connect(MONGO_URL, {})
}

module.exports = {mongoConnect}