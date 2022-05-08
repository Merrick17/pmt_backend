const express = require("express");
const {
  addNewAlert,
  getAllAlerts,
  getAlertsBySender,
  getAlertsByReceiver,
  fixAlert,
} = require("../controllers/alert.controller");
const router = express.Router();

router.post("/add", addNewAlert);
router.get("/", getAllAlerts);
router.get("/sender/:id", getAlertsBySender);
router.get("/receiver/:id", getAlertsByReceiver);
router.put("/fix/:id", fixAlert);

module.exports = router;
