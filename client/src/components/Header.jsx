import React from 'react'
import { Route } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

const Header = () => {
    return (
        <header>
        <Navbar bg='primary' variant='dark' expand='lg'>
          <Container>
          <Nav className='ml-auto'>
            <LinkContainer to='/'>
              <Navbar.Brand><strong>Ark BANK</strong></Navbar.Brand>
            </LinkContainer>
            <LinkContainer to='/login'>
                  <Nav.Link>
                   <strong><i className='fas fa-user'></i> Sign In</strong> 
                  </Nav.Link>
                </LinkContainer>
          </Nav>      
          </Container>
        </Navbar>
      </header>
    )
}

export default Header
