const express = require('express');
const AdminConroller = require('../Controller/AdminController')
const router = express.Router();



// Device routes
router.get('/getalldevices', AdminConroller.getAllDevices);
router.post('/adddevice', AdminConroller.createDevice);
router.put('/:device_id/assign', AdminConroller.assignDeviceToUser);
router.put('/:device_id/state', AdminConroller.updateDeviceState);
router.post('/createusers', AdminConroller.createUser);
router.get('/getallusers', AdminConroller.getAllUsers);
module.exports = router;