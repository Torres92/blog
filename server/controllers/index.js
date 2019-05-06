
const mongoose = require('mongoose');
const Album = require('../models/album')


exports.home = (req, res) => {
	
		Album.find()
			.exec()
			.then(album => {
				if(album.lenght < 1){
					return res.status(404).end('No album found')
				}
console.log('album', album);
				return res.status(200).render('index', {
					album: album
				})
			})
			.catch(err => {
				return res.status(500).end('error')
			})
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



