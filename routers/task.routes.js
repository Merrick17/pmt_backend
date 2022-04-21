const express = require("express");
const {
  addNewTask,
  getAllTasks,
  updateTask,
  deleteTask,
  addDetails,
  updateDetails,
  getDetailsByTask,
  deleteDetails,
} = require("../controllers/audit.controller");

const router = express.Router();
router.post("/add", addNewTask);
router.get("/", getAllTasks);
router.put("/edit/:id", updateTask);
router.delete("/delete/:id", deleteTask);
router.post("/details/add/", addDetails);
router.put("/details/edit/:id", updateDetails);
router.get("/details/:id", getDetailsByTask);
router.delete("/details/delete/:id", deleteDetails);

module.exports = router;
