const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    room_id: String,
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    device_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Device' },
    room_name: String
});
const Room = mongoose.model('Room', roomSchema);
module.exports = Room ;
