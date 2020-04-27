import React from "react";
import { shallow } from "enzyme";

import Student from "../Student";

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
  let wrapped = shallow(<Student subjects={subjects} student={student} />);
  expect(wrapped).toMatchSnapshot();
});
