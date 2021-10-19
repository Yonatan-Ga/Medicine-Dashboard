// import { useRef } from 'react';

import { Col, Form, Row } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";

function NewDrugForm(props) {
  //   const titleInputRef = useRef();
  //   const imageInputRef = useRef();
  //   const addressInputRef = useRef();
  //   const descriptionInputRef = useRef();

  //   function submitHandler(event) {
  //     event.preventDefault();

  //     const enteredTitle = titleInputRef.current.value;
  //     const enteredImage = imageInputRef.current.value;
  //     const enteredAddress = addressInputRef.current.value;
  //     const enteredDescription = descriptionInputRef.current.value;

  //     const DrugData = {
  //       title: enteredTitle,
  //       image: enteredImage,
  //       address: enteredAddress,
  //       description: enteredDescription,
  //     };

  //     props.onAddDrug(DrugData);
  //   }

  return (
    <Jumbotron>
      <form inLine>
        <Form.Group as={Row} className="mb-3">
          <Form.Label htmlFor="name" column sm={3}>
            Drug Name
          </Form.Label>
          <Col sm={6}>
            <Form.Control type="text" required id="name" placeholder="Acamol" />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label htmlFor="instructions" column sm={3}>
            How to take it?
          </Form.Label>
          <Col sm={6}>
            <Form.Control
              type="text"
              required
              id="intructions"
              placeholder="2 Pills every 8 hours x 3 days"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label htmlFor="image" column sm={3}>
            Drug Image
          </Form.Label>
          <Col sm={6}>
            <Form.Control
              id="image"
              type="url"
              placeholder="https://superpharmstorage.blob.core.windows.net/hybris/products/desktop/medium/7290000803234.jpg"
            />
          </Col>
        </Form.Group>
        <div>
          <button className="btn btn-danger">Add Drug</button>
        </div>
      </form>
    </Jumbotron>
  );
}

export default NewDrugForm;
