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

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var usuario_id = req.body.usuarioServer;
    var acertos = req.body.acertosServer;

    // Faça as validações dos valores
    if (usuario_id == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (acertos == undefined) {
        res.status(400).send("Seu email está undefined!");
    }   else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        quizModel.cadastrar(usuario_id,acertos)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    handleError(res, erro);
                }
            );
    }
}

module.exports = {
    listar,
    cadastrar
}