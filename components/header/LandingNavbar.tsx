import { Navbar, Container, Nav } from "react-bootstrap";

const LandingNavbar: React.FC = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Landing Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">General Feature</Nav.Link>
            <Nav.Link href="#pricing">General Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default LandingNavbar;
