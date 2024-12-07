const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const yaml = require('js-yaml');

dotenv.config();
const dbUri = process.env.DB_SERVER;

mongoose                      
.connect(dbUri)
.then(() => {
  console.log("db connected")
})
.catch((err) => {
  console.log(err)
})

const swaggerDocument = yaml.load(fs.readFileSync('./swagger.yaml', 'utf8'));

const sqlite3 = require('sqlite3').verbose();
if(!fs.existsSync(path.join(__dirname, 'data'))){
  fs.mkdirSync(path.join(__dirname, 'data'));
}
const db = new sqlite3.Database(path.join(__dirname, 'data','db.sqlite'));

const apiRouter = require('./routes/api');
const gameRouter = require('./routes/game');

const PORT = process.env.PORT;
                                                           
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiRouter);
app.use(`/api/${process.env.APP_VERSION}`, gameRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = process.env.ENV === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

db.run('CREATE TABLE IF NOT EXISTS tourdeapp (record TEXT)');
db.close();
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log('Swagger docs available at http://localhost:3000/api-docs');
});

module.exports = app;
