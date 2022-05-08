const { getMessaging } = require("firebase-admin/messaging");

const sendNotifCation = async (tokenDevice, title, desc) => {
  try {
    const message = getMessaging();
    let result = await message.sendToDevice(tokenDevice, {
      notification: {
        title: title,
        body: desc,
      },
    });
    return result;
  } catch (error) {
    console.log("Error", error.message);
  }
};

module.exports = { sendNotifCation };
