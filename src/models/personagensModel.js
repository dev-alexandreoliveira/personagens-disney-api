const db = require('../config/db');

const PersonagensModel = {
  getAll: (callback) => {
    db.query('SELECT * FROM personagens', callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM personagens WHERE id = ?', [id], callback);
  },

  create: (dados, callback) => {
    const sql = `
      INSERT INTO personagens
      (nome, apelido, biografia, data_criacao, local_nascimento, descricao_vestimenta, foto_url, especie, criador)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [
      dados.nome,
      dados.apelido,
      dados.biografia,
      dados.data_criacao,
      dados.local_nascimento,
      dados.descricao_vestimenta,
      dados.foto_url,
      dados.especie,
      dados.criador
    ];
    db.query(sql, values, callback);
  },

  update: (id, dados, callback) => {
    const sql = `
      UPDATE personagens SET nome = ?, apelido = ?, biografia = ?, data_criacao = ?, local_nascimento = ?,
      descricao_vestimenta = ?, foto_url = ?, especie = ?, criador = ? WHERE id = ?
    `;
    const values = [
      dados.nome,
      dados.apelido,
      dados.biografia,
      dados.data_criacao,
      dados.local_nascimento,
      dados.descricao_vestimenta,
      dados.foto_url,
      dados.especie,
      dados.criador,
      id
    ];
    db.query(sql, values, callback);
  },

  delete: (id, callback) => {
    db.query('DELETE FROM personagens WHERE id = ?', [id], callback);
  }
};

module.exports = PersonagensModel;
