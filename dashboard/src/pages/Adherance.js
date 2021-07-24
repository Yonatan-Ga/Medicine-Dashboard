import React, { useState } from "react";
import { RadialChart } from "react-vis";
import { Col, Container, Row, Card, Dropdown } from "react-bootstrap";
import MedAdherancePage from "../components/drugs/MedAdherance";

function AdherancePage() {
  const [adheranceTime, setAdheranceTime] = useState("m");

  function AdheranceTimeHandler(e) {
    console.log(e);
    setAdheranceTime(e);
  };

  
  const userAdherance = {
    month: "August",
    m: 0.6,
    w: 0.71,
    d: 0.8,
  };
  
  const legend = {
    m: "Monthly",
    w: "Weekly",
    d: "Daily"
  };
  const userAdheranceData = [
    {
      angle: userAdherance[adheranceTime] * 100,
      radius: 10,
      label: "Taken: " + Math.round(userAdherance[adheranceTime] * 100) + "%",
    },
    {
      angle: (1 - userAdherance[adheranceTime]) * 100,
      radius: 10,
      label: "Dismissed: " + Math.round((1 - userAdherance[adheranceTime]) * 100) + "%",
    },
  ];

    return (
    <div>
      <h1>My Adherance</h1>

      <Container>
        <Row>

            {/* All meds adherance */}

          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://6lli539m39y3hpkelqsm3c2fg-wpengine.netdna-ssl.com/wp-content/uploads/2020/06/shutterstock_pills_medication-675x380.jpg"
              />
              <Card.Body>
                <h2>{legend[adheranceTime] + ": " + userAdherance[adheranceTime] * 100 + "%"}</h2>
                <RadialChart
                  height={250}
                  width={250}
                  data={userAdheranceData}
                  showLabels
                />

                <Card.Title>Over All User Adherance</Card.Title>
                <Card.Text>
                  Adherance of all drugs together for a chosen time.
                </Card.Text>
                <Dropdown onSelect={AdheranceTimeHandler}>
                  <Dropdown.Toggle variant="success" id="user-time-chooser">
                    Adherance Time
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="m">Monthly</Dropdown.Item>
                    <Dropdown.Item eventKey="w">Weekly</Dropdown.Item>
                    <Dropdown.Item eventKey="d">Daily</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Card.Body>
            </Card>
          </Col>

          {/* Specific med adherance */}

          <Col>
            <MedAdherancePage />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AdherancePage;
