require('dotenv').config();
require('./config/database');

const path = require('path')
const cors = require('cors');
const passport = require('passport');
const express = require('express');
const Router = require('./Routes/routes');
const app = express();
//const fileUpload = require('express-fileupload')

const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
//app.use(fileUpload())
app.use(express.json());
app.use(passport.initialize());
app.use('/api', Router);

app.get('/', (req, res) => {
    res.send('Backend is working');
})

app.listen(PORT, () => console.log('Server is running on port ' + PORT));