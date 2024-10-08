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
          <Nav.Link href="/PlayoffOdds">Playoff Odds</Nav.Link>
          <Nav.Link href="/Divisions">Projected Standings</Nav.Link>
          <Nav.Link href="/Percentiles">Percentile Outcomes</Nav.Link>
          <NavDropdown title="Division Previews">
            <NavDropdown.Item href="/Central">Central</NavDropdown.Item>
            <NavDropdown.Item href="/Pacific">Pacific</NavDropdown.Item>
            <NavDropdown.Item href="/Atlantic">Atlantic</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
