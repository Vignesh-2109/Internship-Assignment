
const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
    device_id: { type: String, required: true },
    alloted_to_user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    state: {
        light: { type: Number, default: 0 },
        fan: { type: Number, default: 0 },
        mis: { type: Number, default: 0 }
    }
});

const Device = mongoose.model('Device', deviceSchema);