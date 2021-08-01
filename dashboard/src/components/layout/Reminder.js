import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import DateAndTimePicker from "./DateAndTimePickers";

function ReminderPopup() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);
    
  var timePicked = new Date();


//Dont know how to get date

//   function handleDate(date) {
//     console.log(date);
//   };


//   function timeHandler(e) {
//     console.log(e);
   
//     timePicked = this.e;
   
//     console.log(timePicked);

//   }

  return (
    <>
      <DateAndTimePicker />
      <Button variant="primary" onClick={handleShow}>
        Time to take a pill!
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>&#128276; Pill Reminder</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          It's time for to take {"one pill of Optalgin at: " + timePicked }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Dismiss
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Snooze (5 minutes)
          </Button>
          <Button variant="success" onClick={handleClose}>
            <strong>Taken!</strong>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ReminderPopup;
