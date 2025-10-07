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
          <NavDropdown title="2025/2026 Projections">
          <NavDropdown.Item href="/PlayoffOdds">Current Playoff Odds</NavDropdown.Item>
          <NavDropdown.Item href="/OddsDivisional">Current Projected Standings</NavDropdown.Item>
            <NavDropdown.Item href="/PreseasonOdds/2026">Preseason Playoff Odds</NavDropdown.Item>
            <NavDropdown.Item href="/PreseasonStandings/2026">Preseason Projected Standings</NavDropdown.Item>
            <NavDropdown.Item href="/Percentiles/2026">Preseason Percentile Outcomes</NavDropdown.Item>
            <NavDropdown.Item href="/Picks/2026">Preseason Picks</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="2024/2025 Projections">
            <NavDropdown.Item href="/PreseasonOdds/2025">Preseason Playoff Odds</NavDropdown.Item>
            <NavDropdown.Item href="/PreseasonStandings/2025">Preseason Projected Standings</NavDropdown.Item>
            <NavDropdown.Item href="/Picks/2025">Preseason Picks</NavDropdown.Item>
            <NavDropdown.Item href="/Percentiles/2025">Preseason Percentile Outcomes</NavDropdown.Item>
            <NavDropdown.Item href="/finalresults">Final Results</NavDropdown.Item>
          </NavDropdown>
          {/* <Nav.Link href="/PowerRankings">Power Rankings</Nav.Link> */}
          <Nav.Link href="/Timeline">Stanley Cup Odds Timeline</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
