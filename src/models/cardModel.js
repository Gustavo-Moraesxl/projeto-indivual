var database = require("../database/config")

function listar() {
    var instrucao = `
        SELECT * FROM quiz;

    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(nome) {
    var instrucao = `SELECT acertos FROM quiz;
    `
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
// INSERT INTO quiz (nome) VALUES ('${nome}');
//;

module.exports = {
    cadastrar,
    listar
};