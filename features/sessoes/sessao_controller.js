const criarUsuaruiUseCase = require("../usuarios/criar_usuario_usecase");

const criarSessaoUseCase = require("./criar_sessao_usecase");

const criarSessaoController = async (req, res) => {
  const { nome, email } = req.body;
  if (!nome || !email) {
    return res.status(400).json({ error: "Nome e email são obrigatórios" });
  }

  try {
    const sessaoId = await criarSessaoUseCase({ nome, email });
    return res.status(201).json({ sessaoId: sessaoId, nome, email });
  } catch (error) {
    console.error("Erro ao criar sessao", error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = criarSessaoController;
