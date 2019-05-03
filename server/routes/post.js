const express = require('express');
const router = express.Router();
const posting = require('../controllers/post')

const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname);
    }
})

const upload = multer({ storage: storage })

router.post('/', upload.single('postImg'), posting.uploadHandler)

module.exports = router;