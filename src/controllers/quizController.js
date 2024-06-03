var quizModel = require("../models/quizModel");
var quizModel = require("../models/quizModel");

function listar(req, res) {
    var usuario_id = req.body.idusuario;
    console.log(usuario_id+'controllerJs')
    quizModel.listar(usuario_id)
      .then(resultado => {
        // Se a consulta for bem-sucedida, envia o resultado como JSON
        res.status(200).json(resultado); 
      })
      .catch(erro => {
        // Se a consulta falhar, envia a mensagem de erro como JSON
        res.status(500).json({ error: erro.message });
      });
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
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    listar,
    cadastrar
}