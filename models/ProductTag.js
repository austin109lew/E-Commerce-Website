const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },

    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Product', // Name of the model to reference
        key: 'id'         // Key in the referenced model that the foreign key refers to
      }
    },

    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Tag', // Name of the model to reference
        key: 'id'     // Key in the referenced model that the foreign key refers to
      }
    }
    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
