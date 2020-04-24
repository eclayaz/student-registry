import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

function NewStudentPopup() {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
      <div className="row float-right">
        <Button variant="primary" onClick={handleShow}>
          New Student
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <form>
          <Modal.Header closeButton>
            <Modal.Title>Add New Student</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your name" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Gender</Form.Label>
              <Form.Control as="select">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Address</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Contact Number</Form.Label>
              <Form.Control type="phone" />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Add
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default NewStudentPopup;
