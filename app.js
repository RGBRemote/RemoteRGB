const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.port || 3000
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

// Middleware
app.use(cors())
app.use(bodyParser.json())

// Importing Routes
const postsRoute = require('./routes/rgb')

// ROUTES 
app.get('/', (req, res) => {
    res.send('This is homepage')
})
app.use('/rgb', postsRoute)

// Connecting to database
if(mongoose.connect('mongodb+srv://remotergb8:' + 'e7ChYYd6kYshkXWa' + '@remotergb.lbgzdlv.mongodb.net/?retryWrites=true&w=majority&appName=RemoteRGB')){
    console.log("Connected to DB");
    // console.log(PORT)
}

// Listening
app.listen(PORT)
