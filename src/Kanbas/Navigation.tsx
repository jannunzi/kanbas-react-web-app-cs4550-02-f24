import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
export default function KanbasNavigation() {
  return (
    <div
      style={{ width: "140px" }}
      className="position-fixed top-0 bottom-0 bg-dark rounded-0 list-group d-none d-md-block border-0"
      id="wd-kanbas-navigation"
    >
      <a
        className="list-group-item bg-dark text-white text-center border-0"
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
        target="_blank"
      >
        <img src="/images/NEU.png" alt="Northeastern" width="100px" />
      </a>
      <Link
        className="list-group-item bg-white text-black text-center border-0"
        to="/Kanbas/Account"
        id="wd-account-link"
      >
        <FaRegCircleUser className="fs-1 text text-black" />
        <br />
        Account
      </Link>
      <Link
        className="list-group-item bg-dark text-white text-center border-0"
        to="/Kanbas/Dashboard"
        id="wd-dashboard-link"
      >
        <AiOutlineDashboard className="fs-1 text-danger" />
        <br />
        Dashboard
      </Link>
      <Link
        className="list-group-item bg-dark text-white text-center border-0"
        to="/Kanbas/Dashboard"
        id="wd-course-link"
      >
        <LiaBookSolid className="fs-1 text-danger" />
        <br />
        Courses
      </Link>
      <Link
        className="list-group-item bg-dark text-white text-center border-0"
        to="/Kanbas/Calendar"
        id="wd-calendar-link"
      >
        Calendar
      </Link>
      <Link
        className="list-group-item bg-dark text-white text-center border-0"
        to="/Kanbas/Inbox"
        id="wd-inbox-link"
      >
        Inbox
      </Link>
      <Link
        className="list-group-item bg-dark text-white text-center border-0"
        to="/Labs"
        id="wd-labs-link"
      >
        Labs
      </Link>
    </div>
  );
}
