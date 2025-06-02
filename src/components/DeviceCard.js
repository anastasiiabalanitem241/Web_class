import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

function DeviceCard({ device }) {
    const [isOn, setIsOn] = useState(device.status);

    const toggleDevice = () => setIsOn(!isOn);

    return (
        <Card className="text-center shadow">
            <Card.Body>
                <Card.Title>{device.name}</Card.Title>
                <Card.Text>Status: {isOn ? 'On' : 'Off'}</Card.Text>
                <Button variant={isOn ? 'danger' : 'success'} onClick={toggleDevice}>
                    Turn {isOn ? 'Off' : 'On'}
                </Button>
            </Card.Body>
        </Card>
    );
}

export default DeviceCard;
