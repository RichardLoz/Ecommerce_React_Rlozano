import * as React from "react";
import { BsCartPlusFill } from "react-icons/bs";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Sky-Importaciones</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <LinkContainer to="/">
              <Nav.Link>Inicio</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/nosotros">
              <Nav.Link>Nosotros</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Categorias" id="navbarScrollingDropdown">
              <LinkContainer to="productos/drone">
                <NavDropdown.Item>Drones</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="productos/celulares">
                <NavDropdown.Item>Celulares</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="productos/notebook">
                <NavDropdown.Item>Notebook</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="productos/auriculares">
                <NavDropdown.Item>Auriculares</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action7">Proximamente</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contacto">Contacto</Nav.Link>
          </Nav>
          <div className="cart">
            <BsCartPlusFill className="cart" />
          </div>

          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
