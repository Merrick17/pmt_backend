const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('action_correction', {
    id_correction: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_probleme: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'qrqc',
        key: 'id_qrqc'
      }
    },
    desc_action: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pilote: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    date_action: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'action_correction',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_correction" },
        ]
      },
      {
        name: "FK__qrqc",
        using: "BTREE",
        fields: [
          { name: "id_probleme" },
        ]
      },
    ]
  });
};
