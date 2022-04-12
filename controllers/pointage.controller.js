const { dbOrm, prodDb } = require("../config/initDb");
const { Op, fn, col } = require("sequelize");
const groupBy = require("lodash/groupBy");
const absentice = async (req, res) => {
  let months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  try {
    const [results, metadata] = await prodDb.query(
      "SELECT `Matricule`, MONTH(`Date_pointage`) AS 'mois', sum(`nbHoursRealised`) AS `nbHoursRealised` FROM `pointage` AS `pointage` WHERE `pointage`.`Date_pointage` >= '2022-01-01' GROUP BY `Matricule`, MONTH(`Date_pointage`)"
    );
    let final = results.map(async (elm) => {
      let user = await dbOrm.personnel.findAll({
        limit: 1,
        where: { MATRIC: elm.Matricule },
      });
      console.log("User", user);
      if (user.length != 0) {
        return {
          ...elm,
          lastName: user[0].NOMPER,
          firstName: user[0].PRENOM,
          moyenne: elm.nbHoursRealised / 160,
        };
      } else {
        return {
          ...elm,
          lastName: "",
          firstName: "",
          moyenne: elm.nbHoursRealised / 160,
        };
      }
      //   console.log("Matricule", elm.Matricule);
    });

    let display = await Promise.all(final);
    let finalList = groupBy(display, (elm) => elm.Matricule);
    let listToDisplay = Object.values(finalList).map((elms) => {
      let newElm = months.map((mnth) => {
        let mois = elms.find((mn) => mn.mois == mnth);
        if (mois) {
          return mois;
        } else {
          return {
            Matricule: 0,
            mois: mnth,
            nbHoursRealised: 0,
            lastName: "",
            firstName: "",
            moyenne: 0,
          };
        }
      });
      return newElm;
    });
    console.log("Final", display);
    res.json({ result: listToDisplay });
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = { absentice };
