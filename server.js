const express = require('express');
const mongoose= require('mongoose');
const morgan = require('morgan');
const app = express();
require('pretty-error').start();

//Config
const PORT = 3000;
const mongoURI = 'mongodb://localhost/foodcata_api'

// DB
mongoose.connect(mongoURI, { useMongoClient: true });
const db = mongoose.connection;
db.on('error', (err) => console.log('Mongo error: ', err));
db.on('connected', () => console.log('Mongo connected at: ', mongoURI));
db.on('disconnected', () => console.log('Mongo disconnected'));
mongoose.Promise = global.Promise;

//controllers
const foodController = require('./controllers/food.js');

//Middleware
// MIDDLEWARE
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));
app.use(morgan('dev'));
// app.use(session({
//   secret: 'Yeah',
//   resave: true,
//   saveUninitialized: false,
//   maxAge: 2592000000
// }));
app.use('/food', foodController);


// //index
// router.get('/', (req,res) => {
//   res.send('Hello World')
// })


app.listen (PORT, () => {
  console.log("listening on port: ", PORT);
})
