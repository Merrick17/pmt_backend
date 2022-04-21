const csv = require("csvtojson/v2");
const fs = require("fs");
const parsePointage = async (req, res) => {
  try {
    let results = [];
    let { path } = req.file;
    const jsonArray = await csv().fromFile(path);
    res.json({
      result: jsonArray,
    });
  } catch (err) {}
};

module.exports = { parsePointage };
