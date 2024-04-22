const Account = require('../model/account');
const User = require('../model/user');
const jwt = require('jsonwebtoken');
require('dotenv').config();

/*
Many - to - One
Account.hasMany(User, {foreignKey:{name:'acc_id'}, onDelete:'CASCADE'});
User.belongsTo(Account, {foreignKey:{name:'acc_id'}});

One - to - Many

User.hasOne(Account, {foreignKey:{name:'owner_id'}, onDelete:'CASCADE'});
Account.belongsTo(User, {foreignKey:{name:'owner_id'}, onDelete:'CASCADE'});

*/
exports.postAccount = async (req, res, next) => {
    try {
        // 1. Extract form data :
        const acc_name = req.body.acc_name;
        const access_key = req.body.access_key;
        // 2. Check if the access_key already exists in the database or not.
        const account = await Account.findOne({where : {access_key : access_key}});
        if(account) throw new Error("Account with this access key already exists.");
        // 3. We simply create the account with the provided data. 
        await Account.create({
            // acc_id will auto-increment;
            acc_name : acc_name,
            access_key : access_key
        });
        res.status(200).json({message : "successfully created account"});
    } catch (err) {
        next(err);
    }
}

exports.postSignUp = async (req, res, next) => {
    try {
        // 1. Extract form data.
        const user_name = req.body.user_name; 
        const user_pass = req.body.user_pass;
        const access_key = req.body.access_key; 
        
        // 2. check if the access_key matches any account. if not, then respond with error.
        const account = await Account.findOne({where:{access_key : access_key}});
        if(!account) throw new Error("No such account exists with this access_key");
        console.log("\n\nLogging account : ", account);
        // 3. check if the user_name is used or not: 
        const userNameCheck = await User.findOne({where:{user_name:user_name}});
        if(userNameCheck) throw new Error("The username is already in use.");
        // 4. Create user for that Account: 
        const user = await Account.createUser({
            user_name : user_name,
            user_pass : user_pass
        });
        console.log("\n\nLogging User : ", user);
        // 5. Check if the account has an owner_id and whether any other users belongs to that account.
        if(!account.dataValues.owner_id){ // if the owner_id is null, then assign the new user's id as owner_id;
            await account.update({
                owner_id : user.dataValues.user_id
            });
        }
        // 6. Once all the above is successfully done, respond with 200 status
        res.status(200).json({message:"successful"});

    } catch (err) {
        next(err);
    }
}

exports.postLogIn = async (req, res, next) => {
    try {
        // 1. Extract form data.
        const user_name = req.body.user_name; 
        const user_pass = req.body.user_pass;
        // 2. check if both the username and password matches. if not, throw err.
        const user = await User.findOne({where:{user_name : user_name, user_pass: user_pass}});
        if(!user) throw new Error("No such user exists");
        // 3. create a JWT token, and in it, store the user_id and acc_id.
        const token = jwt.sign({
            acc_id : user.dataValues.acc_id,
            user_id : user.dataValues.user_id
          },
          process.env.ACCESS_TOKEN_SECRET,{
            expiresIn: "1d",
          }
        );
        // 4. respond with the authToken attached.
        res.status(200).json({ message: "successfully logged in", authToken: token });
    } catch (err) {
        next(err);
    }
}

// exports.postAuthorize = async (req, res, next) => {
//     const accessKey = req.body.accessKey;
//     Account.findOne({accessKey:accessKey})
//     .then(account => {
//         if(!account){
//             const err = new Error("Wrong access key, user not authorized!");
//             err.statusCode = 401;
//             throw err;
//         }
//         const token = jwt.sign({
//             accId : account._id
//         },process.env.ACCESS_TOKEN_SECRET,{
//             expiresIn:'1h'
//         });
//         res.status(200).json({message:"Successfully Authorized!", authToken : token});
//     })
//     .catch(err => {
//         if(!err.statusCode){
//             err.statusCode = 500;
//         }
//         next(err);
//     })
// }