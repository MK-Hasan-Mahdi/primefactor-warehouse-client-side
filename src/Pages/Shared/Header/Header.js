import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleLogOut = () => {
        signOut(auth);
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/" >PRIME<span style={{ color: 'orange' }}>FACTOR</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/">HOME</Nav.Link>
                            <Nav.Link href='home#products' >PRODUCTS</Nav.Link>
                            <Nav.Link as={Link} to="blogs" >BLOGS</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="about">ABOUT</Nav.Link>

                            {
                                user ?
                                    <button className='btn btn-link text-decoration-none text-warning' onClick={handleLogOut}>LOGOUT</button>
                                    :
                                    <Nav.Link as={Link} to="login">LOGIN</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;