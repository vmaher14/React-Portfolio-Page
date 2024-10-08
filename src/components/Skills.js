import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/4YearMeter.svg";
import meter2 from "../assets/img/3YearMeter.svg";
import meter3 from "../assets/img/2YearMeter.svg";
import meter4 from "..//assets/img/1YearMeter.svg";
import colorSharp from "../assets/img/color-sharp.png";
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <TrackVisibility>
                                {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                                <h2>
                                    Skills
                                </h2>
                                </div>}
                            </TrackVisibility>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="Image"/>
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image"/>
                                    <h5>C/C++</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Image"/>
                                    <h5>JavaScript/HTML/CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={meter4} alt="Image"/>
                                    <h5>C#</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Image"/>
                                    <h5>Scrum/Agile</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image"/>
                                    <h5>Linux</h5>
                                </div>
                            </Carousel>          
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp}/>
        </section>
    )

}