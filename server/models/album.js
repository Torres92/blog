const mongoose = require('mongoose');


let Schema = mongoose.Schema

let postSchema = new Schema({
	title: {type: String, lowercase: true},
	description: {type: String, lowercase: true},
	tags: [
		{
			name: {type: String}
		}
	],
	mainPic: {type: String},
	views: {
		n: {type: Number, default:0}
	},
	date: {type: Date, default: Date.now},
	pictures: [{
		url: {type: String} 
	}],
	likes: {type: Number, default: 0},
	comments: [
		{
			id: {type:mongoose.Schema.Types.ObjectId, ref:'Comments'},
			n: {type: Number, default:0}
		}
	]
})






module.exports = mongoose.model('Post', postSchema);