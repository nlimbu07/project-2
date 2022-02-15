const router = require('express').Router();
const { Contact, Lead_Source, Status, User } = require('../models');
const sequelize = require('../config/connections');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    Contact.findAll({
      include: [
        {
          model: Status,
          attributes: ['status_name'],
        },
        {
          model: Lead_Source,
          attributes: ['lead_source_name'],
        },
        {
          model: User,
          attributes: ['username'],
        },
      ],
    })
      .then((dbContactData) => {
        const contacts = dbContactData.map((contact) =>
          contact.get({ plain: true })
        );
        console.log(contacts);
        res.render('homepage', {
          contacts,
          loggedIn: req.session.loggedIn,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  } else {
    res.redirect('/login');
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
