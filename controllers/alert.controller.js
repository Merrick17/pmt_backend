const { dbOrm } = require("../config/initDb");
const { sendNotifCation } = require("../config/notif");

const addNewAlert = async (req, res) => {
  try {
    let image = req.file.path;
    let { sender_id, receiver_id, description, title } = req.body;
    let result = await dbOrm.alert_error.create({
      sender_mat: sender_id,
      receiver_mat: receiver_id,
      description: description,
      status: "EN COURS",
      title: title,
      image: image,
    });
    let device = await dbOrm.connected_device.findOne({
      where: {
        mat_user: receiver_id,
      },
    });
    if (device) {
      let sent = await sendNotifCation(device.device_token, title, description);
      console.log("Sent", sent);
    }

    res.json({
      success: true,
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      result: error.message,
    });
  }
};

const getAlertsBySender = async (req, res) => {
  try {
    let { id } = req.params;
    let sender = await dbOrm.personnel.findOne({ where: { MATRIC: id } });
    let result = await dbOrm.alert_error.findAll({
      where: {
        sender_mat: id,
      },
    });
    let senderList = result.map(async (elm) => {
      // console.log("ELM", elm);
      let itm = await dbOrm.personnel.findOne({
        where: { MATRIC: elm.receiver_mat },
      });
      if (itm) {
        return { ...elm, sender: sender, receiver: itm };
      } else {
        return { ...elm, receiver: itm };
      }
    });
    let finalResult = await Promise.all(senderList);
    res.json({
      success: true,
      result: finalResult,
    });
  } catch (error) {
    res.json({
      success: false,
      result: error.message,
    });
  }
};
const getAlertsByReceiver = async (req, res) => {
  try {
    let { id } = req.params;
    // console.log("RECEIVER", id);
    let result = await dbOrm.alert_error.findAll({
      where: {
        receiver_mat: id,
      },
    });
    let receiver = await dbOrm.personnel.findOne({ where: { MATRIC: id } });
    let receiverList = result.map(async (elm) => {
      // console.log("ELM", elm);
      let itm = await dbOrm.personnel.findOne({
        where: { MATRIC: elm.sender_mat },
      });
      if (itm) {
        return { ...elm, sender: itm, receiver: receiver };
      } else {
        return { ...elm, receiver: receiver };
      }
    });
    let finalResult = await Promise.all(receiverList);
    // console.log("Receiver", finalResult);
    res.json({
      success: true,
      result: finalResult,
    });
  } catch (error) {
    res.json({
      success: false,
      result: error.message,
    });
  }
};
const getAllAlerts = async (req, res) => {
  try {
    let result = await dbOrm.alert_error.findAll({});
    res.json({
      success: true,
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      result: error.message,
    });
  }
};
const fixAlert = async (req, res) => {
  let { id } = req.params;
  let { correct } = req.body;
  try {
    let result = await dbOrm.alert_error.update(
      {
        correction_desc: correct,
        status: "TERMINER",
      },
      {
        where: { id_alert: id },
      }
    );
    res.json({
      success: true,
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      result: error.message,
    });
  }
};

module.exports = {
  addNewAlert,
  getAlertsByReceiver,
  getAlertsBySender,
  getAllAlerts,
  fixAlert,
};
