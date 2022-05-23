const jwt = require('jsonwebtoken');
const register = require('./functions/register');
const express = require('express');
const router = express.Router();
const auth = require('basic-auth');
const login = require('./functions/login');
const config = require('./config/config');
const {User , validateUser} = require('./models/user');
const authorize = require('./functions/checkToken');
const Password = require('./functions/password');
require('express-async-errors');

    router.get('/' , async(req,res) => {
        res.send('Welcome to My-Village server');
    });

    // Here autorize is a middleware which is written in function folder in checkToken.js file
    router.get('/getUser' , authorize , async(req , res) => {

        let users = {};
        // users = await User.find({_id: { $new: req.body._id}}).select({_id: 1 , name: 1});
        users = await User.findById(req.body._id);
        //res.setHeader('x-access-token' , token);
        res.send(users);

    });

    router.get('/allUsers' , async(req , res) => {

        let users = {};
        users = await User.find();

        res.send(users);

    });

    // api to signup a user by using post operation on api:- localhost:5000/api/register
    router.post('/register' , async(req,res) => {

        const firstName = req.body.firstName;
		const lastName = req.body.lastName;
        const email = req.body.email;
        const password = req.body.password;
        const contact = req.body.contact;
        const houseNumber = req.body.houseNumber;
		

		if (!firstName || !lastName || !email || !password || !houseNumber || !contact ||  !firstName.trim() || !lastName.trim() || !contact.trim() || !houseNumber.trim() || !email.trim() || !password.trim()) {

            res.status(400).json({message: 'Invalid Request !'});
        }

        else
        {
            //registerUser is a function which fill all the passed data and save it to the mongodb and return the saved user back here which is store in the const 'user'.
            const user = await register.registerUser(firstName ,lastName, email ,password,  contact, houseNumber);
            console.log(user);
            
            res.send(user);
            
            
        }

    });

   
    router.post('/login',async (req,res)=>{
       // console.log(req.body);
        const {email , password} = req.body;

    

        if(!email || !password || !email.trim() || !password.trim())
        {
            res.status(400).json({message: 'Invalid Request'});
        }
        else
        {
            // console.log();
            const response = await login.loginUser(email , password);
            console.log("my response",response);
            const token = await jwt.sign( response, config.secret);
            console.log("my token",token);
            res.setHeader('x-access-token' , token);
            res.status(200).send(token);
        }
        
    });

    router.post('/users/request/forgetPassword' , async(req , res) => {

        let response = await Password.resetPasswordInit(req.body.email);
        
        res.send(response);
    });

    router.post('/users/finalize/forgetPassword' , async(req,res) => {

        let response = await Password.resetPasswordFinal(req.body.email , req.body.token , req.body.newPassword);
        
        res.send(response);
    });

    module.exports = router;