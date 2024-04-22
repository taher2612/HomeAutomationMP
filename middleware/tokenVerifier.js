const jwt = require('jsonwebtoken')
require('dotenv').config();
module.exports = (req, res, next) => {
    const authToken = req.get('Authorization');
    if(!authToken){
        const err = new Error('No Authorization');
        err.statusCode = 401;
        throw err;
    }
    const token = authToken.split(' ')[1];
    let decodedToken;
    try{
        decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    }catch(err){
        err.statusCode = 500;
        throw err;
    }
    if(!decodedToken){
        const err = new Error('No Authorization');
        err.statusCode = 401;
        throw err;
    }
    req.acc_details = decodedToken.accId;
    next();
}