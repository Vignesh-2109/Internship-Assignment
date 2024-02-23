
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Vigesh_admin_dashboard');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
