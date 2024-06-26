const express = require('express')
const router = express.Router()

//controller fns
const { signupUser, loginUser } = require('../controllers/UserController');

//login route
router.post('/login', loginUser)

//signup route
router.post('/signup', signupUser)

module.exports = router