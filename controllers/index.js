const router = require('express').Router();
const { Post, User } = require('../models');
const homeRoutes = require('./home-routes');

router.use('/', homeRoutes);

module.exports = router;