// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },

    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    price: {
      type: DataTypes.DECIMAL(10, 2), // Adjust precision and scale as needed
      allowNull: false,
      validate: {
        isDecimal: {
          msg: "Price must be a decimal value" // Custom error message (optional)
        }
      }
    },

    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: {
          msg: "Stock must be a numeric value" // Custom error message (optional)
        }
      }
    },

    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Category', // Name of the model to reference
        key: 'id'         // Key in the referenced model that the foreign key refers to
      }
    }
    
  },  // This curly brace was moved to close the first argument
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;

