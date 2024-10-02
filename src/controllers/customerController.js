import { pool } from "../db.js";


export const home = (req, res) => {
    res.send('Hola futuros profes!!!')
}

export const renderCustomer = (req, res) => {
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM customer' , (err, customers) => {
            if(err){
                res.json(err)
            }
            res.json(customers)
        })
    })
}


export const renderCustomers = async (req, res) => {
  const [row] = await pool.query("SELECT * FROM customer");
  res.render("customers",{customers: row});
};