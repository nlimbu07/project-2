const { Status } = require('../models');

const statusdata = [
  {
    status_name: 'New Lead'
  },
  {
    status_name: 'Contacted'
  },
  {
    status_name: 'Do Not Call'
  },
  {
    status_name: 'Dead Lead'
  },
  {
    status_name: 'Callback Scheduled'
  },
  {
    status_name: 'Sold'
  }
];

const seedStatuses = () => Status.bulkCreate(statusdata);

module.exports = seedStatuses;
