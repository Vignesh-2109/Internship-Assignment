const Device = require('../Model/deviceSchema');
const bcrypt = require('bcryptjs');
const User = require('../Model/UserModel');
// Controller functions
exports.getAllDevices = async (req, res) => {
    try {
        const devices = await Device.find();
        res.json(devices);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
};
// completed
exports.createDevice = async (req, res) => {
    try {
        const device = new Device({
            device_id: req.body.device_id,
             // Assuming you provide the user ID in the request body
        });
        const device_in_db = await Device.findOne({ device_id:req.body.device_id });
        if(device_in_db){
            return  res.status(404).json({ message: 'Device already exits' });
        }
        console.log("section -1 ");
        // Dynamically set the state property based on the provided string
        const state = req.body.state;
        if (state === "light" || state === "fan" || state === "mis") {
            device.state[state] = 1; // Set the corresponding state property to 1
        } else {
            return res.status(400).json({ message: "Invalid state provided" });
        }

        console.log("section -2"); 
        const newDevice = await device.save();
        console.log("happend")
        res.status(201).json(newDevice);
    } catch (err) {
        console.log("Erro form the controller");
        console.error(err.message);
        res.status(400).json({ message: err.message });
    }
};

// completed -- testing is left 

exports.assignDeviceToUser = async (req, res) => {
    const { device_id } = req.params;
    const { user_id } = req.body;

    try {
       
        const device = await Device.findOne({ device_id });
        if (!device) {
            return res.status(404).json({ message: 'Device not found' });
        }
        const deviceId = device._id;
        if (!device.alloted_to_user) {

            const user = await User.findOne({ user_id : user_id });
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            const userId = user._id;

            // Update the alloted_to_user field with the provided user_id
            await Device.updateOne(
                { _id: deviceId }, 
                { $set: { alloted_to_user: userId } }
            );
            await User.updateOne(
                { _id: userId },
                { $push: { devices: deviceId } }
            );
            return res.status(200).json({ message: "done" });
          
        }
        else {
            // If alloted_to_user is not empty, return a message indicating that it's already allocated
            return res.status(400).json({ message: "Device already allocated to a user" });
        }
        
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
// completed
exports.updateDeviceState = async (req, res) => {
    try {
        const  {device_id } = req.params;
        console.log(device_id);
        const { state } = req.body;

        const device = await Device.findOne({ device_id: device_id });
        if (!device) {
            return res.status(404).json({ message: 'Device not found' });
        }

        // Update the device's state
        if (state === "light" || state === "fan" || state === "mis") {
            for (let key in device.state) {
                device.state[key] = 0;
            }
            device.state[state] = 1;
            await device.save();
        } else {
            return res.status(400).json({ message: 'Invalid state provided' });
        }
        
        res.json(device); 
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
// working fine
exports.createUser = async (req, res) => {
    try {
        // Generate a random password
        const password = Math.random().toString(36).slice(-8);
        console.log(password);

        // Create a new user
        const user = new User({
            user_id: req.body.user_id, // Assuming you provide the user_id in the request body
            name: req.body.name,
            email: req.body.email,
            password: password
        });

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        // Save the user
        await user.save();

        // Send the email and password as a response message
        res.status(201).json({
            message: 'User created successfully',
            email: user.email,
            password: password
        });
    } catch (err) {
        console.error(err.message);
        res.status(400).json({ message: err.message });
    }
};