import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './NavBar.css'; // Import your CSS file

const NavBar = () => {
  return (
    <Navbar style={{ backgroundColor: '#013a68' }} variant="dark" expand="lg" className="custom-navbar">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto custom-nav-links">
          <Nav.Link href="/">Playoff Odds</Nav.Link>
          <Nav.Link href="/Divisions">Projected Standings</Nav.Link>
          <Nav.Link href="/Percentiles">Percentile Outcomes</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
