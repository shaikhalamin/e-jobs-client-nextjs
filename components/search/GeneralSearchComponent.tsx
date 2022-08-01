import React from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";

import styles from "./search.module.css";

const GeneralSearchComponent = () => {
  return (
    <div className={`${styles.searchBg} py-5`}>
      <Container fluid>
        <Row>
          <Col lg={{ span: 8, offset: 2 }} md={{ span: 8, offset: 2 }}>
            <Container>
              <Form>
                <Row>
                  <Col lg={10} md={9} xs={8}>
                    <Form.Control placeholder="keywords" type="text" />
                  </Col>
                  <Col lg={2} md={3} xs={4}>
                    <Button
                      variant="primary"
                      type="submit"
                      className={`btn-block w-100 font-weight-bold text-white text-center`}
                    >
                      Search
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GeneralSearchComponent;
