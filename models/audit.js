const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('audit', {
    id_tache: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tache: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: "\"\""
    },
    duration: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: "\"\""
    },
    date_ajout: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'audit',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_tache" },
        ]
      },
    ]
  });
};
