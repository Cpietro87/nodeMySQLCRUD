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
   console.log('Se eliminar!!!')
   const { id } = req.params;
   const result = await pool.query("DELETE FROM customer WHERE id = ? ", [id])
   if(result.affectedRows === 1){
      res.json({ message: "Customer Eliminado"})
   }
   res.redirect("/")
}

export const editCustomer = async (req, res) => {
   console.log('Este metodo es para editar')
   const { id } = req.params;

   const [result] = await pool.query("SELECT * FROM customer WHERE id = ?", [id,] );
   res.render("customers_edit", { customer: result[0]})
}

export const updateCustomer = async (req, res) => {
   const {id} = req.params;
   const updateCustomer =  req.body;
   await pool.query("UPDATE customer set ? WHERE id = ? ", [updateCustomer, id]);
   res.redirect("/")
}




