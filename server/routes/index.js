const express = require('express');
const router = express.Router();

const index = require('../controllers/index')

router.get('/', index.home)

router.get('/photos', index.photos)

router.get('/blog', index.blog)

router.get('/bio', index.bio)

router.get('/contact', index.contact)


router.get('/newpost', index.newpost)


module.exports = router;