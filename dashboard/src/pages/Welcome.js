import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

function WelcomePage() {

  const [name, setName] = useState();

  useEffect(() => {
    if (cookies.get("name") !== undefined) {
      setName(cookies.get("name"));
    }
  }, [name]);

  let message = "";
  
//try to auth user with token. not comlete yet

  const getInfo = () => {
    const token = cookies.get('refreshToken');
    Axios.post("http://localhost:8080/token", {
      "token": token

    }).then((response) => {
      console.log(response);
        
    });
  }

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
                    cookies.remove("accessToken");
                    cookies.remove("refreshToken");
                  }}>Log out</Link>
              </li>
              <li>
                <button onClick={() => {getInfo()}}>Get some info</button><br />{message}
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
