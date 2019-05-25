const express = require('express');
const router = express.Router();

const index = require('../controllers/index')

router.get('/', index.home)

router.get('/photos', index.photos)

<<<<<<< HEAD
//router.get('/blog', index.blog)
=======
router.get('/single/:id', index.single, index.renderSingle)
>>>>>>> c1bd4b547fad6dcb550ec623b9c49c9e1b504d71

//router.get('/bio', index.bio)

router.get('/newPhoto', index.newPhoto)



module.exports = router;