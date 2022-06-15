const csvToJson = require("convert-csv-to-json");
const moment = require("moment");
const { dbOrm } = require("../config/initDb");
const parsePointage = async (req, res) => {
  try {
    let results = [];
    let { path } = req.file;
    let listePersonnel = csvToJson.getJsonFromCsv(path);
    console.log("LISTE 1", listePersonnel[0].ANPASD.replace(",", "."));
    let newList = listePersonnel.map((elm) => {
      let MODDAT = moment(new Date(elm.MODDAT)).format("YYYY-MM-DD");
      let CREDAT = moment(new Date(elm.CREDAT)).format("YYYY-MM-DD");
      let DTEENT = moment(new Date(elm.DTEENT)).format("YYYY-MM-DD");
      let DTESOR = moment(new Date(elm.DTESOR)).format("YYYY-MM-DD");

      let newELm = {
        ...elm,
        NUMERO: Number(elm.NUMERO.replace(",", ".")),
        BONHRE: Number(elm.BONHRE.replace(",", ".")),
        TAUHOR: Number(elm.TAUHOR.replace(",", ".")),
        ETAUHOR: Number(elm.ETAUHOR.replace(",", ".")),
        STABAD: Number(elm.STABAD.replace(",", ".")),
        RESHAB: Number(elm.RESHAB.replace(",", ".")),
        ANPASD: Number(elm.ANPASD.replaceAll(",", ".")),
        ANENCD: Number(elm.ANENCD.replaceAll(",", ".")),
        ANENCP: Number(elm.ANENCP.replaceAll(",", ".")),
        ANSUID: Number(elm.ANSUID.replaceAll(",", ".")),
        ANSUIP: Number(elm.ANSUIP.replaceAll(",", ".")),
        NBRENF: Number(elm.NBRENF.replaceAll(",", ".")),
        ANPASP: Number(elm.ANPASP.replaceAll(",", ".")),
        CPAREP: Number(elm.CPAREP.replaceAll(",", ".")),
        CPAACQ: Number(elm.CPAACQ.replaceAll(",", ".")),
        CPAPRI: Number(elm.CPAPRI.replaceAll(",", ".")),
        RTTREP: Number(elm.RTTREP.replaceAll(",", ".")),
        RTTACQ: Number(elm.RTTACQ.replaceAll(",", ".")),
        RTTPRI: Number(elm.RTTPRI.replaceAll(",", ".")),
        ANNREP: Number(elm.ANNREP.replaceAll(",", ".")),
        ANNCUM: Number(elm.ANNCUM.replaceAll(",", ".")),
        HSUREP: Number(elm.HSUREP.replaceAll(",", ".")),
        HSUCUM: Number(elm.HSUCUM.replaceAll(",", ".")),
        MODDAT:
          moment(new Date(elm.MODDAT)).format("YYYY-MM-DD") == "Invalid date"
            ? "9999-12-31"
            : MODDAT,
        CREDAT:
          moment(new Date(elm.CREDAT)).format("YYYY-MM-DD") == "Invalid date"
            ? "9999-12-31"
            : CREDAT,
        DTEENT:
          moment(new Date(elm.DTEENT)).format("YYYY-MM-DD") == "Invalid date"
            ? "9999-12-31"
            : DTEENT,
        DTESOR:
          moment(new Date(elm.DTESOR)).format("YYYY-MM-DD") == "Invalid date"
            ? "9999-12-31"
            : DTESOR,
      };
      return newELm;
    });
    console.log("NEW LIST", newList[0].ANPASD);

    newList.forEach(async (elm) => {
      let result = await dbOrm.personnel.create(elm);
    });

    res.json({
      result: "Liste Ajouter avecs success",
    });
  } catch (err) {
    console.log("error", err);
    res.json({
      result: err.message,
    });
  }
};
const parsePerso = async (req, res) => {
  try {
    try {
      // let results = [];
      let { path } = req.file;
      let listePersonnel = csvToJson.getJsonFromCsv(path);
      console.log("LISTE 1", listePersonnel[0].ANPASD.replace(",", "."));
      let newList = listePersonnel.map((elm) => {
        let MODDAT = moment(new Date(elm.MODDAT)).format("YYYY-MM-DD");
        let CREDAT = moment(new Date(elm.CREDAT)).format("YYYY-MM-DD");
        let DTEENT = moment(new Date(elm.DTEENT)).format("YYYY-MM-DD");
        let DTESOR = moment(new Date(elm.DTESOR)).format("YYYY-MM-DD");

        let newELm = {
          ...elm,
          NUMERO: Number(elm.NUMERO.replace(",", ".")),
          BONHRE: Number(elm.BONHRE.replace(",", ".")),
          TAUHOR: Number(elm.TAUHOR.replace(",", ".")),
          ETAUHOR: Number(elm.ETAUHOR.replace(",", ".")),
          STABAD: Number(elm.STABAD.replace(",", ".")),
          RESHAB: Number(elm.RESHAB.replace(",", ".")),
          ANPASD: Number(elm.ANPASD.replaceAll(",", ".")),
          ANENCD: Number(elm.ANENCD.replaceAll(",", ".")),
          ANENCP: Number(elm.ANENCP.replaceAll(",", ".")),
          ANSUID: Number(elm.ANSUID.replaceAll(",", ".")),
          ANSUIP: Number(elm.ANSUIP.replaceAll(",", ".")),
          NBRENF: Number(elm.NBRENF.replaceAll(",", ".")),
          ANPASP: Number(elm.ANPASP.replaceAll(",", ".")),
          CPAREP: Number(elm.CPAREP.replaceAll(",", ".")),
          CPAACQ: Number(elm.CPAACQ.replaceAll(",", ".")),
          CPAPRI: Number(elm.CPAPRI.replaceAll(",", ".")),
          RTTREP: Number(elm.RTTREP.replaceAll(",", ".")),
          RTTACQ: Number(elm.RTTACQ.replaceAll(",", ".")),
          RTTPRI: Number(elm.RTTPRI.replaceAll(",", ".")),
          ANNREP: Number(elm.ANNREP.replaceAll(",", ".")),
          ANNCUM: Number(elm.ANNCUM.replaceAll(",", ".")),
          HSUREP: Number(elm.HSUREP.replaceAll(",", ".")),
          HSUCUM: Number(elm.HSUCUM.replaceAll(",", ".")),
          MODDAT:
            moment(new Date(elm.MODDAT)).format("YYYY-MM-DD") == "Invalid date"
              ? "9999-12-31"
              : MODDAT,
          CREDAT:
            moment(new Date(elm.CREDAT)).format("YYYY-MM-DD") == "Invalid date"
              ? "9999-12-31"
              : CREDAT,
          DTEENT:
            moment(new Date(elm.DTEENT)).format("YYYY-MM-DD") == "Invalid date"
              ? "9999-12-31"
              : DTEENT,
          DTESOR:
            moment(new Date(elm.DTESOR)).format("YYYY-MM-DD") == "Invalid date"
              ? "9999-12-31"
              : DTESOR,
        };
        return newELm;
      });
      console.log("NEW LIST", newList[0].ANPASD);

      newList.forEach(async (elm) => {
        let result = await dbOrm.personnel.create(elm);
      });

      res.json({
        result: "Liste Ajouter avecs success",
      });
    } catch (err) {
      console.log("error", err);
      res.json({
        result: err.message,
      });
    }
  } catch (err) {}
};
module.exports = { parsePointage,parsePerso };
