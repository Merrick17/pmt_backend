const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mytable', {
    Periode: {
      type: DataTypes.STRING(17),
      allowNull: false,
      primaryKey: true
    },
    affair: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    Client: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    Ligne_cde: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ReferenceCdeClient: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    J0: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    J5: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    J10: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    JPLUS: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Code_article: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Libelle_article: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Date_delai_demande: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Date_delai_confirme: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Date_depart: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Date_livraison: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Qte_cdee: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    Qte_livree: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    Ecart_Net: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Ecart_Brut: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mytable',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Periode" },
        ]
      },
    ]
  });
};
