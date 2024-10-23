import { pool } from "../db.js";

export const authLogin = async (req, res) => {
    console.log('El login funciona')
    const { username, password } = req.body;
    console.log(username, password)

    try {
        // Consulta a la base de datos para verificar las credenciales
        const [users] = await pool.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password]);

        if (users.length > 0) {
            // Si el usuario existe y las credenciales son correctas
            console.log('Login successful!');
            res.redirect("/");
        } else {
            // Si no coinciden las credenciales
            console.log('Invalid credentials');
            res.redirect("login");
        }
    } catch (error) {
        console.error('Error during login:', error);
    }
}