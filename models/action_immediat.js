const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('action_immediat', {
    id_action: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    type_action: {
      type: DataTypes.STRING(300),
      allowNull: false,
      defaultValue: ""
    },
    id_probleme: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'qrqc',
        key: 'id_qrqc'
      }
    },
    qte_en_cours: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    qte_en_cours_non_conforme: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    qte_magasin: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    qte_magasin_non_conforme: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    qte_stock_client: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    qte_stock_client_non_conforme: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'action_immediat',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_action" },
        ]
      },
      {
        name: "id_probleme",
        using: "BTREE",
        fields: [
          { name: "id_probleme" },
        ]
      },
    ]
  });
};
