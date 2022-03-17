import { Navbar, Container, Nav } from "react-bootstrap";

const GeneralNavbar: React.FC = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">General</Navbar.Brand>
        <Container>
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

export default GeneralNavbar;
