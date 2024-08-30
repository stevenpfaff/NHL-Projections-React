import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Nav } from 'react-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap';
// import teamData from '../../data/data.json';

function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: '#013a68' }} variant="dark">
            <Container>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Playoff Odds</Nav.Link>
                        <Nav.Link href="/Divisions">Division Standings</Nav.Link>                                             
                    </Nav>
                    {/* <Nav>
                        {teamData.map((team) => (
                            <LinkContainer to={`/team/${team.id}`} key={team.id}>
                                <Nav.Link>
                                    <img 
                                        src={team.logo} 
                                        alt={team.name} 
                                        height="30" 
                                        width="30" 
                                        title={team.name} 
                                    />
                                </Nav.Link>
                            </LinkContainer>
                        ))}
                    </Nav> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
