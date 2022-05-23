'use-strict';

const {User , validateUser} = require('../models/user');
const bcrypt = require('bcryptjs');
require('express-async-errors');

exports.registerUser = async (firstName ,lastName, email , password, contact, houseNumber) => {
    //salt is basically used to save your passwrod from hacker who use rainbow tables for to crack passwords.
    const salt = await bcrypt.genSalt(10);
    //hash is a one way function which basically convert our password in hashed passwrod such that hacker can not get our simple string password. 
    const hash = await bcrypt.hash(password, salt);
    //bcrypt.hash return a promise

    const newUser = new User({

        firstName: firstName,
        lastName: lastName,
        houseNumber: houseNumber,
        contact: contact,
        email: email,
        password: hash,
        otp: null

    });
    
    const user = await newUser.save();

    return user;
}
