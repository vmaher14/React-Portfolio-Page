import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/beatboxmain.png";
import projImg2 from "../assets/img/beatboxfilled.png";
import projImg3 from "../assets/img/beatboxplay.png";
import projImg4 from "../assets/img/MCTSscore.png";
import projImg5 from "../assets/img/uct.png";
import projImg6 from "../assets/img/partialexpand.png";
import projImg7 from "../assets/img/containerss.png";
import projImg8 from "../assets/img/MorseCode.JPG";
import 'animate.css';
import TrackVisibility from "react-on-screen";
import githubIcon from "../assets/img/github-mark-white.svg";


export const Projects = () => {
    
    const project1 = [
        {
            title: "Landing Page",
            description: "What you are greeted with when you first visit the web page",
            imgUrl: projImg1,
        },
        {
            title: "Notes filled in",
            description: "When you select a note to be played, it turns",
            imgUrl: projImg2,
        },
        {
            title: "Notes being played",
            description: "Notes will turn red as they are being played",
            imgUrl: projImg3,
        },

    ];
    const project2 = [
        {
            title: "",
            description: "Modified bot beats Vanilla bot 10/10 times",
            imgUrl: projImg4,
        },
        {
            title: "",
            description: "Modified algorithm uses Upper Confidence bounds applied to Trees",
            imgUrl: projImg5,
            name: "projImg5",
        },
        {
            title: "",
            description: "Modified algorithm applies partial expansion with the UCT",
            imgUrl: projImg6,
        },
    ];
    const project3 = [
        {
            title: "",
            description: "After initializing container and viewing current processes",
            imgUrl: projImg7,
            name: "projImg7"
        }

    ];
    const project4 = [
        {
            title: "",
            description: "Led connected to raspberry PI and photodiode connected to esp32-c3",
            imgUrl: projImg8,
        }
    
    ];
    const project5 = [

    ];
    
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                        {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                        <h2>Projects</h2>
                        <p>Past projects I have worked on</p>
                        </div>}
                        </TrackVisibility>
                        <Tab.Container id="projects-tab" defaultActiveKey="first">
                            <Nav variant="tabs" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Beat Box</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">MCTS TicTacToe</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Personal Container</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Morse Code Decipherer</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">BT Mouse</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <div className="proj-desc">
                                    <span>
                                    A drum sequencer web application that allows you to make beats, upload custom sounds,
                                    and download a lossless audio file that you can use wherever and whenever
                                    </span>
                                </div>
                                <Row>
                                    {
                                        project1.map((project, index) => {
                                            return (
                                                <ProjectCard key={index} {...project}/>
                                            )
                                        })
                                    }
                                </Row>
                                <div className="social-icon">
                                    <a href="https://vmaher14.github.io/BeatBox/" target="_blank"><img src={githubIcon} alt=""/></a>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <div className="proj-desc">
                                    <span>
                                    A bot that uses the Monte Carlo Tree Search algorithm to play ultimate tic-tac-toe
                                    </span>
                                </div>
                                <Row>
                                    {
                                        project2.map((project, index) => {
                                            return (
                                                <ProjectCard key={index} {...project}/>
                                            )
                                        })
                                    }
                                </Row>
                                <div className="social-icon">
                                    <a href="https://github.com/vmaher14/MCTS-Ultimate-Tic-Tac-Toe" target="_blank"><img src={githubIcon} alt=""/></a>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <div className="proj-desc">
                                    <span>
                                    A minimal Linux container in C utilizing the clone() system call to create isolated namespaces
                                    </span>
                                </div>
                                <Row>
                                    {
                                        project3.map((project, index) => {
                                            return (
                                                <ProjectCard key={index} {...project}/>
                                            )
                                        })
                                    }
                                </Row>
                                <div className="social-icon">
                                    <a href="https://github.com/vmaher14/Personal-Container" target="_blank"><img src={githubIcon} alt=""/></a>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                                <div className="proj-desc">
                                    <span>
                                    A program on ESP32-C3 to decipher Morse code sent via an LED connected to a
                                    Raspberry Pi 4 using GPIO and received by a photodiode on an ADC channel
                                    </span>
                                </div>
                                <Row>
                                    {
                                        project4.map((project, index) => {
                                            return (
                                                <ProjectCard key={index} {...project}/>
                                            )
                                        })
                                    }
                                </Row>
                                <div className="social-icon">
                                    <a href="https://github.com/vmaher14/Morse-Code-Decipherer" target="_blank"><img src={githubIcon} alt=""/></a>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fifth">
                                <div className="proj-desc">
                                    <span>
                                    Created a BLE HID device on the ESP32-C3 that simulates mouse movements using data
                                    from an IC-42670-P accelerometer via I2C
                                    </span>
                                </div>
                                <Row>
                                    {
                                        project5.map((project, index) => {
                                            return (
                                                <ProjectCard key={index} {...project}/>
                                            )
                                        })
                                    }
                                </Row>
                                <div className="social-icon">
                                    <a href="https://github.com/vmaher14/Bluetooth-Mouse" target="_blank"><img src={githubIcon} alt=""/></a>
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}/>
        </section>
    )
}