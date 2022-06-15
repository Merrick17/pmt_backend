const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "alert_error",
    {
      id_alert: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      sender_mat: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        defaultValue: 0,
      },
      receiver_mat: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        defaultValue: 0,
      },
      description: {
        type: DataTypes.STRING(200),
        allowNull: false,
        defaultValue: "0",
      },
      correction_desc: {
        type: DataTypes.STRING(200),
        allowNull: false,
        defaultValue: "0",
      },
      status: {
        type: DataTypes.STRING(200),
        allowNull: false,
        defaultValue: "EN_COURS",
      },
      title: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      image: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "alert_error",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id_alert" }],
        },
        {
          name: "sender_mat",
          using: "BTREE",
          fields: [{ name: "sender_mat" }],
        },
        {
          name: "receiver_mat",
          using: "BTREE",
          fields: [{ name: "receiver_mat" }],
        },
      ],
    }
  );
};
