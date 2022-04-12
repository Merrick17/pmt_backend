var DataTypes = require("sequelize").DataTypes;
var _action_correction = require("./action_correction");
var _action_immediat = require("./action_immediat");
var _cause = require("./cause");
var _livraison = require("./livraison");
var _mytable = require("./mytable");
var _pdc = require("./pdc");
var _personnel = require("./personnel");
var _pointage = require("./pointage");
var _prod = require("./prod");
var _qrqc = require("./qrqc");
var _suivis = require("./suivis");

function initModels(sequelize) {
  var action_correction = _action_correction(sequelize, DataTypes);
  var action_immediat = _action_immediat(sequelize, DataTypes);
  var cause = _cause(sequelize, DataTypes);
  var livraison = _livraison(sequelize, DataTypes);
  var mytable = _mytable(sequelize, DataTypes);
  var pdc = _pdc(sequelize, DataTypes);
  var personnel = _personnel(sequelize, DataTypes);
  var pointage = _pointage(sequelize, DataTypes);
  var prod = _prod(sequelize, DataTypes);
  var qrqc = _qrqc(sequelize, DataTypes);
  var suivis = _suivis(sequelize, DataTypes);

  action_correction.belongsTo(qrqc, { as: "id_probleme_qrqc", foreignKey: "id_probleme"});
  qrqc.hasMany(action_correction, { as: "action_corrections", foreignKey: "id_probleme"});
  action_immediat.belongsTo(qrqc, { as: "id_probleme_qrqc", foreignKey: "id_probleme"});
  qrqc.hasMany(action_immediat, { as: "action_immediats", foreignKey: "id_probleme"});

  return {
    action_correction,
    action_immediat,
    cause,
    livraison,
    mytable,
    pdc,
    personnel,
    pointage,
    prod,
    qrqc,
    suivis,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
