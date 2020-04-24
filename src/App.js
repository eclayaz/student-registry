import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import StudentPaginatedList from "./components/StudentPaginatedList";
import NewStudentPopup from "./components/NewStudentPopup";

function App() {
  return (
    <div className="App container">
      <div className="text-center">
        <h2>Student Registry</h2>
      </div>
      <NewStudentPopup />
      <StudentPaginatedList />
    </div>
  );
}

export default App;
