import React from 'react';
import { Card } from 'react-bootstrap';

function About() {
    return (
        <Card className="shadow">
            <Card.Body>
                <Card.Title>About This Project</Card.Title>
                <Card.Text>
                    This Smart Home Dashboard demonstrates basic IoT interface features using React and Bootstrap.
                    You can view devices, toggle their status, and learn how React components communicate using props and state.
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default About;