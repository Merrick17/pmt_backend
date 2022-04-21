const express = require("express");
const {
  addNewObjectif,
  getAllObjectif,
  updateObjectif,
  deleteObjectif,
} = require("../controllers/objectif.controller");
const router = express.Router();

router.post("/add", addNewObjectif);
router.get("/", getAllObjectif);
router.put("/update/:id", updateObjectif);
router.delete("/delete/:id", deleteObjectif);

module.exports = router;
