import React, { useState, Fragment } from "react";
import ReactPaginate from "react-paginate";
import EnrollStudent from "./EnrollStudentPopup";

function StudentPaginatedList() {
  const students = [
    {
      id: "5ea295d0996b1605d3b2cc33",
      name: "Nadeesha",
      gender: "Male",
      address: "Panadura",
      contactNumber: 766838371,
      subjects: ["Maths", "Science"],
    },
    {
      id: "5ea2b1becf6cfa0eddc63cc3",
      name: "Dilruwna",
      gender: "Male",
      address: "Panadura",
      contactNumber: 766838371,
      subjects: ["Maths", "Science", "English"],
    },
  ];

  const subjects = ["Maths", "Science", "English"];

  const studentList = students.map((student) => {
    return (
      <tr key={student.id}>
        <th>{student.id}</th>
        <td>{student.name}</td>
        <td>{student.gender}</td>
        <td>{student.address}</td>
        <td>{student.contactNumber}</td>
        <td>{student.subjects}</td>
        <td>
          <EnrollStudent subjects={subjects} />
        </td>
      </tr>
    );
  });

  let pageCount = 150;

  const handlePageClick = () => {
    console.log("click");
  };

  return (
    <Fragment>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Address</th>
            <th scope="col">Contact #</th>
            <th scope="col">Subjects</th>
            <th scope="col">Enroll</th>
          </tr>
        </thead>
        <tbody>{studentList}</tbody>
      </table>
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </Fragment>
  );
}

export default StudentPaginatedList;
