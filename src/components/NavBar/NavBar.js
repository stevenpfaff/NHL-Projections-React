import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
// import PBS from '../../Images/PBS.png';
import { Nav, NavDropdown } from 'react-bootstrap';

function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                {/* <img src={PBS} alt="..." height="75" width="75"></img> */}
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Projections" id="collasible-nav-dropdown">
                        <NavDropdown.Item href='/'>Playoff Odds</NavDropdown.Item>
                            <NavDropdown.Item href='/Divisions'>Division Standings</NavDropdown.Item>
                        </NavDropdown>   
                                              
                    </Nav>
                    <Nav>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
