import Button from 'react-bootstrap/Button';
import React from 'react';
import {NavLink} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'
import {Nav} from 'react-bootstrap'
import Search from './Search'

const NavigationBar = (props) => {

  const logout = () => {
    localStorage.clear("token","user")
    window.location.href = "/"
  }

    
    return (
    <div >
            <Navbar bg="primary" variant="dark" >
              <Container>
                <Navbar.Brand >Jmod Tracker</Navbar.Brand>
                <Nav className="mr-auto">
                  <Nav.Link href="/home"> Home </Nav.Link>
                  <Nav.Link href="/profile"> My Profile</Nav.Link>
                  <Nav.Link href="/jmods">Jmods</Nav.Link>
                  <Search></Search>
                </Nav>
                <Nav>
                  <Nav.Link href="#" onSelect={logout}> Logout</Nav.Link>
                </Nav>
              </Container>
            </Navbar>
    </div>
    )
}

export default NavigationBar;