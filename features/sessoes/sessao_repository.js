const {database} = require('../../config/database');

const criarSessaoRepository = async (usuarioId) => {
  const results = await database
  .query("INSERT INTO sessoes (data_criacao, usuario_id) VALUES (?, ?)", [new Date(), usuarioId])
  return results[0].insertId;
};

module.exports = criarSessaoRepository;