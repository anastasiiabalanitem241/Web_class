import React from 'react';
import { Card, Button } from 'react-bootstrap';

function DeviceCard({ device, onToggle, onSelect }) {

    return (
        <Card className="text-center shadow" onClick={onSelect} style={{ cursor: 'pointer' }}>
            <Card.Body>
                <Card.Title>{device.name}</Card.Title>
                <Card.Text>Status: {device.status ? 'On' : 'Off'}</Card.Text>
                <Button variant={device.status ? 'danger' : 'success'} onClick={(e) => { e.stopPropagation(); onToggle(); }}>
                    Turn {device.status ? 'Off' : 'On'}
                </Button>
            </Card.Body>
        </Card>
    );
}

export default DeviceCard;
