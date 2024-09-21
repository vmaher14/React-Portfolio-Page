import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";
import seechange from "../assets/img/seechangelogo.jpg";
import ucsc from "../assets/img/UCSCLogo.jpg";

// To Add: Current Resume, SeeChangeNow, UCSC
const xp1Tasks = [
    `Collaborated with a team to design and developed two environmentally themed 
    prototype apps to increase environmental awareness`,
    `Created scripts for app components and wrote over 1000 lines of code in C#`,
    `Released a prototype on Itch.io and received over 1000 plays`,
    `Demoed apps to dozens of students and families where over 90% of participants noted 
    an increase in their environmental awareness`
];
const xp2Tasks = [
    `Concentration in Systems Programming`,
    `Coursework: Software Engineering, Data Structures & Algorithms, Computer System Design, 
     Embedded Systems, Logic Design, Computer Networks`,
    
];

export const Experience = () => {
    return (
        <section className="experience" id="experiences">
            <Container>
                <Row>
                    <TrackVisibility>
                        {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                        <h2>
                            Experience
                        </h2>
                        </div>}
                    </TrackVisibility>
                    <Col>
                        <div className="xp-bx-1">
                            <img src={seechange} alt="Image"/>
                            <h3>Software Developer Intern</h3>
                            <h5 className="scndate">Jan 2024 - June 2024</h5>
                            <h5>SeeChangeNow</h5>
                            

                            
                            
                            <ul id="bullet-list">
                                {xp1Tasks.map((task, index) => (
                                    <li key={index}>{task}</li>
                                ))}
                            </ul>
                            
                        </div>
                    </Col>
                    <TrackVisibility>
                        {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                        <h2>
                            Education
                        </h2>
                        </div>}
                    </TrackVisibility>
                    <Col>
                        <div className="xp-bx-2">
                            <img src={ucsc} alt="Image"/>
                            <h3>University of California Santa Cruz</h3>
                            <h5 className="ucsc-date">Oct 2020 - June 2024</h5>
                            <h5>B.S. Computer Engineering</h5>
                            
                            <ul id="bullet-list">
                                {xp2Tasks.map((task, index) => (
                                    <li key={index}>{task}</li>
                                ))}
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}