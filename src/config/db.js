const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306
});

connection.connect(err => {
  if (err) {
    console.error('Erro ao conectar com o banco:', err);
    return;
  }
  console.log('Conectado ao banco de dados!');
});

module.exports = connection;