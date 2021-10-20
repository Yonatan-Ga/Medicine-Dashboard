// import { useContext } from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import ReminderPopup from "./Reminder";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fas } from '@fortawesome/free-solid-svg-icons'

// import FavoritesContext from '../../store/favorites-context';

function MainNavigation() {
  // const favoritesCtx = useContext(FavoritesContext);

  return (
    <header>
      <Navbar bg="primary" variant="dark" expand="md">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Adherance Dashboard
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/schedule">
                My schedule
              </Nav.Link>
              <Nav.Link as={Link} to="/prescriptions">
                My Prescriptions
              </Nav.Link>
              <Nav.Link as={Link} to="/adherance">
                My Adherance
              </Nav.Link>
              <Nav.Link as={Link} to="profile">
                <span>&#128100;&#128511;</span>
                {/* <img src={'./profile.png'} alt="Profile" /> */}
                {/* <i style="font-size:24px" class="fa">&#xf007;</i> */}
              </Nav.Link>
              <Nav>
              <ReminderPopup />
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default MainNavigation;
