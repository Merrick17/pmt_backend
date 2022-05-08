const {
  loginUser,
  getAllUsers,
  updateUserPassword,
  updateUserService,
  updateUser,
} = require("../controllers/users.controller");

const router = require("express").Router();

router.post("/login", loginUser);
router.get("/all", getAllUsers);
router.post("/edit/password", updateUserPassword);
router.put("/edit/service", updateUserService);
router.put("/edit/user", updateUser);
module.exports = router;
