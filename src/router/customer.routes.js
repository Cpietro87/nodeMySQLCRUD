import { Router } from "express";
import { renderCustomers} from "../controllers/customerController.js";
const router = Router();


router.get("/", renderCustomers);


export default router