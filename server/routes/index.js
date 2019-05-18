const express = require('express');
const router = express.Router();

const index = require('../controllers/index')

router.get('/', index.home)

router.get('/photos', index.photos)

router.get('/single/:id', index.single, index.renderSingle)

//router.get('/bio', index.bio)

router.get('/newPhoto', index.newPhoto)



module.exports = router;