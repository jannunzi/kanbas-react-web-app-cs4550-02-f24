import { Routes, Route, Navigate } from "react-router";
import Home from "./Home";
import Modules from "./Modules";
import CoursesNavigation from "./Navigation";
import PeopleTable from "./People/Table";

export default function Courses() {
  return (
    <div>
      <h2>Course 1234</h2>
      <div className="d-flex">
        <div>
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Grades" element={<h1>Grades</h1>} />
            <Route path="Assignments" element={<h1>Assignments</h1>} />
            <Route path="Quizzes" element={<h1>Quizzes</h1>} />
            <Route path="People" element={<PeopleTable />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
