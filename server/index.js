const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
// routes and middlewares
const userRoute = require('./src/routes/users');
const authentication = require('./src/middleware/auth');
// environment variables config
require('dotenv').config(); // TODO: preload - when using import instead of require

const app = express();
const port = process.env.PORT || 5000;

// connect to database
const mongooseOpts = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}
mongoose.connect(process.env.DB_LOCAL, mongooseOpts)
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.log(err));
mongoose.Promise = global.Promise; // mongoose promises are depricated. overriding with node promise

// cors enabled
app.use(cors());
app.options('*', cors());
// body parser middleware
app.use(bodyParser.json({limit: '10mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));
// authentication middleware with passport
app.use(passport.initialize());
authentication(passport);

// configure routes
app.use('/api/user', userRoute);

// app.use((err, req, res, next) => {
//   console.log(err);
//   next();
// });

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});