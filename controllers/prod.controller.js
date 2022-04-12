const fs = require("fs/promises");
const { dbOrm, prodDb } = require("../config/initDb");
const sequelize = require("sequelize");
const moment = require("moment");
const groupBy = require("lodash/groupBy");
const { fn, col, Op } = require("sequelize");
const { isNull } = require("lodash");
const { displayMonthName } = require("../utils/utils");
const postCharge = ["302", "304", "305", "401", "402", "403", "404", "405"];
const getRandomColor = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
const initProdList = async () => {
  try {
    const listRaw = await fs.readFile("./config/prod.json");
    let listJson = JSON.parse(listRaw);
    listJson.forEach(async (item) => {
      let newItem;
      let date = Date.parse(item.Date);
      if (isNaN(date)) {
        newItem = { ...item, Date: null };
      } else {
        console.log("Date input", date);
        console.log("Date", moment(date).format("YYYY-MM-DD"));
        newItem = { ...item, Date: moment(date).format("YYYY-MM-DD") };
      }

      let result = await dbOrm.prod.create(newItem);
      console.log("Result", result);
    });
  } catch (error) {
    console.log("ERROR INIT", error.message);
  }
};
const trsCalculByDay = async (req, res) => {
  let { selectedDate } = req.body;
  try {
    let result = await dbOrm.prod.findAll({
      attributes: [
        "Poste_charge",
        "Date_prod",
        [fn("sum", col("Temps_efficient")), "total_Temps_efficient"],
      ],
      group: ["Poste_charge"],
      where: {
        Date_prod: { [Op.eq]: selectedDate },
        Poste_charge: {
          [Op.in]: postCharge,
        },
      },
    });
    let finalResult = result.map((elm) => {
      return {
        ...elm,
        trs: (elm.total_Temps_efficient / 24) * 100,
        fill: getRandomColor(),
      };
    });

    // let resultat = groupBy(trs, (elm) => elm.Poste_charge);
    res.json({ trs: finalResult });
  } catch (error) {
    res.json({ error: error.message });
  }
};
const trsGlobal = async (req, res) => {
  try {
    const [results, metadata] = await prodDb.query(
      `SELECT MONTH(Date_prod) AS 'mois', SUM(Temps_efficient) AS 'total_temps_efficient' FROM prod WHERE YEAR(Date_prod)= 2022 AND Poste_charge in (${postCharge}) GROUP BY MONTH(Date_prod);  `
    );
    let finalResult = results.map((elm) => {
      return {
        ...elm,
        trsGlobal:
          (elm.total_temps_efficient / (30 * 24 * postCharge.length)) * 100,
        mois: displayMonthName(elm.mois),
      };
    });
    res.json({ trsGlobal: finalResult });
  } catch (error) {}
};
const tauxRebusMonth = async (req, res) => {
  try {
    let { startDate, endDate } = req.body;
    const [results, metadata] = await prodDb.query(
      `SELECT Poste_charge, SUM(Qt_rebus) as 'Qte_rebus',SUM(Qt_faite) as 'Qte_faite' FROM prod WHERE Date_prod >= '${startDate}' AND Date_prod <='${endDate}' AND Poste_charge in (${postCharge}) GROUP BY Poste_charge `
    );
    let finalResult = results.map((elm) => {
      return { ...elm, tauxRebus: (elm.Qte_rebus / elm.Qte_faite) * 100 };
    });

    res.json({
      rebus: finalResult,
    });
  } catch (error) {
    res.json({ error: error.message });
  }
};
const tauxRebusDay = async (req, res) => {
  try {
    let { startDate } = req.body;
    const [results, metadata] = await prodDb.query(
      `SELECT Poste_charge, SUM(Qt_rebus) as 'Qte_rebus',SUM(Qt_faite) as 'Qte_faite' FROM prod WHERE Date_prod = '${startDate}'  AND Poste_charge in (${postCharge}) GROUP BY Poste_charge `
    );
    let finalResult = results.map((elm) => {
      return { ...elm, tauxRebus: (elm.Qte_rebus / elm.Qte_faite) * 100 };
    });

    res.json({
      rebus: finalResult,
    });
  } catch (error) {
    res.json({ error: error.message });
  }
};
const trsCalculByWeek = async (req, res) => {
  try {
    let { startDate, endDate } = req.body;
    const [results, metadata] = await prodDb.query(
      `SELECT Poste_charge , SUM(Temps_efficient) as 'total_temps_efficient' FROM prod WHERE Date_prod >= '${startDate}' AND Date_prod <='${endDate}' AND Poste_charge in (${postCharge}) GROUP BY Poste_charge `
    );
    let finalResult = results.map((elm) => {
      return { ...elm, trs: (elm.total_temps_efficient / (7 * 24)) * 100 };
    });
    res.json({ trs: finalResult });
  } catch (error) {
    res.json({ error: error.message });
  }
};
const trsCalculBylMonth = async (req, res) => {
  try {
    let { startDate, endDate } = req.body;
    const [results, metadata] = await prodDb.query(
      `SELECT Poste_charge , SUM(Temps_efficient) as 'total_temps_efficient' FROM prod WHERE Date_prod >= '${startDate}' AND Date_prod <='${endDate}' AND Poste_charge in (${postCharge}) GROUP BY Poste_charge `
    );
    let finalResult = results.map((elm) => {
      return { ...elm, trs: (elm.total_temps_efficient / (30 * 24)) * 100 };
    });
    res.json({ trs: finalResult });
  } catch (error) {
    res.json({ error: error.message });
  }
};
const trsHistoryByPoste = async (req, res) => {
  try {
    let { poste } = req.params;
    let months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    console.log("Params", poste);
    const [results, metadata] = await prodDb.query(
      `SELECT Poste_charge,MONTH(Date_prod) AS 'mois', SUM(Temps_efficient) AS 'total_temps_efficient' FROM prod WHERE YEAR(Date_prod)= 2022 AND Poste_charge='${poste}' GROUP BY Poste_charge, MONTH(Date_prod); `
    );
    let finalResult = results.map((elm) => {
      return { ...elm, trs: (elm.total_temps_efficient / (30 * 24)) * 100 };
    });
    let mainDisplay = months.map((mnth) => {
      let month = finalResult.find((elm) => elm.mois == mnth);
      if (month) {
        return month;
      } else {
        return {
          mois: mnth,
          trs: 0,
          total_temps_efficient: 0,
        };
      }
    });
    let finalDisplay = mainDisplay.map((elm) => {
      return { ...elm, mois: displayMonthName(elm.mois) };
    });
    res.json({ trs: finalDisplay });
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = {
  initProdList,
  trsCalculByDay,
  trsCalculByWeek,
  tauxRebusMonth,
  trsCalculBylMonth,
  trsHistoryByPoste,
  trsGlobal,
  tauxRebusDay,
};
