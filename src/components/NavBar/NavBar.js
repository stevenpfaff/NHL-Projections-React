import React from 'react';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import './NavBar.css';
import logo from '../../Images/OnlyNorthCircle.png';

const NavBar = () => {
  return (
    <Navbar style={{ backgroundColor: '#013a68' }} variant="dark" expand="lg" className="custom-navbar">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto custom-nav-links">
        <img src={logo} alt="..." height="50" width="50"></img>
          <Nav.Link href="/">Home</Nav.Link>
          <NavDropdown title="Projections">
          <NavDropdown.Item href="/PlayoffOdds">Current Playoff Odds</NavDropdown.Item>
            <NavDropdown.Item href="/PreseasonOdds/2026">25/26 Preseason Playoff Odds</NavDropdown.Item>
            <NavDropdown.Item href="/Picks/2026">25/26 Preseason Picks</NavDropdown.Item>
            <NavDropdown.Item href="/PreseasonOdds/2025">24/25 Preseason Playoff Odds</NavDropdown.Item>
            <NavDropdown.Item href="/Picks/2025">24/25 Preseason Picks</NavDropdown.Item>
                        <NavDropdown.Item href="/finalresults">24/25 Final Results</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/Timeline">Playoff Odds Timeline</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
