module.exports = (sequelize, DataTypes) => {
    const Keyword = sequelize.define("keyword", {
      keywords: {
        type: DataTypes.STRING,
      }
    });
  
    return Keyword;
  };
  