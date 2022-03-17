import { Container, Navbar, Nav, Col, Row } from "react-bootstrap";

const GeneralFooter: React.FC = () => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12} md={12}>
            <Row>
              <Col lg={3} md={3}>
                <h5>About Us</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam euismod, ipsum eget sagittis vehicula, nisi nunc
                  scelerisque nunc, eget egestas erat ipsum eget sapien.
                </p>
              </Col>
              <Col lg={3} md={3}>
                <h5>Contact Us</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam euismod, ipsum eget sagittis vehicula, nisi nunc
                  scelerisque nunc, eget egestas erat ipsum eget sapien.
                </p>
              </Col>
              <Col lg={3} md={3}>
                <h5>Help</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam euismod, ipsum eget sagittis vehicula, nisi nunc
                  scelerisque nunc, eget egestas erat ipsum eget sapien.
                </p>
              </Col>
              <Col lg={3} md={3}>
                <h5>Social Media</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam euismod, ipsum eget sagittis vehicula, nisi nunc
                  scelerisque nunc, eget egestas erat ipsum eget sapien.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default GeneralFooter;
