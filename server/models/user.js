const Joi = require('joi');
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  lastName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024
  },
  contact:{
   type: String,
   required: true,
   minlength: 10,
   maxlength: 10
  },
  houseNumber: {
   type: String,
   required:true,
   minlength: 5,
   maxlength: 10
  },
  date:{
    type: Date,
    default: Date.now
  },
  otp: {
    type: Number
  }
});

const User = mongoose.model('User' , userSchema);

function validateUser(user) {
  const Schema = {
    firstName: Joi.string().min(5).max(50).required(),
    lastName: Joi.string().min(5).max(50).required(),
    email: Joi.string().min(5).max(255).required().email().insensitive(),
    password: Joi.string().min(5).max(255).required(),
    contact: Joi.string().regex(/^[0-9]{10}$/).required(),
    houseNumber: Joi.string().min(5).max(10).required()
  }

  return Joi.validate(user , Schema);
}

exports.User = User;
exports.validateUser = validateUser;