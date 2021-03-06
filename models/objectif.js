const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('objectif', {
    id_objectif: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Machine: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "0"
    },
    Matricule_responsable: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    },
    pourcentage: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    TYPE: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "REBUS"
    }
  }, {
    sequelize,
    tableName: 'objectif',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_objectif" },
        ]
      },
      {
        name: "Matricule_responsable",
        using: "BTREE",
        fields: [
          { name: "Matricule_responsable" },
        ]
      },
    ]
  });
};
