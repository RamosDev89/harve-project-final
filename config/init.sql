CREATE TABLE usuarios (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
);

CREATE TABLE sessoes (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    data_criacao DATETIME NOT NULL,
    usuario_id BIGINT NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

CREATE TABLE perguntas (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    ordem INT NOT NULL,
    ativo BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE alternativas (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(255) NOT NULL,
    ordem INT NOT NULL,
    pontos INT NOT NULL,
    ativo BOOLEAN NOT NULL DEFAULT TRUE,
    pergunta_id BIGINT NOT NULL,
    FOREIGN KEY (pergunta_id) REFERENCES perguntas(id)
);

CREATE TABLE respostas (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    pontos INT NOT NULL,
    sessao_id BIGINT NOT NULL,
    alternativa_id BIGINT NOT NULL,
    FOREIGN KEY (sessao_id) REFERENCES sessoes(id),
    FOREIGN KEY (alternativa_id) REFERENCES alternativas(id)
);
