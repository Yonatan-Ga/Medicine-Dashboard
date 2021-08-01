import React, { useState } from "react";
import { RadialChart } from "react-vis";
import { Card, Dropdown } from "react-bootstrap";

function MedAdherancePage() {
  const [adheranceTime, setAdheranceTime] = useState("m");
  const [medicineChosen, setMedicineChosen] = useState("Choose Medicine:");
  const [chosenMedObj, setChosenMedObj] = useState({
    medicine_id: "",
    pic: "",
    m: 1,
    w: 1,
    d: 1,
  });

  function AdheranceTimeHandler(e) {
    setAdheranceTime(e);
  }

  const legend = {
    m: "Monthly",
    w: "Weekly",
    d: "Daily",
  };

  const medUserAdherance = [
    {
      medicine_id: "Ventolin",
      pic: "https://www.camoni.co.il/webfiles/images/cache/847X847/far/webfiles/camoni/cms_files/blogs/1985/posts/30286/105182.jpg",
      m: 0.9,
      w: 0.8,
      d: 1,
    },
    {
      medicine_id: "Optalgin",
      pic: "https://superpharmstorage.blob.core.windows.net/hybris/products/desktop/medium/7290000801834.jpg",
      m: 0.2,
      w: 0.1,
      d: 0.35,
    },
    {
      medicine_id: "Acamol",
      pic: "https://superpharmstorage.blob.core.windows.net/hybris/products/desktop/medium/7290000803234.jpg",
      m: 0.67,
      w: 0.71,
      d: 0.8,
    },
  ];

  function medUserAdheranceHandler(e) {
    setChosenMedObj(medUserAdherance.filter((x) => x.medicine_id === e)[0]);
    setMedicineChosen(e);
  }

  const medUserAdheranceData = [
    {
      angle: chosenMedObj[adheranceTime] * 100,
      radius: 10,
      label: "Taken: " + Math.round(chosenMedObj[adheranceTime] * 100) + "%",
    },
    {
      angle: (1 - chosenMedObj[adheranceTime]) * 100,
      radius: 10,
      label:
        "Dismissed: " +
        Math.round((1 - chosenMedObj[adheranceTime]) * 100) +
        "%",
    },
  ];

  return (
    <div>
      {/* Specific med adherance */}
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={
            medicineChosen === "Choose Medicine:"
              ? "https://6lli539m39y3hpkelqsm3c2fg-wpengine.netdna-ssl.com/wp-content/uploads/2020/06/shutterstock_pills_medication-675x380.jpg"
              : chosenMedObj.pic
          }
        />
        <Card.Body>
          <Dropdown onSelect={medUserAdheranceHandler}>
            <Dropdown.Toggle variant="primary" id="med-chooser">
              {medicineChosen}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="Acamol">Acamol</Dropdown.Item>
              <Dropdown.Item eventKey="Optalgin">Optalgin</Dropdown.Item>
              <Dropdown.Item eventKey="Ventolin">Ventolin</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <h2>
            {medicineChosen === "Choose Medicine:"
              ? ""
              : legend[adheranceTime] +
                ": " +
                chosenMedObj[adheranceTime] * 100 +
                "%"}
          </h2>
          {medicineChosen === "Choose Medicine:" ? (
            <img
              src="https://w7.pngwing.com/pngs/812/540/png-transparent-question-mark-graphy-thinking-man-thumbnail.png"
              alt="?"
              width="200"
            />
          ) : (
            <RadialChart
              height={250}
              width={250}
              data={medUserAdheranceData}
              showLabels
            />
          )}

          <Card.Title>Over All User Adherance</Card.Title>
          <Card.Text>
            Adherance of all drugs together for a chosen time.
          </Card.Text>
          <Dropdown onSelect={AdheranceTimeHandler}>
            <Dropdown.Toggle variant="success" id="med-time-chooser">
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
    </div>
  );
}

export default MedAdherancePage;
