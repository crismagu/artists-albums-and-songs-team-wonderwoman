var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const db = require('./src/utils/db');

// var indexRouter = require('./src/routes/index-router');
const artistRouter = require('./src/routes/artist-router');
const albumRouter = require('./src/routes/album-router');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
app.use('/artists', artistRouter);
app.use('/albums', albumRouter);

module.exports = app;
