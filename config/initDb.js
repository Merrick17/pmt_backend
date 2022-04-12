require("dotenv").config();
const { Sequelize } = require("sequelize");
const initDb = require("../models/init-models");
const prodDb = new Sequelize(
  process.env.PROD_DB,
  process.env.DB_USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    port: 3306,
    dialect: "mysql",
    pool: {
      max: 20,
      min: 10,
      acquire: 150000,
      idle: 100000,
    },
    query: { raw: true },
    dialectOptions: {
      connectTimeout: 60000,
    },
    logging: false,
  }
);
const dbOrm = initDb(prodDb);

module.exports = {
  dbOrm,
  prodDb,
};
