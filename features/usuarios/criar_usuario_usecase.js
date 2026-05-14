const {database} = require('../../config/database.js');

const {criarUsuarioRepository} = require('./usuario_repository');

const criarUsuarioUseCase = async (usuario) => {
  const id = await criarUsuarioRepository(usuario);
  return {id, nome: usuario.nome, email: usuario.email};
};

module.exports = criarUsuarioUseCase;