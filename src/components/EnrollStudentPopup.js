import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

function EnrollStudentPopup(props) {
  const [show, setShow] = useState(false);
  const [subjectState, setSubjectState] = useState(
    props.subjects.map((subject) => {
      return {
        name: subject.name,
        value: props.enrolled.includes(subject.name) ? true : false,
      };
    })
  );

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let subjectsToEnroll = subjectState.reduce((filtered, subject) => {
      if (subject.value) {
        filtered.push(subject.name);
      }
      return filtered;
    }, []);

    try {
      await props.enrollStudentHandler(props.studentId, subjectsToEnroll);
      setShow(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  const checkHandler = (event) => {
    setSubjectState(
      subjectState.map((subject) => {
        if (subject.name === event.target.name) {
          subject.value = event.target.checked;
        }
        return subject;
      })
    );
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
            {subjectState.map((subject) => (
              <Form.Check
                inline
                label={subject.name}
                type="checkbox"
                key={subject.name}
                name={subject.name}
                checked={subject.value}
                onChange={checkHandler}
              />
            ))}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Add
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default EnrollStudentPopup;
