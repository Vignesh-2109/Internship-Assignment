const express = require('express');
const router = express.Router();
const userController = require('../Controller/UserController');
const {protect} = require('../middleware/autnetication')
// User routes
router.get('/devices', protect, userController.getAllDevicesForUser);
router.post('/rooms', protect, userController.createRoom);
router.put('/devices/:device_id/state', protect, userController.changeDeviceState);

module.exports = router;