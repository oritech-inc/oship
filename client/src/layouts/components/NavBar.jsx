import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AppData } from '../../data'

function NavBar() {
    return (
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand href="/">
                    {AppData[0].appInfo.name}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/nearby">Search</Nav.Link>
                        <Nav.Link href="/live">Live</Nav.Link>
                    </Nav>
                    <Nav>
                        <NavDropdown title="Accounts" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/accounts">Register</NavDropdown.Item>
                            <NavDropdown.Item href="/accounts">
                                Login
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar; 