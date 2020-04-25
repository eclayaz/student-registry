import React from "react";
import EnrollStudent from "./EnrollStudentPopup";

function Student({ student, subjects, enrollStudentHandler }) {
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
        <EnrollStudent
          subjects={subjects}
          enrolled={student.subjects}
          enrollStudentHandler={enrollStudentHandler}
          studentId={student._id}
        />
      </td>
    </tr>
  );
}

export default Student;
