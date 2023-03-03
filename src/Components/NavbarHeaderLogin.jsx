import React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarHeaderLogin = () => {
  return (
    <Container>
      <Navbar>
        <Link to="/">
          <Navbar.Brand>
            <font style={{ color: 'white' }}>My</font>
            <font style={{ color: '#367BB6' }}>Jobs</font>{' '}
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Link to="/login">
              <Button>Login</Button>
            </Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavbarHeaderLogin;
