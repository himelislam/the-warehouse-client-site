import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <Link to='/'>
                            <img className='w-50' src="https://www.thewarehouse.co.nz/on/demandware.static/Sites-twl-Site/-/default/dw4581e280/images/header-logo.svg" alt="" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav className='align-items-center'>
                            <NavLink
                                className={({ isActive }) => (isActive ? "text-decoration-none text-white me-3" : "text-decoration-none text-secondary me-3")}
                                to='/'
                            >
                                Home
                            </NavLink>
                            <NavLink
                                className={({ isActive }) => (isActive ? "text-decoration-none text-white me-3" : "text-decoration-none text-secondary me-3")}
                                to='/blogs'
                            >
                                Blogs
                            </NavLink>
                            {
                                user?
                                <NavLink
                                className={({ isActive }) => (isActive ? "text-decoration-none text-white me-3" : "text-decoration-none text-secondary me-3")}
                                to='/manageInventory'
                            >
                                Manage Product
                            </NavLink>
                            :
                            <NavLink
                                className={({ isActive }) => (isActive ? "text-decoration-none text-white " : "text-decoration-none text-secondary")}
                                to='/signup'
                            >
                            </NavLink>
                            }
                            {
                                user?
                                <NavLink
                                className={({ isActive }) => (isActive ? "text-decoration-none text-white me-3" : "text-decoration-none text-secondary me-3")}
                                to='/addItem'
                            >
                                Add Product
                            </NavLink>
                            :
                            <NavLink
                                className={({ isActive }) => (isActive ? "text-decoration-none text-white" : "text-decoration-none text-secondary")}
                                to='/signup'
                            >
                            </NavLink>
                            }
                            {
                                user?
                                <NavLink
                                className={({ isActive }) => (isActive ? "text-decoration-none text-white me-3" : "text-decoration-none text-secondary me-3")}
                                to='/myItem'
                            >
                                My Product
                            </NavLink>
                            :
                            <NavLink
                                className={({ isActive }) => (isActive ? "text-decoration-none text-white" : "text-decoration-none text-secondary ")}
                                to='/signup'
                            >
                            </NavLink>
                            }
                            {
                                user ? 
                                <NavLink
                                onClick={()=>signOut(auth)}
                                className={({ isActive }) => (isActive ? "text-decoration-none text-white me-3" : "text-decoration-none text-secondary me-3")}
                                to='/login'
                            >
                                Log Out
                            </NavLink> 
                            :
                            <NavLink
                                className={({ isActive }) => (isActive ? "text-decoration-none text-white me-3" : "text-decoration-none text-secondary me-3")}
                                to='/login'
                            >
                                Login
                            </NavLink>
                            }
                            {
                                user?
                                <NavLink
                                className={({ isActive }) => (isActive ? "text-decoration-none text-info me-3" : "text-decoration-none text-info me-3")}
                                to='/'
                            >
                                {user?.displayName}
                            </NavLink>
                            :
                            <NavLink
                                className={({ isActive }) => (isActive ? "text-decoration-none text-white me-3" : "text-decoration-none text-secondary me-3")}
                                to='/signup'
                            >
                                Sign up
                            </NavLink>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;