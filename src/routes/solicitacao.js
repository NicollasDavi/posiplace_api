const express = require("express");
const router = express.Router();
const solicitacaoController = require("../controllers/solicitacaoController");

router.get("/", solicitacaoController.getSolicitacoes);
router.post("/", solicitacaoController.createSolicitacao);
router.put("/:id", solicitacaoController.updateSolicitacao);

module.exports = router;
