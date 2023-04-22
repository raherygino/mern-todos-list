import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/img/logo.svg';
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={ logo }
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React CRUD
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className="nav-link" to="./">Home</NavLink>
            <NavLink className="nav-link" to="./create">Create</NavLink>
          </Nav>
        </Container>
    </Navbar>
  );
}

export default NavBar;
