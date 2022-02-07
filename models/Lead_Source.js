const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class Lead_Source extends Model {};

Lead_Source.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    lead_source_name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'lead_source',
  }
);

module.exports = Lead_Source;
