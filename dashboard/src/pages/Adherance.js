import { RadialChart } from "react-vis";
import { Col, Container, Row, Card, Button } from "react-bootstrap";

function AdherancePage() {
  const allData = [
    { angle: 1, radius: 10, innerRadius: 7, label: "Dismissed" },
    {
      angle: 2,
      label: "Snoozed",
      radius: 10,
      innerRadius: 7,
    },
    { angle: 5, radius: 10, innerRadius: 7, label: "Taken" },
    {
      angle: 5,
      radius: 10,
      innerRadius: 7,
      label: "Skipped",
    },
  ];

  const acamolData = [
    { angle: 1, radius: 10, innerRadius: 7, label: "Dismissed" },
    {
      angle: 2,
      label: "Snoozed",
      radius: 10,
      innerRadius: 7,
    },
    { angle: 3, radius: 10, innerRadius: 7, label: "Taken" },
    {
      angle: 10,
      radius: 10,
      innerRadius: 7,
      label: "Skipped",
    },
  ];

  return (
    <div>
      <h1>My Adherance</h1>

      <Container>
        <Row>
          <Col>
            <Card style={{ width: "18rem", height: "38rem" }}>
              <Card.Img
                variant="top"
                src="https://6lli539m39y3hpkelqsm3c2fg-wpengine.netdna-ssl.com/wp-content/uploads/2020/06/shutterstock_pills_medication-675x380.jpg"
              />
              <Card.Body>
                  <RadialChart
                    height={250}
                    width={250}
                    data={allData}
                    showLabels
                  />

                <Card.Title>Over All</Card.Title>
                <Card.Text>Summery of all drugs in the system.</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
          <Card style={{ width: "18rem", height: "38rem" }}>
              <Card.Img
                variant="top"
                src="https://superpharmstorage.blob.core.windows.net/hybris/products/desktop/medium/7290000803234.jpg"
              />
              <Card.Body>
                  <RadialChart
                    height={250}
                    width={250}
                    data={acamolData}
                    showLabels
                  />

                <Card.Title>Acamol</Card.Title>
                <Card.Text>Usualy used for headache or mild other types of pain.</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AdherancePage;
