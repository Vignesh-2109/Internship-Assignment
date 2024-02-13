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


// Routes

// Get all devices
app.get('/devices', async (req, res) => {
    try {
        const devices = await Device.find();
        res.json(devices);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new device
app.post('/devices', async (req, res) => {
    const device = new Device({
        device_id: req.body.device_id,
        alloted_to_user: req.body.alloted_to_user,
        state: req.body.state
    });
    try {
        const newDevice = await device.save();
        res.status(201).json(newDevice);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Assign a device to a user
app.put('/devices/:id/assign', async (req, res) => {
    try {
        const device = await Device.findById(req.params.id);
        if (device == null) {
            return res.status(404).json({ message: 'Device not found' });
        }
        device.alloted_to_user = req.body.alloted_to_user;
        const updatedDevice = await device.save();
        res.json(updatedDevice);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update device state
app.put('/devices/:id/state', async (req, res) => {
    try {
        const device = await Device.findById(req.params.id);
        if (device == null) {
            return res.status(404).json({ message: 'Device not found' });
        }
        device.state = req.body.state;
        const updatedDevice = await device.save();
        res.json(updatedDevice);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

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