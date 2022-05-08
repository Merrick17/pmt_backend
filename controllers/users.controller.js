const { prodDb, dbOrm } = require("../config/initDb");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const initUsersPassword = async () => {
  try {
    let hashedPass = await bcrypt.hash(process.env.INIT_PASSWORD, 10);
    let result = await dbOrm.personnel.update(
      { PASSWD: hashedPass },
      { where: { PASSWD: null } }
    );
    console.log("Result", result);
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
const updateUserService = async (req, res) => {
  try {
    let { matricule, service } = req.body;

    let result = await dbOrm.personnel.update(
      { SERVICE: service },
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
    let { matricule, password, deviceToken } = req.body;

    let user = await dbOrm.personnel.findOne({ where: { MATRIC: matricule } });
    console.log("USER", deviceToken);
    if (user) {
      let verif = await bcrypt.compare(password, user.PASSWD);
      let device = await dbOrm.connected_device.findOne({
        where: { mat_user: user.MATRIC },
      });
      console.log("Device", device);
      if (!device) {
        let added = await dbOrm.connected_device.create({
          mat_user: user.MATRIC,
          device_token: deviceToken,
        });
      } else {
        let updated = await dbOrm.connected_device.update(
          { device_token: deviceToken },
          {
            where: {
              mat_user: user.MATRIC,
            },
          }
        );
      }

      if (verif) {
        let token = jwt.sign({ user: user.MATRIC }, process.env.TOKEN_SECRET, {
          expiresIn: "24h",
        });
        console.log("TOKEN", token);
        let result = {
          success: true,
          token: token,
        };
        res.json({
          success: true,
          result: {
            token: token,
            user: user,
          },
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
      attributes: ["MATRIC", "PRENOM", "NOMPER", "SERVICE"],
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
const updateUser = async (req, res) => {
  try {
    let { service, password, matricule } = req.body;
    console.log("Service", service, matricule);

    if (password) {
      let hashedPass = await bcrypt.hash(password, 10);
      let result = await dbOrm.personnel.update(
        { SERVICE: service, PASSWD: hashedPass },
        {
          where: {
            MATRIC: matricule,
          },
        }
      );
      res.json({
        success: true,
        message: "user updated",
      });
    } else {
      let result = await dbOrm.personnel.update(
        { SERVICE: service },
        {
          where: {
            MATRIC: matricule,
          },
        }
      );
      console.log("Result", result);
      res.json({
        success: true,
        message: "user updated",
      });
    }
  } catch (error) {
    console.log("error", error.message);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  updateUserPassword,
  initUsersPassword,
  loginUser,
  getAllUsers,
  updateUserService,
  updateUser,
};
