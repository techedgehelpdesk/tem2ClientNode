module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define("image", {
      fileName: {
        type: "VARCHAR(255)",
      },
      filePath: {
        type: "VARCHAR(255)",
      },
      fk_product_id: {
        type: DataTypes.INTEGER,
      },
      is_big_img: {
        type: DataTypes.INTEGER,
      },
      is_small_img: {
        type: DataTypes.INTEGER,
      },
    });
    return Image;
  };
  