require('dotenv').config();

const express = require('express');
const cors = require('cors');
const pool = require('./config/database');
const categoriaRoutes = require('./routes/categoriaRoutes');
const eventoRoutes = require('./routes/eventoRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/categorias', categoriaRoutes);
app.use('/api/eventos', eventoRoutes);


app.get('/api/test-db', async (req, res) => {
    try {

        const [rows] = await pool.query(
            'SELECT NOW() AS fecha_actual'
        );

        res.json({
            mensaje: 'Conexión exitosa con MariaDB',
            servidor: rows[0]
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: error.message
        });

    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en puerto ${PORT}`);
});