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
db.images = require("./imagesModel.js")(sequelize, DataTypes);
db.brand = require("./brandmodel.js")(sequelize, DataTypes)

/**
 * @association image - product 
 */
db.products.hasMany(db.images, {foreignKey:'fk_product_id'});


/**
 * @association product - keywordMapping - keywords
 */
db.products.hasMany(db.keywordsMap, {foreignKey:'product_id'});
db.keywordsMap.belongsTo(db.products, {foreignKey:'product_id'});
db.keywords.hasMany(db.keywordsMap, {foreignKey:'keyword_id'});
db.keywordsMap.belongsTo(db.keywords,{foreignKey:'keyword_id'});
db.products.belongsTo(db.brand, {foreignKey:'brand_id'});
db.brand.hasMany(db.products, {foreignKey:'id'})



/**
 * @association product - PDF Files
 */

// db.products.hasOne(db.ProductPdf, {foreignKey:'product_id'});


db.sequelize.sync({ force: false }).then(() => {
  console.log("resynced");
});

module.exports = db;
