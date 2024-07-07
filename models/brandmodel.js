module.exports = (sequelize, DataTypes) => {
    const Brand = sequelize.define("brand", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      brand_name: {
        type: "VARCHAR(255)",
      },
      brand_description: {
        type: "text",
      },
      brand_image: {
        type: "text",
      }
    });
    return Brand;
  };
  