const mongoose = require('mongoose');
const Photo = require('../models/photo')


exports.uploadHandler = (req, res) => {
	console.log('hello album', req.body)

	let pic = req.file.path
	//return console.log(req.file);
	//let pro = pic.split('public/').join('')
	//&&console.log('piccc', pro)
	var newPhoto = new Photo(
		{
			title: req.body.title,
			description: req.body.description,
			mainPic: req.file.filename
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

exports.single = (req, res) => {
	const photoId = req.params.id

	if(!photoId) return res.status(409).send('No se recibió el id de la imagen')

	Album.findById(photoId)
}

