import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import EnrollStudentForm from "../../forms/EnrollStudentForm";

const subjects = [
  { name: "English", value: true },
  { name: "Maths", value: false },
];

describe("<EnrollStudentForm /> shallow check", () => {
  it("renders with subject data", () => {
    let wrapped = shallow(<EnrollStudentForm subjects={subjects} />);
    expect(toJson(wrapped)).toMatchSnapshot();
  });
});
