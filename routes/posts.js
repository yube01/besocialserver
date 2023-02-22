import Express  from "express";
import { getPost } from "../controllers/post.js";


const router = Express.Router()


router.get("",getPost)


export default router