
const mongoose = require('mongoose');
const Post = require('../models/post')


exports.home = (req, res) => {
	
			res.status(200).render('index')
}

exports.photos = (req, res) => {
			res.status(200).render('photos')
}

exports.bio = (req, res) => {
			res.status(200).render('bio')
}

exports.contact = (req, res) => {
			res.status(200).render('contact')
}

exports.blog = (req, res) => {
			res.status(200).render('blog')
}


exports.newpost = (req, res) => {
	res.status(200).render('posting',{})
}

exports.postAPost = (req, res) => {

	if(!req.body.title) {
		return res.status(409).json({
			ok: false,
			message: 'No se recibió el titulo'
		})
	}

		if(!req.body.content){
		return res.status(409).json({
			ok: false,
			message: 'No se recibió el texto principal del blog'
		})
	}

	var newPost = new Post({
		title: req.body.title,
		name: req.body.name,
		email: req.body.email,
		subject: req.body.subject,
		content: req.body.content
	})

	newPost.save(function(err, saved) {
		if(err){
			return res.status(500).end('error')
		}
		return res.status(200).redirect('/')
	})
}



