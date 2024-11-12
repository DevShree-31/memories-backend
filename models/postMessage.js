import mongoose from "mongoose";

const postSchema=mongoose.Schema({
    title:String,
    message:String,
    selectedFile:String,
    createdAt:{
        type:Date,
        default:Date.now
    },
    email:String
})


const PostMessage=mongoose.model('PostMessage',postSchema)
export default PostMessage