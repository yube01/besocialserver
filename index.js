import  Express  from "express"
import mongoose from "mongoose";

import dotenv from "dotenv"
import userRouter from "./routes/users.js"
import postRouter from "./routes/posts.js"
import likeRouter from "./routes/likes.js"
import commentRouter from "./routes/comments.js"
import authRouter from "./routes/auth.js"
const app = Express();

dotenv.config();



//router
app.use("/api/users", userRouter)
app.use("/api/posts", postRouter)
app.use("/api/likes", likeRouter)
app.use("/api/comment", commentRouter)
app.use("/api/auth",authRouter)







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
app.listen(2200,()=>{
    connect()
    console.log("Server connected")
})