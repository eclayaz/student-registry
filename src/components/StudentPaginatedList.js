import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import EnrollStudent from "./EnrollStudentPopup";

function StudentPaginatedList() {
  const [subjects, setSubjects] = useState([]);
  useEffect(() => {
    async function fetchData() {
      console.log("fetch subjects");

      try {
        const response = await axios.get(`http://localhost:3000/subjects`);
        setSubjects(response.data.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  const perPage = 3;

  const [pageCount, setPageCount] = useState(0);
  const [students, setStudents] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `http://localhost:3000/students?page=${page}&limit=${perPage}`
        );
        setStudents(response.data.data);
        setPageCount(Math.ceil(response.data.count / perPage));
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [page]);

  const handlePageClick = async (data) => {
    setPage(data.selected + 1);
  };

  const studentList = students.map((student) => {
    return (
      <tr key={student._id}>
        <td>{student.name}</td>
        <td>{student.gender}</td>
        <td>{student.address}</td>
        <td>{student.contactNumber}</td>
        <td>
          <ul>
            {student.subjects.map((subject) => {
              return <li key={subject}>{subject}</li>;
            })}
          </ul>
        </td>
        <td>
          <EnrollStudent subjects={subjects} />
        </td>
      </tr>
    );
  });

  return (
    <Fragment>
      <table className="table">
        <thead>
          <tr>
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
