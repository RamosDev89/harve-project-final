const { database } = require("../../config/database");

const criarUsuarioRepository = async (usuario) => {
  const results = await database
    .query("INSERT INTO usuarios (nome, email) VALUES (?, ?)", [
      usuario.nome,
      usuario.email,
    ])
    return results[0].insertId;
};

module.exports = { criarUsuarioRepository };