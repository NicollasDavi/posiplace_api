const express = require("express");
const router = express.Router();
const setorController = require("../controllers/setorController");

router.get("/", setorController.getSetores);
router.post("/", setorController.createSetor);
router.put("/:id", setorController.updateSetor);
router.delete("/:id", setorController.deleteSetor);

module.exports = router;
