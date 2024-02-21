// CreateDevice.jsx

import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const CreateDevice = () => {
    const [newDevice, setNewDevice] = useState({
        device_id: '',
        state: '',
    });

    const handleCreateDevice = async () => {
        console.log("1");
        try {
            const response = await fetch('http://localhost:8000/api/admin/adddevice', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newDevice),
            });
        
            if (!response.ok) {
                // Throw an error if the response status is not in the range 200-299
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            alert("Device Created Successfully"); 
        
            // If the request is successful, no need to handle the response body for a POST request
        } catch (error) {
            console.error('Error creating device:', error);
            alert('Error creating device: ' + error);
        }
    };

    const handleInputChange = (event) => {
        console.log("2");
        const { name, value } = event.target;
        setNewDevice({ ...newDevice, [name]: value });
        console.log("Vikram");
    };
    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            {/* Left side form */}
            <div style={{ flex: 1, backgroundColor: '#EAEADE', padding: '20px' }}>
            <Container maxWidth="md" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{ backgroundColor: '#EAEADE', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                <h3>Create New IoT Device</h3>
                <form onSubmit={handleCreateDevice}>
                    <TextField
                        fullWidth
                        label="Device ID"
                        variant="outlined"
                        name="device_id"
                        value={newDevice.device_id}
                        onChange={handleInputChange}
                        style={{ marginBottom: '10px' }}
                    />
                    <TextField
                        fullWidth
                        label="State"
                        variant="outlined"
                        name="state"
                        value={newDevice.state}
                        onChange={handleInputChange}
                        style={{ marginBottom: '20px' }}
                    />
                    <Button variant="contained" color="primary" type="submit">
                        Create Device
                    </Button>
                </form>
            </div>
        </Container>
            </div>

            {/* Right side large text */}
            <div style={{ flex: 1, backgroundColor: '#eaeade', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <div style={{ fontSize: '3rem', marginBottom: '10px' }}>
Welcome to the Create Devices page! This page allows administrators to add new IoT devices to the system. IoT devices are essential components of our system, enabling various functionalities and interactions with users.

!</div>
              
            </div>
        </div>
    );
};

export default CreateDevice;
