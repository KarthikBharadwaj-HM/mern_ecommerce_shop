import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' expand='lg' variant='dark' collapseOnSelect>
        <Container>
          <NavLink to='/'>
            <Navbar.Brand>PropShop</Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <NavLink to='/cart' className='nav-link'>
                <i className='fa-solid fa-cart-shopping'></i> Cart
              </NavLink>
              <NavLink to='/login' className='nav-link'>
                <i className='fa-solid fa-user'></i> Sign In
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;
