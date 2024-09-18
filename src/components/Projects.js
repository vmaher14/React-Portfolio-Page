import { Container, Row, Col } from "react-bootstrap";
export const Projects = () => {
    
    const projects = [
        {
            title: "Project 1",
            description: "Description of Project 1",
            imgUrl: projImg1,
        },
        {
            title: "Project 2",
            description: "Description of Project 2",
            imgUrl: projImg2,
        },
        {
            title: "Project 3",
            description: "Description of Project 3",
            imgUrl: projImg3,
        },
        {
            title: "Project 4",
            description: "Description of Project 4",
            imgUrl: projImg4,
        },
        {
            title: "Project 5",
            description: "Description of Project 5",
            imgUrl: projImg5,
        },

    ];
    
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Past projects I have worked on</p>
                        <Tab.Container id="projects-tab" defaultActiveKey="first">
                            <Nav variant="tabs" defaultActiveKey="/home">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab Three</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return (
                                                <p>{project.title}</p>
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">ip ip ip</Tab.Pane>
                            <Tab.Pane eventKey="third">ip ip ip</Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}