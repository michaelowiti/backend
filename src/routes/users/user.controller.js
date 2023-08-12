const {getUser} = require('../../models/user.model')

async function httpGetUser(req, res) {
  const { id } = req.user
  const user = await getUser({id})
  delete user.password
  return res.status(200).send({user})
}


module.exports = {httpGetUser}