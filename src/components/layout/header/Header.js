import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import UserIcon from '../../icons/UserIcon';
import AlramIcon from '../../icons/AlramIcon';
import header from '../../../assets/scss/layout/header/Header.module.scss';
import '../../../assets/scss/layout/header/Header.scss'


function Header() {
  const userIcon = <UserIcon />;
  const alramIcon = <AlramIcon />;


  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" id={header[`header-nav-bar`]}>

      <Container>
        <Navbar.Brand href="/">PizzaRazzi</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>

          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
            <NavDropdown title={alramIcon} id="collapsible-nav-dropdown" >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={userIcon} id="collapsible-nav-dropdown" >
              <NavDropdown.Item href="/p-info/check-password">
                개인 정보 수정
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/order/list">
                주문 내역
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;