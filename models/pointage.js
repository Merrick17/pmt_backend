const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pointage', {
    ID_POINT: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Matricule: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    },
    MatLx: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Nom: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    PRENOM: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    Date_pointage: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Pointages: {
      type: DataTypes.STRING(23),
      allowNull: true
    },
    nbHoursRealised: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    Autorisation: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    NbHoursNormal: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Ecart: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pointage',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_POINT" },
        ]
      },
    ]
  });
};
