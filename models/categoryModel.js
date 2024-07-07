module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define("category", {
      category_name: {
        type: "VARCHAR(255)",
      },
      category_description: {
        type: "text",
      },
      category_image: {
        type: "text",
      }
    });
    return Category;
  };
  