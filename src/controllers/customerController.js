import { pool } from "../db.js";

export const renderCustomers = async(req, res) => {
   const [row] =  await pool.query("SELECT * FROM customer");
   res.render("customers", {customers: row});
}

class Customer {
   constructor(){}

   
}