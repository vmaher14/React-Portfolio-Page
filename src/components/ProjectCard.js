import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, name }) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img className={name} src={imgUrl}/>
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
        </Col>
    )
}