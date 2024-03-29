const express = require('express');
const { body } = require('express-validator/check');

const isAuth = require('../middlewares/is-auth');
const feedController = require('../controllers/feed');

const router = express.Router();

// GET /feed/posts
router.get('/posts',isAuth, feedController.getPosts);

//GET /feed/post/:postid
router.get('/post/:postId',isAuth, feedController.getPost);

// POST /feed/post
router.post( '/post', isAuth, [ body('title') .trim() .isLength({ min: 7 }), body('content') .trim() .isLength({ min: 5 }) ], feedController.createPost );

//POST /feed/post/:postId
router.put('/post/:postId',isAuth,  feedController.updatePost);

//DELETE /feed/post/:postId
router.delete('/post/:postId',isAuth, feedController.deletePost);



module.exports = router;
