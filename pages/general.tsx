import GeneralLayout from "@/components/layouts/GeneralLayout";
import type { ReactElement } from "react";

import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";

const General = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>General Home</Col>
          <Col>General Data</Col>
        </Row>
      </Container>
    </div>
  );
};

General.getLayout = function getLayout(page: ReactElement) {
  return <GeneralLayout>{page}</GeneralLayout>;
};

export default General;
