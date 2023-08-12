const http = require("http")
const api = require("./api")
const {mongoConnect} = require("./services/mongo")

const httpServer = http.createServer(api)

const PORT = process.env.PORT || 4000


async function startServer(){
  await mongoConnect()
  httpServer.listen(PORT, ()=>{
    console.log(`Server running at port ${PORT}!!`)
  })
}

startServer()