import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import Cookies from "universal-cookie";
const cookies = new Cookies();

function WelcomePage() {

  const [name, setName] = useState();

  useEffect(() => {
    if (cookies.get("name") !== undefined) {
      setName(cookies.get("name"));
    }
  }, [name]);

  return (
    <Container>
      {cookies.get("loggedIn") ? (
        <Row>
          <Col>
            <ul>
              <li>
                <span>Hello {name}</span>
                <br />
                <Link onClick={() => {
                    cookies.remove("loggedIn");
                    setName('');
                    cookies.remove("name");
                  }}>Log out</Link>
              </li>
            </ul>
          </Col>
          <Col>
            <ul>
              <li>
                <Link to="/schedule">My Schedule</Link>
              </li>
              <li>
                <Link to="/prescriptions">Edit Prescriptions</Link>
              </li>
              <li>
                <Link to="/adherance">My Adherance</Link>
              </li>
              <li>
                <Link to="/profile">My Profile</Link>
              </li>
              <li>
                <Link to="/addDrug">add a new med</Link>
              </li>
            </ul>
          </Col>
        </Row>
      ) : (
        <Row>
          <Col>
            <ul>
              <li>
                <Link to="/login">Log in</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>
                <Link to="/newPassword">Create New Password</Link>
              </li>
            </ul>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default WelcomePage;
