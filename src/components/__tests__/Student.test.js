import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Student from "../Student";

let container = null;
beforeEach(() => {
  container = document.createElement("tbody");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

const subjects = [
  {
    _id: "5ea1e6072113ead1c4cc8d82",
    name: "Maths",
  },
  {
    _id: "5ea1e61a2113ead1c4cc8d83",
    name: "Science",
  },
];

const student = {
  _id: "5ea1dfc56d485cd446b54d90",
  name: "Nadeesha Dilruwna",
  gender: "Male",
  address: "Panadura",
  contactNumber: "766838371",
  subjects: ["Science"],
};
it("renders with student data", () => {
  act(() => {
    render(<Student subjects={subjects} student={student} />, container);
  });
  expect(container.querySelector("[data-testid='name']").textContent).toBe(
    student.name
  );
  expect(container.querySelector("[data-testid='gender']").textContent).toBe(
    student.gender
  );
  expect(container.querySelector("[data-testid='address']").textContent).toBe(
    student.address
  );
  expect(
    container.querySelector("[data-testid='contactNumber']").textContent
  ).toBe(student.contactNumber);

  expect(container.querySelector("[data-testid='subjects']")).toBeDefined();
});
