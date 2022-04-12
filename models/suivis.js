const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('suivis', {
    id_suivis: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    eta_suivis: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    id_probleme: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mat_responsable: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    escalade: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    motifs: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'suivis',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_suivis" },
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
