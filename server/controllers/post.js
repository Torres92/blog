const mongoose = require('mongoose');
const Album = require('../models/album')


exports.uploadHandler = (req, res) => {
	console.log('hello album')
	var newAlbum = new Album(
		{
			title: req.body.title,
			description: req.body.description,
			mainPic: req.file.path
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
	//console.log(req.file.path, req.body)
	const id = req.params.id
	console.log('heyyyyyyy', id, req.body, req.file);
	Album.findOne({_id:id})
		.then(album => {

			if(!album){
				res.status(404).end('No album se encontraron')
			}
			album.pictures.push({
				url: req.body.url
			})
			album.save(function(err, album){
				if(err){
					return res.status(500).end('error')
				}
				return res.status(200).redirect('/addPhotos')

			})
			

		})
		.catch(err => {
			return res.status(500).end('error')
		})
}