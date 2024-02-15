const User = require('../Model/UserModel');
const Device = require('../Model/deviceSchema');
const Room = require('../Model/RoomSchmea');

// Controller functions
exports.getAllDevicesForUser = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).populate('devices');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user.devices);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createRoom = async (req, res) => {
    const { room_id, device_id, room_name } = req.body;
    const userId = req.user.id;

    try {
        const room = new Room({ room_id, user_id: userId, device_id, room_name });
        await room.save();
        res.status(201).json(room);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.changeDeviceState = async (req, res) => {
    const { device_id } = req.params;
    const { light, fan, mis } = req.body;

    try {
        const device = await Device.findById(device_id);
        if (!device) {
            return res.status(404).json({ message: 'Device not found' });
        }

        device.state = { light, fan, mis };
        await device.save();

        res.json(device);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
