import  Express  from "express"
import connectDb from "./mongodb/connect";
import dotenv from "dotenv"


const app = Express();

dotenv.config();


// connecting to mongo db


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