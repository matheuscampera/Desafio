// server.js
const express = require('express');
const dotenv = require('dotenv');
const clientesRoutes = require('./routes/clientesRoutes');
const produtosRoutes = require('./routes/produtosRoutes');

dotenv.config();
const app = express();

// Middleware para análise de corpo da solicitação
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rotas
app.use('/clientes', clientesRoutes);
app.use('/produtos', produtosRoutes);

// Inicialização do servidor
const PORT = process.env
