// React based portfolio website code based on code by webdecoded on youtube!!! (https://www.youtube.com/watch?v=hYv6BM2fWd8&t=62s)

import { Navbar, Nav, Container } from "react-bootstrap";
import { useState, useEffect} from "react";
import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/github-mark-white.svg'
import navIcon3 from '../assets/img/x-icon.svg'
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";



export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);

    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Router>
            <Navbar expand="md" className={scrolled ? "scrolled": ""}>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"> 
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <div className="my-name">
                                <a href="#home">Victor Maher</a>
                            </div>
                            <Nav.Link href="#experiences" className={activeLink === 'experiences' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experience')}>Experience</Nav.Link>

                            {/* <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link> */}
                            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={(e) => {
                                e.preventDefault();
                                onUpdateActiveLink('skills');
                                const element = document.getElementById('skills');
                                const yOffset = -300; // Adjust this value to control how far above the section it stops
                                const yPosition = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                                window.scrollTo({ top: yPosition, behavior: 'smooth' });
                            }}>Skills</Nav.Link>
                            

                            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        </Nav>
                        <span className="navbar-text">
                            <div className="social-icon">
                                <a href="https://www.linkedin.com/in/victormaher/" target="_blank"><img src={navIcon1} alt=""/></a>
                                <a href="https://github.com/vmaher14" target="_blank"><img src={navIcon2} alt=""/></a>
                                <a href="https://x.com/VJMaher14" target="_blank"><img src={navIcon3} alt=""/></a>
                                </div>
                            <HashLink to="#connect">
                            <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect!</span></button>
                            </HashLink>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    );
}