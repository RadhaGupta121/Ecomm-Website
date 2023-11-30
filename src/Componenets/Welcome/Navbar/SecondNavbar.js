import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useState,useEffect, useReducer, useRef, } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchProduct from '../../Filters/SearchProduct';
function SecondNavbar() {
    const searchWord=useRef();
    const[searchItem,setSearchItem]=useState(null);
    const navigate=useNavigate();
    let keyword;
    const SearchMe=async(e)=>
  {
    let word=searchWord.current.value;
    console.log("SearchMe functin called",searchWord);
    navigate(`/search/${word}`);

}
// console.log(searchItem.products);
    
     console.log(keyword);
    return (
        <>
            
            <Navbar expand="lg" className="nav-bg">
                <Container fluid>
                    <Navbar.Brand href="#" style={{color:"yellowgreen",textShadow:"2px 2px 5px black",fontFamily:"cursive",fontSize:"28px"}}>BigBasket</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                             <Nav.Link className='links' as={Link} to="/">
                                Home
                            </Nav.Link>

                             <Nav.Link className='links' as={Link} to="/gotocart">
                                Cart
                            </Nav.Link>
                             <Nav.Link className='links' as={Link} to="/wishlist">
                                Wishlist
                            </Nav.Link>
                             <Nav.Link className='links' as={Link} to="/filter">
                                Filter
                            </Nav.Link>
                             <Nav.Link className='links' as={Link} to="/stores">
                                Stores
                            </Nav.Link>
                             <Nav.Link className='links' as={Link} to='/contact'>Contact</Nav.Link>
                           
                        </Nav>
                        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
             ref={searchWord}
            />
         
            <Button className='search-btn' onClick={SearchMe} >Search</Button>
          
           </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default SecondNavbar;