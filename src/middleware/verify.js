const jwt = require("jsonwebtoken")

async function verify(req, res, next) {
  const token = req.headers.authorization.split(" ")[1]
  console.log(token)
  if (!token) {
    return res.status(401).send({ message: "Access denied" })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET||"myrandSecret")
    req.user = decoded
    next()
  } catch (error) {
    return res.status(401).send({ message: "Invalid token" })
  }
}

module.exports = verify