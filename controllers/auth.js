
import User from "../models/User.js"
import bcrypt from "bcryptjs"
import { createError } from "../error.js"
import jwt from "jsonwebtoken"

export const login = async(req,res,next)=>{
    try {
        const user = await User.findOne({username:req.body.username})
        if(!user)
        return next(createError(404,"user not found"))
        const isCorrect = await bcrypt.compare(req.body.password,user.password)
        if(!isCorrect)
        return next(createError(400,"Wrong password"))

        const token = jwt.sign({id:user._id},process.env.JWT)
        const {password, ...others}  = user._doc;

        res.cookie ("access granted", token,{
            httpOnly:true
        }).status(200)
        .json(others)

    } catch (error) {
        next(error)
        
    }
    
}

export const logout  = (req,res)=>{
    res.clearCookie("access granted",{
        secure:true,
        sameSite:"none"
    }).status(200).json("user logged out")
    
}

export const  register = async(req,res,next)=>{

    
    try {
        const salt  = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt)
        const newUser = new User({...req.body, password:hash})

        await newUser.save();
        res.status(200).send("User created")
        
    } catch (error) {
        next(error)
        
    }

    
}