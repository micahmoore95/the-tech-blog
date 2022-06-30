const route = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User } = require('../models');


router.get('/', (req, res) => {
    Post.findAll({
      attributes: ['id', 'title', 'post_text', 'createdAt'],
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });
});

module.exports = router;