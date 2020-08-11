const { Router } = require('express');
const router = new Router();
const multer = require('multer');
const cloudinary = require('cloudinary');
const multerStorageCloudinary = require('multer-storage-cloudinary');
const Post = require('../models/Post.model');
const mongoose = require('mongoose');

const routeGuard = require('../configs/route-guard.config');

const storage = new multerStorageCloudinary.CloudinaryStorage({
  cloudinary: cloudinary.v2
});

const upload = multer({ storage });

////////////////////////////////////////////////////////////////////////
///////////////////////////// SIGNUP //////////////////////////////////
////////////////////////////////////////////////////////////////////////

// .get() route ==> to display the signup form to users
router.get('/post', (req, res) => res.render('posts/post-form'));

//leaving off here, need to make routes to handle post creation and display of posts.

// .post() route ==> to process form data
router.post('/post', upload.single('attachment'), (req, res, next) => {
  const { content, name } = req.body;
  const pictureUrl = req.file.path;
  Post.create({
    content,
    creatorId: req.session.user,
    picName: name,
    picPath: pictureUrl
  })
    .then(() => {
      res.redirect('/post');
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
