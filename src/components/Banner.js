import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/pfp2.jpg";
import { useState, useEffect } from "react";
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [" a Software Engineer", " an Embedded Engineer"]

    const [text, setText] = useState("");
    const [delta, setDelta] = useState(300 - Math.random() * 100);
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
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        } 

    }


    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__fadein" : ""}>
                        <span className="tagline">Welcome to my Portfolio!</span>
                        <h1>{"Hi I'm"}<span className="wrap"></span>{text}</h1>
                        <p>Hi there, I am a recent graduate from UC Santa Cruz with a B.S. in Computer Engineering.</p>
                        <button onClick={() => console.log("Connect")}>Let's Connect!<ArrowRightCircle size={25}/></button>
                        </div>}
                        </TrackVisibility>
                    </Col>

                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img"></img>
                    </Col>

                </Row>
            </Container>

        </section>
    )
}