import { Link, useParams } from "react-router-dom";
export default function CoursesNavigation() {
  const { cid } = useParams();

  return (
    <div className="list-group wd rounded-0" id="wd-courses-navigation">
      <Link
        className="active border-0 list-group-item"
        to={`/Kanbas/Courses/${cid}/Home`}
      >
        Home
      </Link>
      <Link
        className="text-danger border-0 list-group-item"
        to={`/Kanbas/Courses/${cid}/Modules`}
      >
        Modules
      </Link>
      <Link
        className="text-danger border-0 list-group-item"
        to={`/Kanbas/Courses/${cid}/Piazza`}
      >
        Piazza
      </Link>
      <Link
        className="text-danger border-0 list-group-item"
        to="/Kanbas/Courses/1234/Zoom"
      >
        Zoom
      </Link>
      <Link
        className="text-danger border-0 list-group-item"
        to={`/Kanbas/Courses/${cid}/Assignments`}
      >
        Assignments
      </Link>
      <Link
        className="text-danger border-0 list-group-item"
        to="/Kanbas/Courses/1234/Quizzes"
      >
        Quizzes
      </Link>
      <Link
        className="text-danger border-0 list-group-item"
        to="/Kanbas/Courses/1234/Grades"
      >
        Grades
      </Link>
      <Link
        className="text-danger border-0 list-group-item"
        to={`/Kanbas/Courses/${cid}/People`}
      >
        People
      </Link>
    </div>
  );
}
