// server/server.js
const express = require('express');
const connectDB = require('./config/mongoose.config');
const jokesRoutes = require('./routes/jokes.routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Conectar a MongoDB
connectDB();

// Usar las rutas de los chistes
app.use('/api', jokesRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
