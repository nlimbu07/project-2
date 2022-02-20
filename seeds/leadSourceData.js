const { Lead_Source } = require('../models');

const leadsourcedata = [
  {
    lead_source_name: 'Company Website'
  },
  {
    lead_source_name: 'Facebook'
  },
  {
    lead_source_name: 'Referral'
  },
  {
    lead_source_name: 'Self Generated'
  },
  {
    lead_source_name: 'Google'
  },
  {
    lead_source_name: 'Digital Lead'
  }
];

const seedLeadSources = () => Lead_Source.bulkCreate(leadsourcedata);

module.exports = seedLeadSources;
