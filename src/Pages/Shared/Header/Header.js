import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/" >PRIMEFACTOR</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/">HOME</Nav.Link>
                            <Nav.Link href='home#courses' >PRODUCTS</Nav.Link>
                            <Nav.Link as={Link} to="blogs" >BLOGS</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="about">ABOUT</Nav.Link>
                            {/* {
                                user ?
                                    <button className='btn btn-secondary' onClick={handleSignOut}>Sign Out</button>
                                    :
                                    <Nav.Link as={Link} to="Login">Login</Nav.Link>
                            } */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;