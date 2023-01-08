import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/contact.module.css";
import Form from "./Form";

const Contact = () => {
  return (
    <section id="contact" className={`${classes.contact}`}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Contact me" />

            <ul className={`${classes.contact__info__list}`}>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <p>Taipei - Taiwan</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-mail-line"></i>
                </span>
                <p>chelsey0527@gmail.com</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-github-line"></i>
                </span>
                <Link href="https://github.com/chelsey0527" target="_blank" rel="noopener noreferrer">
                  <p>chelsey0527</p>
                </Link>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-linkedin-line"></i>
                </span>
                <Link href="https://www.linkedin.com/in/chinshanlee/" target="_blank" rel="noopener noreferrer">
                  <p>Chin-Shan (Chelsey), Lee</p>
                </Link>
              </li>
              {/* <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-phone-line"></i>
                </span>
                <p>+12345678</p>
              </li> */}
            </ul>

            {/* <div className={`${classes.social__links}`}>
              <Link href="#">
                <i className="ri-youtube-line"></i>
              </Link>
              <Link href="https://github.com/chelsey0527" target="_blank" rel="noopener noreferrer">
                <i className="ri-github-line"></i>
              </Link>
              <Link href="#">
                <i className="ri-facebook-line"></i>
              </Link>
              <Link href="https://www.linkedin.com/in/chinshanlee/" target="_blank" rel="noopener noreferrer">
                <i className="ri-linkedin-line"></i>
              </Link>
            </div> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
