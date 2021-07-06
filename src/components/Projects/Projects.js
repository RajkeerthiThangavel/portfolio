import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import todoApp from "../../Assets/Projects/todoApp.PNG";
import foodOrder from "../../Assets/Projects/foodOrder.PNG";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few Demo projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todoApp}
              isBlog={false}
              title="Todo Application"
              description="Sample Todo Application build with react.js, bootstrap, and Heroku. Have features which allows user to add todo and delete todo list, track completed items."
              link="https://github.com/RajkeerthiThangavel/Todo-React-Application"
              demoLink="https://my-react-todolist-app.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodOrder}
              isBlog={false}
              title="Food Order App"
              description="Used the to order food from  nearby restaraunts and menu items are retrieved based on the restaraunts. The model was developed as a Demo based on the food order applications"
              link="https://github.com/RajkeerthiThangavel/ReactFoodOrderApplication"
              demoLink="https://reactfoodorderapp.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
