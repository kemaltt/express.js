var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const { Sequelize } = require('sequelize');

require('dotenv').config()


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

require('./models/UserModel')

/**
  DB_USERNAME
  DB_PSWD
  DB_HOST
  DB_PORT
  DB_NAME
 */

// const { DB_USERNAME, DB_PSWD, DB_HOST, DB_PORT, DB_NAME } = process.env
// // const sequelize = new Sequelize('postgres://postgres:    @localhost:5432/project')
// const sequelize = new Sequelize(`postgres://${DB_USERNAME}:${DB_PSWD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`)

// sequelize.authenticate()
// .then(() => console.log('Connection has been established successfully.'))
// .catch(err => console.error('Unable to connect to the database:', error))


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;