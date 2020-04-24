import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

function EnrollStudentPopup(props) {
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
          Enroll
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <form>
          <Modal.Header closeButton>
            <Modal.Title>Enroll Subjects</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {props.subjects.map((type) => (
              <Form.Check
                inline
                label={type}
                type="checkbox"
                id={`inline-checkbox-1`}
                key={type}
              />
            ))}
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

export default EnrollStudentPopup;
