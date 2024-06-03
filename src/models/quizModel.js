var database = require("../database/config");


function listar(usuario_id){
    console.log('modelcrisbroxa')
    var instrucao= `SELECT * FROM quiz 
    JOin usuario on usuario_id = usuario.id
    order by acertos desc; 
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao)
      .then(resultado => {
        // Se a consulta for bem-sucedida, retorna o resultado
        return resultado; 
      })
      .catch(erro => {
        // Se a consulta falhar, retorna um erro em JSON
        return { error: erro.message };
      });
}


function cadastrar(usuario_id,acertos) {
    console.log("bryan lindo");
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO quiz (usuario_id, acertos) VALUES ('${usuario_id}', '${acertos}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listar,
    cadastrar
}