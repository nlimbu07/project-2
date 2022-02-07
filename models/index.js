const Contact = require('./Contact');
const User = require('./index');
const Status = require('./Status');
const Lead_Source = require('./Lead_Source');

Contact.belongsTo(Status, {
  foreignKey: 'status_id',
});

Contact.belongsTo(User, {
  foreignKey: 'user_id',
});

Contact.belongsTo(Lead_Source, {
  foreignKey: 'lead_source_id',
});

module.exports = {
  Contact,
  User,
  Status,
  Lead_Source,
};
