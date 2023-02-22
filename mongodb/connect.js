import mongoose from "mongoose";


const connectDb = ()=>{
    mongoose.set("strictQuery",true)



    mongoose.connect(process.env.MONGODB)
    .then(()=>{
        console.log("Database Connected")
    })
    .catch((error)=>{
        throw error;
    })
}


export default connectDb