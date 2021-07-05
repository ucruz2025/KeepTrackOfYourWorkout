const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001;
const app = express();
app.use(morgan('dev'));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//Run index.html by default
app.use(express.static('public'));

mongoose.connect(process.env.MONGOD_URI || 'mongodb://localhost/workout',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

app.use(require('./routes/apiRoutes'));
app.use(require('./routes/htmlRoutes'));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});