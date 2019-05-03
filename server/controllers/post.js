const mongoose = require('mongoose');
const Post = require('../models/post')


exports.uploadHandler = (req, res) => {
	console.log('req.body', req.body, req.file);
}