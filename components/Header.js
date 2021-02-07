import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar
      expand='lg'
      className='navigation'
      collapseOnSelect
      className='Header'
    >
      <Container>
        <Navbar.Brand href='/' className='Header__logo'>
          87Lux
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto Header__links'>
            <Nav.Link href='/#'>Themes</Nav.Link>
            <Nav.Link href='/#'>Apps</Nav.Link>
            <Nav.Link href='/#'>Assets</Nav.Link>
            <Nav.Link href='/#'>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
