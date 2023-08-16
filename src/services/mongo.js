const mongoose = require("mongoose")

 const MONGO_URL = "mongodb+srv://jr:Aaxeh7wmBZRaygn2@cluster0.eguwkjm.mongodb.net/?retryWrites=true&w=majority"
//const MONGO_URL = "mongodb+srv://aimkeysmwaura:vC0iliVn96vcR6G0@cluster0.mki0ly0.mongodb.net/?retryWrites=true&w=majority"

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