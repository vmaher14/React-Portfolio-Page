import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/pfp2.jpg";
import { useState, useEffect } from "react";
import 'animate.css';
import TrackVisibility from "react-on-screen";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [" Software Developer", " Software Engineer", "n Embedded Software Engineer"]

    const [text, setText] = useState("");
    // const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [delta, setDelta] = useState(200);

    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            // setDelta(prevDelta => prevDelta / 2)
            setDelta(100)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(200);
        } 

    }


    return (
        <Router>
            <section className="banner" id="home">
                <Container>
                    <Row className="align-items-center">
                        
                        <Col xs={12} md={6} xl={7}>
                            <TrackVisibility>
                            {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__fadein" : ""}>
                            <span className="tagline">Welcome to my Portfolio!</span>
                            <h1>{"Hi, I'm a"}<span className="wrap"></span>{text}</h1>
                            <p> Hi there, I'm a recent Computer Engineering graduate from UC Santa Cruz with a strong foundation in software 
                                development and a passion for creating innovative solutions. Skilled in various programming languages and 
                                frameworks, I am eager to leverage my technical expertise and collaborative mindset to contribute to impactful projects.</p>
                            <HashLink to="#connect">
                                <button>Let's Connect!<ArrowRightCircle size={25}/></button>
                            </HashLink> 
                            </div>}
                            </TrackVisibility>
                        </Col>

                        <Col xs={12} md={6} xl={5}>
                            <img src={headerImg} alt="Header Img"></img>
                        </Col>

                    </Row>
                </Container>

            </section>
        </Router>
    )
}