const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('qrqc', {
    id_qrqc: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Service: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "0"
    },
    desc_prob: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    NumArticle: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    NumOf: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    Date_probleme: {
      type: DataTypes.DATE,
      allowNull: true
    },
    pos_probleme: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    nom_personne: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    mat_personne: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    moyenne_detection: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    frequence_detection: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    reccurence: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    raison_defaut: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    date_detection: {
      type: DataTypes.DATE,
      allowNull: true
    },
    pos_detection: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    nom_perso_detect: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    mat_perso_detect: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    nbr_piece: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'qrqc',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_qrqc" },
        ]
      },
    ]
  });
};
