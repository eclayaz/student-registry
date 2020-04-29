import React from "react";
import sinon from "sinon";
import { expect } from "chai";
import { mount, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import renderer from "react-test-renderer";

import EnrollStudentForm from "../../forms/EnrollStudentForm";

const subjects = [
  { name: "English", value: true },
  { name: "Maths", value: false },
];

describe("<EnrollStudentForm />", () => {
  it("allows us to set props", () => {
    const subjectCheckHandler = sinon.spy();
    const wrapper = mount(
      <EnrollStudentForm
        subjects={subjects}
        subjectCheckHandler={subjectCheckHandler}
      />
    );
    expect(wrapper.props().subjects[0].name).to.equal("English");
    expect(wrapper.props().subjects[0].value).to.equal(true);

    wrapper.setProps({ subjects: [{ name: "English", value: false }] });
    expect(wrapper.props().subjects[0].value).to.equal(false);
  });

  it("should submit the form", () => {
    const handleFormSubmit = sinon.spy();
    const subjectCheckHandler = sinon.spy();
    const wrapper = mount(
      <EnrollStudentForm
        subjects={subjects}
        handleFormSubmit={handleFormSubmit}
        subjectCheckHandler={subjectCheckHandler}
      />
    );
    wrapper.find("form").simulate("submit");
    expect(handleFormSubmit).to.have.property("callCount", 1);
  });
});
