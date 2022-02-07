const sequelize = require('../config/connections');
const seedLeadSources = require('./leadSourceData');
const seedStatuses = require('./statusData');
const seedUsers = require('./userData');
const seedContacts = require('./contactData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedLeadSources();

  await seedStatuses();

  await seedUsers();

  await seedContacts();

  process.exit(0);
};

seedAll();
