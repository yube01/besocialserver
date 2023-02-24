import  Express  from "express"
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import dotenv from "dotenv"
import userRouter from "./routes/users.js"
import postRouter from "./routes/posts.js"
import likeRouter from "./routes/likes.js"
import commentRouter from "./routes/comments.js"
import authRouter from "./routes/auth.js"
import cors from "cors"
const app = Express();

dotenv.config();

app.use(Express.json())
app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Credentials",true)
  next()
})

app.use(cors({
  origin:"http://localhost:3000"
}))
app.use(cookieParser())

//router
app.use("/api/users", userRouter)
app.use("/api/posts", postRouter)
app.use("/api/likes", likeRouter)
app.use("/api/comment", commentRouter)
app.use("/api/auth",authRouter)


app.use((error , req, res, next)=>{
  const status = error.status || 500
  const message = error.message || "something went wrong"
  return res.status(status).json({
    success:false,
    status,
    message
  })
})







// connecting to mongo db
const connect = ()=>{

    mongoose.set("strictQuery",true)



    mongoose.connect((process.env.MONGODB))
    .then(()=>{
        console.log("Database Connected")
    })
    .catch((error)=>{
        throw error;
    })

}


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(5555, () => {
  console.log("Connected")
})


// connecting to server
app.listen(5500,()=>{
    connect()
    console.log("Server connected")
})