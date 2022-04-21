const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('details_tache', {
    id_details: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    description: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    date_desc: {
      type: DataTypes.DATE,
      allowNull: false
    },
    id_tache: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'audit',
        key: 'id_tache'
      }
    }
  }, {
    sequelize,
    tableName: 'details_tache',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_details" },
        ]
      },
      {
        name: "id_tache",
        using: "BTREE",
        fields: [
          { name: "id_tache" },
        ]
      },
    ]
  });
};
