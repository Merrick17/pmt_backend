const router = require("express").Router();
const multer = require("multer");
const { parsePointage } = require("../controllers/utils.controller");
const upload = multer({ dest: "./uploads/" });
router.post("/personnel", upload.single("personnel"), parsePointage);

module.exports = router;
