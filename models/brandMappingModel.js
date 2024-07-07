module.exports = (sequelize, DataTypes) => {
    const BrandMap = sequelize.define("brandMapping", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      brandId: {
        type: DataTypes.INTEGER,
      },
      categoryId: {
        type: DataTypes.INTEGER,
      },
      subCategoryId: {
        type: DataTypes.INTEGER,
      },
      productID: {
        type: DataTypes.INTEGER,
      }
    });
    return BrandMap;
  };
  