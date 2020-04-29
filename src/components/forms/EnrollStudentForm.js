import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

function EnrollStudentForm({
  subjects,
  handleFormSubmit,
  subjectCheckHandler,
  handleEnrollClose,
}) {
  return (
    <form onSubmit={handleFormSubmit}>
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

        <Button variant="primary" type="submit">
          Add
        </Button>
      </Modal.Footer>
    </form>
  );
}

export default EnrollStudentForm;
