require('dotenv').config();
require('./config/database');

const path = require('path') 
const cors = require('cors');
const passport = require('passport');
const express = require('express');
const Router = require('./Routes/routes');
const app = express();
const fileUpload = require('express-fileupload')

const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.static(path.join(__dirname, 'storage'))) //ruta donde vamos a guardar nuesta imagen
// app.use(express.static(path.join(__dirname, 'storage/product'))) //ruta donde vamos a guardar nuesta imagen
// app.use(express.static(path.join(__dirname, 'storage/product-info'))) //ruta donde vamos a guardar nuesta imagen
app.use(cors());
app.use(fileUpload()) 
app.use(express.json());
app.use(passport.initialize());
app.use('/api', Router);

app.get('*', (req, res) => {
    //res.send('Backend is working');
    res.sendFile(path.join(__dirname+'/storage/index.html'))
})

app.listen(PORT, () => console.log('Server is running on port ' + PORT));


// app.use(express.static('client/build'))
//     app.get('*', (req, res)=>{
//         res.sendFile(path.join(__dirname+"/client/build/index.html"))
//     })