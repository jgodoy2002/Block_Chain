const express = require('express');
const cors = require('cors');
const userRoutes = require('./src/routes/userRouter');

const app = express();

// Habilitar CORS correctamente
app.use(cors({
    origin: '*',  // Permite todas las solicitudes
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Usar rutas
app.use('/api', userRoutes);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
