
const mongoose = require('mongoose');
const Photo = require('../models/photo')


exports.home = (req, res) => {	
				return res.status(200).render('bio')
}

exports.photos = async (req, res) => {
	try {
		var fotos = await Photo.find()
		//console.log(photos)
	} catch (e) {
		return res.status(500).render('error')
	}
	if(fotos.length > 0){
		var photos = []

		fotos.forEach(a => {

			a.mainPic = 'uploads/' + a.mainPic

			photos.push({
				_id: a._id,
				mainPic: a.mainPic,
				likes: a.likes,
				views: a.views
			})
		})
		//return console.log(photos);
		return res.status(200).render('photos', {
			photos
		})		
	}
	return res.status(400).redirect('/')

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





