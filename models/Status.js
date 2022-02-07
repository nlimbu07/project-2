const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class Status extends Model {}

Status.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      references: {
        model: 'contact.status',
        key: 'id',
      },
    },
    status_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'status',
  }
);

module.exports = Status;
