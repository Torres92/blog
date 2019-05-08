
const mongoose = require('mongoose');
const Album = require('../models/album')


exports.home = (req, res) => {	
				return res.status(200).render('index')
}

exports.photos = async (req, res) => {
	try {
		var photos = Album.find()
	} catch (e) {
		return res.status(500).render('error')
	}
	return res.status(200).render('photos', {
		photos: photos
	})
}

exports.bio = (req, res) => {
			res.status(200).render('bio')
}

exports.newPhoto = (req, res) => {
			res.status(200).render('newGallery')
}

exports.blog = (req, res) => {
			res.status(200).render('blog')
}





