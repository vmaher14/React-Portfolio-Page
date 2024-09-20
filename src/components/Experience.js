import { Container, Row, Col } from "react-bootstrap";

// To Add: Current Resume, SeeChangeNow, UCSC

export const Experience = () => {
    return (
        <section className="experience" id="experiences">
            <Container>
                <Row>
                    <Col>
                        <div className="xp-header">
                            <h2>Experience</h2>
                        </div>
                        <div className="xp-bx-1">
                            <h3>Software Developer Intern</h3>
                            <h5>SeeChangeNow</h5>
                        </div>
                        <div className="xp-bx-2">
                            <h3>University of California Santa Cruz</h3>
                            <h5>B.S. Computer Engineering</h5>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}