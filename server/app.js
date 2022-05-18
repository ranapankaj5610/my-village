const env = require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())

mongoose.connect(process.env.DB_URL,()=>{
    console.log('database is connected !!')
})

app.get('/',(req,res) =>{
    res.status(200).send('Hello Welcome to the backend !')
})
const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log(`PORT is working on ${PORT}`)
})