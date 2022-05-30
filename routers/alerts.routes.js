const express = require("express");
const {
  addNewAlert,
  getAllAlerts,
  getAlertsBySender,
  getAlertsByReceiver,
  fixAlert,
} = require("../controllers/alert.controller");
const path = require("path");
const router = express.Router();
const multer = require("multer");
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
router.post("/add", upload.single("image"), addNewAlert);
router.get("/", getAllAlerts);
router.get("/sender/:id", getAlertsBySender);
router.get("/receiver/:id", getAlertsByReceiver);
router.put("/fix/:id", fixAlert);

module.exports = router;
