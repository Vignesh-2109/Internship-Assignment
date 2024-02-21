// AssignDevice.jsx

// AssignDevice.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AssignDevice = () => {
    const [devices, setDevices] = useState([]);
    const [users, setUsers] = useState([]);
    const [assignDevice, setAssignDevice] = useState({
        device_id: '',
        user_id: '',
    });

    useEffect(() => {
        const fetchDevices = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/admin/getalldevices');
                setDevices(response.data);
            } catch (error) {
                console.error('Error fetching devices:', error);
            }
        };

        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/admin/getallusers');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchDevices();
        fetchUsers();
    }, []);

    const handleAssignDevice = async () => {
        try {
            await axios.put(`http://localhost:8000/api/admin/${assignDevice.device_id}/assign`, assignDevice);
        } catch (error) {
            console.error('Error assigning device:', error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setAssignDevice({ ...assignDevice, [name]: value });
    };

    return (
        <div>
            <h3>Assign Unallocated Devices to Customers</h3>
            <div>
                <label>Device ID:</label>
                <select name="device_id" value={assignDevice.device_id} onChange={handleInputChange}>
                    <option value="">Select Device</option>
                    {devices.map(device => (
                        <option key={device.device_id} value={device.device_id}>{device.device_id}</option>
                    ))}
                </select>
            </div>
            <div>
                <label>User ID:</label>
                <select name="user_id" value={assignDevice.user_id} onChange={handleInputChange}>
                    <option value="">Select User</option>
                    {users.map(user => (
                        <option key={user.user_id} value={user.user_id}>{user.name}</option>
                    ))}
                </select>
            </div>
            <button onClick={handleAssignDevice}>Assign Device</button>
        </div>
    );
};

export default AssignDevice;
