const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {

    const postData = await Post.findAll({
      where: {
        userId: req.session.userId
      },
      attributes: ["id", "title", "body", "user_id"],
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Comment,
          attributes: ["id", "post_id", "user_id", "comment_text"],
        },
      ],
    })

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('all-posts-admin', {

      layout: 'dashboard',
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {res.redirect('login');
}
});

router.get('/new', withAuth, (req, res) => {

  res.render('new-post', {
    layout: 'dashboard',
    loggedIn: req.session.loggedIn,
  });
});

router.get('/edit/:id', withAuth, async (req, res) => {
Post.findByPk(req.params.id, {
  attributes: ["id", "title", "body", "user_id"],
  include: [{
    model: User,
    attributes: ["username"]
  },
  {
    model: Comment,
    attributes: ["id", "post_id", "user_id", "comment_text"],
    include: {
      model: User,
      attributes: ["username"],
    },
  }
  ],
})

  .then((postData) => {
    if (postData) {

      const post = postData.get({ plain: true });

      res.render('edit-post', {
        layout: 'dashboard',
        post,
        loggedIn: req.session.loggedIn,
      });
    } else { res.status(404).end();
    }
    })
   .catch ((err) => { res.redirect('login');
  });
});

module.exports = router;
