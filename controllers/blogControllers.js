const Blog = require('../models/blog')
const crypto = require('crypto') 


const blogControllers = {

    getPosts: async (req,res) => {
        let posting
        let error = null
        try {
            posting = await Blog.find()
                
                .populate("comments.userId", {_id:1,email:1,fullName:1,imageUser:1})
        } catch (err) {
            error = err
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : {posting},
            success: error ? false:true,
            error: error
        })
    },

    getOnePost: async (req,res) => {
        let post
        let id = req.params.id 
        let error = null
        try {
            post = await Blog.find({_id:id})
                
                .populate("comments.userId", {_id:1,email:1,fullName:1,imageUser:1})
        } catch (err) {
            error = err
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : {post},
            success: error ? false:true,
            error: error
        })
    },

    uploadPost: async (req,res) => {
        console.log(req.body)
        const {title, text} = req.body
        const userPost = req.user._id
        try {
            const newPost = await new Posting ({userPost: userPost, title, text, date: Date.now()}).save()
            res.json({success: true,
                response: {newPost},
                message: "the posting has been uploaded"})
        }
        catch (error) {
            console.log(error)
            res.json({ success: true,
                message: "sorry! we couldn't upload the posting, please try again!" })
        }
    },

    deletePost: async (req,res) => {
        const id = req.params.id
        try{
            await Blog.findOneAndDelete({_id:id},{new:true})
            res.json({success: true,
                message: "the post has been deleted"})
        }catch (e){
            error = e
            res.json({ success: false, response: error})
        }
        
    },

    modifyPost: async (req,res) => {
    
        const {title, text, id} = req.body
        const user = req.user._id
            try {
                const modifyPost = await Blog
                    .findOneAndUpdate({"_id": id}, {$set:{
                        "title": title,
                        "text": text,}}, {new: true})
                
                    .populate("comments.userId", {_id:1,email:1,userName:1,imageUser:1})
                res.json({success: true,
                    response: {modifyPost},
                    message: "the post has been modified"})   
                    console.log(modifyPost)
        }
        catch (error) {
            console.log(error)
            res.json({ success: true,
                message: "sorry! we couldn't modify the post, please try again!" })
        }
    },

    likePost: async (req,res) => {
        console.log(req.params.id)
        let id = req.params.id 
        let user = req.user.id
        try { 
            let posting = await Topic.findOne({_id:id}) 
            if (posting.likes.includes(user)) {
                Blog.findOneAndUpdate({_id:id}, {$pull:{likes:user}}, {new:true})
                
                    .populate("comments.userId", {_id:1,email:1,fullName:1,imageUser:1})
                    .then(response => res.json({
                        response: response.likes, 
                        success: true
                    }))
                    .catch(error => console.log(error))
            } else {
                Blog.findOneAndUpdate({_id:id}, {$push:{likes:user}}, {new:true})
                
                    .populate("comments.userId", {_id:1,email:1,fullName:1,imageUser:1})
                    .then(response => res.json({
                        response: response.likes, 
                        success: true
                    }))
                    .catch(error => console.log(error))
            }
        } catch (error) {
            res.json({
                response: error,
                success: false
            })
        } 
    },

    addComment: async (req, res) => {
    
        const {commentId,comment} = req.body
        
        const user = req.user._id
        try {
            const newComment = await Blog
                    .findOneAndUpdate({_id: commentId}, {$push: {comments: {comment: comment, userId: user}}}, {new: true})
                
                    .populate("comments.userId", {_id:1,email:1,fullName:1,imageUser:1})
                res.json({success: true,
                    response: {newComment},
                    message: "thanks for comment!"})
        }
        catch (error) {
            console.log(error)
            res.json({success: false,
            message: "try again please!"})
        }
    },

    modifyComment: async (req, res) => {
        const {commentId,comment} = req.body
        const user = req.user._id
        try {
            const modifyComment = await Blog
                .findOneAndUpdate({"comments._id": commentId}, {$set: {"comments.$.comment": comment}}, {new: true})
                
                .populate("comments.userId", {_id:1,email:1,fullName:1,imageUser:1})
            res.json({success: true,
                response: {modifyComment},
                message: "the comment has been modified"})
        }
        catch (error) {
            console.log(error)
            res.json({ success: true,
                message: "sorry! try again!" })
        }
    },

    deleteComment: async (req, res) => {
        console.log(req.params.id)
        const commentId = req.params.id
        const user = req.user._id
        try {
            const deleteComment = await Blog
                .findOneAndUpdate({"comments._id": commentId}, {$pull: {comments: {_id: commentId}}}, {new: true})
            res.json({success: true,
                response: {deleteComment},
                message: "the comment has been deleted"})
        }
        catch (error) {
            console.log(error)
            res.json({success: false,
                message: "try again!"})
        }
    },

    // addBlog: async (req,res) => {
    //     const {file} = req.files //requiero el archivo subido
    //     const titleBlog = req.body.title
    //     const descriptionBlog = req.body.description

    //     try { //CHECKEO SI NO EXISTE UN BLOG CON ESE NOMBRE
    //         const blogAlreadyExist = await Blog.findOne({ titleBlog })
    //         if (blogAlreadyExist) {
    //             res.json({
    //                 success: false,
    //                 message: 'EL BLOG YA EXISTE PAAA'
    //             })
    //         } else {
    //             const fileName = crypto.randomBytes(10).toString('hex') + '.' + file.name.split('.')[file.name.split('.').length - 1]; //genera un nombre de archivo random al archivo subido por si alguna vez dos usuarios suber archivos diferentes pero con el mismo nombre => evita que se soobreescriban
    //             const imageFileRoute = `${__dirname}../frontend/public/images/blog/${fileName}` // ruta donde se guarda la imagen subida! __dirname => palabra reservada? Si
    //             file.mv((imageFileRoute, err) => { // aplicamos el metodo move(mv) mueve el archivo a la ruta especificada con el primer parametro
    //                 if (err) {
    //                     console.log(err)
    //                 } else {
    //                     console.log('SE CARGO EL ARCHIVO 🎉')
    //                 }
    //             })
    //         }
    //     } catch (error) {
    //         console.log(error)
    //         res.json({ success: false, message: "SALIO MAL PA" }) //CAPTURA EL ERROR
    //     }
    // },
    
}

module.exports = blogControllers