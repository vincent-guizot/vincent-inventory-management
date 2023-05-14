"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Item.belongsTo(models.User);
    }
  }
  Item.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Name cannot be null",
          },
        },
      },
      category: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Category cannot be null",
          },
        },
      },
      price: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Price cannot be null",
          },
          isNumeric: {
            message: "Price must be a number.",
          },
        },
      },
      stock: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Stock cannot be null",
          },
          isNumeric: {
            message: "Stock must be a number.",
          },
        },
      },
      image: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Image cannot be null",
          },
        },
      },
      UserId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Item",
    }
  );
  return Item;
};
