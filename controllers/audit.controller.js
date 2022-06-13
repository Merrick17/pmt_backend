const { dbOrm } = require("../config/initDb");
const addNewTask = async (req, res) => {
  try {
    let { task, duration, date_ajout } = req.body;
    let result = await dbOrm.audit.create({
      tache: task,
      duration: duration,
      date_ajout: date_ajout,
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
const getAllTasks = async (req, res) => {
  try {
    let result = await dbOrm.audit.findAll();
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

const updateTask = async (req, res) => {
  try {
    let dataToUpdate = req.body;
    let { id } = req.params;
    let result = await dbOrm.audit.update(
      { ...dataToUpdate },
      {
        where: {
          id_tache: id,
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

const deleteTask = async (req, res) => {
  try {
    let { id } = req.params;
    let result = await dbOrm.audit.destroy({
      where: {
        id_tache: id,
      },
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
const addDetails = async (req, res) => {
  try {
    let { description, date_desc, id_tache } = req.body;
    let result = await dbOrm.details_tache.create({
      description,
      date_desc,
      id_tache,
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
const updateDetails = async (req, res) => {
  try {
    let dataToUpdate = req.body;
    let { id } = req.params;
    let result = await dbOrm.details_tache.update(
      {
        ...dataToUpdate,
      },
      {
        where: {
          id_details: id,
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
const deleteDetails = async (req, res) => {
  try {
    let { id } = req.params;
    let result = await dbOrm.details_tache.destroy({
      where: { id_details: id },
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
const getDetailsByTask = async (req, res) => {
  try {
    let { id } = req.params;
    let result = await dbOrm.details_tache.findAll({
      where: { id_tache: id },
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
  addNewTask,
  deleteTask,
  updateTask,
  getAllTasks,
  addDetails,
  getDetailsByTask,
  updateDetails,
  deleteDetails,
};
