import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import postRoutes from './routes/posts.js'
import userRoutes from './routes/user.js'
import dotenv from 'dotenv'
const app=express()
dotenv.config()
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
const corsOptions = {
    origin: 'http://localhost:3000', // The origin you want to allow
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
};
app.use(cors(corsOptions));
app.use('/posts',postRoutes)
app.use('/user',userRoutes)
app.get('/',(req,res)=>{
    res.json("Hello")
})
//will use cloud mongoDB 
// const CONNECTION_URL="mongodb+srv://shreyansh:Shreyansh$123@cluster0.ap0tnyi.mongodb.net/"
const PORT=process.env.PORT ||10000;
mongoose.connect(process.env.MONGO_KEY).then(
    ()=>app.listen(PORT,()=>console.log(`Connection established at port ${PORT}`)))
    .catch((error)=>console.log(error.message));