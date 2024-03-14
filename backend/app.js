const express = require('express');
const bodyParser = require('body-parser');

const placesRoutes = require('./Routes/places-routes');

const app = express();
app.use(bodyParser.json());// => middleware which parses incoming requests with JSON payloads and displays them in the console

app.use('/api/places', placesRoutes); // => /api/places...

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500)
  res.json({message: error.message || 'An unknown error occurred!'});
});

app.listen(6969);