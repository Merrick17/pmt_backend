const { prodDb, dbOrm } = require("../config/initDb");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const initUsersPassword = async () => {
  try {
    let hashedPass = await bcrypt.hash(process.env.INIT_PASSWORD, 10);
    let result = await dbOrm.personnel.update(
      { PASSWD: hashedPass },
      { where: { PASSWORD: null } }
    );
  } catch (error) {
    console.log("Error", error.message);
  }
};

const updateUserPassword = async (req, res) => {
  try {
    let { matricule, password } = req.body;
    let newHashedPass = await bcrypt.hash(password, 10);
    let result = await dbOrm.personnel.update(
      { PASSWD: newHashedPass },
      {
        Where: {
          MATRIC: matricule,
        },
      }
    );
    res.json({
      success: true,
      message: "password updated",
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
const loginUser = async (req, res) => {
  try {
    let { matricule, password } = req.body;
    let user = await dbOrm.personnel.findOne(
      {},
      {
        where: { MATRIC: matricule },
      }
    );
    if (user) {
      let verif = await bcrypt.compare(password, user.PASSWORD);
      if (verif) {
        let token = jwt.sign({ user: user }, process.env.TOKEN_SECRET, {
          expiresIn: "24h",
        });
        let result = {
          success: true,
          token: token,
        };
        res.json({
          success: true,
          result: result,
        });
      } else {
        res.json({
          success: false,
          result: "Adresse ou mot de passe incorrect",
        });
      }
    } else {
      res.json({
        success: false,
        result: "Adresse ou mot de passe incorrect",
      });
    }
  } catch (error) {
    res.json({
      success: false,
      result: error.message,
    });
  }
};
const getAllUsers = async (req, res) => {
  try {
    let users = await dbOrm.personnel.findAll({
      attributes: ["MATRIC", "PRENOM", "NOMPER"],
    });
    res.json({
      success: true,
      users: users,
    });
  } catch (error) {
    res.json({
      success: false,
      result: error.message,
    });
  }
};

module.exports = {
  updateUserPassword,
  initUsersPassword,
  loginUser,
  getAllUsers,
};
