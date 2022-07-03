const route = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User } = require('../models');

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

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
}).then((dbPostData) => {
  const post = dbPostData.map((item) => {
    return {
      title: item.title,
      content: item.post_text,
      created_at: item.createdAt.toLocaleDateString(),
      username: item.user.username,
      postId: item.id,
    };
  });
  res.render('homepage', {
    post,
    loggedIn: req.session.loggedIn,
  });
});

router.get('/new-post', (req, res) => {
  res.render('newPost');
});

module.exports = router;