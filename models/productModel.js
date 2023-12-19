module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("product", {
    manual_description: {
      type: DataTypes.STRING,
    },
    accounts_description: {
      type: DataTypes.STRING,
    },
    model_suitability: {
      type: DataTypes.STRING,
    },
    specification: {
      type: DataTypes.STRING,
    },
    part_no: {
      type: DataTypes.STRING,
    },
    consumer_price: {
      type: DataTypes.INTEGER,
    },
    weight: {
      type: DataTypes.STRING,
    },
    new_consumer_price: {
      type: DataTypes.INTEGER,
    },
    availability: {
      type: DataTypes.INTEGER,
    },
    discount: {
      type: DataTypes.INTEGER,
    },
    rating: {
      type: DataTypes.INTEGER,
    },
    keywords: {
      type: DataTypes.STRING,
    }
  });

  return Product;
};
