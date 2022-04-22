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
            <Nav.Link href="#action1">Inicio</Nav.Link>
            <Nav.Link href="#action2">Nosotros</Nav.Link>
            <NavDropdown title="Categorias" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Hogar</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Tecnologia</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Ropa</NavDropdown.Item>
              <NavDropdown.Item href="#action6">Calzado</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action7">Proximamente</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action8">Contacto</Nav.Link>
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
