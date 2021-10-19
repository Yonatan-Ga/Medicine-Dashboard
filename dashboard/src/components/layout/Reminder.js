import { Modal, Button } from "react-bootstrap";
import { useState } from "react";

function ReminderPopup() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);
    
  const [timePicked, setTimePicked] = useState(new Date());

  function timeHandler(e) {
  
    setTimePicked(new Date(e.target.value));
    console.log(timePicked);
  }

  return (
    <>
    <form>
      <input type="datetime-local" onChange={timeHandler}/>
      {/* <DateAndTimePicker /> */}
      <Button variant="primary" onClick={handleShow}>
        Time to take a pill!
      </Button>
    </form>
      
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
