// RegisterCustomer.jsx

import React, { useState } from 'react';
import axios from 'axios';

const RegisterCustomer = () => {
    const [newCustomer, setNewCustomer] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleRegisterCustomer = async () => {
        try {
            await axios.post('http://localhost:8000/api/admin/createusers', newCustomer);
        } catch (error) {
            console.error('Error registering customer:', error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewCustomer({ ...newCustomer, [name]: value });
    };

    return (
        <div>
            <h3>Register New Customer</h3>
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={newCustomer.name} onChange={handleInputChange} />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="email" value={newCustomer.email} onChange={handleInputChange} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" name="password" value={newCustomer.password} onChange={handleInputChange} />
            </div>
            <button onClick={handleRegisterCustomer}>Register Customer</button>
        </div>
    );
};

export default RegisterCustomer;
