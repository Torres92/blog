const mongoose = require('mongoose');
const Album = require('../models/album')


exports.uploadHandler = (req, res) => {
	console.log('hello album', req.body)

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
		return res.status(200).redirect('/')
	})

}

