import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'
import { Link, Outlet } from 'react-router-dom';

function Header({children}) {
  return (
    <>
    <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand><Link className='text-white' style={{ textDecoration: 'none' }} to ={"/"}>ProShop</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link ><Link className='text-white' to ={"/cart"} style={{ textDecoration: 'none' }}><i className=" fas fa-shopping-cart"></i>Cart</Link></Nav.Link>
            <Nav.Link ><Link className='text-white' to={"/login"} style={{ textDecoration: 'none' }}><i className=" fas fa-user"></i>Login</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet/>
    </>
  )
}

export default Header