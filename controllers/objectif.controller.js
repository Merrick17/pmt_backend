const { prodDb, dbOrm } = require("../config/initDb");

const addNewObjectif = async (req, res) => {
  try {
    let { Machine, Matricule_responsable, pourcentage } = req.body;
    let result = await dbOrm.objectif.create({
      Machine,
      Matricule_responsable,
      pourcentage,
    });
    res.json({
      success: true,
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
    });
  }
};
const getAllObjectif = async (req, res) => {
  try {
    let result = await dbOrm.objectif.findAll({});
    // res.json({
    //   success: true,
    //   result: result,
    // });
    let users = await dbOrm.personnel.findAll({});
    //console.log("Users", users);
    let elements = result.map((elm) => {
      let resp = users.find((usr) => usr.MATRIC == elm.Matricule_responsable);
      return { ...elm, resp: `${resp.NOMPER} ${resp.PRENOM}` };
    });
    res.json({
      success: true,
      result: elements,
    });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
    });
  }
};
const updateObjectif = async (req, res) => {
  try {
    let { id } = req.params;
    let dataToUpdate = req.body;
    let result = await dbOrm.objectif.update(
      { ...dataToUpdate },
      {
        where: {
          id_objectif: id,
        },
      }
    );
    res.json({
      success: true,
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
    });
  }
};
const deleteObjectif = async (req, res) => {
  try {
    let result = await dbOrm.objectif.destroy({
      where: { id_objectif: req.params.id },
    });
    res.json({
      success: true,
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
    });
  }
};
module.exports = {
  addNewObjectif,
  getAllObjectif,
  updateObjectif,
  deleteObjectif,
};
