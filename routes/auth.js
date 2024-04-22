const express = require('express');
const router = express.Router();

const authController = require('../controller/auth');
// post => localhost:3000/auth/
// router.post('/', authController.postAuthorize);

// post => localhost:3000/auth/account
router.post('/account', authController.postAccount);

// post => localhost:3000/auth/signup
router.post('/signup', authController.postSignUp);

// post => localhost:3000/auth/login
router.post('/login', authController.postLogIn);


module.exports = router;