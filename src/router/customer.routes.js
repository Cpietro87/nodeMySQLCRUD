import { Router } from "express";
import { renderCustomers, createCustomers, deleteCustomer} from "../controllers/customerController.js";
const router = Router();

router.get("/", renderCustomers);
router.post("/add", createCustomers);
router.get("/delete/:id", deleteCustomer )

export default router