module.exports = (sequelize, DataTypes) => {
    const KeywordMapping = sequelize.define("keywordMapping", {
      keyword_id: {
        type: DataTypes.INTEGER,
      },
      product_id: {
        type: DataTypes.INTEGER,
      },
    });
  
    return KeywordMapping;
  };
  