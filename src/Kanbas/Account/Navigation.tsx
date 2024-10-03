import { Link } from "react-router-dom";
export default function AccountNavigation() {
  return (
    <div className="wd list-group rounded-0" id="wd-account-navigation">
      <Link
        className="active list-group-item border-0"
        to={`/Kanbas/Account/Signin`}
      >
        Signin
      </Link>{" "}
      <Link
        className="list-group-item text-danger border-0"
        to={`/Kanbas/Account/Signup`}
      >
        {" "}
        Signup{" "}
      </Link>{" "}
      <Link
        className="list-group-item text-danger border-0"
        to={`/Kanbas/Account/Profile`}
      >
        {" "}
        Profile{" "}
      </Link>{" "}
    </div>
  );
}
