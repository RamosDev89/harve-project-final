const criarUsuarioUseCase = require("../usuarios/criar_usuario_usecase");

const criarSessaoRepository = require("./sessao_repository");

const criarSessaoUseCase = async (usuario) => {
  const usuarioSessao = await criarUsuarioUseCase({
    nome: usuario.nome,
    email: usuario.email,
  });
  const sessaoId = await criarSessaoRepository(usuarioSessao.id);
  return sessaoId;
};

module.exports = criarSessaoUseCase;
