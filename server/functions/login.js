'use strict'

const {User , validateUser} = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.loginUser = async (email , password) => {
    let success = false;
    console.log(email , password);

    let currentUser = await User.findOne({email: email});
    if(!currentUser)
    {
        return res.status(400).json({ error: "Please try to login with correct credentials" });
    }
    const result = await bcrypt.compare(password , currentUser.password);

    if(result)
    {
        let details = {
            _id: currentUser._id
            // firstName: currentUser.firstName,
            // lastName: currentUser.lastName,
            // email: currentUser.email
        }
        currentUser.otp = null;
       // await currentUser.save();
        console.log("my details", details);
        return details;
    }
    else
    {
        return res.status(400).json({ success, error: "Please try to login with correct credentials" });
    }

}