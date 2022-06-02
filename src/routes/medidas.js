var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idSensor", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/ultimasB/:idSensor", function (req, res) {
    medidaController.buscarUltimasMedidasB(req, res);
});

router.get("/tempo-real/:idSensor", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
});

router.get("/tempo-realB/:idSensor", function (req, res) {
    medidaController.buscarMedidasEmTempoRealB(req, res);
});

module.exports = router;