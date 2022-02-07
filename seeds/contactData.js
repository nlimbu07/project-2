const { Contact } = require('../models');

const contactdata = [
  {
    first_name: 'Spongebob',
    last_name: 'Squarepants',
    phone: '614-111-1111',
    email: 'spongeworthy@bikinibottom.com',
    notes: 'Lives in a pineapple under the sea.',
    status_id: 1,
    user_id: 1,
    lead_source_id: 1,
    created_at: 'April 20, 2021 07:00:00',
    updated_at: 'April 22, 2021 11:34:12'
  },
  {
    first_name: 'Patrick',
    last_name: 'Star',
    phone: '614-222-2222',
    email: 'pattywagon@bikinibottom.com',
    notes: 'Good buddies with Spongebob.',
    status_id: 2,
    user_id: 2,
    lead_source_id: 2,
    created_at: 'May 20, 2021 07:00:00',
    updated_at: 'June 1, 2021 11:54:12'
  },
  {
    first_name: 'Sandy',
    last_name: 'Cheeks',
    phone: '614-333-3333',
    email: 'sandbar@bikinibottom.com',
    notes: 'Might kick your ass',
    status_id: 3,
    user_id: 3,
    lead_source_id: 3,
    created_at: 'December 9, 2021 07:00:00',
    updated_at: 'January 22, 2022 11:34:12'
  },
  {
    first_name: 'David',
    last_name: 'Hasslehoff',
    phone: '614-444-4444',
    email: 'thehoff@bikinibottom.com',
    notes: 'Germans love him!',
    status_id: 4,
    user_id: 4,
    lead_source_id: 4,
    created_at: 'July 4, 2021 09:12:00',
    updated_at: 'August 22, 2021 11:34:12'
  },
  {
    first_name: 'Pearl',
    last_name: 'Krabs',
    phone: '614-555-5555',
    email: 'pearlywhite@bikinibottom.com',
    notes: 'High maintenance',
    status_id: 1,
    user_id: 2,
    lead_source_id: 3,
    created_at: 'November 1, 2021 3:13:00',
    updated_at: 'December 3, 2021 11:34:12'
  },
  {
    first_name: 'Larry',
    last_name: 'Lobster',
    phone: '614-666-6666',
    email: 'larrybaby@bikinibottom.com',
    notes: 'Very fit',
    status_id: 3,
    user_id: 2,
    lead_source_id: 2,
    created_at: 'April 20, 2021 07:00:00',
    updated_at: 'April 22, 2021 11:34:12'
  }
];

const seedContacts = () => Contact.bulkCreate(contactdata);

module.exports = seedContacts;
