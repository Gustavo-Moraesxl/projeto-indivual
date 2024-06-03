var express = require("express");
var router = express.Router();
var cardController = require("../controllers/cardController");



router.post("/cadastrar", function (req, res) {
    // função a ser chamada quando acessar /carros/cadastrar
    
    cardController.cadastrar(req, res);
});

router.get("/listar", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    cardController.listar(req, res);
});

module.exports = router;
