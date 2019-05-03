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
		console.log(album, 'album')
		return res.status(200).redirect('/addPhotos')
	})

}

exports.addPics = (req, res) => {
	console.log(req.file, req.body)
	/*Album.find()
		.exec()
		.then(album => {
			if(album.length < 1){
				res.status(404).end('No album se encontraron')
			}
			album[0].pictures
		})
		.catch(err => {
			return res.status(500).end('error')
		})*/
}