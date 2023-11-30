import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';

function Searchbar() {
 async function SearchMe()
  {
    const searchedData=await fetch('https://dummyjson.com/products/search?q=phone')
.then(res => res.json())
.then(json=>console.log("This is searchData",json));

  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">BigBasket<i className='fa fa-heart'></i></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/gotocart">My Cart</Nav.Link>
            <Nav.Link as={Link} to="/wishlist">My WishList</Nav.Link>
            <NavDropdown title="Filter" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/color">Color</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="#action4">
              Category
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="#action5">
              <NavDropdown title="Price" id="navbarScrollingDropdown">
             
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="#action5">
               Price Range
              </NavDropdown.Item>
            </NavDropdown>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="#">
              Rating
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>SearchMe(e.target.value)}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Searchbar;