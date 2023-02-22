import Express from "express";


const router = Express.Router()


router.get("/test",(req,res)=>{

    res.send("Working users")
})


export default router