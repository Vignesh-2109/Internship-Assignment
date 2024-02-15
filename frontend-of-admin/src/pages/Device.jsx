// Device.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Device = () => {
    const [devices, setDevices] = useState([]);

    useEffect(() => {
        const fetchDevices = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/admin/getalldevices');
                setDevices(response.data);
            } catch (error) {
                console.error('Error fetching devices:', error);
            }
        };

        fetchDevices();
    }, []);

    return (
        <div>
            <h2>All Devices</h2>
            <table>
                <thead>
                    <tr>
                        <th>Device ID</th>
                        <th>Alloted To User</th>
                        <th>State</th>
                    </tr>
                </thead>
                <tbody>
                    {devices.map(device => (
                        <tr key={device.device_id}>
                            <td>{device.device_id}</td>
                            <td>{device.alloted_to_user}</td>
                            <td>
                                <ul>
                                    <li>Light: {device.state.light ? 'On' : 'Off'}</li>
                                    <li>Fan: {device.state.fan ? 'On' : 'Off'}</li>
                                    <li>Mis: {device.state.mis ? 'On' : 'Off'}</li>
                                </ul>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Device;
