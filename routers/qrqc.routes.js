const {
  addNewQrQc,
  addewActionCorrect,
  addNewCause,
  getQRQCInfo,
  getQRQCInfoById,
  deleteQrQc,
} = require("../controllers/qrqc.controller");

const router = require("express").Router();

router.post("/new", addNewQrQc);
router.post("/action/add", addewActionCorrect);
router.post("/cause/add", addNewCause);
router.get("/all", getQRQCInfo);
router.get("/:id", getQRQCInfoById);
router.delete("/:id", deleteQrQc);
module.exports = router;
