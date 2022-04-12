const { dbOrm } = require("../config/initDb");

const addNewQrQc = async (req, res) => {
  try {
    let {
      Service,
      desc_prob,
      NumArticle,
      NumOf,
      Date_probleme,
      pos_probleme,
      nom_personne,
      mat_personne,
      moyenne_detection,
      frequence_detection,
      reccurence,
      raison_defaut,
      date_detection,
      pos_detection,
      nom_perso_detect,
      mat_perso_detect,
      nbr_piece,
    } = req.body;
    let newItem = {
      Service,
      desc_prob,
      NumArticle,
      NumOf,
      Date_probleme,
      pos_probleme,
      nom_personne,
      mat_personne,
      moyenne_detection,
      frequence_detection,
      reccurence,
      raison_defaut,
      date_detection,
      pos_detection,
      nom_perso_detect,
      mat_perso_detect,
      nbr_piece,
    };
    let result = await dbOrm.qrqc.create(newItem);
    res.json({
      success: true,
      message: "info ajouter",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

const addewActionCorrect = async (req, res) => {
  try {
    let {
      type_action,
      id_probleme,
      qte_en_cours,
      qte_en_cours_non_conforme,
      qte_magasin,
      qte_magasin_non_conforme,
      qte_stock_client,
      qte_stock_client_non_conforme,
    } = req.body;
    let itemToSave = {
      type_action,
      id_probleme,
      qte_en_cours: qte_en_cours || null,
      qte_en_cours_non_conforme: qte_en_cours_non_conforme || null,
      qte_magasin: qte_magasin || null,
      qte_magasin_non_conforme: qte_magasin_non_conforme || null,
      qte_stock_client: qte_stock_client || null,
      qte_stock_client_non_conforme: qte_stock_client_non_conforme || null,
    };
    let result = await dbOrm.action_immediat.create(itemToSave);
    res.json({
      success: true,
      message: "info ajouter",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
const addNewCause = async (req, res) => {
  try {
    let { desc_cause, id_probleme, rep_1, rep_2, rep_3, rep_4, rep_5 } =
      req.body;
    let response = {
      id_probleme: id_probleme,
      rep_1: rep_1 || null,
      rep_2: rep_2 || null,
      rep_3: rep_3 || null,
      rep_4: rep_4 || null,
      rep_5: rep_5 || null,
      desc_cause: desc_cause,
    };
    let result = await dbOrm.cause.create(response);
    res.json({
      success: true,
      message: "info ajouter",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
const getQRQCInfo = async (req, res) => {
  try {
    let qrqcList = await dbOrm.qrqc.findAll();
    let result = qrqcList.map(async (elm) => {
      console.log("elm", elm);
      let actionsImmediatList = await dbOrm.action_immediat.findAll({
        where: { id_probleme: elm.id_qrqc },
      });
      console.log("ACtion", actionsImmediatList);
      let cause = await dbOrm.cause.findAll({
        where: {
          id_probleme: elm.id_qrqc,
        },
      });
      return { ...elm, action: actionsImmediatList, cause: cause };
    });
    let resultToDisplay = await Promise.all(result);
    res.json({
      success: true,
      result: resultToDisplay,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
const getQRQCInfoById = async (req, res) => {
  try {
    let { id } = req.params;
    let qrqrc = await dbOrm.qrqc.findByPk(id);
    let actionsImmediatList = await dbOrm.action_immediat.findAll({
      where: { id_probleme: qrqrc.id_qrqc },
    });
    let cause = await dbOrm.cause.findAll({
      where: {
        id_probleme: qrqrc.id_qrqc,
      },
    });
    let result = {
      ...qrqrc,
      cause: cause,
      actionsImmedita: actionsImmediatList,
    };
    let resultToDisplay = await Promise.all(result);
    res.json({
      success: true,
      result: resultToDisplay,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = {
  addNewQrQc,
  addewActionCorrect,
  addNewCause,
  getQRQCInfo,
  getQRQCInfoById,
};
