const mongoose = require('mongoose');
const Photo = require('../models/photo')


exports.uploadHandler = (req, res) => {
	console.log('hello album', req.body)

	let pic = req.file.path
	//let pro = pic.split('public/').join('')
	console.log('piccc', pro)
	var newPhoto = new Photo(
		{
			title: req.body.title,
			description: req.body.description,
			mainPic: pic
		}
	)
	newPhoto.save(function(err, photo) {
		if(err){
			return res.status(500).end('error')
		}
		console.log(photo._id, 'album')
		return res.status(200).redirect('/')
	})

}

