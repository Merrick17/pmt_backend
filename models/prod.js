const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('prod', {
    id_prod: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Date_prod: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    OF: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    Article: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Code_art: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    Poste_charge: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    OP: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    Tps_rglage_prvu: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    Tps_rglage_pass: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    Qt_prvue: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    Qt_faite: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    Qt_rebus: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    Tps_cycle_prvu_unit: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    Tps_cycle_pass_unit: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    Temps_efficient: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    Tps_gains_prod: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    Temps_non_efficient: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    Temps_non_qualit: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    Tps_arrts: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'prod',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_prod" },
        ]
      },
    ]
  });
};
