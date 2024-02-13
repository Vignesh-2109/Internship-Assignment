const express = require('express');
const {protect} = require('../middleware/autnetication')
const device_controller = require('../Controller/DeviceController')
const router = express.Router();
router.get('/devices', protect , )

module.exports = router;