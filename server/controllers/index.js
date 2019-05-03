
const mongoose = require('mongoose');
const Post = require('../models/album')


exports.home = (req, res) => {
	
			res.status(200).render('index')
}

exports.photos = (req, res) => {
			res.status(200).render('photos')
}

exports.bio = (req, res) => {
			res.status(200).render('bio')
}

exports.newGallery = (req, res) => {
			res.status(200).render('newGallery')
}

exports.blog = (req, res) => {
			res.status(200).render('blog')
}


exports.add = (req, res) => {
	return res.status(200).render('addPhotos')
}



