import { pool } from "../db.js";

export const renderCustomers = async(req, res) => {
   const [row] =  await pool.query("SELECT * FROM customer");
   res.render("customers", {customers: row});
}

export const createCustomers = (req, res) => {
   console.log('Esta entrando al metodo')
   const newCustomer = req.body;
   console.log(newCustomer)
   pool.query("INSERT INTO customer set ?", [newCustomer])
   res.redirect("/")
}

export const deleteCustomer = async (req, res) => {
   console.log('Esteo es para eliminar!!!')
   const { id } = req.params;
   const result = await pool.query("DELETE FROM customer WHERE id = ? ", [id])
   if(result.affectedRows === 1){
      res.json({ message: "Customer Eliminado"})
   }
   res.redirect("/")
}

