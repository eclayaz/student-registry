import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import Popup from "./Popup";

function EnrollStudentPopup({
  subjects,
  handleEnrollSubmit,
  subjectCheckHandler,
  showEnroll,
  handleEnrollClose,
  handleEnrollShow,
}) {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleEnrollSubmit();
  };

  return (
    <>
      <div className="row float-right">
        <Button variant="primary" onClick={handleEnrollShow}>
          Enroll
        </Button>
      </div>

      <Popup
        show={showEnroll}
        handleClose={handleEnrollClose}
        title="Enroll Student"
      >
        <form>
          {subjects.map((subject) => (
            <Form.Check
              inline
              label={subject.name}
              type="checkbox"
              key={subject.name}
              name={subject.name}
              checked={subject.value}
              onChange={subjectCheckHandler}
            />
          ))}
          <br />
          <br />
          <Modal.Footer>
            <Button variant="secondary" onClick={handleEnrollClose}>
              Close
            </Button>

            <Button variant="primary" type="submit" onClick={handleFormSubmit}>
              Add
            </Button>
          </Modal.Footer>
        </form>
      </Popup>
    </>
  );
}

export default EnrollStudentPopup;
