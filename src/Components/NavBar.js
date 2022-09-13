import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export function Filtrar ({ filter, setFilter }) {
	const handleInput = ({ target }) => {
		setFilter(target.value)
	}
  return (
    
    <Navbar sticky="top" bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand bg="ligth" href="#">Rick&Morty Api</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex">
          <input
              type='text'
              placeholder='Nombre del personaje'
              name='buscar'
              onChange={handleInput}
              value={filter}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

