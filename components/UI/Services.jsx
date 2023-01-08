import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/services.module.css";
import ServicesItem from "./ServicesItem";

const Services = () => {
  return (
    <section id="services">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.services__container}`}>
              <div>
                <ServicesItem title="Education Technology" icon="ri-computer-line" />
                <ServicesItem title="Entrepreneurship" icon="ri-apps-line" />
              </div>

              <ServicesItem
                title="Web Development"
                icon="ri-code-s-slash-line"
              />
            </div>
          </Col>

          <Col lg="6" md="6" className={`${classes.service__title}`}>
            <SectionSubtitle subtitle="What I aspire" />
            <h3 className="mb-0 mt-4">Better Design,</h3>
            <h3 className="mb-4">Better Experience</h3>
            <p>
              My career plan is to start an education technology company. 
              During the past few years, I have two teaching experiences which allowed me 
              to see that students often lose concentration during online lectures.  
              </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
