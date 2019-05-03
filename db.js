const mongo = require('mongodb');
const mongoose = require('mongoose');
//require('./server/config/config');


let configt = {
	useCreateIndex: true,
	useNewUrlParser: true,
	useFindAndModify:false
}

mongoose.connect('mongodb://localhost:27017/blog',configt, (err, res)=>{

  if( err ) throw err;

  console.log('Database is ONLINE')
});

module.exports = mongoose;