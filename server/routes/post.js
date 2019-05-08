const express = require('express');
const router = express.Router();
const path = require('path');
const posting = require('../controllers/post')

const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname);
    }
})

const upload = multer({ storage: storage })

router.post('/', upload.single('postImg'), posting.uploadHandler)

module.exports = router;