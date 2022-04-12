const express = require("express");
const { absentice } = require("../controllers/pointage.controller");
const router = express.Router();
router.get("/", absentice);

module.exports = router;
