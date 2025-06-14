import './App.css';
import React, { useState } from 'react';
import AppNavbar from './components/Navbar';
import DeviceList from './components/DeviceList';
import DeviceInfo from './components/DeviceInfo';
import About from './components/About';
import Settings from './components/Settings';
import { Container, Row, Col  } from 'react-bootstrap';

function App() {
    const [devices, setDevices] = useState([
        { id: 1, name: 'Living Room Light', status: true, location: 'Living Room' },
        { id: 2, name: 'Thermostat', status: false, location: 'Hallway' },
        { id: 3, name: 'Security Camera', status: true, location: 'Front Door' },
        { id: 4, name: 'Garage Door', status: false, location: 'Garage' },
    ]);

    const [selectedDevice, setSelectedDevice] = useState(null);
    const [page, setPage] = useState('dashboard');

    const toggleDeviceStatus = (id) => {
        setDevices(devices.map(device =>
            device.id === id ? { ...device, status: !device.status } : device
        ));
    };

    const handleDeviceClick = (device) => {
        setSelectedDevice(device);
    };

    const handleLocationChange = (id, newLocation) => {
        setDevices(devices.map(device =>
            device.id === id ? { ...device, location: newLocation } : device
        ));
        if (selectedDevice && selectedDevice.id === id) {
            setSelectedDevice({ ...selectedDevice, location: newLocation });
        }
    };

    return (
        <>
            <AppNavbar onSelectPage={setPage}/>
            <Container className="mt-4">
                {page == 'dashboard' ? (
                    <Row>
                        <Col md={8}>
                            <DeviceList devices={devices} onToggle={toggleDeviceStatus} onSelect={handleDeviceClick} />
                        </Col>
                        <Col md={4}>
                            {selectedDevice && <DeviceInfo device={selectedDevice} />}
                        </Col>
                    </Row>
                ) : page === 'settings' ? (
                    <Settings devices={devices} onLocationChange={handleLocationChange} />
                ) : (
                    <About/>
                )}
            </Container>
        </>
    );
}

export default App;
