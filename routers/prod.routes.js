const express = require("express");
const {
  trsCalculByDay,
  trsCalculByWeek,
  trsCalculBylMonth,
  tauxRebusMonth,
  trsHistoryByPoste,
  trsGlobal,
  tauxRebusDay,
  tempsEfficientGlobal,
  OtdCount,
} = require("../controllers/prod.controller");

const router = express.Router();

router.post("/trs/day", trsCalculByDay);
router.post("/trs/week", trsCalculByWeek);
router.post("/trs/month", trsCalculBylMonth);
router.get("/trs/global", trsGlobal);
router.post("/temps/efficient", tempsEfficientGlobal);
router.get("/trs/month/:poste", trsHistoryByPoste);
router.post("/rebus/month", tauxRebusMonth);
router.post("/rebus/day", tauxRebusDay);
router.get("/otd/count", OtdCount);
module.exports = router;
