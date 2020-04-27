import React, { useState, useEffect } from "react";
import EnrollStudent from "./EnrollStudent";

function Student({ student, subjects, enrollStudentHandler }) {
  const [subjectState, setSubjectState] = useState(
    subjects.map((subject) => {
      return {
        name: subject.name,
        value: student.subjects.includes(subject.name) ? true : false,
      };
    })
  );

  const [showEnroll, setShowEnroll] = useState(false);
  useEffect(() => {
    return function cleanup() {
      const subs = subjects.map((subject) => {
        return {
          name: subject.name,
          value: student.subjects.includes(subject.name) ? true : false,
        };
      });
      setSubjectState(subs);
    };
  }, [showEnroll]);

  const handleEnrollClose = () => {
    setShowEnroll(false);
  };

  const handleEnrollShow = () => {
    setShowEnroll(true);
  };

  const handleEnrollSubmit = async () => {
    let subjectsToEnroll = subjectState.reduce((filtered, subject) => {
      if (subject.value) {
        filtered.push(subject.name);
      }
      return filtered;
    }, []);

    try {
      await enrollStudentHandler(student._id, subjectsToEnroll);
      setShowEnroll(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  const subjectCheckHandler = (event) => {
    setSubjectState(
      subjectState.map((subject) => {
        if (subject.name === event.target.name) {
          subject.value = event.target.checked;
        }
        return subject;
      })
    );
  };

  return (
    <tr key={student._id}>
      <td data-testid="name">{student.name}</td>
      <td data-testid="gender">{student.gender}</td>
      <td data-testid="address">{student.address}</td>
      <td data-testid="contactNumber">{student.contactNumber}</td>
      <td>
        <ul data-testid="subjects">
          {student.subjects.map((subject) => {
            return <li key={subject}>{subject}</li>;
          })}
        </ul>
      </td>
      <td>
        <EnrollStudent
          subjects={subjectState}
          handleEnrollSubmit={handleEnrollSubmit}
          subjectCheckHandler={subjectCheckHandler}
          handleEnrollClose={handleEnrollClose}
          handleEnrollShow={handleEnrollShow}
          showEnroll={showEnroll}
        />
      </td>
    </tr>
  );
}

export default Student;
