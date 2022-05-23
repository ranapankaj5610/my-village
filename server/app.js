'use strict';

const express = require('express');
const app = express();
const cors=require("cors");
const port = process.env.PORT || 5000 ;       
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const routes = require('./routes');
const checkToken = require('./functions/checkToken');
const {User , validateUser} = require('./models/user');
const connectDB = require('./config/db');
require('express-async-errors');

mongoose.Promise = global.Promise;
connectDB();

app.use(cors());
app.use(express.json()); //By using this you can send json formatted data in req.body otherwise it will show undefined
app.use(logger('dev'));
app.use('/api',routes);   // here we call our routes which is written in rotes.js file

app.listen(port);   

console.log(`App runs on ${port}`);

