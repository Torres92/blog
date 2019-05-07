const mongoose = require('mongoose');
const Album = require('../models/album')


exports.uploadHandler = (req, res) => {
	console.log('hello album')

	let pic = req.file.path
	let pro = pic.split('public/').join('')
	console.log('piccc', pro)
	var newAlbum = new Album(
		{
			title: req.body.title,
			description: req.body.description,
			mainPic: pro
		}
	)
	newAlbum.save(function(err, album) {
		if(err){
			return res.status(500).end('error')
		}
		console.log(album._id, 'album')
		return res.status(200).render('addPhotos',{
			album: album
		})
	})

}

exports.addPics = (req, res) => {
	console.log(req.file.path, req.body)
	const id = req.params.id
	//const url = req.query.postImg
	//const path = 'uploads/'+ url
	console.log('heyyyyyyy');
	let pic = req.file.path
	let pro = pic.split('public/').join('')
	Album.findOne({_id:id})
		.then(album => {

			if(!album){
				res.status(404).end('No album se encontraron')
			}
			album.pictures.push({
				url: pro
			})
			album.save(function(err, album){
				if(err){
					return res.status(500).end('error')
				}
				return res.status(200).render('addPhotos',{
					album: album
				})

			})
			

		})
		.catch(err => {
			return res.status(500).end('error')
		})
}