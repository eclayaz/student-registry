import React from "react";
import { Button, Modal, Form } from "react-bootstrap";

function NewStudentForm({
  name,
  setName,
  setGender,
  address,
  setAddress,
  contactNumber,
  setContactNumber,
  handleClose,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit}>
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
        <Form.Control as="select" onChange={(e) => setGender(e.target.value)}>
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
        <Button variant="primary" type="submit">
          Add
        </Button>
      </Modal.Footer>
    </form>
  );
}

export default NewStudentForm;
