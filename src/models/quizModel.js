var quizModel = require("../models/quizModel");

function handleError(res, error) {
    console.error(error);
    console.error("\nHouve um erro! Erro: ", error.sqlMessage);
    res.status(500).json({ error: error.sqlMessage });
}

function listar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        quizModel.listar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                        res.json(resultadoAutenticar)                        
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Credenciais inválidas");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    handleError(res, erro);
                }
            );
    }

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