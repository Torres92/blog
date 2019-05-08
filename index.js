const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const ejs = require('ejs');
var server = require('http').createServer(app);

require('./db');
// View Engine
//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// MIDDLEWARES
app.use(morgan('dev'));
//app.use("/api/uploads", express.static('uploads'));


const viewRoutes = require('./server/routes/index');
const publicingRoutes = require('./server/routes/post');

//app.use(express.static('uploads'));
//app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// to give access to anyone to api put * or (values for specifying who can access)
app.use((req, res, next)=> {
    res.header('Access-Control-Allow-Origin', '*');// allow all to use api
    res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Request-With, Content-Type, Accept, authorization')//which kind of header we will accept
    
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({})
    }
    next();
})

// ROUTES WHICH handle request
app.use('/', viewRoutes);
app.use('/post', publicingRoutes);


// NO ROUTES FOUND
app.use((req, res, next)=> {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

// ALL GENERAL ERRORS INCLUDING ABOVE ERROR
app.use((error, req, res, next)=>{
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

server.listen(process.env.PORT, ()=>{
    console.log('listening to the port', 8080);
});