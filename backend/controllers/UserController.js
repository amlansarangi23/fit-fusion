const User = require('../models/UserModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {//_id or id or ..
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}

//login user
const loginUser = async(req, res) =>{
    const {email, password} = req.body

    try{
        const user = await User.login(email, password)

        //create a token
        const token = createToken(user._id)

        res.status(200).json({email, token})
    } 
    catch(err){
        res.status(400).json({error: err.message})
    }

}

//signup user
const signupUser = async(req, res) =>{
    const {email, password} = req.body

    try{
        const user = await User.signup(email, password)

        //create a token
        const token = createToken(user._id)

        res.status(200).json({email, token})
    } 
    catch(err){
        res.status(400).json({error: err.message})
    }

}

module.exports = {
    signupUser,
    loginUser
}