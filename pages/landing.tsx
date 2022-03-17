import LandingLayout from "@/components/layouts/LandingLayout";
import type { ReactElement } from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";

const Landing = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>Landing Home</Col>
          <Col>Landing Data</Col>
        </Row>
      </Container>
    </div>
  );
};

Landing.getLayout = function getLayout(page: ReactElement) {
  return <LandingLayout>{page}</LandingLayout>;
};

export default Landing;
