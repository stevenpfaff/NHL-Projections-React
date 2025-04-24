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
          <NavDropdown title="NHL Playoffs">
            <NavDropdown.Item href="/PlayoffOdds">Playoff Odds</NavDropdown.Item>
            {/* <NavDropdown.Item href="/OddsDivisional">Playoff Odds Standings View</NavDropdown.Item> */}
            {/* <NavDropdown.Item href="/SimulatedPoints">Simulated Points</NavDropdown.Item> */}
          </NavDropdown>
          <NavDropdown title="Preseason Projections">
            <NavDropdown.Item href="/PreseasonOdds">Preseason Playoff Odds</NavDropdown.Item>
            <NavDropdown.Item href="/PreseasonStandings">Preseason Projected Standings</NavDropdown.Item>
            <NavDropdown.Item href="/Picks">Preseason Picks</NavDropdown.Item>
            <NavDropdown.Item href="/Percentiles">Preseason Percentile Outcomes</NavDropdown.Item>
            <NavDropdown.Item href="/finalresults">Final Results</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/PowerRankings">Power Rankings</Nav.Link>
          <Nav.Link href="/Timeline">Stanley Cup Odds Timeline</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
