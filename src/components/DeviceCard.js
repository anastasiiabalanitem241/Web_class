import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

function DeviceCard({ device, onToggle }) {

    return (
        <Card className="text-center shadow">
            <Card.Body>
                <Card.Title>{device.name}</Card.Title>
                <Card.Text>Status: {device.status ? 'On' : 'Off'}</Card.Text>
                <Button variant={device.status ? 'danger' : 'success'} onClick={onToggle}>
                    Turn {device.status ? 'Off' : 'On'}
                </Button>
            </Card.Body>
        </Card>
    );
}

export default DeviceCard;
