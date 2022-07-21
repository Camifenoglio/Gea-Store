const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    password: [{ type: String, required: true }],
    imageUser: { type: String, required: true },
    role: {type:String, required:true},
    favorite:[{ 
        productId:{type: mongoose.Types.ObjectId, ref:'Product'},
     }],
    buying:[{ 
        productId:{type: mongoose.Types.ObjectId, ref:'Store'},
     }], 
    uniqueString:{type:String, required:true},
    verification:{type:Boolean , required:true}

})


const User = mongoose.model('users', userSchema)
module.exports = User 