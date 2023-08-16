const User = require("./user.mongo")

async function createUser({ firstName, lastName, email, password }) {
  const user = await User.create({ firstName, lastName, email, password })
  return user
}

async function getUser(query) {
  const user = await User.findOne(query, "-_v")
  return user
}

module.exports = {
  createUser,
  getUser,
}