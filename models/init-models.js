var DataTypes = require("sequelize").DataTypes;
var _action_correction = require("./action_correction");
var _action_immediat = require("./action_immediat");
var _alert_error = require("./alert_error");
var _audit = require("./audit");
var _cause = require("./cause");
var _connected_device = require("./connected_device");
var _details_tache = require("./details_tache");
var _livraison = require("./livraison");
var _mytable = require("./mytable");
var _objectif = require("./objectif");
var _pdc = require("./pdc");
var _personnel = require("./personnel");
var _pointage = require("./pointage");
var _prod = require("./prod");
var _qrqc = require("./qrqc");
var _suivis = require("./suivis");

function initModels(sequelize) {
  var action_correction = _action_correction(sequelize, DataTypes);
  var action_immediat = _action_immediat(sequelize, DataTypes);
  var alert_error = _alert_error(sequelize, DataTypes);
  var audit = _audit(sequelize, DataTypes);
  var cause = _cause(sequelize, DataTypes);
  var connected_device = _connected_device(sequelize, DataTypes);
  var details_tache = _details_tache(sequelize, DataTypes);
  var livraison = _livraison(sequelize, DataTypes);
  var mytable = _mytable(sequelize, DataTypes);
  var objectif = _objectif(sequelize, DataTypes);
  var pdc = _pdc(sequelize, DataTypes);
  var personnel = _personnel(sequelize, DataTypes);
  var pointage = _pointage(sequelize, DataTypes);
  var prod = _prod(sequelize, DataTypes);
  var qrqc = _qrqc(sequelize, DataTypes);
  var suivis = _suivis(sequelize, DataTypes);

  details_tache.belongsTo(audit, { as: "id_tache_audit", foreignKey: "id_tache"});
  audit.hasMany(details_tache, { as: "details_taches", foreignKey: "id_tache"});

  return {
    action_correction,
    action_immediat,
    alert_error,
    audit,
    cause,
    connected_device,
    details_tache,
    livraison,
    mytable,
    objectif,
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
