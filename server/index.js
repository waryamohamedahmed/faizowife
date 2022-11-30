const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config()


const rwork = require('./routes/api')

const PORT = process.env.PORT

app.use(cors({
    origin:["http://localhost:3000/","http://myweddingapp.com"]
}));
app.use(bodyParser.json());

const url = process.env.mongo_URI
// connect to db
mongoose.connect(url)
    .then(() => {
        console.log('connected to database')
    })
    .catch((err) => {
        console.log(err)
    })

app.use('/', rwork)

app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});