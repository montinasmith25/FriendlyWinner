import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import SectionHeadingCenter from "./SectionHeadingCenter";
import FeatureTopIcon from "./FeatureTopIcon";
import "./herotyped.css";

const Features4Columns = () => {
  const title = "Better Sleep, Better Health";
  const subtitle = "Why Choose Ojalá";
  const description = `Empowering Women Through Sleep & Wellness`;

  const features = [
    {
      id: 1,
      icon: "",
      title: "Educational resources",
      description: `Articles and information to help women understand insomnia and develop healthy sleep habits.`,
    },
    {
      id: 2,
      icon: "",
      title: "Interactive tools",
      description: `Features like sleep trackers and goal setting tools empower women to monitor their sleep patterns and work towards better sleep.`,
    },
    {
      id: 3,
      icon: "",
      title: "Supportive community",
      description: `A forum that allows women to connect with each other and professionals to share experiences, and offers support.`,
    },
    {
      id: 3,
      icon: "",
      title: "Science-backed approach",
      description: `We leverage cutting-edge research in sleep science and related fields to develop personalized solutions.`,
    },
  ];

  return (
    <div className="py-8 py-lg-18 heroTypedDescriptiveBgColor">
      <Container>
        <SectionHeadingCenter
          title={title}
          description={description}
          subtitle={subtitle}
        />
        <Row>
          {features.map((item, index) => {
            return (
              <Col lg={3} md={6} sm={12} key={index}>
                <FeatureTopIcon item={item} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Features4Columns;
