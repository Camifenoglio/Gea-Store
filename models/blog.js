const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({

    title: { type: String, required: true },
    fileUpload: { type: String, required: true },
    description: { type: String },
    date: { type: Date },
    likes: { type: Array },
    comments: [{
        comment: { type: String },
        userId: { type: mongoose.Types.ObjectId, ref: 'User' },
    }]
})

const Blog = mongoose.model('blog', blogSchema)
module.exports = Blog