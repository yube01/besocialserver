import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    
    img:{
        type: String,
    },
    friends:{
        type: Number,
        default : 0
    },
    friendList:{
        type:[String],

    },
    username:{
        type:String,
        required:true
    },
    coverImg:{
        type:String
    },
    profilePic:{
        type:String,
        
    },
    city:{
        type:String,
        required:true
    }
},
{timestamps:true}
)


export default mongoose.model("User",userSchema)