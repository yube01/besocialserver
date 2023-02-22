import Express from "express";

import { getLike } from "../controllers/like.js";


const router = Express.Router()


router.get("",getLike)


export default router