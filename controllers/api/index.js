const router = require('express').Router();
const userRoutes = require('./user-routes');
const statusRoutes = require('./status-routes');
const leadSourceRoutes = require('./lead_source-routes');
const contactRoutes = require('./contact-routes');

router.use('/users', userRoutes);
router.use('/status', statusRoutes);
router.use('/leadsource', leadSourceRoutes);
router.use('/contacts', contactRoutes);

module.exports = router;