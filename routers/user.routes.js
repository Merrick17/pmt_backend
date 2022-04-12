const { loginUser, getAllUsers } = require("../controllers/users.controller");

const router = require("express").Router();

router.post("/login", loginUser);
router.get("/all", getAllUsers);
module.exports = router;
