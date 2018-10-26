import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { Navbar as NavbarRS } from 'reactstrap';
import {
    NavItem,
    NavbarBrand,
    Nav
} from 'reactstrap';
const Navbar = () => {
    return (
        <NavbarRS expand='md' color='dark' dark >
            <NavbarBrand href='/'>Web Scraper</NavbarBrand>
            <Nav className="ml-auto" navbar>

                <NavItem className={window.location.pathname === "/newScrape"
                    ? "nav-item active"
                    : "nav-item"}>
                    <Link to="/newScrape" className="nav-link">
                        New Articles
                    </Link>
                </NavItem>
                
                <NavItem className={window.location.pathname === "/"
                    ? "nav-item active"
                    : "nav-item"}>
                    <Link to="/" className="nav-link">
                        Home
                    </Link>
                </NavItem>
            </Nav>
        </NavbarRS>
    )
}

export default Navbar;