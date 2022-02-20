const router = require('express').Router();
const { Contact, Lead_Source, Status, User } = require('../models');
const sequelize = require('../config/connections');
const withAuth = require('../utils/auth');



router.get('/', (req, res) => {
    if (req.session.loggedIn) {
        res.render('newcontact',{loggedIn: req.session.loggedIn});
    } else {
        res.render('/login');
    }
  });
  
  
  module.exports = router;
  