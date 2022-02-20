const Contact = require('./Contact');
const User = require('./User');
const Status = require('./Status');
const Lead_Source = require('./Lead_Source');

Contact.belongsTo(Status, {
  foreignKey: 'status_id',
});

Status.hasMany(Contact, {
  foreignKey: 'status_id'
});

Contact.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Contact, {
  foreignKey: 'user_id'
});

Contact.belongsTo(Lead_Source, {
  foreignKey: 'lead_source_id',
});

Lead_Source.hasMany(Contact, {
  foreignKey: 'lead_source_id'
});

module.exports = {
  Contact,
  User,
  Status,
  Lead_Source,
};