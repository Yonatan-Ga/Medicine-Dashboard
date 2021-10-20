import { Modal, Button } from "react-bootstrap";
import { useEffect, useState } from "react";

function ReminderPopup() {
  const [show, setShow] = useState(false);
  const [isRunning, setIsRunnung] = useState(false);
  const [timePicked, setTimePicked] = useState(new Date());

  const handleClose = () => setShow(false);

  const handleShow = (currentPicked) => {
    let currentTime = new Date();
    console.log(currentPicked + '   ' + Math.round(currentTime.getTime() / 1000));
    if (Math.round(currentTime.getTime() / 1000) === currentPicked) {
      setShow(true);
      setIsRunnung(false);    // run the useEffect again and clearing the interval
    }
  };


  const timeHandler = (e) => {
    setTimePicked(Math.round((new Date(e.target.value)).getTime() / 1000));
  };

  useEffect(() => {
    if (isRunning) {
      const showInterval = window.setInterval(() => {
        handleShow(timePicked);
      }, 1000);
      return () => window.clearInterval(showInterval);  // Clearing thr interval when running again the useEffect (when isRunning changed)
    }
  }, [isRunning]);

  return (
    <>
      <form>
        <input type="datetime-local" onChange={timeHandler} />
        <Button variant="primary" onClick={() => {setIsRunnung(true)}}>
          Remind Me!
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
          It's time for to take {"one pill of Optalgin at: " + timePicked}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Dismiss
          </Button>
          <Button variant="primary" onClick={() => {
            setIsRunnung(true);
            setShow(false);
            setTimePicked(timePicked + 300);
          }}>
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
