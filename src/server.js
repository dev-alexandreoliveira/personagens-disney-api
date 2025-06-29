const express = require('express');
const app = express();
require('dotenv').config();
const personagensRoutes = require('./routes/personagensRoutes');

// Middleware para JSON
app.use(express.json());

// Rotas
app.use('/api', personagensRoutes);

// Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
