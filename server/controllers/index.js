
const mongoose = require('mongoose');
const Photo = require('../models/photo')


exports.home = (req, res) => {	
				return res.status(200).render('bio')
}

exports.photos = async (req, res) => {
	try {
		var photos = Photo.find()
		console.log(photos)
	} catch (e) {
		return res.status(500).render('error')
	}
	return res.status(200).render('photos', {
		photos: photos
	})
}

/*
exports.bio = (req, res) => {
			res.status(200).render('bio')
}*/

exports.newPhoto = (req, res) => {
			res.status(200).render('newGallery')
}
/*
exports.blog = (req, res) => {
			res.status(200).render('blog')
}*/





