import React from "react";
import { Button } from "react-bootstrap";
import Popup from "./Popup";
import EnrollStudentForm from "./forms/EnrollStudentForm";

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
        <EnrollStudentForm
          subjects={subjects}
          handleFormSubmit={handleFormSubmit}
          subjectCheckHandler={subjectCheckHandler}
          handleEnrollClose={handleEnrollClose}
        />
      </Popup>
    </>
  );
}

export default EnrollStudentPopup;
