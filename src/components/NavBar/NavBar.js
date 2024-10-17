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
            <NavDropdown.Item href="/PlayoffOdds">Playoff Odds</NavDropdown.Item>
            <NavDropdown.Item href="/Divisions">Projected Standings</NavDropdown.Item>
            <NavDropdown.Item href="/PreseasonOdds">Preseason Playoff Odds</NavDropdown.Item>
            <NavDropdown.Item href="/PreseasonStandings">Preseason Projected Standings</NavDropdown.Item>
            <NavDropdown.Item href="/Picks">Preseason Picks</NavDropdown.Item>
            <NavDropdown.Item href="/Percentiles">Preseason Percentile Outcomes</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
