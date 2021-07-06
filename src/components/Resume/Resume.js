import React  from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/Rajkeerthi Thangavel_UI.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="IT Analyst [ Tata Consultancy Services - Chennai]"
              date="August 2019 - Till Now"
              content={[
                " Analyze the project requirement.",
                " Fully responsible for end to end technical implementation of the project .",
                " Participates in design reviews and provide input to design recommendations .",
                " Creating WebPages based on the Zeplin design in Reactjs and backend services in Node js .",
                " Efficiently managed State using Redux(action/reducer/store) and experience in implementing middleware libraries like Redux Thunk and Saga ."
              ]}
            />
            <Resumecontent
              title="Associate [ Cognizant - Chennai]"
              date="May 2016 - May 2017"
              content={[
                " Analyze the project requirement.",
                " Fully responsible for end to end technical implementation of the project .",
                " Participates in design reviews and provide input to design recommendations .",
                " Creating WebPages based on the design in Reactjs and backend services in Node js .",
                " Efficiently managed State using React Context Hooks ."
              ]}
            />
            <Resumecontent
              title="Associate Consultant [ Virtusa - Chennai]"
              date="May 2016 - May 2017"
              content={[
                " Analyze the project requirement.",
                " Fully responsible for end to end technical implementation of the project .",
                " Participates in design reviews and provide input to design recommendations .",
                " Creating WebPages based on the design in Angularjs and backend services in Node js ."
              ]}
            />

            <Resumecontent
              title="Application Developer [ IBM - Bangalore]"
              date="May 2013 - October 2015"
              content={[
                " Created Reusable components, deployment scripts and content maintenance utilities which helps to improve Application performance.",
                " Modification of existing old UI design and Development according to business requirement .",
                " 24/7 on call Production support to find and fix issues ."
              ]}
            />


          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Gnanamani College of Technology [Anna University, Chennai] "
              date="2008 - 2012"
              content={[`CGPA:  74%`]}
            />
            <Resumecontent
              title="12TH BOARD [Cheran Matriculation School, Tamilnadu]"
              date="2007 - 2008"
              content={["Precentage: 78%"]}
            />
            <Resumecontent
              title="10TH BOARD [Cheran Matriculation School, Tamilnadu] "
              date="2005 - 2006"
              content={["Precentage: 75%"]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
