const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const routes = require('./routes/routes');
dotenv.config();

const app = express();

// initialize middleware.
// set up a body-parser, as middleware, to help parse incoming and outgoing requests.
app.use(express.json());

// initialize cors as middleware.
app.use(cors());

// routes
// whatever is in the routes.js file will be appended to /app first.
app.use('/app', routes);

mongoose.connect(process.env.DATABASE_ACCESS, { useNewUrlParser: true }, () => {
  console.log('Database Connected.');
});


app.listen(4000, ()=>{ console.log('Server up and running...') });
