import  Express  from "express"
import mongoose from "mongoose";

import dotenv from "dotenv"
import userRouter from "./routes/users.js"

const app = Express();

dotenv.config();



//router
app.use("/api/users", userRouter)






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