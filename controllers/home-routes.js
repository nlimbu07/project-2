const router = require('express').Router();
const { Contact, Lead_Source, Status, User } = require('../models');
const sequelize = require('../config/connections');

// router.get('/', (req, res) => {
//   res.render('homepage', {
//     id: 1,
//     post_url: 'https://handlebarsjs.com/guide/',
//     title: 'Handlebars Docs',
//     created_at: new Date(),
//     vote_count: 10,
//     comments: [{}, {}],
//     user: {
//       username: 'test_user'
//     }
//   });
// });

router.get('/', (req, res) => {
  Contact.findAll({
    include: [
        {
        model: Status,
        attributes: ['status_name']
        },
        {
            model: Lead_Source,
            attributes: ['lead_source_name']
        },
        {
            model: User,
            attributes: ['username']
        }
    ]
}
)
  .then(dbContactData => res.json(dbContactData))
    const contacts = dbContactData.map(contact => contact.get({plain:true}));
    res.render('homepage', {
      contacts
      
    })
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});

module.exports = router;