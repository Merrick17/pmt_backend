const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cause', {
    id_cause: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_probleme: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    desc_cause: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    rep_1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    rep_2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    rep_3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    rep_4: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    rep_5: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cause',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_cause" },
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
