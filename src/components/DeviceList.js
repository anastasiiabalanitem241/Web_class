import React from 'react';
import DeviceCard from './DeviceCard';
import { Row, Col } from 'react-bootstrap';

function DeviceList({ devices, onToggle }) {
    return (
        <Row>
            {devices.map((device) => (
                <Col md={6} lg={4} className="mb-4" key={device.id}>
                    <DeviceCard device={device} onToggle={() => onToggle(device.id)} />
                </Col>
            ))}
        </Row>
    );
}

export default DeviceList;