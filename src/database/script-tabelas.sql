CREATE DATABASE racionais;
USE racionais;

-- Tabela de usuários
CREATE TABLE usuario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    email VARCHAR(50),
    senha VARCHAR(50)
);

-- Tabela de quiz
CREATE TABLE quiz (
    id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT,
    acertos int,
    FOREIGN KEY (usuario_id) REFERENCES usuario(id)
);

-- Inserir dados na tabela usuario
INSERT INTO usuario (nome, email, senha) VALUES ('João Silva', 'joao.silva@example.com', '123');

-- Exibir conteúdo da tabela de usuários
SELECT * FROM usuario;

-- Exibir conteúdo da tabela quiz
SELECT * FROM quiz;

