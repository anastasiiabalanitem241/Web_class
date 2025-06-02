import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function AppNavbar({onSelectPage}) {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand style={{ cursor: 'pointer' }} onClick={() => onSelectPage('dashboard')}>
                    Smart Home Dashboard
                </Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link onClick={() => onSelectPage('dashboard')}>Dashboard</Nav.Link>
                    <Nav.Link onClick={() => onSelectPage('settings')}>Settings</Nav.Link>
                    <Nav.Link onClick={() => onSelectPage('about')}>About</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default AppNavbar;
