const express=  require('express');

const bodyParser = require('body-parser');  
//import router from './Routes/places-routes';

const placeRoutes= require('./Routes/places-routes');
const app = express();


app.use('/api/places',placeRoutes);

// app.get('/', (req, res) => {
//     <placeRoutes/>
// });





app.listen(6969); // the server object listens on port 6969