import React from 'react';
import { Card, Form } from 'react-bootstrap';

function Settings({ devices, onLocationChange }) {
    return (
        <>
            <h3>Device Settings</h3>
            {devices.map((device) => (
                <Card className="mb-3 shadow" key={device.id}>
                    <Card.Body>
                        <Card.Title>{device.name}</Card.Title>
                        <Form.Group controlId={`location-${device.id}`}>
                            <Form.Label>Location</Form.Label>
                            <Form.Control
                                type="text"
                                value={device.location}
                                onChange={(e) => onLocationChange(device.id, e.target.value)}
                            />
                        </Form.Group>
                    </Card.Body>
                </Card>
            ))}
        </>
    );
}

export default Settings;