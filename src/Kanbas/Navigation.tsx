import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import path from "path";
export default function KanbasNavigation() {
  const { pathname } = useLocation();
  const links = [
    { label: "Dashboard", path: "/Kanbas/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses", path: "/Kanbas/Dashboard", icon: LiaBookSolid },
    { label: "Calendar", path: "/Kanbas/Calendar", icon: IoCalendarOutline },
    { label: "Inbox", path: "/Kanbas/Inbox", icon: FaInbox },
    { label: "Labs", path: "/Labs", icon: LiaCogSolid },
  ];

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
        to="/Kanbas/Account"
        className={`list-group-item text-center border-0 bg-black
            ${
              pathname.includes("Account")
                ? "bg-white text-danger"
                : "bg-black text-white"
            }`}
      >
        <FaRegCircleUser
          className={`fs-1 ${
            pathname.includes("Account") ? "text-danger" : "text-white"
          }`}
        />
        <br />
        Account
      </Link>
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={`list-group-item bg-black text-center border-0
              ${
                pathname.includes(link.label)
                  ? "text-danger bg-white"
                  : "text-white bg-black"
              }`}
        >
          {link.icon({ className: "fs-1 text-danger" })}
          <br />
          {link.label}
        </Link>
      ))}
    </div>
  );
}
