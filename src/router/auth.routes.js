import { Router } from "express";
import { authLogin } from "../controllers/authController.js";
const router = Router();

//Login
router.get("/login", (req, res) =>{
    res.render('login');
})

router.post("/login", authLogin); 

//Register


export default router
