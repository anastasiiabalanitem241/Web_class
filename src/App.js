import './App.css';
import React, { useState } from 'react';
import AppNavbar from './components/Navbar';
import DeviceList from './components/DeviceList';
import { Container } from 'react-bootstrap';

function App() {
    const [devices, setDevices] = useState([
        { id: 1, name: 'Living Room Light', status: true },
        { id: 2, name: 'Thermostat', status: false },
        { id: 3, name: 'Security Camera', status: true },
        { id: 4, name: 'Garage Door', status: false },
    ]);
    const toggleDeviceStatus = (id) => {
        setDevices(devices.map(device =>
            device.id === id ? { ...device, status: !device.status } : device
        ));
    };
    return (
        <>
            <AppNavbar />
            <Container className="mt-4">
                <DeviceList devices={devices} onToggle={toggleDeviceStatus} />
            </Container>
        </>
    );
}

export default App;
