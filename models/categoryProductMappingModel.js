module.exports = (sequelize, DataTypes) => {
    const CategoryProductMapping = sequelize.define("categoryProductMapping", {
      category_id: {
        type:DataTypes.INTEGER,
      },
      sub_category_id: {
        type:DataTypes.INTEGER,
      },
      product_id: {
        type:DataTypes.INTEGER,
      }
    });
    return CategoryProductMapping;
  };
  