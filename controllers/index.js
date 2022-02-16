const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const editpageRoutes = require('./editpage-routes.js');
const newContactRoutes = require('./newcontact-routes.js');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/editpage', editpageRoutes);
router.use('/newcontact', newContactRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;