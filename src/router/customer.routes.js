import { Router } from "express";
import { renderCustomers, createCustomers} from "../controllers/customerController.js";
const router = Router();

router.get("/", renderCustomers);
router.post("/add", createCustomers);

export default router