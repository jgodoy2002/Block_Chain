const express = require('express');
const { getRoleName } = require('../services/userService'); // Importar la función del servicio

const router = express.Router();


// Ruta para el inicio de sesión
const loginUser = async (req, res) => {
    console.log('Cuerpo de la solicitud:', req.body);

    const { name, password } = req.body;

    try {
        console.log('Datos recibidos:', { name, password });
        const roleName = await getRoleName(name, password);

        if (roleName) {
            res.json({ role: roleName });
        } else {
            res.status(401).json({ error: 'Credenciales incorrectas' });
        }
    } catch (error) {
        console.error('Error en el servidor:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
};

module.exports = { loginUser };