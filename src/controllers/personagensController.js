const PersonagensModel = require('../models/personagensModel');

const PersonagensController = {
  listarTodos: (req, res) => {
    PersonagensModel.getAll((err, results) => {
      if (err) return res.status(500).json({ error: 'Erro ao buscar personagens.' });
      res.status(200).json(results);
    });
  },

  buscarPorId: (req, res) => {
    const id = req.params.id;
    PersonagensModel.getById(id, (err, results) => {
      if (err) return res.status(500).json({ error: 'Erro ao buscar personagem.' });
      if (results.length === 0) return res.status(404).json({ error: 'Personagem não encontrado.' });
      res.status(200).json(results[0]);
    });
  },

  criar: (req, res) => {
    PersonagensModel.create(req.body, (err, result) => {
      if (err) return res.status(500).json({ error: 'Erro ao criar personagem.' });
      res.status(201).json({ message: 'Personagem criado com sucesso!', id: result.insertId });
    });
  },

  atualizar: (req, res) => {
    const id = req.params.id;
    PersonagensModel.update(id, req.body, (err) => {
      if (err) return res.status(500).json({ error: 'Erro ao atualizar personagem.' });
      res.status(200).json({ message: 'Personagem atualizado com sucesso!' });
    });
  },

  deletar: (req, res) => {
    const id = req.params.id;
    PersonagensModel.delete(id, (err) => {
      if (err) return res.status(500).json({ error: 'Erro ao deletar personagem.' });
      res.status(200).json({ message: 'Personagem deletado com sucesso!' });
    });
  }
};

module.exports = PersonagensController;
