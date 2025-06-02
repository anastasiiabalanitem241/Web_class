import React from 'react';
import { Card } from 'react-bootstrap';

function DeviceInfo({ device }) {
    return (
        <Card className="shadow">
            <Card.Body>
                <Card.Title>Device Information</Card.Title>
                <Card.Text><strong>Name:</strong> {device.name}</Card.Text>
                <Card.Text><strong>Status:</strong> {device.status ? 'On' : 'Off'}</Card.Text>
                <Card.Text><strong>Location:</strong> {device.location}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default DeviceInfo;
