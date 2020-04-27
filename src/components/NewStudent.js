import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import Popup from "./Popup";

function NewStudentPopup(props) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("Male");
  const [address, setAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const rest = () => {
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
      rest();
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
        <form>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Gender</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Contact Number</Form.Label>
            <Form.Control
              type="phone"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />
          </Form.Group>
          <br />
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Add
            </Button>
          </Modal.Footer>
        </form>
      </Popup>
    </>
  );
}

export default NewStudentPopup;
