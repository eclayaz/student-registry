import React from "react";
import sinon from "sinon";
import { expect } from "chai";
import { mount } from "enzyme";

import NewStudentForm from "../../forms/NewStudentForm";

describe("<NewStudentForm />", () => {
  it("allows us to set props", () => {
    const wrapper = mount(<NewStudentForm name="Nadeesha" />);
    expect(wrapper.props().name).to.equal("Nadeesha");
    wrapper.setProps({ name: "dilruwan" });
    expect(wrapper.props().name).to.equal("dilruwan");
  });

  it("should submit the form", () => {
    const handleSubmit = sinon.spy();
    const wrapper = mount(<NewStudentForm handleSubmit={handleSubmit} />);
    wrapper.find("form").simulate("submit");
    expect(handleSubmit).to.have.property("callCount", 1);
  });
});
