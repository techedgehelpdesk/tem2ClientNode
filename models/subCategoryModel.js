module.exports = (sequelize, DataTypes) => {
    const SubCategory = sequelize.define("subCategory", {
      sub_category_name: {
        type: "VARCHAR(255)",
      },
      sub_category_description: {
        type: "text",
      },
      sub_category_image: {
        type: "text",
      }
    });
    return SubCategory;
  };
  