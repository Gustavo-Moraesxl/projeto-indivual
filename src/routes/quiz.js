var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    quizController.cadastrar(req, res);
})

router.post("/listar", function (req, res) {
    quizController.listar(req, res);
});

module.exports = router;