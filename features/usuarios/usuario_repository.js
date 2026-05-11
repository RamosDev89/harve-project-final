import {database} from '../../config/database.js';


const NOME_TABELA = 'usuarios';

const criarUsuario = async(usuario) => {


  try {
    const [results]= awaitdatabase.execute(`INSERT INTO ${NOME_TABELA} (nome, email) VALUES (?, ?)`, [usuario.nome, usuario.email]);
    console.log(`Usuário criado com sucesso: ${results.insertId}`);
  } catch (error) {
    console.log(`Erro ao criar usuário com email ${usuario.email}:`, error);
  }
  
}