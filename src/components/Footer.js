import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github-mark-white.svg';
import navIcon3 from '../assets/img/x-icon.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    {/* <Col>                    </Col> */}
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/victormaher/" target="_blank"><img src={navIcon1} alt=""/></a>
                            <a href="https://github.com/vmaher14" target="_blank"><img src={navIcon2} alt=""/></a>
                            <a href="https://x.com/VJMaher14" target="_blank"><img src={navIcon3} alt=""/></a>
                        </div>
                        <p>A React-based website portfolio</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
