const express = require("express");
const {
  trsCalculByDay,
  trsCalculByWeek,
  trsCalculBylMonth,
  tauxRebusMonth,
  trsHistoryByPoste,
  trsGlobal,
  tauxRebusDay,
} = require("../controllers/prod.controller");

const router = express.Router();

router.post("/trs/day", trsCalculByDay);
router.post("/trs/week", trsCalculByWeek);
router.post("/trs/month", trsCalculBylMonth);
router.get("/trs/global", trsGlobal);
router.get("/trs/month/:poste", trsHistoryByPoste);
router.post("/rebus/month", tauxRebusMonth);
router.post("/rebus/day", tauxRebusDay);
module.exports = router;
