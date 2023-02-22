import Express from "express";

import { getComment } from "../controllers/comment.js";


const router = Express.Router()


router.get("",getComment)


export default router