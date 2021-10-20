// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";

// import { useMediaQuery } from "react-responsive";

// import MeetupList from '../components/meetups/MeetupList';

function WelcomePage() {
  // const [isLoading, setIsLoading] = useState(true);
  // const [loadedMeetups, setLoadedMeetups] = useState([]);

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch(
  //     'https://react-getting-started-48dec-default-rtdb.firebaseio.com/meetups.json'
  //   )
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const meetups = [];

  //       for (const key in data) {
  //         const meetup = {
  //           id: key,
  //           ...data[key]
  //         };

  //         meetups.push(meetup);
  //       }

  //       setIsLoading(false);
  //       setLoadedMeetups(meetups);
  //     });
  // }, []);

  // if (isLoading) {
  //   return (
  //     <section>
  //       <p>Loading...</p>
  //     </section>
  //   );
  // }

  // const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1225px)" });
  // const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  // const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  // const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  // const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

  return (
    <Container>
      <Row>
        <Col>
          <ul>
            <li>
              Hello Yonatan
              <br /> Log out
            </li>
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
    </Container>
  );
}

export default WelcomePage;
