import React from "react";
import Typed from "react-typed";
import { Link } from "react-router-dom";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import "./herotyped.css";
import Icon from "@mdi/react";
import { mdiCheck } from "@mdi/js";
import MountainImage from "./assets/mountain-nighttime-photography.jpg";

const HeroTyped = () => {
  return (
    <div
      className="py-lg-18 py-10 bg-auto"
      style={{
        background: `url(${MountainImage}), linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #E8F8F5 100%), rgba(232, 246, 243, 0.3)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundAttachment: "fixed",
      }}
    >
      <Container>
        <Row className="justify-content-center heroTypedTopBgColor">
          <Col xl={7} lg={7} md={12}>
            <div className="py-8 py-lg-0 text-center">
              <h1 className="display-2 fw-bold mb-3 text-primary">
                <span className=" px-3 px-md-0 heroTypedDescriptiveText">
                  Get Better
                </span>
                <span className=" heroTypedDescriptiveChangingText ms-2">
                  <Typed
                    strings={["Sleep", "Energy", "Health"]}
                    typeSpeed={60}
                    backSpeed={50}
                    loop
                  />
                </span>
              </h1>
              <p className="mb-6 h2 heroTypedDescriptiveText">
              OJALÁ leverages technology to create innovative solutions aimed towards women or those with unique sleep issues.
              </p>
              <Link to="/dashboard/journal" className="btn btn-info me-2">
                Go to Dashboard
              </Link>

              <div className="mt-8 mb-0">
                <ListGroup as="ul" bsPrefix="list-inline">
                  <ListGroup.Item
                    as="li"
                    bsPrefix="list-inline-item text-light fw-semi-bold lh-1 fs-4 me-3 mb-2 mb-md-0"
                  >
                    <span className="icon-shape icon-xs rounded-circle bg-light-success text-center me-2">
                      <Icon
                        path={mdiCheck}
                        size={0.7}
                        className="text-success"
                      />
                    </span>
                    <span className="align-middle">Gamified experience</span>
                  </ListGroup.Item>
                  <ListGroup.Item
                    as="li"
                    bsPrefix="list-inline-item text-light fw-semi-bold lh-1 fs-4 me-3 mb-2 mb-md-0"
                  >
                    <span className="icon-shape icon-xs rounded-circle bg-light-success text-center me-2">
                      <Icon
                        path={mdiCheck}
                        size={0.7}
                        className="text-success"
                      />
                    </span>
                    <span className="align-middle">
                      Chat with licensed professionals
                    </span>
                  </ListGroup.Item>
                  <ListGroup.Item
                    style={{ marginTop: "10px" }}
                    as="li"
                    bsPrefix="list-inline-item text-light fw-semi-bold lh-1 fs-4"
                  >
                    <span className="icon-shape icon-xs rounded-circle bg-light-success text-center me-2">
                      <Icon
                        path={mdiCheck}
                        size={0.7}
                        className="text-success"
                      />
                    </span>
                    <span className="align-middle">
                      Access to over 500+ videos
                    </span>
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default HeroTyped;
