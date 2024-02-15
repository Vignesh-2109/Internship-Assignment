const express = require('express');
const app = express();
require('express-async-errors');
const dotenv = require('dotenv');
require('dotenv').config()
const routes = require('./Routes/index');
const db = require('./config/localdb');
const cors = require('cors');
const bodyParser = require('body-parser');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// Connect to MongoDB
// Define Device schema



app.use((err, req, res, next) => {
  if (err.message === 'access denied') {
    res.status(401);
    res.json({ error: err.message });
  }
});

app.use('/',routes);
const port = 8000;
app.listen(port,()=>{
  console.log(`Server is running on port ${port}`);
})