import './App.css';
import React, { useState } from 'react';
import AppNavbar from './components/Navbar';
import DeviceList from './components/DeviceList';
import DeviceInfo from './components/DeviceInfo';
import { Container, Row, Col  } from 'react-bootstrap';

function App() {
    const [devices, setDevices] = useState([
        { id: 1, name: 'Living Room Light', status: true, location: 'Living Room' },
        { id: 2, name: 'Thermostat', status: false, location: 'Hallway' },
        { id: 3, name: 'Security Camera', status: true, location: 'Front Door' },
        { id: 4, name: 'Garage Door', status: false, location: 'Garage' },
    ]);

    const [selectedDevice, setSelectedDevice] = useState(null);

    const toggleDeviceStatus = (id) => {
        setDevices(devices.map(device =>
            device.id === id ? { ...device, status: !device.status } : device
        ));
    };

    const handleDeviceClick = (device) => {
        setSelectedDevice(device);
    };

    return (
        <>
            <AppNavbar />
            <Container className="mt-4">
                <Row>
                    <Col md={8}>
                        <DeviceList devices={devices} onToggle={toggleDeviceStatus} onSelect={handleDeviceClick} />
                    </Col>
                    <Col md={4}>
                        {selectedDevice && <DeviceInfo device={selectedDevice} />}
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default App;
