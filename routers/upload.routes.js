const router = require("express").Router();
const multer = require("multer");
const path = require('path');
const { parsePointage } = require("../controllers/utils.controller");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },

  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({ storage: storage });
router.post("/personnel", upload.single("personnel"), parsePointage);

module.exports = router;
