import logo from './logo.svg';
import './App.css';
import React from 'react';
import AppNavbar from './components/Navbar';
import DeviceCard from './components/DeviceCard';
import { Container, Row, Col } from 'react-bootstrap';

const devices = [
    { name: 'Living Room Light', status: true },
    { name: 'Thermostat', status: false },
    { name: 'Security Camera', status: true },
    { name: 'Garage Door', status: false },
];

function App() {
    return (
        <>
            <AppNavbar />
            <Container className="mt-4">
                <Row>
                    {devices.map((device, index) => (
                        <Col md={6} lg={4} className="mb-4" key={index}>
                            <DeviceCard device={device} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}

export default App;
