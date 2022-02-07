const { Model, DataTypes, INTEGER } = require('sequelize');

const sequelize = require('../config/connections');

class Contact extends Model {}

Contact.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: ture,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: '',
        key: '',
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: '',
        key: '',
      },
    },
    lead_source_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: '',
        key: '',
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: ture,
    modelName: 'contact',
  }
);

module.exports = Contact;
