import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Popup from "./Popup";
import NewStudentForm from "./forms/NewStudentForm";

function NewStudentPopup(props) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("Male");
  const [address, setAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const reset = () => {
    setName("");
    setGender("Male");
    setAddress("");
    setContactNumber("");
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.length || !address.length || !contactNumber.length) {
      console.log("invalid");
      return;
    }

    try {
      await props.createStudentHandler({
        name,
        gender,
        address,
        contactNumber,
      });
      reset();
      setShow(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="row float-right">
        <Button variant="primary" onClick={handleShow}>
          New Student
        </Button>
      </div>
      <Popup show={show} handleClose={handleClose} title="New Student">
        <NewStudentForm
          name={name}
          setName={setName}
          setGender={setGender}
          address={address}
          setAddress={setAddress}
          contactNumber={contactNumber}
          setContactNumber={setContactNumber}
          handleClose={handleClose}
          handleSubmit={handleSubmit}
        />
      </Popup>
    </>
  );
}

export default NewStudentPopup;
