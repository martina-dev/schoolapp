import express from 'express';
import config from './config';
import logger from 'morgan';
import bodyParser from 'body-parser';
import teacher from '../service/routes/teacher';
import mongoose from 'mongoose';

const app = express();
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true, promiseLibrary: require('bluebird')})
  .then(() => console.info('connection successful'))
  .catch((err) => console.error(err));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('index');
});

app.use('/api/teacher', teacher);


app.listen(config.PORT, () => {
  console.info(`Running on port: ${config.PORT}`);
});