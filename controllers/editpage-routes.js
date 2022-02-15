const router = require('express').Router();
const { Contact, Lead_Source, Status, User } = require('../models');
const sequelize = require('../config/connections');
const withAuth = require('../utils/auth');


router.get('/:id', (req, res) => {
    Contact.findOne({
        where: { id: req.params.id },
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
    })
    .then(dbContactData => {
        const contacts = dbContactData.get(({plain:true}));
        console.log(contacts);
        res.render('editpage', {
          contacts,
          loggedIn: req.session.loggedIn
        })
      })
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});

module.exports = router;
