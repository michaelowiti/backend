const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const {createUser, getUser} = require("../../models/user.model")

async function httpSignUp(req, res) {
  //destructure your signup fields here
  const { firstName, lastName, password, email } = req.body

  //hash your password
  const encryptedPassword = await bcrypt.hash(password, 10)

  //create your user here
  try{
    const user = await createUser({
      firstName,
      lastName,
      password: encryptedPassword,
      email,

    })
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET||"myrandSecret",{expiresIn: '7d'})

   delete user.password

   return res.status(200).send({ token, user })
  }catch(err){
    console.log(err)
    return res.status(400).json({message: "bad request"})
  }

  //create your token here
  
}


async function httpLogin(req, res) {
  //destructure your login fields here
  const { email, password } = req.body

  //find your user here
  const user = await getUser({email})


  //check if user exists
  if (!user) {
    return res.status(404).send({ message: "User not found" })
  }

  //check if password matches
  const isPasswordValid = await bcrypt.compare(password, user.password)

  if (!isPasswordValid) {
    return res.status(401).send({ message: "Invalid credentials" })
  }

  //create your token here
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET||"myrandSecret",{expiresIn: '7d'})

  delete user.password

  return res.status(200).send({ token, user })
}


module.exports = {
  httpLogin,
  httpSignUp
}