const dbConfig = require("../config/dbConfig.js");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialset,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log("sequalize connected...");
  })
  .catch((err) => {
    console.log(err);
  });

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;
// db.products = require("./productModel.js")(sequelize, DataTypes);
db.auth = require("./authModel.js")(sequelize, DataTypes);
db.products = require("./productModel.js")(sequelize, DataTypes);
db.keywords = require("./keywordModel.js")(sequelize, DataTypes);
db.keywordsMap = require("./keyWordMappingModel.js")(sequelize, DataTypes);
// db.images = require("./imageModel.js")(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log("resynced");
});

module.exports = db;
